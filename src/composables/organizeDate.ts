export const organizeDate = (date: string | Date | null): string => {
  let todayDate: Date;
  if (typeof date === "string") {
    todayDate = new Date(date);
  } else if (date instanceof Date) {
    todayDate = date;
  } else {
    todayDate = new Date();
  }
  const year = todayDate.getFullYear();
  const month = todayDate.getMonth() + 1;
  const day = todayDate.getDate();
  return `${year}-${month}-${day}`;
};
