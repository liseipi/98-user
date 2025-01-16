<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="mx-[0.8rem] py-4">
      <div class="relative w-[3rem] h-[3rem] rounded-full bg-gray-200 mt-[2.65rem] mb-2 mx-auto overflow-hidden">
        <img src="@/assets/image/avatar.png" alt="avatar" class="object-cover w-full h-full"/>
      </div>
      <div class="text-[#292929] text-[0.8rem] font-bold mb-6 text-center">
        飞翔的小鸟
      </div>
      <div class="bg-white rounded py-8 px-4 grid grid-cols-3 gap-6">
        <div class="flex flex-col items-center space-y-2">
          <div class="px-3">
            <img src="@/assets/image/service_01.png" class="w-[1.8rem] h-[2rem]" alt="service">
          </div>
          <span class="text-[#626468] text-[0.65rem]">用户查询</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <div class="px-3">
            <img src="@/assets/image/service_02.png" class="w-[1.8rem] h-[2rem]" alt="service">
          </div>
          <span class="text-[#626468] text-[0.65rem]">工单明细</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <div class="px-3">
            <img src="@/assets/image/service_03.png" class="w-[1.8rem] h-[2rem]" alt="service">
          </div>
          <span class="text-[#626468] text-[0.65rem]">新增用户</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <div class="px-3">
            <img src="@/assets/image/service_04.png" class="w-[1.8rem] h-[2rem]" alt="service">
          </div>
          <span class="text-[#626468] text-[0.65rem] text-nowrap">安装智能水表</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <div class="px-3">
            <img src="@/assets/image/service_05.png" class="w-[1.8rem] h-[2rem]" alt="service">
          </div>
          <span class="text-[#626468] text-[0.65rem] text-nowrap">更换机械水表</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <div class="px-3">
            <img src="@/assets/image/service_06.png" class="w-[1.8rem] h-[2rem]" alt="service">
          </div>
          <span class="text-[#626468] text-[0.65rem] text-nowrap">设备状态查询</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <div class="px-3">
            <img src="@/assets/image/service_07.png" class="w-[1.8rem] h-[2rem]" alt="service">
          </div>
          <span class="text-[#626468] text-[0.65rem] text-nowrap">欠费用户查询</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <div class="px-3">
            <img src="@/assets/image/service_08.png" class="w-[1.8rem] h-[2rem]" alt="service">
          </div>
          <span class="text-[#626468] text-[0.65rem]">指令队列</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <div class="px-3">
            <img src="@/assets/image/service_09.png" class="w-[1.8rem] h-[2rem]" alt="service">
          </div>
          <span class="text-[#626468] text-[0.65rem]">创建工单</span>
        </div>
      </div>
    </div>

    <div class="h-[1rem]"></div>

  </div>
</template>

<style scoped>
.container {
  background-image: url("@/assets/image/head_bj.png");
  background-color: #f0f5f8;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>