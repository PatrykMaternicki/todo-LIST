<template>
  <v-card>
    <template v-slot:title>
      {{ item.title }}
    </template>
    <v-card-actions>
      <v-btn
        variant="text"
        color="teal-accent-4"
        @click="todoListStore.update(item.id)"
      >
        Complete/Delete
      </v-btn>
      <v-btn variant="text" color="teal-accent-4"> Edit </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
import type { Item } from "@/types/item";
import { useTodoListStore } from "@/stores/todoList";
const todoListStore = useTodoListStore();
defineProps<{ item: Item }>();
</script>
