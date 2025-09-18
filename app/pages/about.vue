<script setup>
import AboutUs from "~/components/section/aboutUs/AboutUs.vue";
import AppContacts from "~/components/section/contacts/AppContacts.vue";
</script>

<template>
  <div class="app-about">
    <about-us />
    <app-contacts />
  </div>
</template>

<style scoped lang="scss">
.app-about {
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  padding-bottom: 40px;
}
</style>
