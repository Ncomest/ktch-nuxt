<script setup>
import TheHeader from "@components/widget/header/TheHeader.vue";
import TheFooter from "@components/widget/footer/TheFooter.vue";
import SidePanel from "@components/shared/side-panel/SidePanel.vue";
import SidePanelBurger from "@components/widget/side-panel-burger/SidePanelBurger.vue";

import { useSidePanel } from "@/stores/side-panel";

const sidePanel = useSidePanel();
</script>

<template>
  <the-header />

  <transition name="slide">
    <side-panel
      v-if="sidePanel.burger.isOpen"
      class="app-side-panel__burger-wrapper"
    >
      <side-panel-burger />
    </side-panel>
  </transition>

  <NuxtPage :transition="{ name: 'fade', mode: 'out-in' }" />

  <the-footer />
</template>

<style lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.app-side-panel {
  &__burger-wrapper {
    position: fixed;
    left: 0;
    width: 100%;
  }
}
</style>
