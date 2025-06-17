<script setup lang="ts">
// import type {SearchDeviceStatusItem} from '~/types/searchDeviceStatus'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 设备状态查询` : '设备状态查询'
  }
})

let devicecode = ref('')
let list = ref<object | null>(null)
let status = ref(false)
let isLoading = ref(false)

const onSearch = async () => {
  try {
    isLoading.value = true
    let res = await useRequest('/wxh5/staff/queryEquipmentStatus', {
      query: {devicecode: devicecode.value}
    })
    if (res.status == 0) {
      list.value = res.data as object
    }
    status.value = true
    isLoading.value = false
  } catch (e) {
    console.log(e)
  }

}

// 切换开关
const handleSwitchChange = async (val: boolean | number) => {
  let res = await useRequest('/wxh5/staff/setValveStatus', {
    query: {devicecode: list.value?.dev_code, valvestatus: val ? 1 : 0}
  })
  showToast(res.msg)
}

// 调表
let isShow = ref(false)
let reading = ref()
const onSubmit = async () => {
  let res = await useRequest('/wxh5/staff/setTotalReading', {
    query: {devicecode: list.value?.dev_code, totalreading: reading.value}
  })
  if (res.status == 0) {
    isShow.value = false
  }
  showToast(res.msg)
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
        <div class="flex-1 mt-4" v-if="status&&!list">
          <div class="flex flex-col items-center mt-[20%]">
            <img src="@/assets/image/empty.png" class="w-[3.7rem] h-[3.7rem]" alt="empty">
            <span class="txt-black-7 mt-2">输入设备号查询</span>
          </div>
        </div>

        <div class="flex-1 mt-4" v-if="list">
          <h2 class="text-[#292929] text-[0.7rem] mb-2">查询结果</h2>

          <div class="bg-white shadow-md rounded-lg p-4">
            <div class="border-b border-gray-200 py-2">
              <div class="flex justify-between items-center">
                <div class="txt-gray-7">最近联络时间</div>
                <div class="txt-black-7">{{ list.last_seen }}</div>
              </div>
            </div>

            <div class="border-b border-gray-200 py-2">
              <div class="flex justify-between items-center">
                <div class="txt-gray-7">脉冲比例</div>
                <div class="txt-black-7">{{ list.pulse_ratio }}</div>
              </div>
            </div>

            <div class="border-b border-gray-200 py-2">
              <div class="flex justify-between items-center">
                <div class="txt-gray-7">讯号强度</div>
                <div class="txt-black-7">{{ list.signal }}</div>
              </div>
            </div>

            <div class="border-b border-gray-200 py-2">
              <div class="flex justify-between items-center">
                <div class="txt-gray-7">电池电压(V)</div>
                <div class="txt-black-7">{{ list.voltage }}</div>
              </div>
            </div>

            <div class="border-b border-gray-200 py-2" v-if="(list.dev_type=='GUOXIN'||list.dev_type=='ZHONGKE')&&list.valve_status==''">
              <div class="flex justify-between items-center">
                <div class="txt-gray-7">阀门状态</div>
                <div class="flex items-center space-x-2">
                  <div class="txt-black-7">{{ list.valve_status == 1 ? '开启' : '关闭' }}</div>
                  <Switch v-model="list.valve_status" @update:model-value="handleSwitchChange"></Switch>
                </div>
              </div>
            </div>

            <div class="border-b border-gray-200 py-2" v-if="(list.dev_type=='GUOXIN'||list.dev_type=='ZHONGKE')&&list.valve_status==''">
              <div class="flex justify-between items-center">
                <div class="txt-gray-7">时间</div>
                <div class="txt-black-7">{{ list.valve_chg_time }}</div>
              </div>
            </div>

            <div class="py-2">
              <div class="flex justify-between items-center">
                <div class="txt-gray-7">累计数</div>
                <div class="flex items-center space-x-2">
                  <div class="txt-black-7">{{ list.last_reading }}</div>
                  <button @click="isShow=!isShow" class="bg-[#E3EEFF] text-[#3789FF] text-[0.7rem] rounded-md px-[0.6rem] py-[0.23rem]">调表</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-show="isShow" class="fixed inset-0 bg-gray-900 bg-opacity-85 flex justify-center items-center">
          <div class="bg-white px-[1rem] py-4 rounded-lg shadow-xl max-w-md relative">
            <div @click="isShow=false" class="absolute top-2 right-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-6 h-6 text-gray-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </div>
            <h2 class="text-[0.8rem] text-[#292929] font-bold text-center py-6 flex items-center justify-center">调表度数</h2>
            <div class="flex flex-col items-center txt-black-7 space-y-2">
              <span>原表数{{ list?.last_reading }}</span>
              <span>设备{{ list?.dev_code }}新的调表数</span>
              <span><input v-model="reading" type="number" class="border border-blue-300 rounded-sm p-1 "/></span>
            </div>
            <div class="flex justify-center space-x-3 mt-6 w-[14rem]">
              <button @click="onSubmit" class="flex-1 bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-[0.55rem] px-6 rounded">
                确定
              </button>
              <button @click="isShow=false"
                      class="flex-1 bg-gray-200 hover:bg-gray-300 text-[#292929] text-[0.7rem] text-[0.8rem] py-[0.55rem] px-6 rounded">
                取消
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>