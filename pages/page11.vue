<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="mx-[0.8rem] py-4">
      <div class="bg-white rounded p-4 grid grid-cols-1 gap-y-4">
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
        <div class="flex justify-between items-center">
          <div class="text-[#6E7177] text-[0.7rem]">数据来源</div>
          <div class="text-[#292929] text-[0.7rem] flex flex-row items-center justify-center">
            <span>请选择</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-[1.3rem] h-[0.74rem] inline-block">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
            </svg>
          </div>
        </div>
        <hr/>
        <div class="flex justify-between items-center">
          <div class="text-[#6E7177] text-[0.7rem]">入账去向</div>
          <div class="text-[#292929] text-[0.7rem] flex flex-row items-center justify-center">
            <span>请选择</span>
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
        <div class="grid grid-cols-2 gap-2">
          <div>
            <p class="txt-gray-7">总用量(升)</p>
          </div>
          <div class="text-right">
            <p class="txt-black-7">-9942017.372</p>
          </div>
          <div>
            <p class="txt-gray-7">流量计用量(升)</p>
          </div>
          <div class="text-right">
            <p class="txt-black-7">-9946617.482</p>
          </div>
          <div>
            <p class="txt-gray-7">累计误差量(升)</p>
          </div>
          <div class="text-right">
            <p class="txt-black-7">4600.11</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded overflow-x-auto">
        <table class="w-full table-auto border-collapse">
          <thead>
          <tr class="border-b hover:bg-gray-100 text-left">
            <th class="py-2 px-1 txt-gray-7 text-nowrap">上传时间</th>
            <th class="py-2 px-1 txt-gray-7 text-nowrap">用量</th>
            <th class="py-2 px-1 txt-gray-7 text-nowrap">笔数</th>
            <th class="py-2 px-1 txt-gray-7 text-nowrap">用水时长</th>
            <th class="py-2 px-1 txt-gray-7 text-nowrap">明细</th>
          </tr>
          </thead>
          <tbody>
          <tr class="border-b hover:bg-gray-100">
            <td class="py-2 px-1 txt-black-7 txt-black-7">2024-12-14</td>
            <td class="py-2 px-1 txt-black-7 txt-black-7">3.5</td>
            <td class="py-2 px-1 txt-black-7 txt-black-7">6</td>
            <td class="py-2 px-1 txt-black-7 txt-black-7">180</td>
            <td class="py-2 px-1 txt-black-7 txt-black-7 text-blue-500"><a href="#">查看</a></td>
          </tr>
          <tr class="border-b hover:bg-gray-100">
            <td class="py-2 px-1 txt-black-7">2024-12-15</td>
            <td class="py-2 px-1 txt-black-7">4.8</td>
            <td class="py-2 px-1 txt-black-7">10</td>
            <td class="py-2 px-1 txt-black-7">230</td>
            <td class="py-2 px-1 txt-black-7 text-blue-500"><a href="#">查看</a></td>
          </tr>
          <tr class="border-b hover:bg-gray-100">
            <td class="py-2 px-1 txt-black-7">2024-12-16</td>
            <td class="py-2 px-1 txt-black-7">2.2</td>
            <td class="py-2 px-1 txt-black-7">2</td>
            <td class="py-2 px-1 txt-black-7">60</td>
            <td class="py-2 px-1 txt-black-7 text-blue-500"><a href="#">查看</a></td>
          </tr>
          <tr class="">
            <td class="py-2 px-1 txt-black-7">2024-12-17</td>
            <td class="py-2 px-1 txt-black-7">6.0</td>
            <td class="py-2 px-1 txt-black-7">9</td>
            <td class="py-2 px-1 txt-black-7">700</td>
            <td class="py-2 px-1 txt-black-7 text-blue-500"><a href="#">查看</a></td>
          </tr>
          </tbody>
        </table>
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