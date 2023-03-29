<template>
    <v-card>
        <template v-slot:title>
          {{ item.title }}
      </template>
    </v-card>
</template>
<script setup lang="ts">
import type { Item } from '@/types/item';

defineProps<{item: Item}>();

</script>