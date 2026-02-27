<script setup>
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import ImageWrapper from "@components/shared/image-wrapper/ImageWrapper.vue";

const slides = [
  {
    ktch: "/images/classic/kitchen-one.webp",
    id: 1,
    alt: "Современная угловая кухня в светлых тонах",
  },
  {
    ktch: "/images/classic/kitchen_2.webp",
    id: 2,
    alt: "Классическая кухня с фасадами под дерево",
  },
  {
    ktch: "/images/classic/kitchen_3.webp",
    id: 3,
    alt: "Кухня с островом и барной стойкой",
  },
  {
    ktch: "/images/classic/kitchen_4.webp",
    id: 4,
    alt: "Прямая кухня для квартиры-студии",
  },
];
</script>

<template>
  <div>
    <Swiper
      :modules="[Pagination, Autoplay]"
      :pagination="{ clickable: true }"
      :slides-per-view="1"
      :space-between="10"
      :loop="true"
      :speed="1500"
      :autoplay="{ delay: 15000 }"
    >
      <SwiperSlide v-for="i in slides" :key="i.id">
        <ImageWrapper
          :src="i.ktch"
          :alt="i.alt"
          :loading="i.id === 1 ? 'eager' : 'lazy'"
          class="swiper__image-wrapper"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<style src="./style.scss"></style>
