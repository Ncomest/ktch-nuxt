<script setup>
import TheReview from "@components/shared/review/TheReview.vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const reviews = [
  {
    name: "Алексей Петров",
    ktch: "/images/reviews/reviews_1_11zon.webp",
    id: 1,
    price: 375000,
    review:
      "Недавно заказал кухню своей мечты — и остался в полном восторге! С самого начала порадовало обслуживание: все вежливо, грамотно, без навязывания. Дизайнер оказался настоящим профессионалом, сразу понял, что я хочу, и предложил даже лучшее решение. Кухню изготовили всего за три недели, что приятно удивило. Качество материалов — на высоте, а цена приятно порадовала.",
  },
  {
    name: "Мария Кузнецова",
    ktch: "/images/reviews/reviews_2_11zon.webp",
    id: 2,
    price: 643400,
    review:
      "Очень доволен покупкой кухни — сбылись все ожидания! Дизайнер помог подобрать идеальный вариант по стилю и бюджету, учёл все мои пожелания до мелочей. Изготовили быстро, всё без задержек, и доставили аккуратно и точно в срок. Удивился, что при таком качестве цена оказалась довольно низкой. Рекомендую всем, кто ищет сочетание качества, сервиса и доступности.",
  },
  {
    name: "Игорь Смирнов",
    ktch: "/images/reviews/reviews_3_11zon.webp",
    id: 3,
    price: 423100,
    review:
      "Сервис просто на высоте! Менеджеры и дизайнеры вежливые, терпеливо отвечали на все мои вопросы, помогали с выбором фурнитуры и планировкой. Работали чётко и слаженно — видно, что команда профессионалов. Кухню доставили раньше обещанного срока, сборка прошла без проблем. Цены приятно удивили — гораздо ниже, чем у других компаний с похожим качеством.",
  },
  {
    name: "Елена Орлова",
    ktch: "/images/reviews/reviews_4_11zon.webp",
    id: 4,
    price: 314400,
    review:
      "Получил именно ту кухню, которую себе представлял! Особенно хочу отметить дизайнера: чувствуется опыт и вкус, всё просчитал до сантиметра. Обслуживание на всех этапах — от замера до установки — было внимательным и доброжелательным. Качество фасадов и фурнитуры отличное, ничего не скрипит, всё идеально встало. И главное — за такие деньги я даже не надеялся получить такой результат.",
  },
  {
    name: "Сергей Власов",
    ktch: "/images/reviews/reviews_5_11zon.webp",
    id: 5,
    price: 232400,
    review:
      "Приятно удивили профессионализм и скорость работы. Дизайнер сразу предложил несколько крутых решений, которых я сам бы не придумал. Кухню сделали и привезли всего за пару недель — всё четко и без сюрпризов. Качество на высоте, каждый элемент сделан аккуратно и добротно. А цена оказалась ниже, чем у конкурентов, хотя сервис — на голову выше.",
  },
];

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
</script>
<template>
  <section class="our-reviews">
    <div class="our-reviews__swiper-wrapper">
      <Swiper
        class="our-reviews__swiper"
        :modules="[Autoplay, Navigation]"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :space-between="10"
        :loop="true"
        :speed="1500"
        :autoplay="{ delay: 5000, pauseOnMouseEnter: true }"
        :breakpoints="{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }"
      >
        <SwiperSlide v-for="review in reviews" :key="review.id">
          <TheReview :item="review" />
        </SwiperSlide>
        <template #container-end>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </template>
      </Swiper>
    </div>
  </section>
</template>

<style src="./style.scss"></style>
