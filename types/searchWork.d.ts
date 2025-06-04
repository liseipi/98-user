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

export interface ServiceStaf {
  job_num: string;
  name: string;
}

export interface WorkDetails {
  id: string;
  job_num: string;
  buildingname: string;
  roomname: string;
  dev_code: string;
  applyer_name: string;
  applyer_mobile: string;
  applyer_type: string;
  remark: string;
  taking_name: string;
  order_pic: string;
  job_remark: string;
  extension_time: string;
  status: string;
  service_staff: ServiceStaf;
}