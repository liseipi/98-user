export interface CommandList {
  uid: string;
  cmd: string;
  createTime: string;
  devCode: string;
  processTime: string;
  result: string;
  revoke: string;
}

export interface CommandQueue {
  count: number;
  list: CommandList[];
}