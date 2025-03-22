<script setup lang="ts">

</script>

<template>
  <div class="container-blue-bg">
    <div class="mx-[0.8rem] py-4">
      <div class="bg-white rounded-md p-4 grid grid-cols-1 gap-y-4">
        <div class="flex justify-between items-center">
          <div class="text-[#6E7177] text-[0.7rem]">工单类型</div>
          <div class="text-[#292929] text-[0.7rem] flex flex-row items-center justify-center">
            <span>不分类型</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-[1.3rem] h-[0.74rem] inline-block">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
            </svg>
          </div>
        </div>
        <hr/>
        <div class="flex justify-between items-center">
          <div class="text-[#6E7177] text-[0.7rem]">楼盘</div>
          <div class="text-[#292929] text-[0.7rem] flex flex-row items-center justify-center">
            <span>不分楼盘</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-[1.3rem] h-[0.74rem] inline-block">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
            </svg>
          </div>
        </div>
        <hr/>
        <button class="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-2 px-8 rounded">
          查询
        </button>
      </div>

      <h3 class="text-[0.7rem] text-[#292929] mt-4 mb-2">未完成工单总数：12</h3>

      <div class="bg-white rounded-md mt-4 p-4">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="">
            <tr>
              <th scope="col" class="py-[1rem pr-2] text-left text-[0.65rem] text-[#6E7177]">
                工单日期
              </th>
              <th scope="col" class="py-[1rem] pr-2 text-left text-[0.65rem] text-[#6E7177]">
                楼盘房号
              </th>
              <th scope="col" class="py-[1rem] pr-2 text-left text-[0.65rem] text-[#6E7177]">
                问题描述/业主电话
              </th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="py-[0.35rem] pr-2 whitespace-nowrap text-[0.7rem] text-[#292929]">2024-11-09 16:57:45</td>
              <td class="py-[0.35rem] pr-2 whitespace-nowrap text-[0.7rem] text-[#292929]">蝶舞轩 10P0503</td>
              <td class="py-[0.35rem] pr-2 whitespace-nowrap text-[0.7rem] text-[#292929]">0用水 13926107601</td>
            </tr>
            <tr>
              <td class="py-[0.35rem] pr-2 whitespace-nowrap text-[0.7rem] text-[#292929]">2024-11-09 16:57:45</td>
              <td class="py-[0.35rem] pr-2 whitespace-nowrap text-[0.7rem] text-[#292929]">蝶舞轩 10P0503</td>
              <td class="py-[0.35rem] pr-2 whitespace-nowrap text-[0.7rem] text-[#292929]">0用水 13926107601</td>
            </tr>
            <tr>
              <td class="py-[0.35rem] pr-2 whitespace-nowrap text-[0.7rem] text-[#292929]">2024-11-09 16:57:45</td>
              <td class="py-[0.35rem] pr-2 whitespace-nowrap text-[0.7rem] text-[#292929]">蝶舞轩 10P0503</td>
              <td class="py-[0.35rem] pr-2 whitespace-nowrap text-[0.7rem] text-[#292929]">0用水 13926107601</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>

    <div class="h-[1rem]"></div>

  </div>
</template>