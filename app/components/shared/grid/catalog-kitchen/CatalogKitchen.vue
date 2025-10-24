<script setup>
import ImageWrapper from "@components/shared/image-wrapper/ImageWrapper.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import kitchensData from "@/json/kitchens.json";

import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../../product-card/ProductCard.vue";

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
          <ProductCard :key="kitchen.id" :kitchen="kitchen" />
        </div>
      </SwiperSlide>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </Swiper>
  </section>
</template>
<style src="./style.scss"></style>
