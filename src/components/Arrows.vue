<template>
  <div class="d-flex justify-center">
    <v-btn
      :disabled="hasLeftArrowDisabled"
      icon="mdi-arrow-left"
      size="small"
      @click="todoListStore.previousPage()"
    />
    <p>{{ currentPage }} in {{ pages }}</p>
    <v-btn
      :disabled="hasRightArrowDisabled"
      icon="mdi-arrow-right"
      size="small"
      class="ml-4"
      @click="todoListStore.nextPage()"
    />
  </div>
</template>
<script lang="ts" setup>
import { useTodoListStore } from "@/stores/todoList";
import { storeToRefs } from "pinia";
import { computed } from "vue";
const todoListStore = useTodoListStore();
const { currentPage, pages } = storeToRefs(todoListStore);
const hasLeftArrowDisabled = computed(() => currentPage.value === 0);
const hasRightArrowDisabled = computed(() => currentPage.value === pages.value);
</script>
