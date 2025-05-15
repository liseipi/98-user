// middleware/navigation.global.ts
import {useNavigationStore} from "~/stores/navigation";

export default defineNuxtRouteMiddleware((to, from) => {
    const navigationStore = useNavigationStore()

    // 判断是否后退
    // const isBackNavigation = from.path !== to.path && from.path.split('/').length > to.path.split('/').length
    const isBackNavigation = from.path !== to.path && from.path !== '/'
    // const isBackNavigation = typeof window !== 'undefined' && window.history.state?.back !== null

    // 更新导航状态
    navigationStore.setNavigation({
        isBack: isBackNavigation,
        from: from.path,
        to: to.path
    })

    // definePageMeta({
    //     keepalive: isBackNavigation // 后退时启用缓存，新加载时禁用
    // })

    // if (isBackNavigation) {
    //     console.log(`来自返回的: ${from.path}`)
    // } else {
    //     // 非返回导航（直接访问、刷新、前往子页面）
    //     console.log(`直接进入的: ${to.path}, resetting state`)
    // }
})