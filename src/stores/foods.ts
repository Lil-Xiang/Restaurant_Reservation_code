import { defineStore } from "pinia";
import { ref } from "vue";
import { type Food } from "../views/Menu/type";

import food1 from "/images/food-1.jpg";
import food2 from "/images/food-2.jpg";
import food3 from "/images/food-3.jpg";
import food4 from "/images/food-4.jpg";
import food5 from "/images/food-5.jpg";
import food6 from "/images/food-6.jpg";
import food7 from "/images/food-7.jpg";
import food8 from "/images/food-8.jpg";
import food9 from "/images/food-9.jpg";

export const useFoods = defineStore("foods", () => {
  const foodData = ref<Food[]>([
    {
      id: 1,
      foodName: "菇菇炒蛋",
      foodPrice: 70,
      foodDescribe: "雞蛋,香菇",
      foodImages: food1,
    },
    {
      id: 2,
      foodName: "鮮蝦蔬食",
      foodPrice: 150,
      foodDescribe: "鮮蝦,飯,節瓜,花椰菜",
      foodImages: food2,
    },
    {
      id: 3,
      foodName: "雞肉蔬食",
      foodPrice: 180,
      foodDescribe: "花椰菜,雞肉,飯",
      foodImages: food3,
    },
    {
      id: 4,
      foodName: "牛肉蔬食",
      foodPrice: 200,
      foodDescribe: "花椰菜,牛肉,雞蛋",
      foodImages: food4,
    },
    {
      id: 5,
      foodName: "鮮蝦綜合拼盤",
      foodPrice: 210,
      foodDescribe: "鮮蝦,酪梨,青椒,番茄",
      foodImages: food5,
    },
    {
      id: 6,
      foodName: "雞肉綜合拼盤",
      foodPrice: 220,
      foodDescribe: "雞肉,酪梨,義大利麵",
      foodImages: food6,
    },
    {
      id: 7,
      foodName: "沙拉餐1號",
      foodPrice: 110,
      foodDescribe: "花椰菜,紅羅波",
      foodImages: food7,
    },
    {
      id: 8,
      foodName: "沙拉餐2號",
      foodPrice: 110,
      foodDescribe: "番茄,酪梨,青椒,玉米",
      foodImages: food8,
    },
    {
      id: 9,
      foodName: "堅果拼盤",
      foodPrice: 70,
      foodDescribe: "腰果,杏仁,核桃",
      foodImages: food9,
    },
  ]);

  return { foodData };
});
