import type {ResponseData} from "~/types/global";

export const useRequest = <T>(url: string, opts?: UseFetchoptions) => {
    const config = useRuntimeConfig()
    const openid = useCookie('openid')
    // const accessToken = useCookie('accessToken');

    const defaultOptions: UseFetch0ptions = {
        // baseURL: process.env.NODE_ENV === 'development' ? '' : '', //production or development
        baseURL: config.public.baseURL,
        onRequest({options}: { options: any }) {
            options.headers = {
                ...options.headers,
                // Authorization: `Bearer ${accessToken}`,
            }
            options.params = {
                ...options.params,
                // openid: openid.value,
            }
            options.query = {...options.query}
            if (process.env.NODE_ENV === 'development') {
                options.query = {
                    ...options.query,
                    openid: openid.value,
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
        useFetch(url, Object.assign(defaultOptions, opts)).then((res) => {
            resolve(res.data.value as ResponseData<T>);
        }).catch((err) => {
            reject(err);
        });
    })
}