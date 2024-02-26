<script setup lang="ts">
import { useRecruit } from "../../stores/recruit";

import PageTitle from '../../components/PageTitle.vue'
import RecruitBox from './component/RecruitBox.vue'

const recruitStore = useRecruit();
</script>

<template>
 <PageTitle :titleText="'徵才'" />
 <div class="flex flex-col gap-5 px-40 max-xl:px-20 max-lg:px-0">
  <RecruitBox :boxData="recruitStore.recruitPeople" />
 </div>
</template>