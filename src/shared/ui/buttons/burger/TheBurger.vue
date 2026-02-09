<script setup>
import { useSidePanel } from "@stores/side-panel";
import { computed } from "vue";

const burger = useSidePanel();
const isOpen = computed(() => burger.burger.isOpen);
const toggleBurger = () => burger.toggle();
</script>

<template>
  <button
    class="the-burger"
    type="button"
    @click="toggleBurger"
    :class="{ open: isOpen }"
  >
    <span></span>
  </button>
</template>
<style src="./style.scss"></style>
