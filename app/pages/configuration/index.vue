<script setup>
import { createNewKitchen, deleteKitchen } from "~/api/api";
import AppInput from "~/components/shared/input/AppInput.vue";
import KitchenJSON from "~/json/kitchens.json";

const mokData = {
  id: 1,
  name: "София",
  type: "прямая",
  material: "МДФ",
  price: 345000,
  discountPrice: 310500,
  image: "/images/kitchens/kitchen_1_11zon.webp",
  description:
    "Элегантная прямая кухня в классическом стиле. Идеально подходит для просторных помещений и создает атмосферу уюта и комфорта.",
  badge: "скидка",
};

const kitchens = KitchenJSON;

const newKitchen = reactive({
  id: 2,
  name: "шаблон",
  type: "материал",
  material: "",
  price: 0,
  discountPrice: 0,
  image: "",
  description: "",
  badge: "",
});

// TODO: потом добавить фичу
const handleChangeKitchen = (id) => {
  console.log("id", id);
  // Внести изменения в карточку кухни
};
</script>

<template>
  <div>slider list</div>
  <div>
    <div>
      <h3>catalog list</h3>
      <ul style="overflow-x: scroll; display: flex; flex-wrap: nowrap">
        <li
          style="
            display: inline-block;
            width: 400px;
            height: auto;
            border: 1px solid black;
            padding: 20px;
            position: relative;
          "
          v-for="kitchen in kitchens.slice(0, 7)"
        >
          <p>id: {{ kitchen.id }}</p>
          <p>Название: {{ kitchen.name }}</p>
          <p>Тип: {{ kitchen.type }}</p>
          <p>Материал: {{ kitchen.material }}</p>
          <p>Цена: {{ kitchen.price }}</p>
          <p>Скидочная цена: {{ kitchen.discountPrice }}</p>
          <p>изображение: {{ kitchen.image }}</p>
          <p>Описание: {{ kitchen.description }}</p>
          <p>Баджик: {{ kitchen.badge }}</p>
          <!-- <button v-on:click="handleChangeKitchen(kitchen.id)">Изменить</button> -->
          <button
            style="position: absolute; top: 10px; right: 10px"
            v-on:click="deleteKitchen(kitchen.id)"
          >
            X
          </button>
        </li>
      </ul>
    </div>

    <div
      style="
        border: 1px solid black;
        padding: 20px;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
      "
    >
      <h4 style="font-size: 24px; font-weight: bold">Добавить кухню</h4>
      <AppInput title="Добавить id" v-model="newKitchen.id" />
      <AppInput title="Название кухни" v-model="newKitchen.name" />
      <AppInput title="Материал" v-model="newKitchen.material" />
      <AppInput title="Цена" v-model="newKitchen.price" />
      <AppInput title="Скидочная цена" v-model="newKitchen.discountPrice" />
      <AppInput title="Изображение" v-model="newKitchen.image" />
      <AppInput title="Описание" v-model="newKitchen.description" />
      <AppInput title="Баджик" v-model="newKitchen.badge" />
      <button v-on:click="createNewKitchen">Добавить</button>
    </div>
  </div>
  <div>reviews list</div>
</template>

<style src="./configuration.scss" lang="scss"></style>
