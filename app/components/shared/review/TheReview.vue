<script setup>
import ImageWrapper from "@components/shared/image-wrapper/ImageWrapper.vue";
import noimage from "/images/reviews/noimage.webp"
import noavatar from "/images/avatars/nophoto.webp"

import AppRate from "@components/shared/rate/AppRate.vue";

defineProps({
  item: { type: Object, required: true },
});
</script>
<template>
  <div class="the-review">
    <ImageWrapper :src="item.image || noimage" :alt="item.name" />
    <div class="the-review__user-container">
      <image-wrapper :src="item.avatar || noavatar" :alt="item.name" class="the-review__avatar"/>
      <h3 class="the-review__name">{{ item.name }}</h3>
    </div>
    <app-rate :value="item.rate" />
    <p>{{ item.date }}</p>
    <h5 class="the-review__price">Стоимость: {{ item.price.toLocaleString('ru-RU') }}₽</h5>
    <p class="the-review__text">{{ item.review }}</p>
  </div>
</template>
<style src="./style.scss"></style>
