import { defineStore } from "pinia";
import { ref } from "vue";
import { type Activity } from "../views/Activity/type";

import bg1 from "/images/bg-1.jpg";
import bg2 from "/images/bg-2.jpg";
import bg3 from "/images/bg-3.jpg";

export const useActivity = defineStore("activity", () => {
  const activityData = ref<Activity[]>([
    {
      id: 1,
      activityName: "情人節",
      activityItem: "攜伴來用餐第二位半價",
      activityImages: bg1,
    },
    {
      id: 2,
      activityName: "雙10",
      activityItem: "點主餐送1份點心",
      activityImages: bg2,
    },
    {
      id: 3,
      activityName: "雙11",
      activityItem: "餐點買一送一",
      activityImages: bg3,
    },
    {
      id: 4,
      activityName: "聖誕節",
      activityItem: "穿著聖誕相關衣著或裝飾,打八折",
      activityImages: bg1,
    },
  ]);

  return { activityData };
});
