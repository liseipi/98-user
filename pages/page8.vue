<script setup lang="ts">

</script>

<template>
  <div class="container-blue-bg">
    <div class="mx-[0.8rem] py-4">
      <h3 class="text-[0.7rem] text-[#292929] mt-4 mb-2">填写个人信息</h3>
      <div class="bg-white rounded p-4">
        <form>
          <!-- Form Fields -->
          <div class="space-y-3">
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">楼盘
                <span class="text-red-500">*</span></label>
              <div class="text-sm txt-black-7 flex items-center">
                <span class="txt-black-7">请选择所在楼盘</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">房号 <span class="text-red-500">*</span></label>
              <span class="text-sm txt-black-7">059000000013</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">房间 </label>
              <span class="text-sm txt-black-7"> 小星星倚云居张碧铃13号表</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">用户信息</label>
              <span class="text-sm txt-black-7">测试 13411111234 面积133平米</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">设备号 <span class="text-red-500">*</span></label>
              <span class="text-sm txt-black-7">30701331</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">通道 </label>
              <span class="text-sm txt-black-7">2</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">阀门状态</label>
              <span class="text-sm txt-black-7">开阀</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">出厂比例</label>
              <span class="text-sm txt-black-7">1</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">当前比例</label>
              <span class="text-sm txt-black-7">1</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">信息质量</label>
              <span class="text-sm txt-black-7">13</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">电压</label>
              <span class="text-sm txt-black-7">3.7</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">ICCID</label>
              <span class="text-sm txt-black-7">请输入ICCID</span>

            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">联系时间</label>
              <span class="text-sm txt-black-7">2024-12-14 03:31:46</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">位置
                <span class="text-red-500">*</span></label>
              <div class="text-sm txt-black-7 flex items-center">
                <span>水槽下</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">电源
                <span class="text-red-500">*</span></label>
              <div class="text-sm txt-black-7 flex items-center">
                <span>电池</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">通电状态
                <span class="text-red-500">*</span></label>
              <div class="text-sm txt-black-7 flex items-center">
                <span>已通电</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">最近抄表</label>
              <span class="text-sm txt-black-7">1221.00/ 2024-12-14 03:31:50</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">当前读数
                <span class="text-red-500">*</span></label>
              <span class="text-sm txt-black-7">请输入当前机械表读数</span>
            </div>

            <div class="flex flex-col justify-start items-start">
              <div class="text-[#6E7177] text-[0.7rem] py-2">上传安装位置图 <span class="text-red-500">*</span></div>
              <div class="flex items-center space-x-2">
                <div class="relative w-16 h-16 rounded-lg border border-gray-300 flex items-center justify-center">
                  <img src="https://via.placeholder.com/80" alt="placeholder" class="object-cover w-full h-full rounded-md"/>
                  <div class="absolute -top-2 -right-2 bg-gray-200 rounded-full p-0.5 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 text-gray-700">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
                <div class="w-16 h-16 rounded-lg border border-gray-300 flex items-center justify-center cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </form>
      </div>

      <div class="mt-4">
        <button class="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-[0.55rem] px-8 rounded w-full">
          提交
        </button>
      </div>
      <div class="mt-3">
        <button class="bg-[#D9E9FF] hover:bg-blue-700 text-[#292929] text-[0.8rem] py-[0.55rem] px-8 rounded w-full">
          拆机
        </button>
      </div>
      <div class="mt-3">
        <button class="bg-[#D9E9FF] hover:bg-blue-700 text-[#292929] text-[0.8rem] py-[0.55rem] px-8 rounded w-full">
          恢复出厂脉冲比例
        </button>
      </div>
      <div class="mt-3">
        <button class="bg-[#D9E9FF] hover:bg-blue-700 text-[#292929] text-[0.8rem] py-[0.55rem] px-8 rounded w-full">
          调整恢厂脉冲比例
        </button>
      </div>


    </div>

    <div class="h-[1rem]"></div>

  </div>
</template>