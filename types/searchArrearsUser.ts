export interface ArrearsItemlist {
    charging_time: string;
    arrearsamount: number;
    defaultamount: number;
    totalamount: number;
}

export interface ArrearsDetailslist {
    usercode: string;
    userstatus: string;
    username: string;
    usermobile: string;
    itemlist: ArrearsItemlist;
}

export interface ArrearsList {
    rommname: string;
    arrearsamount: number;
    defaultamount: number;
    totalamount: number;
    arrearscount: number;
    detailslist: ArrearsDetailslist;
}

export interface ArrearsUser {
    arrearsamount: number;
    defaultamount: number;
    arrearscount: number;
    totalamount: number;
    list: ArrearsList;
}