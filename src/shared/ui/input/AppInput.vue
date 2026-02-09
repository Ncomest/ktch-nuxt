<script setup>
defineProps({
  title: { type: String },
});
const model = defineModel();
</script>

<template>
  <div>
    <label>{{ title }}</label>
    <input v-model="model" />
  </div>
</template>

<style src="./AppInput.scss"></style>
