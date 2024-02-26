import { ElMessage } from "element-plus";

export const messagePopup = (text: string, type: string): void => {
  // text: 顯示的文字
  // type: ''是普通, success是成功, warning是警語, error是錯誤or失敗
  ElMessage({
    showClose: true,
    message: text,
    type: type as any,
  });
};
