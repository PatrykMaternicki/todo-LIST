<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTodoListStore } from '@/stores/todoList';
import Item from '@/components/Item.vue';


const todoListStore = useTodoListStore()
const { todoList } = storeToRefs(todoListStore)
todoListStore.get();
</script>
<template>
  <v-app>
    <v-container fluid pa-0>
      <v-row align="center" justify="center" dense>
        <v-col
          cols="12"
          lg="12"
          md="12"
          class="grey lighten-2 fill-height d-flex flex-column justify-center align-center"
        >
            <Item :key="item.userId" :item="item" v-for="item in todoList">
            </Item>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
