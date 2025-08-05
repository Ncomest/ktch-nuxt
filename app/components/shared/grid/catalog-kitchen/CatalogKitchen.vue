<script setup>
import ImageWrapper from "@components/shared/image-wrapper/ImageWrapper.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import kitchensData from "@/json/kitchens.json";
import calcDiscount from "@/helpers/calc-discount";

import "swiper/css";
import "swiper/css/navigation";

const kitchens = kitchensData;
</script>

<template>
  <section class="catalog-kitchen">
    <h2 class="catalog-kitchen__hidden-anchor" id="catalog-kitchen"></h2>
    <Swiper
      :modules="[Autoplay, Navigation]"
      :speed="1500"
      :autoplay="{ delay: 8000, pauseOnMouseEnter: true }"
      :space-between="10"
      :loop="true"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
    >
      <SwiperSlide v-for="(kitchen, index) in kitchens" :key="index">
        <div class="catalog-kitchen__grid">
          <div
            class="catalog-kitchen__grid-item"
            v-for="item in kitchen"
            :key="item.id"
          >
            <span
              class="catalog-kitchen__grid-item__label"
              v-show="item.discount"
            >
              -{{ item.discount }}%
            </span>

            <span class="catalog-kitchen__grid-item__label" v-show="item.sale">
              Распродажа
            </span>
            <ImageWrapper
              :src="item.src"
              alt="name"
              :key="item.id"
              class="catalog-kitchen__grid-image"
            />
            <span class="catalog-kitchen__grid-item__news">{{
              item.news
            }}</span>
            <div class="catalog-kitchen__grid-item__price-container">
              <p
                class="catalog-kitchen__grid-item__price-old"
                v-show="item.discount"
              >
                {{ calcDiscount(item.price, item.discount) }}₽
              </p>
              <p class="catalog-kitchen__grid-item__price">
                {{ item.price.toLocaleString("ru-RU") }}₽
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </Swiper>
  </section>
</template>
<style src="./style.scss"></style>
