<script setup lang="ts">
import ActivityBox from './component/ActivityBox.vue'
import PageTitle from '../../components/PageTitle.vue'

import { useActivity } from '../../stores/activity'

const activityStore = useActivity()
</script>

<template>
 <PageTitle :titleText="'活動'"/>
 <div class="grid grid-cols-3 gap-10 max-xl:grid-cols-2 max-lg:grid-cols-1">
  <ActivityBox :boxData="activityStore.activityData" />
 </div>
</template>