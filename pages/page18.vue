<script setup lang="ts">

</script>

<template>
  <div class="container-blue-bg">
    <div class="mx-[0.8rem] py-4">
      <div class="bg-white rounded p-4">
        <form>
          <!-- Form Fields -->
          <div class="space-y-3">
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">用户编号</label>
              <span class="text-sm txt-black-7">059000000013</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">房间 </label>
              <span class="text-sm txt-black-7">小星星倚云居张碧铃13号表</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">智能表号</label>
              <span class="text-sm txt-black-7">无</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">用户类别</label>
              <span class="text-sm txt-black-7">业户</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">姓名</label>
              <span class="text-sm txt-black-7">小星星</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">充值余额</label>
              <span class="text-sm txt-black-7">
                <input type="text" class="txt-input-box" value="0.03" />
              </span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">开户日期</label>
              <span class="text-sm txt-black-7">2020-09-08</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">最近读数</label>
              <span class="text-sm txt-black-7">3100.001(2024-11-04 16:57:45)</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">本期读数*</label>
              <span class="text-sm txt-black-7">
                <input type="text" class="txt-input-box" placeholder="请填写读表数" />
              </span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">销户原因<span class="text-red-500">*</span></label>
              <div class="text-sm txt-black-7 flex items-center">
                <span>销户</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
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

    </div>

    <div class="h-[1rem]"></div>

  </div>
</template>