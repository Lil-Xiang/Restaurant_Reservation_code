import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

import type { FormInstance } from "element-plus";
import { type ReserveData, type ReserveForm } from "../views/Reserve/type";

import { organizeDate } from "../composables/organizeDate";
import { messagePopup } from "../composables/messageDefault";

export const useReserve = defineStore("reserve", () => {
  const router = useRouter();

  // 訂位者訂位資料資料
  const reserveData = ref<ReserveData>({
    date: organizeDate(null),
    time: "12:00",
    seatNumber: "",
    numOfDiners: 0,
  });
  
  // 訂位者表單資料資料
  const reserveForm = ref<ReserveForm>({
    name: "",
    phone: "",
    email: "",
  });

  //切換用餐時間
  const clickToChangePickTime = (time: string) => {
    reserveData.value.time = time;
  };

  // 傳送去確認訂位頁面
  const sendReserveData = (numOfSeat: number, seatIndex: number) => {
    if (reserveData.value.time === "") {
      messagePopup("請選擇用餐時間", "warning");
    }
    if (
      reserveData.value.numOfDiners === undefined ||
      reserveData.value.numOfDiners === 0
    ) {
      messagePopup("請選擇用餐人數", "warning");
    } else if (reserveData.value.numOfDiners > numOfSeat) {
      messagePopup("用餐人數已超過座位人數", "warning");
    } else {
      router.push({
        path: "/reserveCheck",
        query: {
          numOfPeople: reserveData.value.numOfDiners,
          diningDate: reserveData.value.date,
          diningTime: reserveData.value.time,
          seatIndex: seatIndex,
        },
      });
    }
  };

  //送出訂位者表單
  const submitForm = async (
    formEl: FormInstance | undefined,
    diningDate: any,
    diningTime: any,
    seatIndex: any
  ) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
      if (valid) {
        let tableData = upDateTableData(diningDate, diningTime, seatIndex);
        if (tableData) {
          messagePopup("訂位成功", "success");
          router.push({ path: "/reserve" });
        } else {
          messagePopup("訂位失敗", "error");
        }
      } else {
        messagePopup("請檢察表單是否正確填寫", "warning");
      }
    });
  };

  // 把訂位者要定的位置改成true
  const upDateTableData = (
    diningDate: any,
    diningTime: any,
    seatIndex: any
  ) => {
    const localTableDataString = localStorage.getItem("tableData");
    let localTableData = null;
    if (localTableDataString !== null) {
      localTableData = JSON.parse(localTableDataString);
    }
    const matchingReservation = localTableData.find(
      (item: any) => item.date === diningDate && item.time === diningTime
    );
    if (matchingReservation) {
      matchingReservation.reserved[seatIndex] = true;
      localStorage.setItem("tableData", JSON.stringify(localTableData));
      return true;
    } else {
      return false;
    }
  };

  return {
    reserveData,
    reserveForm,
    clickToChangePickTime,
    sendReserveData,
    submitForm,
  };
});
