<script setup>
defineProps({ text: String, selectedModel: String });
</script>

<template>
  <article class="fitler-card">
    <h3 class="filter-card__title" >{{ text }}</h3>
  </article>
</template>

<style src="./FilterCard.scss"></style>
