import { defineStore } from "pinia";
import { ref } from "vue";
import { type TableDataItem } from "../views/Reserve/type";

export const useTable = defineStore("table", () => {
  const tableData = ref<TableDataItem[]>([]);

  const getTableData = () => {
    const localStorageData = localStorage.getItem("tableData");
    if (localStorageData) {
      tableData.value = JSON.parse(localStorageData);
    }
  };

  // 1:檢查tableData.value是否有該日期資料
  const checkAndUpdateTableData = (date: string) => {
    if (!tableData.value.some((item) => item.date === date)) {
      addDefaultSlots(date);
    }
  };

  // 2:新增該日期資料進tableData.value
  const addDefaultSlots = (date: string) => {
    tableData.value.push(
      {
        date: date,
        time: "12:00",
        reserved: new Array(10).fill(false),
      },
      {
        date: date,
        time: "12:45",
        reserved: new Array(10).fill(false),
      },
      {
        date: date,
        time: "13:30",
        reserved: new Array(10).fill(false),
      }
    );
    localStorage.setItem("tableData", JSON.stringify(tableData.value));
  };

  return {
    tableData,
    getTableData,
    checkAndUpdateTableData,
  };
});
