<script setup lang="ts">
import {Popup} from 'vant';
import {CommandType, userType} from "~/composables/optionsData";
import InputBox from "~/components/inputBox.vue";
import type {CommandList, CommandQueue} from "~/types/searchCommandQueue";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 指令队列` : '指令队列';
  }
})

let count = ref(0);
let list = ref<CommandList[]>([]);

let formData = reactive({
  starttime: '',
  endtime: '',
  type: '',
  status: '',
  devicecode: '',
})

const onSearch = async () => {
  let res = await useRequest<CommandQueue>('/wxh5/staff/queryInstructionQueue', {
    query: {
      starttime: formData.starttime,
      endtime: formData.endtime,
      type: formData.type,
      status: formData.status,
      devicecode: formData.devicecode,
    }
  });
  if (res.status === 0) {
    count.value = res.data.count;
    list.value = res.data.list;
  } else {
    showToast(res.msg);
  }
}

const onCancel = async (item) => {
  let res = await useRequest('/wxh5/staff/cancelInstruction', {
    query: {
      devicecode: item.devicecode,
      id: item.id,
    }
  });
  if (res.status === 0) {
    showToast('撤销完成')
    await onSearch(); //更新查询
  } else {
    showToast(res.msg);
  }
}

</script>

<template>
  <div class="container container-blue-bg">
    <div class="mx-[0.8rem] py-4">
      <div class="bg-white rounded-md px-4 py-4 grid grid-cols-1 gap-y-3">
        <date-box label="创建开始时间" v-model="formData.starttime"/>
        <hr/>
        <date-box label="创建结束时间" v-model="formData.endtime"/>
        <hr/>
        <SelectBox
            label="指令类型"
            placeholder="请选择指令类型"
            v-model="formData.type"
            :options="CommandType">
        </SelectBox>
        <hr/>
        <SelectBox
            label="处理结果"
            placeholder="请选择处理结果"
            v-model="formData.status"
            :options="DoneType">
        </SelectBox>
        <hr/>
        <InputBox
            label="设备编号"
            placeholder="请输入设备编号"
            v-model="formData.devicecode"
        ></InputBox>
        <hr/>
        <button class="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-2 px-8 rounded" @click="onSearch">
          查询
        </button>
      </div>

      <div v-if="list.length>0">
        <h3 class="text-[0.7rem] text-[#292929] mt-4 mb-2">未完成指令总数：{{ count }}</h3>

        <div class="bg-white shadow-md rounded-lg px-4 py-3" v-for="item in list" :key="item.id">
          <div class="border-b border-gray-200 py-3">
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">创建时间</div>
              <div class="txt-black-7">{{ item.createtime }}</div>
            </div>
          </div>
          <div class="border-b border-gray-200 py-3">
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">设备编号</div>
              <div class="txt-black-7">{{ item.devicecode }}</div>
            </div>
          </div>
          <div class="border-b border-gray-200 py-3">
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">指令类型</div>
              <div class="txt-black-7">{{ item.type }}</div>
            </div>
          </div>
          <div class="border-b border-gray-200 py-3">
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">完成情况</div>
              <div class="txt-black-7">{{ item.status }}</div>
            </div>
          </div>
          <div class="border-b border-gray-200 py-3">
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">处理时间</div>
              <div class="txt-black-7">{{ item.dealtime }}</div>
            </div>
          </div>

          <button @click="onCancel(item)"
                  class="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-2 px-8 rounded">
            撤销
          </button>
        </div>
      </div>

    </div>

    <div class="h-[1rem]"></div>

  </div>
</template>