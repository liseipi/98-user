<script setup lang="ts">

</script>

<template>
  <div class="container container-blue-bg">
    <div class="mx-[0.8rem] py-4">
      <div class="bg-white rounded-md px-4 py-4 grid grid-cols-1 gap-y-3">
        <div class="flex justify-between items-center">
          <div class="text-[#6E7177] text-[0.7rem]">创建开始时间</div>
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
          <div class="text-[#6E7177] text-[0.7rem]">创建结束时间</div>
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
          <div class="text-[#6E7177] text-[0.7rem]">指令类型</div>
          <div class="text-[#292929] text-[0.7rem] flex flex-row items-center justify-center">
            <span>请选择类型</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-[1.3rem] h-[0.74rem] inline-block">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
            </svg>
          </div>
        </div>
        <hr/>
        <div class="flex justify-between items-center">
          <div class="text-[#6E7177] text-[0.7rem]">处理结果</div>
          <div class="text-[#292929] text-[0.7rem] flex flex-row items-center justify-center">
            <span>请选择结果</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-[1.3rem] h-[0.74rem] inline-block">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
            </svg>
          </div>
        </div>
        <hr/>
        <div class="flex justify-between items-center">
          <div class="text-[#6E7177] text-[0.7rem]">设备编号</div>
          <div class="txt-black-7">
            <input
                type="text"
                placeholder="请输入设备号"
                class="txt-input-box"
            />
          </div>
        </div>
        <hr/>
        <button class="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-2 px-8 rounded">
          查询
        </button>
      </div>

      <h3 class="text-[0.7rem] text-[#292929] mt-4 mb-2">未完成指令总数：2</h3>

      <div class="bg-white shadow-md rounded-lg px-4 py-3" data-v-57d2f3b1="">
        <div class="border-b border-gray-200 py-3" data-v-57d2f3b1="">
          <div class="flex justify-between items-center" data-v-57d2f3b1="">
            <div class="txt-gray-7" data-v-57d2f3b1="">创建时间</div>
            <div class="txt-black-7" data-v-57d2f3b1="">2024-12-14 03:31:46</div>
          </div>
        </div>
        <div class="border-b border-gray-200 py-3" data-v-57d2f3b1="">
          <div class="flex justify-between items-center" data-v-57d2f3b1="">
            <div class="txt-gray-7" data-v-57d2f3b1="">设备编号</div>
            <div class="txt-black-7" data-v-57d2f3b1="">30701331</div>
          </div>
        </div>
        <div class="border-b border-gray-200 py-3" data-v-57d2f3b1="">
          <div class="flex justify-between items-center" data-v-57d2f3b1="">
            <div class="txt-gray-7" data-v-57d2f3b1="">指令类型</div>
            <div class="txt-black-7" data-v-57d2f3b1="">关阀</div>
          </div>
        </div>
        <div class="border-b border-gray-200 py-3" data-v-57d2f3b1="">
          <div class="flex justify-between items-center" data-v-57d2f3b1="">
            <div class="txt-gray-7" data-v-57d2f3b1="">完成情况</div>
            <div class="txt-black-7" data-v-57d2f3b1="">待处理</div>
          </div>
        </div>
        <div class="border-b border-gray-200 py-3" data-v-57d2f3b1="">
          <div class="flex justify-between items-center" data-v-57d2f3b1="">
            <div class="txt-gray-7" data-v-57d2f3b1="">处理时间</div>
            <div class="txt-black-7" data-v-57d2f3b1="">2024-12-14 03:31:46</div>
          </div>
        </div>

        <button class="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-2 px-8 rounded">
          撤销
        </button>
      </div>

      <div class="mt-4 bg-white shadow-md rounded-lg px-4 py-3" data-v-57d2f3b1="">
        <div class="border-b border-gray-200 py-3" data-v-57d2f3b1="">
          <div class="flex justify-between items-center" data-v-57d2f3b1="">
            <div class="txt-gray-7" data-v-57d2f3b1="">创建时间</div>
            <div class="txt-black-7" data-v-57d2f3b1="">2024-12-14 03:31:46</div>
          </div>
        </div>
        <div class="border-b border-gray-200 py-3" data-v-57d2f3b1="">
          <div class="flex justify-between items-center" data-v-57d2f3b1="">
            <div class="txt-gray-7" data-v-57d2f3b1="">设备编号</div>
            <div class="txt-black-7" data-v-57d2f3b1="">30701331</div>
          </div>
        </div>
        <div class="border-b border-gray-200 py-3" data-v-57d2f3b1="">
          <div class="flex justify-between items-center" data-v-57d2f3b1="">
            <div class="txt-gray-7" data-v-57d2f3b1="">指令类型</div>
            <div class="txt-black-7" data-v-57d2f3b1="">关阀</div>
          </div>
        </div>
        <div class="border-b border-gray-200 py-3" data-v-57d2f3b1="">
          <div class="flex justify-between items-center" data-v-57d2f3b1="">
            <div class="txt-gray-7" data-v-57d2f3b1="">完成情况</div>
            <div class="txt-black-7" data-v-57d2f3b1="">待处理</div>
          </div>
        </div>
        <div class="border-b border-gray-200 py-3" data-v-57d2f3b1="">
          <div class="flex justify-between items-center" data-v-57d2f3b1="">
            <div class="txt-gray-7" data-v-57d2f3b1="">处理时间</div>
            <div class="txt-black-7" data-v-57d2f3b1="">2024-12-14 03:31:46</div>
          </div>
        </div>

        <button class="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-2 px-8 rounded">
          撤销
        </button>
      </div>

    </div>

    <div class="h-[1rem]"></div>

  </div>
</template>