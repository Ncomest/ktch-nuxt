export const useModalStore = defineStore("modal", () => {
  const isModalOpen = ref(false);

  const toggle = () => {
    isModalOpen.value = !isModalOpen.value;
  };

  const close = () => {
    isModalOpen.value = false;
  };

  const open = () => {
    isModalOpen.value = true;
  };

  return {
    isModalOpen,
    toggle,
    close,
    open,
  };
});
