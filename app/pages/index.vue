<script setup>
import MainSlider from "@components/widget/slider/main-slider/MainSlider.vue";
import OurDesigner from "@components/section/ourDesigner/OurDesigner.vue";
import OurReviews from "@components/section/ourReviews/OurReviews.vue";
import CatalogKitchen from "@components/shared/grid/catalog-kitchen/CatalogKitchen.vue";
import KitchenForm from "@components/widget/forms/kitchen-form/KitchenForm.vue";
import TheContainer from "@components/shared/container/TheContainer.vue";
import TheOrder from "@/components/widget/order/TheOrder.vue";

</script>

<template>
  <main class="the-home">
    <h1 class="visually-hidden">Графские кухни в Воронеже</h1>

    <main-slider class="the-home__main-slider" />

    <the-order :overlay="true"/>

    <the-container title="Каталог кухонь">
      <!-- <catalog-kitchen /> -->
    </the-container>

    <the-container title="Наши дизайнеры">
      <our-designer />
    </the-container>

    <the-container title="Отзывы">
      <our-reviews />
    </the-container>

    <the-container title="Сделать заявку">
      <kitchen-form />
    </the-container>
  </main>
</template>
<style src="./style.scss"></style>
