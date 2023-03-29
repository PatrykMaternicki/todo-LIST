import type { Item } from "@/types/item";
import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todoList: [] as Array<Item>,
    page: 1 as Number,
  }),

  getters: {
    showInCompleteTodoList(): Array<Item> {
      return this.todoList.filter((item) => !item.completed);
    },
  },

  actions: {
    async get() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`
      );
      const values = await response.json();
      this.todoList = values;
    },

    update(id: number) {
      const index = this.todoList.findIndex((item) => item.id === id);
      this.todoList[index].completed = true;
    },

    edit(id: number, text: string) {
      const index = this.todoList.findIndex((item) => item.id === id);
      this.todoList[index].title = text;
    },
  },
});
