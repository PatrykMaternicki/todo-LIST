<template>
  <div>
    <v-text-field
      label="Search by title"
      v-model="text"
      @input="handleInput"
    />
    <div class="text-center">
      <v-btn
        variant="text"
        color="teal-accent-4 ma"
        @click="todoListStore.clear()"
      >
        Clear
      </v-btn>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useTodoListStore } from "@/stores/todoList";
import { storeToRefs } from "pinia";
const todoListStore = useTodoListStore();
const { text } = storeToRefs(todoListStore);

const handleInput = (event: HTMLInputElement) => {
  todoListStore.reset()
  todoListStore.findBy(event.target.value)
}
</script>
