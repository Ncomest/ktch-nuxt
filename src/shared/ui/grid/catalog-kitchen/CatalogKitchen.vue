<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import kitchensData from "@/app/json/kitchens.json";

import "swiper/css";
import "swiper/css/navigation";
import { KitchenCard } from "@entities/kitchen-card";

const kitchens = kitchensData;
</script>

<template>
  <section class="catalog-kitchen">
    <h2 class="catalog-kitchen__hidden-anchor" id="catalog-kitchen"></h2>
    <Swiper
      :modules="[Autoplay, Navigation, Pagination]"
      :speed="1500"
      :autoplay="{ delay: 8000, pauseOnMouseEnter: true }"
      :space-between="10"
      :loop="true"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :pagination="{
        el: '.catalog-kitchen-pagination',
        clickable: true,
        type: 'bullets',
      }"
      :slides-per-view="1"
      :breakpoints="{
        // На мобильных (до 768px) - 1 карточка
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // На планшетах (768px и выше) - 2 карточки
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        // На десктопах (1024px и выше) - 2 карточки
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }"
    >
      <SwiperSlide v-for="kitchen in kitchens" :key="kitchen.id">
        <kitchen-card :kitchen="kitchen" />
      </SwiperSlide>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </Swiper>

    <!-- Пагинация -->
    <div class="catalog-kitchen-pagination"></div>
  </section>
</template>
<style src="./style.scss"></style>
