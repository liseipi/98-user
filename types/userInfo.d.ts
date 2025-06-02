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
    id: number;
    company_id?: any;
    openid: string;
    wxname: string;
    charging_time: string;
    transaction_id: string;
    out_trade_no: string;
    user_code: string;
    name: string;
    money: number;
    time: string;
    status: string;
    createtime?: any;
    updatetime?: any;
    deletetime?: any;
    weigh: number;
    admin_id: number;
    tenant_id: number;
    pay_type: string;
    pay_time: string;
    order_id: string;
    charging_time_text: string;
    status_text: string;
}

export interface PaymentData {
    count: number;
    list: PaymentDataList[];
}

export interface ReduceWaterList {
    id: string;
    reductionamount: string;
    createtime: string;
    reason: string;
    charging_time: string;
    is_del: string;
}

export interface ReduceWaterData {
    count: number;
    list: ReduceWaterList[];
}

export interface SearchWorkList {
    "id": "string",
    "createtime": "string",
    "buildingname": "string",
    "roomname": "string",
    "remark": "string",
    "applyer_mobile": "string",
    "applyer_name": "string",
    "taking_name": "string",
    "taking_mobile": "string",
    "status": 0
}

export interface SearchWorkResponse {
    count: number;
    list: SearchWorkList[];
}