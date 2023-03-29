import type { Item } from "@/types/item";
import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todoList: [] as Array<Item>,
    currentPage: 0 as Number,
    key: "" as string,
    text: "" as string,
    showOnPage: 10 as Number,
    pages: 0,
  }),

  getters: {
    getList(state) {
      const showInCompleteTodoList = this.todoList.filter(
        (item) => !item.completed
      );
      const filterBySearchText = (completeTasks: Array<Item>) =>
        completeTasks.filter((item) => item.title.includes(state.text));
      const seperateByPage = (completeTasks: Array<Item>) =>
        completeTasks.slice(
          state.currentPage * state.showOnPage,
          state.currentPage * state.showOnPage + state.showOnPage
        );
      const results = filterBySearchText(showInCompleteTodoList);
      console.log(results.length);
      console.log(state.showOnPage);

      state.pages = Number.parseInt(results.length / state.showOnPage);
      return seperateByPage(filterBySearchText(showInCompleteTodoList));
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

    nextPage() {
      this.currentPage++;
    },

    previousPage() {
      this.currentPage--;
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
