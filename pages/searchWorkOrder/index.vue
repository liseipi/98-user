<script setup lang="ts">
import SelectBox from "~/components/selectBox.vue";
import {workTypes} from "~/composables/optionsData";
import type {SearchWorkItem, SearchWorkResponse} from "~/types/searchWord";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 工单明细` : '工单明细';
  }
})

const type = ref('');
const area = ref('');
const buildingid = ref('');

let count = ref(0)
let list = ref<SearchWorkItem[]>()

const onSearch = async () => {
  let res = await useRequest<SearchWorkResponse>('/wxh5/staff/queryWorkOrder', {
    method: 'post',
    body: {
      type,
      area,
      buildingid
    }
  });
  count.value = res.data.count
  list.value = res.data.list
}

</script>

<template>
  <div class="container">
    <div class="mx-[0.8rem] py-4">
      <div class="bg-white rounded-md p-4 grid grid-cols-1 gap-y-4">
        <SelectBox
            :options="workTypes"
            v-model="type"
            label="工单类型"
            placeholder="不分类型"
        />
        <hr/>
        <SelectBox
            :options="workTypes"
            v-model="area"
            label="区域"
            placeholder="不分区域"
        />
        <hr/>
        <SelectBox
            :options="workTypes"
            v-model="buildingid"
            label="楼盘"
            placeholder="不分楼盘"
        />
        <hr/>
        <button class="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-2 px-8 rounded">
          查询
        </button>
      </div>

      <h3 class="text-[0.7rem] text-[#292929] mt-4 mb-2">未完成工单总数：{{count}}</h3>

      <div class="bg-white rounded-md mt-4 p-4">
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
            <tr>
              <td class="py-[0.35rem] pr-2 whitespace-nowrap text-[0.7rem] text-[#292929]">2024-11-09 16:57:45</td>
              <td class="py-[0.35rem] pr-2 whitespace-nowrap text-[0.7rem] text-[#292929]">蝶舞轩 10P0503</td>
              <td class="py-[0.35rem] pr-2 whitespace-nowrap text-[0.7rem] text-[#292929]">0用水 13926107601</td>
            </tr>
            <tr>
              <td class="py-[0.35rem] pr-2 whitespace-nowrap text-[0.7rem] text-[#292929]">2024-11-09 16:57:45</td>
              <td class="py-[0.35rem] pr-2 whitespace-nowrap text-[0.7rem] text-[#292929]">蝶舞轩 10P0503</td>
              <td class="py-[0.35rem] pr-2 whitespace-nowrap text-[0.7rem] text-[#292929]">0用水 13926107601</td>
            </tr>
            <tr>
              <td class="py-[0.35rem] pr-2 whitespace-nowrap text-[0.7rem] text-[#292929]">2024-11-09 16:57:45</td>
              <td class="py-[0.35rem] pr-2 whitespace-nowrap text-[0.7rem] text-[#292929]">蝶舞轩 10P0503</td>
              <td class="py-[0.35rem] pr-2 whitespace-nowrap text-[0.7rem] text-[#292929]">0用水 13926107601</td>
            </tr>
            </tbody>
          </table>
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