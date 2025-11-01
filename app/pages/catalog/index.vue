<script setup>
import { ref, computed, watch, onMounted } from "vue";
import FilterPanel from "~/components/shared/filter-panel/FilterPanel.vue";
import ImageBanner from "~/components/shared/image-banner/ImageBanner.vue";
import kitchensData from "@/json/kitchens.json";
import KitchenCard from "~/components/shared/kitchen-card/KitchenCard.vue";
import Pagination from "~/components/shared/pagination/Pagination.vue";
import SkeletonLoader from "~/components/shared/skeleton-loader/SkeletonLoader.vue";
import TheContainer from "~/components/shared/container/TheContainer.vue";

const itemsPerPage = 9;
const isLoading = ref(false);

const searchQuery = ref("");
const typeFilter = ref(null);
const materialFilter = ref(null);
const currentPage = ref(1);

const uniqueTypes = computed(() => {
  const types = [...new Set(kitchensData.map((k) => k.type))];
  return types;
});

const uniqueMaterials = computed(() => {
  const materials = [...new Set(kitchensData.map((k) => k.material))];
  return materials;
});

const filteredKitchens = computed(() => {
  let filtered = [...kitchensData];

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter((kitchen) =>
      kitchen.name.toLowerCase().includes(query)
    );
  }

  if (typeFilter.value) {
    filtered = filtered.filter((kitchen) => kitchen.type === typeFilter.value);
  }

  if (materialFilter.value) {
    filtered = filtered.filter(
      (kitchen) => kitchen.material === materialFilter.value
    );
  }

  return filtered;
});

const totalPages = computed(() => {
  return Math.ceil(filteredKitchens.value.length / itemsPerPage);
});

const paginatedKitchens = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredKitchens.value.slice(start, end);
});

const handleSearch = (value) => {
  searchQuery.value = value;
  resetPagination();
};

const handleTypeFilter = (value) => {
  typeFilter.value = value;
  resetPagination();
};

const handleMaterialFilter = (value) => {
  materialFilter.value = value;
  resetPagination();
};

const resetFilters = () => {
  searchQuery.value = "";
  typeFilter.value = null;
  materialFilter.value = null;
  resetPagination();
};

const resetPagination = () => {
  currentPage.value = 1;
};

const changePage = (page) => {
  isLoading.value = true;

  setTimeout(() => {
    currentPage.value = page;
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      isLoading.value = false;
    }, 300);
  }, 200);
};

watch([typeFilter, materialFilter, searchQuery], () => {
  if (currentPage.value > totalPages.value && totalPages.value > 0) {
    currentPage.value = 1;
  }
});
</script>

<template>
  <main class="app-catalog">
    <ImageBanner />

    <the-container title="Каталог">
      <!-- <catalog-kitchen /> -->

      <div class="app-catalog__container">
        <FilterPanel
          :types="uniqueTypes"
          :materials="uniqueMaterials"
          @update:search="handleSearch"
          @update:typeFilter="handleTypeFilter"
          @update:materialFilter="handleMaterialFilter"
          @reset="resetFilters"
        />

        <transition name="fade" mode="out-in">
          <div v-if="isLoading" key="loading">
            <SkeletonLoader :count="itemsPerPage" />
          </div>
          <div v-else-if="paginatedKitchens.length > 0" key="content">
            <div>
              <transition-group
                name="fade"
                tag="div"
                class="app-catalog__catalog-section__grid"
              >
                <KitchenCard
                  v-for="kitchen in paginatedKitchens"
                  :key="kitchen.id"
                  :kitchen="kitchen"
                />
              </transition-group>
            </div>

            <Pagination
              :current-page="currentPage"
              :total-pages="totalPages"
              @change-page="changePage"
            />
          </div>
          <div v-else key="empty" class="app-catalog__empty">
            <p class="app-catalog__empty-text">
              По вашему запросу ничего не найдено.
            </p>
            <button class="app-catalog__empty-button" @click="resetFilters">
              Сбросить фильтры
            </button>
          </div>
        </transition>
      </div>
    </the-container>
  </main>
</template>

<style src="./catalog.scss" lang="scss"></style>
