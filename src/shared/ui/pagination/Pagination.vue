<script setup>
const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['change-page']);

const goToPage = (page) => {
  if (page >= 1 && page <= props.totalPages && page !== props.currentPage) {
    emit('change-page', page);
  }
};

const goToPrevious = () => {
  goToPage(props.currentPage - 1);
};

const goToNext = () => {
  goToPage(props.currentPage + 1);
};

const getPageNumbers = () => {
  const pages = [];
  const total = props.totalPages;
  const current = props.currentPage;

  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    if (current <= 3) {
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(total);
    } else if (current >= total - 2) {
      pages.push(1);
      pages.push('...');
      for (let i = total - 4; i <= total; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push('...');
      for (let i = current - 1; i <= current + 1; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(total);
    }
  }

  return pages;
};
</script>

<template>
  <div class="pagination" v-if="totalPages > 1">
    <button
      class="pagination__button"
      :disabled="currentPage === 1"
      @click="goToPrevious"
    >
      Предыдущая
    </button>

    <div class="pagination__pages">
      <button
        v-for="page in getPageNumbers()"
        :key="page"
        class="pagination__page"
        :class="{
          'pagination__page--active': page === currentPage,
          'pagination__page--ellipsis': page === '...'
        }"
        :disabled="page === '...'"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>
    </div>

    <button
      class="pagination__button"
      :disabled="currentPage === totalPages"
      @click="goToNext"
    >
      Следующая
    </button>
  </div>
</template>

<style src="./Pagination.scss" lang="scss"></style>

