<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  types: {
    type: Array,
    required: true
  },
  materials: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['update:search', 'update:typeFilter', 'update:materialFilter', 'reset']);

const searchQuery = ref('');
const selectedType = ref(null);
const selectedMaterial = ref(null);

watch(searchQuery, (value) => {
  emit('update:search', value);
});

watch(selectedType, (value) => {
  emit('update:typeFilter', value);
});

watch(selectedMaterial, (value) => {
  emit('update:materialFilter', value);
});

const resetFilters = () => {
  searchQuery.value = '';
  selectedType.value = null;
  selectedMaterial.value = null;
  emit('reset');
};
</script>

<template>
  <div class="filter-panel">
    <div class="filter-panel__search">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Поиск по названию..."
        class="filter-panel__search-input"
      />
    </div>

    <div class="filter-panel__filters">
      <div class="filter-panel__filter-group">
        <label class="filter-panel__label">Тип кухни:</label>
        <div class="filter-panel__options">
          <button
            v-for="type in types"
            :key="type"
            class="filter-panel__option"
            :class="{ 'filter-panel__option--active': selectedType === type }"
            @click="selectedType = selectedType === type ? null : type"
          >
            {{ type }}
          </button>
        </div>
      </div>

      <div class="filter-panel__filter-group">
        <label class="filter-panel__label">Материал:</label>
        <div class="filter-panel__options">
          <button
            v-for="material in materials"
            :key="material"
            class="filter-panel__option"
            :class="{ 'filter-panel__option--active': selectedMaterial === material }"
            @click="selectedMaterial = selectedMaterial === material ? null : material"
          >
            {{ material }}
          </button>
        </div>
      </div>
    </div>

    <button
      class="filter-panel__reset"
      :disabled="!searchQuery && !selectedType && !selectedMaterial"
      @click="resetFilters"
    >
      Сбросить фильтры
    </button>
  </div>
</template>

<style src="./FilterPanel.scss" lang="scss"></style>

