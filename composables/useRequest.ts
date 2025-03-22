import type {ResponseData} from "~/types/global";

export const useRequest = <T>(url: string, opts?: UseFetchoptions) => {
    const config = useRuntimeConfig()
    const key = useCookie('key')
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
            }
            options.query = {
                ...options.query,
                key: key.value,
                // openid: openid.value
            }
            if (process.env.NODE_ENV === 'development') {
                options.query = {
                    ...options.query,
                    openid: 'o-WGWwvPt3UuObAMB7iJaAxt6SGY',
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