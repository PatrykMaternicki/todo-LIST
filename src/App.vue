<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTodoListStore } from "@/stores/todoList";
import Item from "@/components/Item.vue";
import Searchbar from "@/components/Searchbar.vue";
import Arrows from "@/components/Arrows.vue";
import Form from "@/components/Form.vue";
import DarkMode from "@/components/DarkMode.vue";
import { useAppStore } from "@/stores/app";

const appStore = useAppStore();
const { getList } = storeToRefs(useTodoListStore());
const { dark } = storeToRefs(appStore);
todoListStore.get();
</script>
<template>
  <v-app :theme="dark ? 'dark' : 'light'">
    <DarkMode />
    <v-container fluid pa-0>
      <v-row align="center" justify="center" dense>
        <v-col
          cols="12"
          lg="12"
          md="12"
          class="grey lighten-2 fill-height d-flex flex-column justify-center align-center"
        >
          <div class="mt-2" :style="{ width: '60%' }">
            <Searchbar />
            <Form />
            <Arrows class="mb-3 mt-3" />
            <Item
              class="mt-3 mb-3"
              :key="item.userId"
              :item="item"
              v-for="item in getList"
            />
          </div>
          <Arrows />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
