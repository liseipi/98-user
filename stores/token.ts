import {defineStore} from 'pinia'

export const tokenStore = defineStore('token', () => {
    // const assageToken = ref(''); //用户token - 未用到
    const key = ref(''); // 企业key
    // const openid = ref(''); //用户token - 未用到

    // const setAssageToken = (value: string) => {
    //     assageToken.value = value;
    // }
    // const getAssageToken = () => {
    //     return assageToken.value;
    // }

    const setKey = (value: string) => {
        key.value = value;
    }
    const getKey = () => {
        return key.value;
    }

    // const setOpenid = (value: string) => {
    //     openid.value = value;
    // }
    // const getOpenid = () => {
    //     return openid.value;
    // }

    return {
        // assageToken, setAssageToken, getAssageToken
        key, setKey, getKey,
        // openid, setOpenid, getOpenid,
    }

}, {
    persist: {
        storage: piniaPluginPersistedstate.localStorage(),
    },
})