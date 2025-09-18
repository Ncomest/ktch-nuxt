<script setup>
import { NuxtLink } from "#components";

defineProps({
  text: { type: String, required: true },
  href: { type: String, default: "#" },
});
</script>
<template>
  <NuxtLink :to="href" class="the-link">{{ text }}</NuxtLink>
</template>
<style src="./style.scss"></style>
