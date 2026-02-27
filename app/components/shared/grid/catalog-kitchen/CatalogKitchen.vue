<script setup>
import { computed, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import kitchensData from "@/json/kitchens.json";

import "swiper/css";
import "swiper/css/navigation";
import KitchenCard from "../../kitchen-card/KitchenCard.vue";

const INITIAL_VISIBLE_KITCHENS = 8;

const kitchens = kitchensData;
const visibleCount = ref(INITIAL_VISIBLE_KITCHENS);

const visibleKitchens = computed(() => kitchens.slice(0, visibleCount.value));
const hasMoreKitchens = computed(() => visibleCount.value < kitchens.length);

const showMoreKitchens = () => {
  visibleCount.value = kitchens.length;
};
</script>

<template>
  <section class="catalog-kitchen">
    <h2 class="catalog-kitchen__hidden-anchor" id="catalog-kitchen"></h2>
    <Swiper
      id="catalog-kitchen-slider"
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
      <SwiperSlide v-for="(kitchen, index) in visibleKitchens" :key="kitchen.id">
        <KitchenCard
          :kitchen="kitchen"
          :loading="index < 2 ? 'eager' : 'lazy'"
        />
      </SwiperSlide>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </Swiper>

    <!-- Пагинация -->
    <div class="catalog-kitchen-pagination"></div>

    <button
      v-if="hasMoreKitchens"
      class="catalog-kitchen__show-more"
      type="button"
      @click="showMoreKitchens"
      aria-label="Показать ещё кухни из каталога"
      aria-controls="catalog-kitchen-slider"
    >
      Показать ещё кухни
    </button>
  </section>
</template>
<style src="./style.scss"></style>
