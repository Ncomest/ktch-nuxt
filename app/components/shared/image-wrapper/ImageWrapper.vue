<script setup>
defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
});
</script>
<template>
  <div class="image-wrapper">
    <img :src="src" :alt="alt" class="image-wrapper__image" />
  </div>
</template>
<style src="./style.scss"></style>
