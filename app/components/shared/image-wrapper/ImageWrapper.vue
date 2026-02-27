<script setup>
defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  loading: {
    type: String,
    default: "lazy",
  },
  decoding: {
    type: String,
    default: "async",
  },
});
</script>
<template>
  <div class="image-wrapper">
    <img
      :src="src"
      :alt="alt"
      :loading="loading"
      :decoding="decoding"
      class="image-wrapper__image"
    />
  </div>
</template>
<style src="./style.scss"></style>
