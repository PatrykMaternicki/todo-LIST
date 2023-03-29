<template>
  <div :style="{ width: '60%' }">
    <v-form @submit.prevent="addNewItem" v-model="valid" ref="form">
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="title"
              :rules="rules"
              :counter="120"
              label="Title"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <div :style="{ width: '60%' }" class="ma-auto">
        <v-btn type="submit" block class="mt-2">Add</v-btn>
    </div>
    </v-form>
  </div>
</template>
<script lang="ts" setup>
import { useTodoListStore } from "@/stores/todoList";

import { ref } from "vue";
const rules = [(value: string) => (value ? true : "Title is required")];
const title = ref("");
const valid = ref(false)
const form = ref<HTMLFormElement>();
const todoListStore = useTodoListStore();
const addNewItem = () => {
  if(valid.value) {
    todoListStore.add({title: title.value, userId: 1, completed: false})
    title.value = ''
  }
}
</script>
