<script setup lang="ts">
import { type Activity } from '../type'

const props = defineProps<{ boxData: Activity[] }>();

const { boxData } = props;
</script>

<template>
 <div v-for="data in boxData" :key=data.id class="border-2 border-solid w-72 flexflex-col h-96 border-sky-500">
  <div class="h-2/3">
   <img class="object-fill object-center w-full h-full" :src=data.activityImages :alt=data.activityName>
  </div>
  <div class="flex flex-col items-start justify-center w-full gap-2 pl-5 h-1/3">
   <span class="text-xl font-semibold">活動名稱:
    <p class="pl-3 text-base font-semibold">{{ data.activityName }}</p>
   </span>
   <span class="text-xl font-semibold">活動內容:
    <p class="pl-3 text-base font-semibold">{{ data.activityItem }}</p>
   </span>
  </div>
 </div>
</template>