<template>
  <v-toolbar>
    <v-toolbar-title>TodoList</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-switch
      @click="appStore.toggleDarkMode()"
      :label="toggleText"
      v-model="dark"
      class="d-flex justify-end mr-4"
    >
    </v-switch>
  </v-toolbar>
</template>
<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import { storeToRefs } from "pinia";
import { computed } from "vue";
const appStore = useAppStore();
const { dark } = storeToRefs(appStore);
const toggleText = computed(() => (dark.value ? "Light" : "Dark"));
</script>
