<script setup lang="ts">
import { MainSlider } from "@entities/main-slider";
import { OurDesigner } from "@entities/our-designer";
import { OurReviews } from "@entities/our-reviews";
import { CatalogKitchen } from "@shared/ui/grid/catalog-kitchen";
import { TheContainer } from "@shared/ui/container";
import { TheOrder } from "@widgets/order";
import { KitchenForm } from "@entities/kitchen-form";
</script>

<template>
  <main class="the-home">
    <h1 class="visually-hidden">Графские кухни в Воронеже</h1>

    <main-slider class="the-home__main-slider" />

    <the-order :overlay="true" />

    <the-container title="Каталог кухонь">
      <catalog-kitchen />
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
<style src="./HomePage.scss"></style>
