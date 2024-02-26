<script setup lang="ts">
import PageTitle from '../../components/PageTitle.vue'
import MenuBox from './component/MenuBox.vue'

import { useFoods } from '../../stores/foods'

const foodsStore = useFoods()
</script>

<template>
 <PageTitle :titleText="'菜單'" />
 <div class="grid grid-cols-3 gap-10 max-xl:grid-cols-2 max-lg:grid-cols-1">
  <MenuBox :boxData="foodsStore.foodData" />
 </div>
</template>