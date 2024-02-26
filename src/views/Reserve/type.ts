export interface TableDataItem {
  date: string;
  time: string;
  reserved: boolean[];
}

export interface ReserveData {
  date: string;
  time: string;
  seatNumber: string;
  numOfDiners: number;
}

export interface ReserveForm {
  name: string;
  phone: string;
  email: string;
}
