export interface ResponseData<T> {
    status: string;
    msg: string;
    data: T;
}