<script setup>
defineProps({
  title: { type: String, default: false },
});
</script>

<template>
  <section class="the-container">
    <h2 class="the-container__title">{{ title }}</h2>
    <slot></slot>
  </section>
</template>
<style src="./style.scss"></style>
