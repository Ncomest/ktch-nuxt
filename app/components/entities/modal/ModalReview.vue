<script setup>
const modalStore = useModalStore();
</script>

<template>
  <div class="modal-review" aria-modal="true" role="dialog">
    <!-- затемнение -->
    <div class="modal-review__overlay" @click="modalStore.close()"></div>

    <!-- само модальное окно -->
    <div class="modal-review__window">
      <p>Модальное окно</p>
      <button @click="modalStore.close()">Закрыть</button>
    </div>
  </div>
</template>

<style src="./style.scss" lang="scss"></style>
