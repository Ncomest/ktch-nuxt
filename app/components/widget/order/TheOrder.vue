<script setup>
import ButtonOrder from '@/components/shared/buttons/order/ButtonOrder.vue';
defineProps({
  overlay: Boolean,
  required: true
})
</script>
<template>
  <section class="the-order">
    <div class="the-order__overlay" v-if="overlay"></div>
    <ButtonOrder />
  </section>
</template>
<style src="./style.scss"></style>
