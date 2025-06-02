<script setup lang="ts">
import AreaBox from "~/components/areaBox.vue";
import type {SearchWorkItem, SearchWorkResponse} from "~/types/searchWork";
import RoomsBox from "~/components/roomsBox.vue";
import WorkType from "~/components/workType.vue";
import {useInfiniteScroll} from "@vueuse/core";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 工单明细` : '工单明细';
  }
})

let formData = reactive({
  type: '',
  area: '',
  buildingid: '',
  roomid: '',
})

let status = ref(false)
let count = ref(0)
let page = 1;
let limit = 20;
let list = ref<SearchWorkItem[]>([])

const scrollContainer = ref<HTMLElement | null>(null)
let isLoading = ref(false)
let hasMore = ref(true);

const onSearch = async () => {
  // if (!formData.type && !formData.area && !formData.buildingid && !formData.roomid) {
  //   showToast('请选择查询条件')
  // }

  resetList();
  getData();
}

const getData = async () => {
  isLoading.value = true
  let res = await useRequest<SearchWorkResponse>('/wxh5/staff/queryWorkOrder', {
    query: {
      ...formData,
      page,
      limit,
    }
  });
  if (res.status === 0) {
    count.value = res.data.count
    list.value.push(...res.data.list);
    page += 1;
    if (list.value.length >= res.data.count) {
      hasMore.value = false;
    }
  } else {
    showToast(res.msg);
  }
  isLoading.value = false
  status.value = true
}

const reset = useInfiniteScroll(
    window,
    () => {
      if (!scrollContainer.value || isLoading.value || !hasMore.value || page == 1) return

      const rect = scrollContainer.value.getBoundingClientRect()
      const windowHeight = window.innerHeight
      // 当 scrollContainer 底部进入视口底部 100px 范围内时触发
      if (rect.bottom <= windowHeight + 100) {
        getData()
      }
    },
    {interval: 300}
)

//重置
const resetList = () => {
  page = 1;
  count.value = 0;
  list.value = [];
  hasMore.value = true
}

</script>

<template>
  <div class="container container-blue-bg">
    <div class="mx-[0.8rem] py-4">
      <div class="bg-white rounded-md p-4 grid grid-cols-1 gap-y-4">
        <WorkType
            v-model="formData.type"
            label="工单类型"
            clearable
            placeholder="不分类型"
        />
        <hr/>
        <AreaBox
            v-model="formData.area"
            label="区域"
            placeholder="不分区域"
        />
        <hr/>
        <BuildingBox
            v-model="formData.buildingid"
            :area-id="formData.area"
            label="楼盘"
            placeholder="不分楼盘"
        />
        <hr/>
        <RoomsBox
            v-model="formData.roomid"
            :building-id="formData.buildingid"
            label="房号"
            placeholder="不分房号"
        />
        <hr/>
        <button @click="onSearch" class="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-2 px-8 rounded">
          {{ isLoading ? '查询中...' : '查询' }}
        </button>
      </div>

      <h3 v-if="status&&list.length==0" class="text-[0.7rem] text-[#292929] mt-4 mb-2">
        查询的结果为空
      </h3>

      <h3 v-if="list.length>0" class="text-[0.7rem] text-[#292929] mt-4 mb-2">未完成工单总数：{{ count }}</h3>

      <div v-if="list.length>0" class="bg-white rounded-md mt-4 p-4">
        <div ref="scrollContainer" class="overflow-x-auto">
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
                描述
              </th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(item, index) in list" :key="index">
              <td class="py-[0.35rem] pr-2 w-20 text-wrap whitespace-nowrap text-[0.7rem] text-[#292929]">{{ item.createtime }}</td>
              <td class="py-[0.35rem] pr-2 w-28 text-wrap whitespace-nowrap text-[0.7rem] text-[#292929]">{{ item.buildingname }} {{ item.roomname }}</td>
              <td class="py-[0.35rem] pr-2 whitespace-nowrap text-[0.7rem] text-[#292929]">{{ item.remark }}用水 {{ item.mobile }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>

    <div class="h-[1rem]"></div>

  </div>
</template>