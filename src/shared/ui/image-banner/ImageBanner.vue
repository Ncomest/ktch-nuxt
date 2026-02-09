<script setup>
import image from "/images/kitchens/kitchen_1_11zon.webp";
</script>

<template>
  <section class="image-banner">
    <div class="image-banner__image-wrapper">
      <img
        class="image-banner__image-wrapper__image"
        :src="image"
        alt="заказать кухню"
      />
    </div>
  </section>
</template>

<style src="./ImageBanner.scss"></style>
