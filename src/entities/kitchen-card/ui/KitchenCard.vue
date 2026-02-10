<script setup>
import { ImageWrapper } from "@shared/ui/image-wrapper";

const props = defineProps({
  kitchen: {
    type: Object,
    required: true,
  },
});

const formatPrice = (price) => {
  return price?.toLocaleString("ru-RU") || 0;
};

const badgeText = {
  скидка: "Скидка",
  распродажа: "Распродажа",
  новинка: "Новинка",
};
</script>

<template>
  <article class="kitchen-card">
    <div class="kitchen-card__image-wrapper">
      <image-wrapper
        class="kitchen-card__image"
        :alt="`Кухня ${kitchen.name} - ${kitchen.type}, ${kitchen.material}`"
        :src="kitchen.image"
      />

      <span
        v-if="kitchen.badge"
        class="kitchen-card__badge"
        :class="`kitchen-card__badge--${kitchen.badge}`"
      >
        {{ badgeText[kitchen.badge] }}
      </span>
    </div>

    <div class="kitchen-card__content">
      <h3 class="kitchen-card__title">{{ kitchen.name }}</h3>

      <div class="kitchen-card__meta">
        <span class="kitchen-card__type">{{ kitchen.type }}</span>
        <span class="kitchen-card__material">{{ kitchen.material }}</span>
      </div>

      <p class="kitchen-card__description">{{ kitchen.description }}</p>

      <div class="kitchen-card__price-container">
        <p v-if="kitchen.discountPrice" class="kitchen-card__price-old">
          {{ formatPrice(kitchen.price) }}₽
        </p>
        <p class="kitchen-card__price">
          {{ formatPrice(kitchen.discountPrice || kitchen.price) }}₽
        </p>
      </div>
      <RouterLink class="kitchen-card__button" to="/#post-order">
        Заказать
      </RouterLink>

      <!-- <button class="kitchen-card__button">
        Подробнее
      </button> -->
    </div>
  </article>
</template>

<style src="./KitchenCard.scss" lang="scss"></style>
