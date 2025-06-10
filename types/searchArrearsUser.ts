export interface ArrearsItemlist {
    charging_time: string;
    arrearsamount: number;
    defaultamount: number;
    totalamount: number;
}

export interface ArrearsList {
    building_name: string;
    room_code: string;
    usercode: string;
    rommname: string;
    name: string;
    mobile: string;
    userstatus: number;
    charging_time: string;
    total_money: string;
    penalty: string;
}

export interface ArrearsUser {
    arrearsamount: number;
    defaultamount: number;
    arrearscount: number;
    totalamount: number;
    list: ArrearsList[];
}