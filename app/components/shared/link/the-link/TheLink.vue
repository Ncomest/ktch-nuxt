<script setup>
defineProps({
  text: { type: String, required: true },
  href: { type: String, default: "#" },
});
</script>
<template>
  <a :href="href" class="the-link">{{ text }}</a>
</template>
<style src="./style.scss"></style>
