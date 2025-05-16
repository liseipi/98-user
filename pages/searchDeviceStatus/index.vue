<script setup lang="ts">
import type {SearchDeviceStatusItem} from "~/types/searchDeviceStatus";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 设备状态查询` : '设备状态查询';
  }
})

let devicecode = ref('')
let list = ref<SearchDeviceStatusItem[]>([])
let status = ref(false)
let isLoading = ref(false)

const onSearch = async () => {
  try {
    isLoading.value = true
    let res = await useRequest<SearchDeviceStatusItem[]>('/wxh5/staff/queryEquipmentStatus', {
      query: {devicecode: devicecode.value}
    });
    if (res.status == 0) {
      list.value = res.data;
    }
    status.value = true
    isLoading.value = false
  } catch (e) {
    console.log(e)
  }

}

</script>

<template>
  <div class="container container-blue-bg">
    <div class="min-h-screen mx-[0.8rem]">
      <div class="min-h-screen flex flex-col py-4">
        <div class="flex-none flex items-center rounded-lg  bg-gray-100 p-2 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
               class="w-5 h-5 text-gray-500 mr-2">
            <path fill-rule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clip-rule="evenodd"/>
          </svg>
          <input type="text" placeholder="输入设备编号" v-model="devicecode"
                 class="bg-transparent outline-none flex-1 text-[#292929] text-[0.7rem]"/>
          <button class="text-blue-500 text-[0.7rem]" @click="onSearch">查询</button>
        </div>

        <!--空时-->
        <div class="flex-1 mt-4" v-if="status&&list.length==0">
          <div class="flex flex-col items-center mt-[20%]">
            <img src="@/assets/image/empty.png" class="w-[3.7rem] h-[3.7rem]" alt="empty">
            <span class="txt-black-7 mt-2">输入设备号查询</span>
          </div>
        </div>

        <div class="flex-1 mt-4" v-if="list.length>0">
          <h2 class="text-[#292929] text-[0.7rem] mb-2">查询结果</h2>

          <div class="bg-white shadow-md rounded-lg p-4" v-for="(item, index) in list" :key="index">
            <div class="border-b border-gray-200 py-2">
              <div class="flex justify-between items-center">
                <div class="txt-gray-7">最近联络时间</div>
                <div class="txt-black-7">{{ item.lasttime }}</div>
              </div>
            </div>

            <div class="border-b border-gray-200 py-2">
              <div class="flex justify-between items-center">
                <div class="txt-gray-7">脉冲比例</div>
                <div class="txt-black-7">{{ item.pulseratio }}</div>
              </div>
            </div>

            <div class="border-b border-gray-200 py-2">
              <div class="flex justify-between items-center">
                <div class="txt-gray-7">讯号强度</div>
                <div class="txt-black-7">{{ item.signalstrength }}</div>
              </div>
            </div>

            <div class="border-b border-gray-200 py-2">
              <div class="flex justify-between items-center">
                <div class="txt-gray-7">电池电压(V)</div>
                <div class="txt-black-7">{{ item.batteryvoltage }}</div>
              </div>
            </div>

            <div class="border-b border-gray-200 py-2">
              <div class="flex justify-between items-center">
                <div class="txt-gray-7">阀门状态/时间</div>
                <div class="flex items-center space-x-2">
                  <div class="">
                    <div class="txt-black-7">{{ item.valvestatus == 0 ? '关闭' : '开启' }}</div>
                    <div class="txt-black-7">{{ item.updatetime }}</div>
                  </div>
                  <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="toggle" id="toggle"
                           class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                    <label for="toggle"
                           class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                  </div>
                </div>
              </div>
            </div>

            <div class="py-2">
              <div class="flex justify-between items-center">
                <div class="txt-gray-7">累计数</div>
                <div class="flex items-center space-x-2">
                  <div class="txt-black-7">{{ item.totalreading }}</div>
                  <button class="bg-[#E3EEFF] text-[#3789FF] text-[0.7rem] rounded-md px-[0.6rem] py-[0.23rem]">调表</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>