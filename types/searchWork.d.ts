export interface SearchWorkItem {
  id: string;
  createtime: string;
  buildingname: string;
  roomname: string;
  remark: string;
  mobile: string;
}

export interface SearchWorkResponse {
  count: number;
  wait_count: number;
  list: SearchWorkItem[];
}