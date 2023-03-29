import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    dark: false,
  }),

  actions: {
    toggleDarkMode() {
      this.dark = !this.dark;
    },
  },
});
