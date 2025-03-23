<script setup lang="ts">
import SelectBox from "~/components/selectBox.vue";
import AreaBox from "~/components/areaBox.vue";
import {workTypes} from "~/composables/optionsData";
import type {SearchWorkItem, SearchWorkResponse} from "~/types/searchWork";
import RoomsBox from "~/components/roomsBox.vue";
import type {AreaItem} from "~/types/options";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 工单明细` : '工单明细';
  }
})

const type = ref('');
const area = ref('');
const buildingid = ref('');
const roomid = ref('');

let count = ref(0)
let list = ref<SearchWorkItem[]>([])

const onSearch = async () => {
  let res = await useRequest<SearchWorkResponse>('/wxh5/staff/queryWorkOrder', {
    query: {
      type: type.value,
      area: area.value,
      buildingid: buildingid.value,
      roomid: roomid.value,
    }
  });
  if (res.status === "200") {
    count.value = res.data.count
    list.value = res.data.list
  }
}

</script>

<template>
  <div class="container container-blue-bg">
    <div class="mx-[0.8rem] py-4">
      <div class="bg-white rounded-md p-4 grid grid-cols-1 gap-y-4">
        <SelectBox
            :options="workTypes"
            v-model="type"
            label="工单类型"
            name="type"
            placeholder="不分类型"
        />
        <hr/>
        <AreaBox
            v-model="area"
            label="区域"
            placeholder="不分区域"
        />
        <hr/>
        <BuildingBox
            v-model="buildingid"
            :area-id="area"
            label="楼盘"
            placeholder="不分楼盘"
        />
        <hr/>
        <RoomsBox
            v-model="roomid"
            :building-id="buildingid"
            label="房号"
            placeholder="不分房号"
        />
        <hr/>
        <button @click="onSearch" class="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-2 px-8 rounded">
          查询
        </button>
      </div>

      <h3 v-if="list.length>0" class="text-[0.7rem] text-[#292929] mt-4 mb-2">未完成工单总数：{{ count }}</h3>

      <div v-if="list.length>0" class="bg-white rounded-md mt-4 p-4">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="">
            <tr>
              <th scope="col" class="py-[1rem pr-2] text-left text-[0.65rem] text-[#6E7177]">
                工单日期
              </th>
              <th scope="col" class="py-[1rem] pr-2 text-left text-[0.65rem] text-[#6E7177]">
                楼盘房号
              </th>
              <th scope="col" class="py-[1rem] pr-2 text-left text-[0.65rem] text-[#6E7177]">
                问题描述/业主电话
              </th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(item, index) in list" :key="index">
              <td class="py-[0.35rem] pr-2 whitespace-nowrap text-[0.7rem] text-[#292929]">{{item.createtime}}</td>
              <td class="py-[0.35rem] pr-2 whitespace-nowrap text-[0.7rem] text-[#292929]">{{item.buildingname}} {{item.roomname}}</td>
              <td class="py-[0.35rem] pr-2 whitespace-nowrap text-[0.7rem] text-[#292929]">{{item.remark}}用水 {{item.mobile}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>

    <div class="h-[1rem]"></div>

  </div>
</template>