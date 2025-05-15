import {defineStore} from 'pinia'
import {reactive} from "vue";

export const useNavigationStore = defineStore('navigation', () => {
    const state = reactive({
        isBack: false,
        from: '',
        to: ''
    })

    function setNavigation({isBack, from, to}: { isBack: boolean, from: string, to: string }) {
        state.isBack = isBack
        state.from = from
        state.to = to
    }

    return {
        state,
        setNavigation
    }
})