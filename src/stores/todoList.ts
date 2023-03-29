import type { Item } from '@/types/item';
import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todoList: [] as Array<Item>,
    page: 1 as Number,
  }),

  actions: {
    async get() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?page=1&limit=20`
      );
      const values = await response.json();
      this.todoList = values;
    },
  },
});
