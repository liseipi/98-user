<script setup lang="ts">

</script>

<template>
  <div class="container container-blue-bg">
    <div class="mx-[0.8rem] py-4">
      <div class="bg-white rounded p-4 mb-2">
        <div class="grid grid-cols-3 gap-4">
          <div>
            <p class="txt-gray-7">最近抄表数</p>
            <p class="txt-black-7">122124.000</p>
          </div>
          <div>
            <p class="txt-gray-7">最近抄表数(升)</p>
            <p class="txt-black-7">1596</p>
          </div>
          <div>
            <p class="txt-gray-7">最近抄表日期</p>
            <p class="txt-black-7">2024-12-30 <br>09:31:24</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded p-4 mb-4 grid grid-cols-1 gap-y-4">
        <div class="flex justify-between items-center">
          <div class="text-[#6E7177] text-[0.7rem]">开始时间</div>
          <div class="text-[#292929] text-[0.7rem] flex flex-row items-center justify-center">
            <span>请选择日期</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-[1.3rem] h-[0.74rem] inline-block">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
            </svg>
          </div>
        </div>
        <hr/>
        <div class="flex justify-between items-center">
          <div class="text-[#6E7177] text-[0.7rem]">结束时间</div>
          <div class="text-[#292929] text-[0.7rem] flex flex-row items-center justify-center">
            <span>请选择日期</span>
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

      <h3 class="text-[0.7rem] text-[#292929] mt-4 mb-2">查询结果</h3>
      <div class="bg-white rounded p-4 mb-2">
        <div class="flex justify-between">
          <p class="txt-gray-7">机械表用量(升)</p>
          <p class="txt-black-7">120</p>
        </div>
      </div>
      <div class="bg-white rounded mb-2">
        <table class="w-full table-auto border-collapse">
          <thead>
          <tr class="text-left">
            <th class="py-2 px-4 txt-black-7">抄表时间</th>
            <th class="py-2 px-4 txt-black-7">用量</th>
            <th class="py-2 px-4 txt-black-7">明细</th>
          </tr>
          </thead>
          <tbody>
          <tr class="border-b hover:bg-gray-100 txt-black-7">
            <td class="py-2 px-4 txt-black-7">2024-12-14 <br>03:31:46</td>
            <td class="py-2 px-4 txt-black-7">3</td>
            <td class="py-2 px-4 text-blue-500"><a href="#">查看</a></td>
          </tr>
          <tr class="border-b hover:bg-gray-100 txt-black-7">
            <td class="py-2 px-4 txt-black-7">2024-12-14 <br>03:31:46</td>
            <td class="py-2 px-4 txt-black-7">20</td>
            <td class="py-2 px-4 text-blue-500"><a href="#">查看</a></td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>

    <div class="h-[1rem]"></div>

  </div>
</template>