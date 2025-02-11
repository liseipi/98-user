import {defineStore} from 'pinia'

export const accessTokenStore = defineStore('accessTokenStore', () => {
    const token = ref('');

    const setToken = (value: string) => {
        token.value = value;
    }

    const getToken = () => {
        return token.value;
    }

    return {token, setToken, getToken}

}, {
    persist: {
        storage: piniaPluginPersistedstate.localStorage(),
    },
})