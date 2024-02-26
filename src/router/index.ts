import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu/Menu.vue";
import Activity from "../views/Activity/Activity.vue";
import Reserve from "../views/Reserve/Reserve.vue";
import ReserveCheck from "../views/Reserve/ReserveCheck.vue";
import RecruitPeopel from "../views/RecruitPeopel/RecruitPeopel.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "餐廳首頁",
      component: Home,
    },
    {
      path: "/menu",
      name: "餐廳菜單",
      component: Menu,
    },
    {
      path: "/activity",
      name: "活動專區",
      component: Activity,
    },
    {
      path: "/reserve",
      name: "訂位頁",
      component: Reserve,
    },
    {
      path: "/reserveCheck",
      name: "訂位確認頁",
      component: ReserveCheck,
    },
    {
      path: "/recruitPeopel",
      name: "餐廳徵才",
      component: RecruitPeopel,
    },
  ],
});

export default router;
