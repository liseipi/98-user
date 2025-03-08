export interface ResponseData<T> {
    status: string | number;
    msg: string;
    data: T;
}

export interface UploadFile {
    file_url: string
}