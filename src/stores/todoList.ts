import type { Item } from "@/types/item";
import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todoList: [] as Array<Item>,
    page: 1 as Number,
    key: "" as string,
    text: "" as string,
  }),

  getters: {
    getList(state) {
      const showInCompleteTodoList = this.todoList.filter(
        (item) => !item.completed
      );
      const filterBySearchText = (completeTasks: Array<Item>) =>
        this.text.length > 0
          ? completeTasks.filter((item) => item.title.includes(state.text))
          : completeTasks;
      return filterBySearchText(showInCompleteTodoList);
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

    findBy(text: string, key = "title") {
      console.log(text);
      this.text = text;
      this.key = key;
    },

    update(id: number) {
      const index = this.todoList.findIndex((item) => item.id === id);
      this.todoList[index].completed = true;
    },

    edit(id: number, text: string) {
      const index = this.todoList.findIndex((item) => item.id === id);
      this.todoList[index].title = text;
    },

    clear() {
      this.text = "";
    },
  },
});
