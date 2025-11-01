<script setup>
import calcDiscount from "~/helpers/calc-discount";
import ImageWrapper from "../image-wrapper/ImageWrapper.vue";

defineProps({ kitchen: Object });


const discountPriceUtilite = computed(
  () =>
    Math.round(
      ((kitchen.price - kitchen.discountPrice) / kitchen.price) * 10000
    ) / 100
);
</script>

<template>
  <article class="product-card">
    <div v-if="kitchen.discountPrice">
      <span class="product-card__label" v-show="kitchen.discountPrice">
        -{{ discountPriceUtilite }}%
      </span>
    </div>

    <!-- <span class="product-card__label" v-show="item.sale"> Распродажа </span> -->

    <ImageWrapper
      class="product-card__image"
      alt="кухни на заказ в Воронеже от компании Графские кухни"
      :src="kitchen.image"
      :key="kitchen.id"
    />

    <!-- <span class="product-card__news">{{ kitchen.news }}</span> -->

    <div class="product-card__price-container">
      <p class="product-card__price-old" v-show="kitchen.discountPrice">
        {{ calcDiscount(kitchen.price, kitchen.discountPrice) }}₽
      </p>
      <p class="product-card__price">{{ kitchen.price }}₽</p>
    </div>
  </article>
</template>

<style src="./ProductCard.scss"></style>
