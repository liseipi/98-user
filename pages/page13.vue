<script setup lang="ts">

</script>

<template>
  <div class="container container-blue-bg">
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
        <button class="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-2 px-8 rounded">
          查询
        </button>
      </div>

    </div>

    <div class="h-[1rem]"></div>

  </div>
</template>