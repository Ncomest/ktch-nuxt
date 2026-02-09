import { defineStore } from "pinia";

export const useSidePanel = defineStore("side-panel", {
  state: () => ({
    burger: {
      isOpen: false,
    },
  }),

  actions: {
    toggle() {
      this.burger.isOpen = !this.burger.isOpen;
    },
    close() {
      this.burger.isOpen = false;
    },
    open() {
      this.burger.isOpen = true;
    },
  },
});
