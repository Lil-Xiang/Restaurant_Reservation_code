<script setup lang="ts">
import { type Food } from '../type'

const props = defineProps<{ boxData: Food[] }>();

const { boxData } = props;
</script>

<template>
 <div v-for="data in boxData" :key=data.id class="relative flex h-64 border-2 border-solid w-80 border-sky-500">
  <div class="w-1/2">
   <img class="object-cover object-center h-full" :src=data.foodImages :alt=data.foodName>
  </div>
  <div class="flex flex-col items-center justify-center w-1/2 h-full gap-5">
   <span class="text-2xl font-bold">{{ data.foodName }}</span>
   <span class="text-xl font-semibold">${{ data.foodPrice }}</span>
  </div>
  <div class="absolute grid h-64 opacity-0 place-items-center hover:bg-gray-200 w-80 hover:opacity-100">
   <span class="text-2xl font-bold">{{ data.foodDescribe }}</span>
  </div>
 </div>
</template>