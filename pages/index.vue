<script setup lang="ts">
import {profileStore} from "~/stores/profile";
import type {Profile} from "~/types/user";

let user = ref<Profile | null>();

const getUserInfo = async () => {
  const res = await useRequest('/wxh5/staff/getIndex');
  if (res.status === 0) {
    user.value = res.data as Profile;
    profileStore().setProfile(res.data as Profile);
  }
}

onMounted(() => {
  user.value = profileStore().getProfile();
  getUserInfo();
})

</script>

<template>
  <div class="container-blue-bg">
    <div class="mx-[0.8rem] py-4">
      <div class="relative w-[3rem] h-[3rem] rounded-full bg-gray-200 mt-[2.65rem] mb-2 mx-auto overflow-hidden">
        <img :src="user?.wxheadpic" alt="avatar" class="object-cover w-full h-full"/>
      </div>
      <div class="text-[#292929] text-[0.8rem] font-bold mb-6 text-center">
        {{ user?.wxname }}
      </div>
      <div class="bg-white rounded py-8 px-4 grid grid-cols-3 gap-6">
        <NuxtLink to="/searchUser">
          <div class="flex flex-col items-center space-y-2">
            <div class="px-3">
              <img src="@/assets/image/service_01.png" class="w-[1.8rem] h-[2rem]" alt="service">
            </div>
            <span class="text-[#626468] text-[0.65rem]">用户查询</span>
          </div>
        </NuxtLink>
        <NuxtLink to="/searchWorkOrder">
          <div class="flex flex-col items-center space-y-2">
            <div class="px-3">
              <img src="@/assets/image/service_02.png" class="w-[1.8rem] h-[2rem]" alt="service">
            </div>
            <span class="text-[#626468] text-[0.65rem]">工单明细</span>
          </div>
        </NuxtLink>
        <NuxtLink to="/createAccount">
          <div class="flex flex-col items-center space-y-2">
            <div class="px-3">
              <img src="@/assets/image/service_03.png" class="w-[1.8rem] h-[2rem]" alt="service">
            </div>
            <span class="text-[#626468] text-[0.65rem]">新增用户</span>
          </div>
        </NuxtLink>
        <NuxtLink to="/installationTable">
          <div class="flex flex-col items-center space-y-2">
            <div class="px-3">
              <img src="@/assets/image/service_04.png" class="w-[1.8rem] h-[2rem]" alt="service">
            </div>
            <span class="text-[#626468] text-[0.65rem] text-nowrap">安装智能水表</span>
          </div>
        </NuxtLink>
        <NuxtLink to="/replacementTable">
          <div class="flex flex-col items-center space-y-2">
            <div class="px-3">
              <img src="@/assets/image/service_05.png" class="w-[1.8rem] h-[2rem]" alt="service">
            </div>
            <span class="text-[#626468] text-[0.65rem] text-nowrap">更换机械水表</span>
          </div>
        </NuxtLink>
        <NuxtLink to="/searchDeviceStatus">
          <div class="flex flex-col items-center space-y-2">
            <div class="px-3">
              <img src="@/assets/image/service_06.png" class="w-[1.8rem] h-[2rem]" alt="service">
            </div>
            <span class="text-[#626468] text-[0.65rem] text-nowrap">设备状态查询</span>
          </div>
        </NuxtLink>
        <NuxtLink to="/searchArrearsUser">
          <div class="flex flex-col items-center space-y-2">
            <div class="px-3">
              <img src="@/assets/image/service_07.png" class="w-[1.8rem] h-[2rem]" alt="service">
            </div>
            <span class="text-[#626468] text-[0.65rem] text-nowrap">欠费用户查询</span>
          </div>
        </NuxtLink>
        <NuxtLink to="/searchCommandQueue">
          <div class="flex flex-col items-center space-y-2">
            <div class="px-3">
              <img src="@/assets/image/service_08.png" class="w-[1.8rem] h-[2rem]" alt="service">
            </div>
            <span class="text-[#626468] text-[0.65rem]">指令队列</span>
          </div>
        </NuxtLink>
        <NuxtLink to="/createWorkOrder">
          <div class="flex flex-col items-center space-y-2">
            <div class="px-3">
              <img src="@/assets/image/service_09.png" class="w-[1.8rem] h-[2rem]" alt="service">
            </div>
            <span class="text-[#626468] text-[0.65rem]">创建工单</span>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div class="h-[1rem]"></div>

  </div>
</template>