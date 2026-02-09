<script setup>
defineProps({
  value: {
    type: Number,
    required: true,
    validator: (value) => value >= 0 && value <= 5
  },
  maxStars: {
    type: Number,
    default: 5
  }
})
</script>

<template>
  <div class="app-rate">
    <span
        v-for="star in maxStars"
        :key="star"
        class="star"
        :class="{ 'filled': star <= value }"
    >
      {{ star <= value ? '★' : '☆' }}
    </span>
  </div>
</template>



<style src="./style.scss">

</style>