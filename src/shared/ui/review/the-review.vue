<script setup>
import { ref, computed } from "vue";
import { ImageWrapper } from "@shared/ui/image-wrapper";
import noimage from "/images/reviews/noimage.webp";
import noavatar from "/images/avatars/nophoto.webp";
import { AppRate } from "@shared/ui/rate";

const props = defineProps({
  item: { type: Object, required: true },
});

const isExpanded = ref(false);
const maxLength = 150;

const showToggleButton = computed(() => props.item.review.length > maxLength);

const displayedText = computed(() =>
  isExpanded.value
    ? props.item.review
    : props.item.review.slice(0, maxLength) +
      (showToggleButton.value ? "..." : ""),
);

const toggleReview = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
  <div class="the-review">
    <image-wrapper :src="props.item.image || noimage" :alt="props.item.name" />

    <div class="the-review__user-container">
      <img
        :src="props.item.avatar || noavatar"
        :alt="props.item.name"
        class="the-review__avatar"
      />
      <h3 class="the-review__name">{{ props.item.name }}</h3>
    </div>

    <app-rate :value="props.item.rate" />
    <p>{{ props.item.date }}</p>

    <h5 class="the-review__price">
      Стоимость: {{ props.item.price.toLocaleString("ru-RU") }}₽
    </h5>

    <p class="the-review__text" :class="{ expanded: isExpanded }">
      {{ displayedText }}
    </p>
    <button
      v-if="showToggleButton"
      class="the-review__toggle"
      @click="toggleReview"
    >
      {{ isExpanded ? "Свернуть" : "Развернуть" }}
    </button>
  </div>
</template>

<style src="./style.scss" lang="scss"></style>
