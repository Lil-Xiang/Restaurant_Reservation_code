import { defineStore } from "pinia";
import { ref } from "vue";
import { type RecruitPeople } from "../views/RecruitPeopel/type";

export const useRecruit = defineStore("recruit", () => {
  const recruitPeople = ref<RecruitPeople[]>([
    {
      id: 1,
      jobTitle: "外場服務生",
      workContent: [
        "負責跑單、擺盤、送餐及聯繫內外場之工作。",
        "負責客人點餐等工作。",
        "於客人用餐完畢後，負責收拾碗盤與清理環境。",
        "進行簡易餐飲之料理。",
        "負責結帳、收銀之工作。",
      ],
      numOfPeopleNeed: 4,
      place: "高雄市前金區",
      salary: "面議",
      experience: "不拘",
    },
    {
      id: 2,
      jobTitle: "廚師",
      workContent: [
        "負責煮（午餐及晚餐）。",
        "準備隔日（午餐及晚餐）食材。",
        "盤點廚房固定食材及所需用品。",
        "保持所有食材的適當存量。",
        "控制所有食材的分配量及控制成本。",
      ],
      numOfPeopleNeed: 3,
      place: "高雄市前金區",
      salary: "面議",
      experience: "不拘",
    },
    {
      id: 3,
      jobTitle: "會計專員",
      workContent: [
        "審核各項費用支付之發票、單據及帳務處理。",
        "處理廠商貨款或費用等應付款項帳務。",
        "處理客戶應收款項帳務。",
        "定期編製公司帳務報表，及其他財務分析資料等。",
        "負營業稅申報作業及調節表、各類所得扣繳申報作業。",
      ],
      numOfPeopleNeed: 1,
      place: "高雄市前金區",
      salary: "面議",
      experience: "具會計師/記帳事務所經驗者佳",
    },
  ]);

  return { recruitPeople };
});
