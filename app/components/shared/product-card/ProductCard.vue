<script setup>
import calcDiscount from '~/helpers/calc-discount';
import ImageWrapper from '../image-wrapper/ImageWrapper.vue';

defineProps({ kitchen: Object })
</script>

<template>
  <article
    class="product-card"
    v-for="item in kitchen"
    :key="item.id"
  >
    <span class="product-card__label" v-show="item.discount">
      -{{ item.discount }}%
    </span>

    <span class="product-card__label" v-show="item.sale">
      Распродажа
    </span>

    <ImageWrapper
      class="product-card__image"
      alt="кухни на заказ в Воронеже от компании Графские кухни"
      :src="item.src"
      :key="item.id"
    />

    <span class="product-card__news">{{ item.news }}</span>

    <div class="product-card__price-container">
      <p class="product-card__price-old" v-show="item.discount">
        {{ calcDiscount(item.price, item.discount) }}₽
      </p>
      <p class="product-card__price">
        {{ item.price.toLocaleString("ru-RU") }}₽
      </p>
    </div>
    
  </article>
</template>

<style src="./ProductCard.scss"></style>
