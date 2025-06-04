import type {ResponseData} from "~/types/global";
import {tokenStore} from "~/stores/token";

export const useRequest = <T>(url: string, opts?: UseFetchoptions) => {
    const config = useRuntimeConfig()
    const key = tokenStore().getKey();

    const defaultOptions: UseFetch0ptions = {
        // baseURL: process.env.NODE_ENV === 'development' ? '' : '', //production or development
        baseURL: config.public.baseURL,
        onRequest({options}: { options: any }) {
            options.headers = {
                ...options.headers,
                // Authorization: `Bearer ${accessToken}`, //测试，没有用到
            }
            options.params = {
                ...options.params,
            }
            options.query = {
                ...options.query,
                key: key,
            }
            if (process.env.NODE_ENV === 'development') {
                options.query = {
                    ...options.query,
                    debug: 1
                };
            }
        },
        onResponse({response}: { response: any }) {

        },
        onResponseError({response}: { response: any }) {

        }
    }

    return new Promise<ResponseData<T>>((resolve, reject) => {
        //useFetch / $fetch
        $fetch(url, Object.assign(defaultOptions, opts)).then((res) => {
            //useFetch
            //resolve(res.data.value as ResponseData<T>);

            //$fetch
            resolve(res as ResponseData<T>);
        }).catch((err) => {
            reject(err);
        });
    })
}