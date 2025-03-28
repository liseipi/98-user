export interface MachineTableList {
    id: string;
    date: string;
    liters: string;
}

export interface MachineTableData {
    recentlyreading: string;
    recentlyliters: string;
    recentlytime: string;
    count: string;
    list: MachineTableList[];
}

export interface WatchDataList {
  id: number;
  createtime: string;
  reading: number;
  count: number;
  trx_duration: number;
}

export interface WatchData {
  count: number;
  totalusage: number;
  flowmeterusage: number;
  erroramount: string;
  list: WatchDataList[];
}

export interface PaymentDataList {
  transaction: string;
  charging_time: string;
  wxname: string;
  amount: string;
  paytype: string;
  paystatus: string;
  paytime: string;
}

export interface PaymentData {
  count: number;
  list: PaymentDataList[];
}