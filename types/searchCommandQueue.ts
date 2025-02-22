export interface CommandList {
  id: string;
  createtime: string;
  devicecode: string;
  type: string;
  status: string;
  dealtime: string;
}

export interface CommandQueue {
  count: number;
  list: CommandList[];
}