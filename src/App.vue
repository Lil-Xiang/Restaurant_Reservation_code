<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const isCollapse = ref(true)
const asideData = [
  {
    id: "1",
    path: "/",
    egName: "Home",
    chName: "關於喬伊"
  },
  {
    id: "2",
    path: "/menu",
    egName: "Menu",
    chName: "喬伊菜單"
  },
  {
    id: "3",
    path: "/activity",
    egName: "Activity",
    chName: "活動/會員專區"
  },
  {
    id: "4",
    path: "/reserve",
    egName: "Reserve",
    chName: "喬伊訂位"
  },
  {
    id: "5",
    path: "/recruitPeopel",
    egName: "RecruitPeopel",
    chName: "喬伊徵才"
  },
]
</script>

<template>
  <el-container class="h-screen overflow-hidden">
    <el-aside :width="isCollapse ? '200px' : '65px'"
      class="flex flex-col items-center justify-between py-2 h-dvh bg-sky-900">
      <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="!isCollapse">
        <el-menu-item index="1">
          <img class="object-contain w-16 h-16" src="../public/images/logo.png" alt="Logo">
          <template #title>
            <div class="flex items-center w-full text-xl font-semibold text-yellow-600">
              <span>喬伊健康餐</span>
            </div>
          </template>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon style="color: #000000;">
            <House />
          </el-icon>
          <template #title>
            <RouterLink class="flex items-center w-full pl-4" to="/">
              <div class="flex flex-col text-yellow-600">
                <span class="text-base">Home</span>
                <span class="text-lg">關於喬伊</span>
              </div>
            </RouterLink>
          </template>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon style="color: #000000;">
            <Memo />
          </el-icon>
          <template #title>
            <RouterLink class="flex items-center w-full pl-4" to="/menu">
              <div class="flex flex-col text-yellow-600">
                <span class="text-base">Menu</span>
                <span class="text-lg">喬伊菜單</span>
              </div>
            </RouterLink>
          </template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon style="color: #000000;"><Grid /></el-icon>
          <template #title>
            <RouterLink class="flex items-center w-full pl-4" to="/activity">
              <div class="flex flex-col text-yellow-600">
                <span class="text-base">Activity</span>
                <span class="text-lg">活動</span>
              </div>
            </RouterLink>
          </template>
        </el-menu-item>
        <el-menu-item index="5">
          <el-icon style="color: #000000;">
            <DataBoard />
          </el-icon>
          <template #title>
            <RouterLink class="flex items-center w-full pl-4" to="/reserve">
              <div class="flex flex-col text-yellow-600">
                <span class="text-base">Reserve</span>
                <span class="text-lg">喬伊訂位</span>
              </div>
            </RouterLink>
          </template>
        </el-menu-item>
        <el-menu-item index="6">
          <el-icon style="color: #000000;">
            <Briefcase />
          </el-icon>
          <template #title>
            <RouterLink class="flex items-center w-full pl-4" to="/recruitPeopel">
              <div class="flex flex-col text-yellow-600">
                <span class="text-base">RecruitPeopel</span>
                <span class="text-lg">喬伊徵才</span>
              </div>
            </RouterLink>
          </template>
        </el-menu-item>
      </el-menu>
      <div v-if="isCollapse" class="flex flex-col text-yellow-600">
        <span>@2024 create by Joey</span>
      </div>
    </el-aside>

    <el-container class="overflow-auto ">
      <el-header class="flex items-center justify-between gap-5 pr-20 h-14">
        <div>
          <el-radio-group v-model="isCollapse">
            <el-icon v-if="isCollapse" @click="isCollapse = false" :size="35" color="#2a598a"
              style="vertical-align: middle">
              <Expand />
            </el-icon>
            <el-icon v-if="!isCollapse" @click="isCollapse = true" :size="35" color="#2a598a"
              style="vertical-align: middle">
              <Fold />
            </el-icon>
          </el-radio-group>
        </div>
        <div>
          <el-button circle size="large">
            <el-icon :size="35" color="#2a598a" style="vertical-align: middle">
              <LocationFilled />
            </el-icon>
          </el-button>
          <el-button circle size="large">
            <el-icon :size="35" color="#2a598a" style="vertical-align: middle">
              <Phone />
            </el-icon>
          </el-button>
        </div>
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100dvh;
  width: 200px;
  min-height: 400px;
  background-color: rgb(12 74 110);
}
.el-menu-vertical-demo {
  height: 100dvh;
  background-color: rgb(12 74 110);
}
</style>