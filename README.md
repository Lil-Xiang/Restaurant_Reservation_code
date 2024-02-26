# restaurant_reservation

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
# restaurant_reservation
## 前台需求
- 介紹Home
    - 餐廳介紹
        - 圖片
        - 簡單介紹
- 菜單Menu
    - 照片
    - 餐點名
    - 價錢
    - hover: 內容物
- 活動Activity
    - 活動照片
    - 活動名稱
    - 活動內容
- 訂位Reserve
    - 上方: 訂位者選擇日期資訊
    - 中間: 訂位者選擇想要的座位
    - 下方: 填選用餐人數,用餐日期,用餐時間
- 訂位確認ReserveCheck
    - 表單
        - 姓名
        - 電話
        - 信箱
    - 提交Button
- 徵才RecruitPeopel
    - 職位名稱
    - 職位內容
    - 職位人數
    - 職位薪資
    - 職位位置
    - 職位經驗
    
## 後台需求(待開發)
- 可看到訂位資訊
    - 表單欄位
        - id,numOfPeople,time,name,phone,email,purpose,remark,isCheck
    - 可列印出搜尋日期內的訂位pdf

- 使用技術
    - Vue3
    - TypeScript
    - Vue Router
    - Pinia
    - Vite
    - Vitest
    - element-plus
    - element-plus/icons
    - Tailwind CSS# restaurant_reservation_code
