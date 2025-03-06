export interface ResponseData<T> {
    status: string | number;
    msg: string;
    data: T;
}