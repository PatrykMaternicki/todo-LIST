<template>
  <div :style="{width: '60%'}">
      <v-text-field
        label="Search by title"
        v-model="text"
        @input="($event: HTMLInputElement) => todoListStore.findBy($event.target.value)"
      />
      <div class="text-center">
          <v-btn variant="text" color="teal-accent-4 ma" @click="todoListStore.clear()">
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
</script>
