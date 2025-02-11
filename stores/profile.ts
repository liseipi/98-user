import {defineStore} from 'pinia'
import type {Profile} from "~/types/user";

export const profileStore = defineStore('profileStore', () => {
    const profile = ref<Profile>();

    const setProfile = (value: Profile) => {
        profile.value = value;
    }

    const getProfile = () => {
        return profile.value;
    }

    return {profile, setProfile, getProfile}

}, {
    persist: {
        storage: piniaPluginPersistedstate.localStorage(),
    },
})