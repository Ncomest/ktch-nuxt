<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  question: { type: String, required: true },
  list: { type: Array, required: true },
  modelValue: { type: String, default: null },
});

const emit = defineEmits(["update:modelValue"]);

const isHidden = ref(true);
const selectedValue = ref(props.question);

watch(
  () => props.modelValue,
  (newValue) => {
    selectedValue.value = newValue ?? props.question;
  },
  { immediate: true }
);

const handlePick = (item) => {
  selectedValue.value = item;
  isHidden.value = true;
  emit("update:modelValue", item);
};
</script>
<template>
  <div class="custom-select">
    <button class="select-button" @click.prevent="isHidden = !isHidden">
      <span class="selected-value">{{ selectedValue }}</span>
      <span class="arrow"></span>
    </button>
    <ul class="select-dropdown" :class="{ hidden: isHidden }">
      <li
        v-for="item in list"
        :value="item"
        :key="item"
        @click="handlePick(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<style src="./style.scss"></style>
