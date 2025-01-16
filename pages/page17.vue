<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="mx-[0.8rem] py-4">
      <div class="bg-white rounded p-4 mb-4 space-y-2">
        <div class="flex justify-between items-center">
          <div class="txt-gray-7">减免量(L)</div>
          <div class="txt-black-7">
            <input type="text" placeholder="请输入减免量" class="txt-input-box">
          </div>
        </div>
        <hr class="border-t border-gray-200">
        <div class="flex justify-between items-center">
          <div class="txt-gray-7">原因</div>
          <div class="txt-black-7">
            <input type="text" placeholder="请输入原因" class="txt-input-box">
          </div>
        </div>
        <hr class="border-t border-gray-200">
        <div class="pt-2">
          <button
              class="bg-blue-500 hover:bg-blue-700 text-white text-[0.7rem] py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
            提交减免
          </button>
        </div>
      </div>

      <h2 class="text-[#292929] text-[0.7rem] mb-2">减免记录</h2>
      <div class="bg-white rounded overflow-x-auto">
        <table class="w-full table-auto border-collapse">
          <thead>
          <tr class="text-left text-nowrap">
            <th class="py-2 px-2 txt-gray-7 font-normal">减免量</th>
            <th class="py-2 px-2 txt-gray-7 font-normal">时间</th>
            <th class="py-2 px-2 txt-gray-7 font-normal">账期</th>
            <th class="py-2 px-2 txt-gray-7 font-normal">原因</th>
          </tr>
          </thead>
          <tbody>
          <tr class="border-b hover:bg-gray-100 text-nowrap">
            <td class="py-2 px-2 txt-black-7">15.433</td>
            <td class="py-2 px-2 txt-black-7 text-nowrap">2024-11-09<br>16:32:12</td>
            <td class="py-2 px-2 txt-black-7">2024-11-09</td>
            <td class="py-2 px-2 txt-black-7">用水故障</td>
          </tr>
          <tr class="border-b hover:bg-gray-100 text-nowrap">
            <td class="py-2 px-2 txt-black-7">15.433</td>
            <td class="py-2 px-2 txt-black-7 text-nowrap">2024-11-09<br>16:32:12</td>
            <td class="py-2 px-2 txt-black-7">2024-11-09</td>
            <td class="py-2 px-2 txt-black-7">阀门没开</td>
          </tr>
          <tr class="border-b hover:bg-gray-100 text-nowrap">
            <td class="py-2 px-2 txt-black-7">15.433</td>
            <td class="py-2 px-2 txt-black-7 text-nowrap">2024-11-09<br>16:32:12</td>
            <td class="py-2 px-2 txt-black-7">2024-11-09</td>
            <td class="py-2 px-2 txt-black-7">读数不准</td>
          </tr>
          <tr class="border-b hover:bg-gray-100 text-nowrap">
            <td class="py-2 px-2 txt-black-7">15.433</td>
            <td class="py-2 px-2 txt-black-7 text-nowrap">2024-11-09<br>16:32:12</td>
            <td class="py-2 px-2 txt-black-7">2024-11-09</td>
            <td class="py-2 px-2 txt-black-7">其他</td>
          </tr>
          <tr class="border-b hover:bg-gray-100 text-nowrap">
            <td class="py-2 px-2 txt-black-7">15.433</td>
            <td class="py-2 px-2 txt-black-7 text-nowrap">2024-11-09<br>16:32:12</td>
            <td class="py-2 px-2 txt-black-7">2024-11-09</td>
            <td class="py-2 px-2 txt-black-7">不准</td>
          </tr>
          <tr class="border-b hover:bg-gray-100 text-nowrap">
            <td class="py-2 px-2 txt-black-7">15.433</td>
            <td class="py-2 px-2 txt-black-7 text-nowrap">2024-11-09<br>16:32:12</td>
            <td class="py-2 px-2 txt-black-7">2024-11-09</td>
            <td class="py-2 px-2 txt-black-7">故障</td>
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