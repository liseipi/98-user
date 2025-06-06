<script setup lang="ts">
import {useInfiniteScroll} from '@vueuse/core'
import {workStatueTypes} from "~/composables/optionsData";
import WorkType from "~/components/workType.vue";
import type {SearchWorkList, SearchWorkResponse} from "~/types/userInfo";

let route = useRoute()
let usercode = route.params.usercode;

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 查询用户工单` : '查询用户工单';
  }
})

let formData = reactive({
  usercode: usercode,
  starttime: '',
  endtime: '',
  type: '',
  status: '',
})
let waitCount = ref(0)
let count = ref(0)
let page = 1;
let limit = 20;
let list = ref<SearchWorkList[]>([]);

const scrollContainer = ref<HTMLElement | null>(null)
let isLoading = ref(false)
let hasMore = ref(true);

const onSubmit = () => {
  if (!formData.starttime || !formData.endtime) {
    showToast({message: '请选择时间段'});
    return;
  } else {
    resetList();
    getData();
  }
}

const getData = async () => {
  isLoading.value = true
  let res = await useRequest<SearchWorkResponse>('/wxh5/staff/queryWorkOrder', {
    query: {
      page,
      limit,
      ...formData,
    },
  });
  if (res.status == 0) {
    count.value = res.data.count;
    waitCount.value = res.data.wait_count;
    list.value.push(...res.data.list);
    page += 1;
    if (list.value.length >= res.data.count) {
      hasMore.value = false;
    }
  } else {
    showToast(res.msg);
  }
  isLoading.value = false
}

const reset = useInfiniteScroll(
    window,
    () => {
      if (!scrollContainer.value || isLoading.value || !hasMore.value || page == 1) return

      const rect = scrollContainer.value.getBoundingClientRect()
      const windowHeight = window.innerHeight
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
      <div class="bg-white rounded p-4 grid grid-cols-1 gap-y-4">
        <date-box label="创建开始时间" v-model="formData.starttime"/>
        <hr/>
        <date-box label="创建结束时间" v-model="formData.endtime"/>
        <hr/>
        <WorkType
            v-model="formData.type"
            label="工单类型"
            placeholder="不分类型"
        />
        <hr/>
        <SelectBox
            :options="workStatueTypes"
            v-model="formData.status"
            label="工单状态"
            name="type"
            placeholder="不分状态"
        />
        <hr/>
        <button @click="onSubmit" class="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-2 px-8 rounded">
          {{ isLoading ? '查询中...' : '查询' }}
        </button>
      </div>

      <div ref="scrollContainer">
        <div v-if="count > 0">
          <h3 class="text-[0.7rem] text-[#292929] mt-4 mb-2">查询结果</h3>
          <div class="bg-white rounded p-4 mb-2">
            <div class="grid grid-cols-2 gap-2">
              <div><p class="txt-gray-7">未完成工单总数</p></div>
              <div class="text-right"><p class="txt-black-7">{{ waitCount }}</p></div>
            </div>
          </div>
        </div>

        <div v-for="item in list" :key="item.id" class="bg-white rounded p-4 mb-2">
          <div class="grid grid-cols-2 gap-y-2">
            <div class="text-[0.65rem] text-[#6E7177]">工单日期</div>
            <div class="text-[#292929] text-[0.7rem]">{{ item.createtime }}</div>
            <div class="text-[0.65rem] text-[#6E7177]">申报人姓名</div>
            <div class="text-[#292929] text-[0.7rem]">{{ item.applyer_name }}</div>
            <div class="text-[0.65rem] text-[#6E7177]">申报人电话</div>
            <div class="text-[#292929] text-[0.7rem]">{{ item.applyer_mobile }}</div>
            <div class="text-[0.65rem] text-[#6E7177]">楼盘名</div>
            <div class="text-[#292929] text-[0.7rem]">{{ item.buildingname }}</div>
            <div class="text-[0.65rem] text-[#6E7177]">房间名</div>
            <div class="text-[#292929] text-[0.7rem]">{{ item.roomname }}</div>
            <div class="text-[0.65rem] text-[#6E7177]">需求描述</div>
            <div class="text-[#292929] text-[0.7rem]">{{ item.remark }}</div>
            <div class="text-[0.65rem] text-[#6E7177]">接单人姓名</div>
            <div class="text-[#292929] text-[0.7rem]">{{ item.taking_name }}</div>
            <div class="text-[0.65rem] text-[#6E7177]">接单人电话</div>
            <div class="text-[#292929] text-[0.7rem]">{{ item.taking_mobile }}</div>
            <div class="text-[0.65rem] text-[#6E7177]">状态</div>
            <div class="text-[#292929] text-[0.7rem]">{{ workStatueTypes.find(option => option.value == item.status)?.label }}</div>
          </div>
        </div>
      </div>

    </div>

    <div class="h-[1rem]"></div>

  </div>
</template>