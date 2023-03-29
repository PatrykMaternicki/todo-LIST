import type { Item } from "@/types/item";
import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todoList: [] as Array<Item>,
    currentPage: 0,
    key: "" as string,
    text: "" as string,
    showOnPage: 5,
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
      state.pages = Math.ceil(results.length / state.showOnPage);
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

    reset() {
      this.currentPage = 0;
    },

    add(item: Omit<Item, "id">) {
      // sposob na stworzenie unikatowego id
      this.todoList.push({ ...item, id: this.todoList.length + 40 });
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
