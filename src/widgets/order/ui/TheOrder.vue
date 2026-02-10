<script setup>
import { ButtonOrder } from "@shared/ui/buttons/order";
defineProps({
  overlay: Boolean,
  required: true,
});
</script>
<template>
  <section class="the-order">
    <div class="the-order__overlay" v-if="overlay"></div>
    <button-order />
  </section>
</template>
<style src="./TheOrder.scss"></style>
