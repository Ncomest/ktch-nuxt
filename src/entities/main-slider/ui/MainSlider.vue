<script setup>
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import { ImageWrapper } from "@shared/ui/image-wrapper";

const slides = [
  { ktch: "/images/classic/kitchen-one.webp", id: 1 },
  { ktch: "/images/classic/kitchen_2.webp", id: 2 },
  { ktch: "/images/classic/kitchen_3.webp", id: 3 },
  { ktch: "/images/classic/kitchen_4.webp", id: 4 },
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
        <image-wrapper
          :src="i.ktch"
          alt="Kitchen"
          class="swiper__image-wrapper"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<style src="./MainSlider.scss"></style>
