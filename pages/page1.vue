<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="mx-[0.8rem] py-4">
      <div class="w-full">
        <div class="flex items-center rounded-lg  bg-gray-100 p-2 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-gray-500 mr-2">
            <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
          </svg>
          <input type="text" placeholder="输入房间编号" class="bg-transparent outline-none flex-1 text-[#292929] text-[0.7rem]"/>
          <button class="text-blue-500 text-[0.7rem]">查询</button>
        </div>
        <div class="mt-4">
          <h2 class="text-[#292929] text-[0.7rem] mb-2">查询结果</h2>

          <div class="bg-white p-4 rounded-lg shadow-sm mb-4">
            <div class="flex justify-between items-start mb-2">
              <div class="text-[#292929] text-[0.7rem]">用户编号：059000000003-0764</div>
              <div class="bg-blue-100 text-blue-600 rounded-md text-[0.6rem] px-[0.4rem] py-[0.13rem]">在用</div>
            </div>
            <hr>
            <div class=" flex flex-col text-[#292929] text-[0.7rem] mt-2 mb-2">
              <span class="text-[#9EA0A4] text-[0.6rem]">楼盘/房号</span>
              <span>小星星倚云居张碧玲</span>
            </div>
            <div class=" flex flex-col text-[#292929] text-[0.7rem] mt-2 mb-2">
              <span class="text-[#9EA0A4] text-[0.6rem]">用户姓名/电话</span>
              <span>张碧玲1号表/13926107601</span>
            </div>
          </div>

          <div class="bg-white p-4 rounded-lg shadow-sm mb-4">
            <div class="flex justify-between items-start mb-2">
              <div class="text-[#292929] text-[0.7rem]">用户编号：059000000003-0764</div>
              <div class="bg-gray-100 text-gray-600 rounded-md text-[0.6rem] px-[0.4rem] py-[0.13rem]">销户</div>
            </div>
            <hr>
            <div class=" flex flex-col text-[#292929] text-[0.7rem] mt-2 mb-2">
              <span class="text-[#9EA0A4] text-[0.6rem]">楼盘/房号</span>
              <span>小星星倚云居张碧玲</span>
            </div>
            <div class=" flex flex-col text-[#292929] text-[0.7rem] mt-2 mb-2">
              <span class="text-[#9EA0A4] text-[0.6rem]">用户姓名/电话</span>
              <span>张碧玲1号表/13926107601</span>
            </div>
          </div>

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