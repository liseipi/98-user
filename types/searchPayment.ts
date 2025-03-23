export interface MonthOrderList {
    id: number;
    charging_time: string;
    pay_status: number;
}

export interface PaymentData {
  rommname: string;
  arrearsamount: string;
  defaultamount: string;
  totalamount: string;
  arrearscount: string;
  list: MonthOrderList[];
}