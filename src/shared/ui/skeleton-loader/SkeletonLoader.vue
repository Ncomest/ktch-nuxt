<script setup>
const props = defineProps({
  count: {
    type: Number,
    default: 9
  }
});
</script>

<template>
  <div class="skeleton-loader">
    <div
      v-for="n in count"
      :key="n"
      class="skeleton-loader__card"
    >
      <div class="skeleton-loader__image"></div>
      <div class="skeleton-loader__content">
        <div class="skeleton-loader__title"></div>
        <div class="skeleton-loader__meta">
          <div class="skeleton-loader__meta-item"></div>
          <div class="skeleton-loader__meta-item"></div>
        </div>
        <div class="skeleton-loader__description"></div>
        <div class="skeleton-loader__description skeleton-loader__description--short"></div>
        <div class="skeleton-loader__price"></div>
        <div class="skeleton-loader__button"></div>
      </div>
    </div>
  </div>
</template>

<style src="./SkeletonLoader.scss" lang="scss"></style>

