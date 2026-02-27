<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";

const props = defineProps({
  question: { type: String, required: true },
  list: { type: Array, required: true },
  modelValue: { type: String, default: null },
  isOpen: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue", "open"]);

const selectedValue = ref(props.question);
const containerRef = ref(null);

watch(
  () => props.modelValue,
  (newValue) => {
    selectedValue.value = newValue ?? props.question;
  },
  { immediate: true }
);

const handleToggle = () => {
  if (props.isOpen) {
    emit("open", null);
  } else {
    emit("open", props.question);
  }
};

const handlePick = (item) => {
  selectedValue.value = item;
  emit("update:modelValue", item);
  emit("open", null);
};

const handleClickOutside = (event) => {
  if (props.isOpen && containerRef.value && !containerRef.value.contains(event.target)) {
    emit("open", null);
  }
};

onMounted(() => document.addEventListener("mousedown", handleClickOutside));
onUnmounted(() => document.removeEventListener("mousedown", handleClickOutside));
</script>
<template>
  <div class="custom-select" ref="containerRef">
    <button class="select-button" @click.prevent="handleToggle">
      <span class="selected-value">{{ selectedValue }}</span>
      <span class="arrow"></span>
    </button>
    <ul class="select-dropdown" :class="{ hidden: !isOpen }">
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
