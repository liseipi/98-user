<script setup lang="ts">

</script>

<template>
  <div class="container container-blue-bg">
    <div class="mx-[0.8rem] py-4">

      <h3 class="text-[0.7rem] text-[#292929] mt-4 mb-2">填写个人信息</h3>
      <div class="bg-white rounded p-4">
        <!-- User Information Section -->
        <div class="mb-6">
          <div class="space-y-2">
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <span class="txt-gray-7">用户编号</span>
              <span class="txt-black-7">05900000007-0364</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <span class="txt-gray-7">房号</span>
              <span class="txt-black-7">小星星倚云居张碧玲</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <span class="txt-gray-7">智能表号</span>
              <span class="txt-black-7">50425306</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <span class="txt-gray-7">阀门状态</span>
              <span class="txt-black-7">开阀</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <span class="txt-gray-7">用户</span>
              <span class="txt-black-7">模版/13422055455</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <span class="txt-gray-7">套餐</span>
              <span class="txt-black-7">请标准套餐0.5元/升/180升/超0.4元/升</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <span class="txt-gray-7">最近抄表</span>
              <span class="txt-black-7">2024-12-08 00:38:12</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <span class="txt-gray-7">最近机械</span>
              <span class="txt-black-7">146.970</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="txt-gray-7">本期机械</label>
              <div class="flex items-center text-sm">
                <span class="txt-black-7 mr-2">请输入</span>
                <button
                    class="bg-[#E3EEFF] text-[0.7rem] px-[0.57rem] text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  提交读数
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Function Section -->
      <h3 class="text-[0.7rem] text-[#292929] mt-4 mb-2">使用功能</h3>
      <div class="bg-white rounded p-4 mb-6">
        <div class="grid grid-cols-4 gap-4 text-center">
          <button class="flex flex-col items-center">
            <img src="@/assets/image/user_service_01.png" class="w-[1.8rem] h-[1.8rem]" alt="use service">
            <span class="txt-gray-7">用户编辑</span>
          </button>
          <button class="flex flex-col items-center">
            <img src="@/assets/image/user_service_02.png" class="w-[1.8rem] h-[1.8rem]" alt="use service">
            <span class="txt-gray-7">查询用水记录</span>
          </button>
          <button class="flex flex-col items-center">
            <img src="@/assets/image/user_service_03.png" class="w-[1.8rem] h-[1.8rem]" alt="use service">
            <span class="txt-gray-7">账单查询</span>
          </button>
          <button class="flex flex-col items-center">
            <img src="@/assets/image/user_service_04.png" class="w-[1.8rem] h-[1.8rem]" alt="use service">
            <span class="txt-gray-7">查询微信缴费流水</span>
          </button>
          <button class="flex flex-col items-center">
            <img src="@/assets/image/user_service_05.png" class="w-[1.8rem] h-[1.8rem]" alt="use service">
            <span class="txt-gray-7">查询工单</span>
          </button>
          <button class="flex flex-col items-center">
            <img src="@/assets/image/user_service_06.png" class="w-[1.8rem] h-[1.8rem]" alt="use service">
            <span class="txt-gray-7">机械表查询</span>
          </button>
          <button class="flex flex-col items-center">
            <img src="@/assets/image/user_service_07.png" class="w-[1.8rem] h-[1.8rem]" alt="use service">
            <span class="txt-gray-7">减免用水量</span>
          </button>
        </div>
      </div>

      <button class="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-[0.55rem] px-8 rounded w-full mb-3">
        解绑
      </button>
      <button class="bg-[#D9E9FF] hover:bg-blue-700 text-[#292929] text-[0.8rem] py-[0.55rem] px-8 rounded w-full">
        销户
      </button>

    </div>

    <div class="h-[1rem]"></div>

<!--    <div class="fixed inset-0 bg-gray-900 bg-opacity-85 flex justify-center items-center">-->
<!--      <div class="bg-white px-[1rem] py-4 rounded-lg shadow-xl max-w-md relative">-->
<!--        <div class="absolute top-2 right-2 cursor-pointer">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"-->
<!--               stroke="currentColor" class="w-6 h-6 text-gray-700">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>-->
<!--          </svg>-->
<!--        </div>-->
<!--        <h2 class="text-[0.8rem] text-[#292929] font-bold text-center py-6 flex items-center justify-center">-->
<!--          请两次确认本期机械表读数</h2>-->
<!--        <div class="flex flex-col items-center txt-black-7 space-y-2">-->
<!--          <span>533.543</span>-->
<!--          <span>偏差量：1</span>-->
<!--          <span>精度：100%</span>-->
<!--        </div>-->
<!--        <div class="flex justify-center space-x-3 mt-6 w-[14rem]">-->
<!--          <button class="flex-1 bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-[0.55rem] px-6 rounded">-->
<!--            确定-->
<!--          </button>-->
<!--          <button-->
<!--              class="flex-1 bg-gray-200 hover:bg-gray-300 text-[#292929] text-[0.7rem] text-[0.8rem] py-[0.55rem] px-6 rounded">-->
<!--            取消-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

  </div>
</template>