<script setup>
import FilterCard from "~/components/shared/filters-card/FilterCard.vue";
import ImageBanner from "~/components/shared/image-banner/ImageBanner.vue";
import kitchensData from "@/json/kitchens.json";
import ProductCard from "~/components/shared/product-card/ProductCard.vue";

const kitchenModels = {
  linear: "прямая",
  corner: "угловая",
  shaped: "п-образная",
};

</script>

<template>
  <main class="app-catalog">
    <ImageBanner />
    <div class="app-catalog__filters">
      <FilterCard
        v-for="name in kitchenModels"
        :text="name"
      />
    </div>
    <section class="app-catalog__catalog-section">
      <div class="app-catalog__catalog-section__grid">
        <ProductCard
          v-for="kitchen in kitchensData"
          :kitchen="kitchen"
          :key="kitchen.id"
        />
      </div>
    </section>
  </main>
</template>

<style src="./catalog.scss" lang="scss"></style>
