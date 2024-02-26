<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useReserve } from "../../stores/reserve";

import { type ReserveForm } from "./type";
import type { FormInstance, FormRules } from 'element-plus'

import PageTitle from '../../components/PageTitle.vue'

const reserveStore = useReserve();
const router = useRouter()
const { numOfPeople, diningDate, diningTime, seatIndex } = router.currentRoute.value.query;

const formSize = ref('default')
const reserveFormRef = ref<FormInstance>()

// 表單正則
const rules = ref<FormRules<ReserveForm>>({
  name: [
    { required: true, message: '請輸入姓名', trigger: 'blur' },
    { min: 2, max: 6, message: '長度為2-6', trigger: 'blur' },
  ],
  phone: [
    {
      required: true,
      message: '請輸入手機',
      trigger: 'blur',
    },
    { min: 10, max: 10, message: '需輸入10碼', trigger: 'blur' },
  ],
  email: [
    {
      required: true,
      message: '請輸入信箱',
      trigger: 'blur',
    },
    {
      type: 'email',
      message: '請符合信箱格式',
      trigger: ['blur', 'change'],
    },
  ]
})
</script>

<template>
  <div class="flex items-center justify-start gap-3">
    <el-button @click="() => router.push('/reserve')">返回</el-button>
    <PageTitle :titleText="'訂位確認'" />
  </div>
  <div class="flex gap-5">
    <div class="flex flex-col justify-center w-64 gap-5 pl-5 border-2 border-solid h-52 flexflex-col border-sky-500">
      <div>
        <span class="text-xl font-bold">喬伊健康餐</span>
      </div>
      <div class="flex items-center gap-3">
        <el-icon>
          <User />
        </el-icon>
        <span>{{ numOfPeople }}</span>
      </div>
      <div class="flex items-center gap-3">
        <el-icon>
          <Calendar />
        </el-icon>
        <span>{{ diningDate }}</span>
      </div>
      <div class="flex items-center gap-3">
        <el-icon>
          <Clock />
        </el-icon>
        <span>{{ diningTime }}</span>
      </div>
    </div>
    <div class="flex items-center justify-center border-2 border-solid w-96 h-72 border-sky-500">
      <el-form class="flex flex-col gap-3" ref="reserveFormRef" :model="reserveStore.reserveForm" :rules="rules"
        label-width="120px" :size="formSize" status-icon>
        <el-form-item label="訂位者姓名" prop="name">
          <el-input v-model="reserveStore.reserveForm.name" />
        </el-form-item>
        <el-form-item label="訂位者手機" prop="phone">
          <el-input v-model="reserveStore.reserveForm.phone" />
        </el-form-item>
        <el-form-item label="訂位者信箱" prop="email">
          <el-input v-model="reserveStore.reserveForm.email" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="text-black bg-blue-500"
            @click="reserveStore.submitForm(reserveFormRef, diningDate, diningTime, seatIndex)">
            確認訂位
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>