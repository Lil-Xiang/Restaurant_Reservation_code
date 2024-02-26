<script setup lang="ts">
import { type RecruitPeople } from '../type'

const props = defineProps<{ boxData: RecruitPeople[] }>();

const { boxData } = props;
</script>

<template>
 <div v-for="data in boxData" :key=data.id
  class="flex border-2 border-solid h-60 border-sky-500 max-lg:flex-col max-lg:h-96">
  <div class="flex flex-col w-2/3 h-full pl-5 max-lg:w-full">
   <span class="py-5 text-2xl font-semibold max-lg:py-2">{{ data.jobTitle }}</span>
   <span v-for="(workData, index) in data.workContent" :key=index class="flex flex-col gap-2 text-lg">
    {{ index + 1 }}.{{ workData }}
   </span>
  </div>
  <div class="flex flex-col w-1/3 gap-2 pt-16 text-lg max-lg:pt-0 max-lg:w-full max-lg:pl-5">
   <span>人數需求:{{ data.numOfPeopleNeed }}</span>
   <span>位置:{{ data.place }}</span>
   <span>薪資:{{ data.salary }}</span>
   <span>經驗:{{ data.experience }}</span>
  </div>
 </div>
</template>