<script setup lang="ts">
import type {WorkDetails} from "~/types/searchWork";

const route = useRoute()
let details = reactive<WorkDetails|null>(null)

const getData = async () => {
  const res = await useRequest<WorkDetails>(`/wxh5/staff/getWorkOrderDetails`,{
    query: {
      job_num: route.query.id
    }
  })
  console.log(res)
}
onMounted(() => {
  getData();
})
</script>

<template>
  <div class="container container-blue-bg">
    <div class="mx-[0.8rem] py-4">

<!--      <h3 class="text-[0.7rem] text-[#292929] mt-4 mb-2">工单号</h3>-->
      <div class="bg-white rounded p-4 mb-6">
        <div class="grid grid-cols-3 gap-x-1 gap-y-4">
          <div>
            <p class="txt-gray-7">工单号</p>
          </div>
          <div class="col-span-2">
            <p class="txt-black-7">2024120914000378782</p>
          </div>
          <div>
            <p class="txt-gray-7">楼盘</p>
          </div>
          <div class="col-span-2">
            <p class="txt-black-7">小星星倚云居张碧玲</p>
          </div>
          <div>
            <p class="txt-gray-7">房号</p>
          </div>
          <div class="col-span-2">
            <p class="txt-black-7">QA-8</p>
          </div>
          <div>
            <p class="txt-gray-7">设备号</p>
          </div>
          <div class="col-span-2">
            <p class="txt-black-7"><a href="#" class="text-blue-500 hover:text-blue-700">Q 查看用水明细</a> QA96854 </p>
          </div>
          <div>
            <p class="txt-gray-7">信号</p>
          </div>
          <div class="col-span-2">
            <p class="txt-black-7">-</p>
          </div>
          <div>
            <p class="txt-gray-7">电压</p>
          </div>
          <div class="col-span-2">
            <p class="txt-black-7">-</p>
          </div>
          <div>
            <p class="txt-gray-7">设备类型</p>
          </div>
          <div class="col-span-2">
            <p class="txt-black-7">-</p>
          </div>
          <div>
            <p class="txt-gray-7">SIM卡</p>
          </div>
          <div class="col-span-2">
            <p class="txt-black-7">-</p>
          </div>
          <div>
            <p class="txt-gray-7">供应商</p>
          </div>
          <div class="col-span-2">
            <p class="txt-black-7">-</p>
          </div>
          <div>
            <p class="txt-gray-7">接单人</p>
          </div>
          <div class="col-span-2">
            <p class="txt-black-7">曹霜萍</p>
          </div>
          <div>
            <p class="txt-gray-7">服务类型</p>
          </div>
          <div class="col-span-2">
            <p class="txt-black-7">临时关阀</p>
          </div>
          <div>
            <p class="txt-gray-7">需求描述</p>
          </div>
          <div class="col-span-2">
            <p class="txt-black-7">131554</p>
          </div>
          <div>
            <p class="txt-gray-7">联系电话</p>
          </div>
          <div class="col-span-2">
            <p class="txt-black-7">
              <a href="tel:15013127765" class="text-blue-500 hover:text-blue-700">
                15013127765 点击拨打业主
              </a>
            </p>
          </div>

        </div>
      </div>

      <h3 class="text-[0.7rem] text-[#292929] mt-4 mb-2">编辑信息</h3>
      <div class="bg-white rounded px-4 py-2 mb-2">
        <div class="mb-4 space-x-1">
          <label class="flex-1 txt-gray-7 mb-2">
            工作备注
            <input type="text" class="border rounded px-2 py-1 placeholder-gray-400" placeholder="请输入工作备注">
          </label>
          <button class="bg-[#D9E9FF] text-[#3789FF] text-[0.7rem] rounded px-[0.8rem] py-[0.23rem] mt-2">保存</button>
        </div>
        <hr>
        <div class="mb-2 flex justify-between items-center">
          <label class="block txt-gray-7">延期日期</label>
          <div class="relative">
            <select
                class="block appearance-none w-full bg-white hover:border-gray-400 px-4 py-2 pr-8 rounded txt-black-7 leading-tight focus:outline-none focus:shadow-outline">
              <option>请选择日期</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white rounded px-4 py-2 mb-2">
        <div class="txt-gray-7">
          <label class="block txt-gray-7 mb-2">回复内容</label>
          <textarea type="text" class="w-full border rounded px-2 py-1 placeholder-gray-400"
                    placeholder="请输入回复内容"></textarea>
          <p class="flex justify-end">
            <button class="bg-[#D9E9FF] text-[#3789FF] text-[0.7rem] rounded px-[0.8rem] py-[0.23rem]">发送</button>
          </p>
        </div>
      </div>

      <div class="bg-white rounded px-4 py-2 mb-6">
        <div class="flex justify-between items-center">
          <label class="block txt-gray-7">转单人员</label>
          <div class="relative">
            <select
                class="block appearance-none w-full bg-white hover:border-gray-400 px-4 py-2 pr-8 rounded txt-black-7 leading-tight focus:outline-none focus:shadow-outline">
              <option>请选择</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
          <button class="bg-[#D9E9FF] text-[#3789FF] text-[0.7rem] rounded px-[0.8rem] py-[0.23rem]">转单</button>
        </div>
      </div>

      <button class="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-[0.55rem] px-8 rounded w-full mb-3">
        结单
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