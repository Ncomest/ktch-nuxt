<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import kitchensData from "@/json/kitchens.json";

import "swiper/css";
import "swiper/css/navigation";
import KitchenCard from "../../kitchen-card/KitchenCard.vue";

const kitchens = kitchensData;
</script>

<template>
  <section class="catalog-kitchen">
    <h2 class="catalog-kitchen__hidden-anchor" id="catalog-kitchen"></h2>
    <div class="catalog-kitchen__cta-wrapper">
      <span style="margin-right: 16px; font-size: 18px; font-weight: 500">
        Посмотреть каталог
      </span>
      <RouterLink to="/catalog" class="catalog-kitchen__cta-btn">
        <span style="display: inline-flex; align-items: center">
          <!-- Arrow SVG icon (right arrow) -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M10 17a1 1 0 0 1-.7-1.71L13.59 11 9.3 6.71a1 1 0 1 1 1.41-1.42l5 5a1 1 0 0 1 0 1.42l-5 5A1 1 0 0 1 10 17Z"
            />
          </svg>
        </span>
      </RouterLink>
    </div>
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
      <SwiperSlide v-for="(kitchen, index) in kitchens" :key="kitchen.id">
        <KitchenCard :kitchen="kitchen" />
      </SwiperSlide>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </Swiper>

    <!-- Пагинация -->
    <div class="catalog-kitchen-pagination"></div>
  </section>
</template>
<style src="./style.scss"></style>
