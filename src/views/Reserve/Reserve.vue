<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTable } from "../../stores/table";
import { useReserve } from "../../stores/reserve";

import { organizeDate } from '../../composables/organizeDate'

import PageTitle from '../../components/PageTitle.vue'

const tableStore = useTable();
const reserveStore = useReserve();

tableStore.getTableData()

const selectNumOfPeople = ref([
   { label: '1人', value: 1 },
   { label: '2人', value: 2 },
   { label: '3人', value: 3 },
   { label: '4人', value: 4 },
   { label: '5人', value: 5 },
   { label: '6人', value: 6 },
   { label: '7人', value: 7 },
   { label: '8人', value: 8 }
]);

const formattedDate = computed(() => {
   reserveStore.reserveData.date = organizeDate(reserveStore.reserveData.date);
   tableStore.checkAndUpdateTableData(reserveStore.reserveData.date);
   return reserveStore.reserveData.date;
})

// 依據是否已訂位來顯示按鈕內的文字
const getButtonText = (date: string, time: string, index: number, text: string): string => {
   const tableItem = tableStore.tableData.find(item => item.date === date && item.time === time);
   if (tableItem) {
      return tableItem.reserved[index] ? `${text}人座已訂位` : `${text}人座未訂位`;
   } else {
      return '獲取資料...';
   }
};
// 依據是否已訂位來顯示背景顏色
const getTableReserverState = (date: string, time: string, index: number): boolean => {
   const tableItem = tableStore.tableData.find(item => item.date === date && item.time === time);
   if (tableItem) {
      return tableItem.reserved[index];
   } else {
      return false;
   }
};

// 依據是否已訂位來顯示tooltip裡的字
const getTooltipContent = (table: string, date: string, time: string, index: number): string => {
   const tableItem = tableStore.tableData.find(item => item.date === date && item.time === time);
   if (tableItem) {
      return tableItem.reserved[index] ? `${table}-已訂位` : `${table}-未訂位`;
   } else {
      return '獲取資料...';
   }
};
</script>

