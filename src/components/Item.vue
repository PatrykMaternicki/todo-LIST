<template>
  <v-card>
    <template v-slot:title>
      {{ item.title }}
    </template>
    <template v-if="edited" v-slot:text>
      <v-text-field label="Edit text" variant="underlined" v-model="text" />
      <v-btn
        variant="text"
        color="teal-accent-4"
        :disabled="text === item.title"
        @click="handleSave"
      >
        Save
      </v-btn>
    </template>
    <v-card-actions>
      <v-btn
        variant="text"
        color="teal-accent-4"
        @click="todoListStore.update(item.id)"
      >
        Complete/Delete
      </v-btn>
      <v-btn variant="text" color="teal-accent-4" @click="edited = !edited">
        Edit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
import type { Item } from "@/types/item";
import { useTodoListStore } from "@/stores/todoList";
import { ref } from "vue";
const todoListStore = useTodoListStore();
const props = defineProps<{ item: Item }>();
const text = ref(props.item.title);
const edited = ref(false);
const handleSave = () => {
    todoListStore.edit(props.item.id, text.value)
    edited.value = false;
}
</script>
