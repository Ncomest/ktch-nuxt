<script setup>
import { computed, onUnmounted, ref } from "vue";
const apiUrl = import.meta.env.VITE_API_URL;

import question from "@/json/ask-question.json";
import CustomDropDown from "@/components/shared/drop-down/custom-drop-down/CustomDropDown.vue";

const importQuestion = ref(question);
const questionData = ref({});
const isPopupOpen = ref(false);
const popUpMessage = ref("");
const isOkRes = ref(null);
const phoneTouched = ref(false);
let timeoutID = null;
const isChecked = ref(true);

const showPopUpMessage = (message, state) => {
  popUpMessage.value = message;
  isPopupOpen.value = true;
  isOkRes.value = state;

  if (timeoutID) clearTimeout(timeoutID);

  timeoutID = setTimeout(() => {
    isPopupOpen.value = false;
  }, 3000);
};

onUnmounted(() => {
  if (timeoutID) clearTimeout(timeoutID);
});

const handleAnswer = (question, answer) => {
  questionData.value[question] = answer;
};

const fileInput = ref(null);

const contactData = ref({
  firstName: "",
  lastName: "",
  phone: "",
  projectFile: null,
});

const isValid = computed(() => {
  const phone = contactData.value.phone;
  // Если поле пустое или содержит только базовые символы маски, не считаем ошибкой
  if (phone === "" || phone === "+7" || phone === "+7 " || phone === "+7 (") {
    return true;
  }
  return /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(phone);
});

const handleFileUpload = (e) => {
  contactData.value.projectFile = e.target.files[0];
};

const submitForm = async () => {
  try {
    const formData = new FormData();
    const formKitchen = [];

    formData.append("firstName", contactData.value.firstName);
    formData.append("lastName", contactData.value.lastName);
    formData.append("phone", contactData.value.phone);

    if (contactData.value.projectFile) {
      formData.append("projectFile", contactData.value.projectFile);
    }

    for (const value of Object.values(questionData.value)) {
      formKitchen.push(value);
    }

    formData.append("formKitchen", JSON.stringify(formKitchen));

    const response = await fetch("https://grafckie.ru/api/send-to-telegram", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(
        errData.message || `HTTP error! status: ${response.status}`,
      );
    }

    const data = await response.json();
    console.log("Сервер получил данные:", data.message);

    if (data)
      showPopUpMessage("Заявка отправлена.\nC Вами скоро свяжутся!", true);
  } catch (error) {
    console.error("Ошибка при отправке формы:", error.message);
    if (error)
      showPopUpMessage("Упс...Что-то пошло не так! Попробуйте позже!", false);
  } finally {
    contactData.value = {
      firstName: "",
      lastName: "",
      phone: "",
      projectFile: null,
    };

    questionData.value = {};
    phoneTouched.value = false;

    if (fileInput.value) {
      fileInput.value.value = "";
    }
  }
};
</script>

<template>
  <section class="kitchen-form-section">
    <h2 class="kitchen-form-section__hidden-anchor" id="post-order"></h2>

    <transition name="show">
      <div class="kitchen-form-section__popup" v-show="isPopupOpen">
        <div class="kitchen-form-section__popup-container">
          <span
            ><svg
              v-if="isOkRes"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="currentColor" d="M0 0h24v24H0z" />
                <path
                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"
                  fill="green"
                />
              </g>
            </svg>
            <ClientOnly v-else>
              <svg
                width="40px"
                height="40px"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <polygon
                  points="335.188,154.188 256,233.375 176.812,154.188 154.188,176.812 233.375,256 154.188,335.188 176.812,357.812 
      256,278.625 335.188,357.812 357.812,335.188 278.625,256 357.812,176.812"
                  fill="red"
                />
                <path
                  d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472
      c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"
                  fill="red"
                />
              </svg>
            </ClientOnly>
          </span>
          <h3 class="kitchen-form-section__popup-title">{{ popUpMessage }}</h3>
        </div>
      </div>
    </transition>

    <form
      class="kitchen-form"
      enctype="multipart/form-data"
      @submit.prevent="submitForm"
    >
      <div class="kitchen-form__content">
        <div class="kitchen-form__content-left">
          <legend class="kitchen-form__legend">Выберите данные кухни:</legend>
          <CustomDropDown
            v-for="item in importQuestion"
            :question="item.question"
            :list="item.ask"
            :key="item.question"
            :modelValue="questionData[item.question] ?? null"
            @update:modelValue="(value) => handleAnswer(item.question, value)"
          />
        </div>

        <div class="kitchen-form__content-right">
          <fieldset class="kitchen-form__section">
            <legend class="kitchen-form__legend">Контактные данные:</legend>
            <input
              type="text"
              @input="
                contactData.firstName = $event.target.value.replace(
                  /[^A-Za-zА-Яа-яЁё]/g,
                  '',
                )
              "
              name="firstName"
              placeholder="Имя*"
              class="kitchen-form__input"
              v-model="contactData.firstName"
              required
            />
            <input
              type="text"
              @input="
                contactData.lastName = $event.target.value.replace(
                  /[^A-Za-zА-Яа-яЁё]/g,
                  '',
                )
              "
              name="lastName"
              placeholder="Фамилия*"
              class="kitchen-form__input"
              v-model="contactData.lastName"
              required
            />
            <ClientOnly>
              <input
                v-mask="'+7 (###) ###-##-##'"
                @blur="phoneTouched = true"
                @focus="phoneTouched = false"
                type="tel"
                name="phone"
                placeholder="+7 ( ___ ) ___ / __ / __"
                class="kitchen-form__input kitchen-form__input--number"
                v-model="contactData.phone"
                required
              />
            </ClientOnly>
            <p
              v-if="phoneTouched && !isValid"
              class="kitchen-form__number-error"
            >
              ❌ Неверно введен номер
            </p>
          </fieldset>

          <div class="kitchen-form__section">
            <label class="kitchen-form__file-label">
              <input
                type="file"
                name="projectFile"
                class="kitchen-form__file"
                @change="handleFileUpload"
                accept="image/*,.pdf,.doc,.docx,.png,.jpg,.jpeg"
                ref="fileInput"
              />
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="consent"
              v-model="isChecked"
              class="kitchen-form__checkbox"
            />
            <label for="consent" class="kitchen-form__checkbox-label">
              Я согласен с
              <RouterLink to="/policy">условиями</RouterLink>
              обработки персональных данных
            </label>
          </div>
        </div>
      </div>

      <button
        type="submit"
        class="kitchen-form__submit"
        :disabled="!isChecked || !isValid"
      >
        Отправить
      </button>
    </form>
  </section>
</template>

<style src="./style.scss" lang="scss"></style>