<template>
   <PageTitle :titleText="'訂位'" />
   <div class="flex flex-col gap-5">
      <div>
         <h3 class="text-xl">您選的用餐日期&時間 : {{ formattedDate }}_{{ reserveStore.reserveData.time }}</h3>
         <h4 class="text-lg"></h4>
         <!--位置視意圖-->
         <div class="tooltip-base-box">
            <el-tooltip class="w-20 h-20" effect="dark"
               :content="getTooltipContent('T1', reserveStore.reserveData.date, reserveStore.reserveData.time, 0)"
               placement="bottom">
               <el-button type="primary"
                  :disabled="getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 0)"
                  @click="reserveStore.sendReserveData(8, 0)"
                  :class="{ 'text-black': !getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 0), 'bg-red-500': getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 0) }"
                  class="h-44 w-28">{{
                     getButtonText(reserveStore.reserveData.date, reserveStore.reserveData.time, 0, '八')
                  }}</el-button>
            </el-tooltip>
            <el-tooltip class="w-20 h-20" effect="dark"
               :content="getTooltipContent('T2', reserveStore.reserveData.date, reserveStore.reserveData.time, 1)"
               placement="bottom">
               <el-button type="primary"
                  :disabled="getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 1)"
                  @click="reserveStore.sendReserveData(8, 1)"
                  :class="{ 'text-black': !getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 1), 'bg-red-500': getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 1) }"
                  class=" h-44 w-28">{{
                     getButtonText(reserveStore.reserveData.date, reserveStore.reserveData.time, 1, '八')
                  }}</el-button>
            </el-tooltip>

            <div class="flex flex-col items-center gap-4">
               <el-tooltip class="w-20 h-20" effect="dark"
                  :content="getTooltipContent('T3', reserveStore.reserveData.date, reserveStore.reserveData.time, 2)"
                  placement="top">
                  <el-button type="primary"
                     :disabled="getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 2)"
                     @click="reserveStore.sendReserveData(4, 2)"
                     :class="{ 'text-black': !getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 2), 'bg-red-500': getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 2) }"
                     class="w-32 h-20">{{
                        getButtonText(reserveStore.reserveData.date, reserveStore.reserveData.time, 2, '四')
                     }}</el-button>
               </el-tooltip>
               <el-tooltip class="w-20 h-20" effect="dark"
                  :content="getTooltipContent('T4', reserveStore.reserveData.date, reserveStore.reserveData.time, 3)"
                  placement="bottom">
                  <el-button type="primary"
                     :disabled="getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 3)"
                     @click="reserveStore.sendReserveData(4, 3)"
                     :class="{ 'text-black': !getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 3), 'bg-red-500': getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 3) }"
                     class="w-32 h-20">{{
                        getButtonText(reserveStore.reserveData.date, reserveStore.reserveData.time, 3, '四')
                     }}</el-button>
               </el-tooltip>
            </div>
            <div class="flex flex-col items-center gap-4">
               <el-tooltip class="w-20 h-20" effect="dark"
                  :content="getTooltipContent('T5', reserveStore.reserveData.date, reserveStore.reserveData.time, 4)"
                  placement="top">
                  <el-button type="primary"
                     :disabled="getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 4)"
                     @click="reserveStore.sendReserveData(4, 4)"
                     :class="{ 'text-black': !getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 4), 'bg-red-500': getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 4) }"
                     class="w-32 h-20">{{
                        getButtonText(reserveStore.reserveData.date, reserveStore.reserveData.time, 4, '四')
                     }}</el-button>
               </el-tooltip>
               <el-tooltip class="w-20 h-20" effect="dark"
                  :content="getTooltipContent('T6', reserveStore.reserveData.date, reserveStore.reserveData.time, 5)"
                  placement="bottom">
                  <el-button type="primary"
                     :disabled="getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 5)"
                     @click="reserveStore.sendReserveData(4, 5)"
                     :class="{ 'text-black': !getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 5), 'bg-red-500': getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 5) }"
                     class="w-32 h-20">{{
                        getButtonText(reserveStore.reserveData.date, reserveStore.reserveData.time, 5, '四')
                     }}</el-button>
               </el-tooltip>
            </div>
            <div class="flex flex-col items-center gap-4">
               <el-tooltip class="w-20 h-20" effect="dark"
                  :content="getTooltipContent('T7', reserveStore.reserveData.date, reserveStore.reserveData.time, 6)"
                  placement="top">
                  <el-button type="primary"
                     :disabled="getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 6)"
                     @click="reserveStore.sendReserveData(2, 6)"
                     :class="{ 'text-black': !getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 6), 'bg-red-500': getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 6) }"
                     class="w-24 h-20 ">{{
                        getButtonText(reserveStore.reserveData.date, reserveStore.reserveData.time, 6, '二')
                     }}</el-button>
               </el-tooltip>
               <el-tooltip class="w-20 h-20" effect="dark"
                  :content="getTooltipContent('T8', reserveStore.reserveData.date, reserveStore.reserveData.time, 7)"
                  placement="bottom">
                  <el-button type="primary"
                     :disabled="getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 7)"
                     @click="reserveStore.sendReserveData(2, 7)"
                     :class="{ 'text-black': !getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 7), 'bg-red-500': getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 7) }"
                     class="w-24 h-20">{{
                        getButtonText(reserveStore.reserveData.date, reserveStore.reserveData.time, 7, '二')
                     }}</el-button>
               </el-tooltip>
            </div>
            <div class="flex flex-col items-center gap-4">
               <el-tooltip class="w-20 h-20" effect="dark"
                  :content="getTooltipContent('T9', reserveStore.reserveData.date, reserveStore.reserveData.time, 8)"
                  placement="top">
                  <el-button type="primary"
                     :disabled="getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 8)"
                     @click="reserveStore.sendReserveData(2, 8)"
                     :class="{ 'text-black': !getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 8), 'bg-red-500': getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 8) }"
                     class="w-24 h-20">{{
                        getButtonText(reserveStore.reserveData.date, reserveStore.reserveData.time, 8, '二')
                     }}</el-button>
               </el-tooltip>
               <el-tooltip class="w-20 h-20" effect="dark"
                  :content="getTooltipContent('T10', reserveStore.reserveData.date, reserveStore.reserveData.time, 9)"
                  placement="bottom">
                  <el-button type="primary"
                     :disabled="getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 9)"
                     @click="reserveStore.sendReserveData(2, 9)"
                     :class="{ 'text-black': !getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 9), 'bg-red-500': getTableReserverState(reserveStore.reserveData.date, reserveStore.reserveData.time, 9) }"
                     class="w-24 h-20 ">{{
                        getButtonText(reserveStore.reserveData.date, reserveStore.reserveData.time, 9, '二')
                     }}</el-button>
               </el-tooltip>
            </div>
         </div>
      </div>

      <el-form-item label="選擇可用餐人數: ">
         <el-select class="w-32" v-model="reserveStore.reserveData.numOfDiners" placeholder="人數">
            <el-option v-for="num in selectNumOfPeople" :key="num.value" :label="num.label" :value="num.value" />
         </el-select>
      </el-form-item>
      <div>
         <span>選擇用餐日期: </span>
         <el-date-picker class="ml-2" v-model="reserveStore.reserveData.date" type="date" placeholder="日期"
            size="default" />
      </div>
      <div>
         <span>選擇用餐時間: </span>
         <el-button type="primary" class="text-black bg-blue-500" @click="reserveStore.clickToChangePickTime('12:00')">{{
            reserveStore.reserveData.date
         }}_12:00</el-button>
         <el-button type="primary" class="text-black bg-blue-500" @click="reserveStore.clickToChangePickTime('12:45')">{{
            reserveStore.reserveData.date
         }}_12:45</el-button>
         <el-button type="primary" class="text-black bg-blue-500" @click="reserveStore.clickToChangePickTime('13:30')">{{
            reserveStore.reserveData.date
         }}_13:30</el-button>
      </div>
   </div>
</template>

<style scoped>
.tooltip-base-box {
   display: flex;
   width: 800px;
}
</style>