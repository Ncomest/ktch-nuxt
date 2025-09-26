<script setup>
import { useHead } from "#imports";

const props = defineProps();

useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(props.schema),
    },
  ],
});
</script>

<template>
  <!-- Ничего не рендерим в DOM, компонент только добавляет JSON-LD в head -->
</template>
