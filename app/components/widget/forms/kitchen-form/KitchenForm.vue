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
  if (timeoutId) clearTimeout(timeoutId);
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

const formatPhone = () => {
  let digits = contactData.value.phone.replace(/\D/g, "");

  // Если начинается с 8, заменяем на +7
  if (digits.startsWith("8")) {
    digits = "7" + digits.slice(1);
  }

  // Если не начинается с 7, добавляем
  if (!digits.startsWith("7")) {
    digits = "7" + digits;
  }

  // Обрезаем до 11 цифр (без +)
  digits = digits.slice(0, 11);

  // Форматируем как +7 (XXX) XXX-XX-XX
  let formatted = "+7";
  if (digits.length > 1) formatted += " (" + digits.slice(1, 4);
  if (digits.length >= 4) formatted += ") " + digits.slice(4, 7);
  if (digits.length >= 7) formatted += "-" + digits.slice(7, 9);
  if (digits.length >= 9) formatted += "-" + digits.slice(9, 11);

  contactData.value.phone = formatted;
};

const isValid = computed(() => {
  return /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(contactData.value.phone);
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

    // console.log(questionData.value);
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
        errData.message || `HTTP error! status: ${response.status}`
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
            <svg
              v-else="isOkRes"
              width="40px"
              height="40px"
              fill="red"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              enable-background="new 0 0 512 512"
              xml:space="preserve"
            >
              <polygon
                points="335.188,154.188 256,233.375 176.812,154.188 154.188,176.812 233.375,256 154.188,335.188 176.812,357.812 
	256,278.625 335.188,357.812 357.812,335.188 278.625,256 357.812,176.812 "
              />
              <path
                d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472
	c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"
                fill="red"
              />
            </svg>
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
                  ''
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
                  ''
                )
              "
              name="lastName"
              placeholder="Фамилия*"
              class="kitchen-form__input"
              v-model="contactData.lastName"
              required
            />
            <input
              @input="formatPhone"
              @blur="phoneTouched = true"
              @focus="phoneTouched = false"
              type="tel"
              name="phone"
              placeholder="+7 ( ___ ) ___ / __ / __"
              class="kitchen-form__input kitchen-form__input--number"
              v-model="contactData.phone"
              required
            />
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
        </div>
      </div>

      <button type="submit" class="kitchen-form__submit">Отправить</button>
    </form>
  </section>
</template>

<style src="./style.scss"></style>
