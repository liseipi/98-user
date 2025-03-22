<script setup lang="ts">
import {workStatueTypes} from "~/composables/optionsData";
import type {WatchData, WatchDataList} from "~/types/userInfo";

let route = useRoute()
let usercode = route.params.usercode;

let page = 1;
let limit = 20;
let formData = reactive({
  usercode: usercode,
  starttime: '',
  endtime: '',
  src: '',
  bill_to: '',
})

let data = reactive({
  count: '',
  totalusage: '',
  flowmeterusage: '',
  erroramount: '',
})
let list = ref<WatchDataList[]>([]);
const onSubmit = async () => {
  let res = await useRequest<WatchData>('/wxh5/staff/queryWaterUsageLog', {
    data: {
      ...formData,
      page,
      limit
    },
  })
  if (res.status === 0) {
    data.count = res.data.count;
    data.totalusage = res.data.totalusage;
    data.flowmeterusage = res.data.flowmeterusage;
    data.erroramount = res.data.erroramount;
    list.value = res.data.list;
  }
}

</script>

<template>
  <div class="container-blue-bg">
    <div class="mx-[0.8rem] py-4">
      <div class="bg-white rounded p-4 grid grid-cols-1 gap-y-4">
        <date-box label="创建开始时间" v-model="formData.starttime"/>
        <hr/>
        <date-box label="创建结束时间" v-model="formData.endtime"/>
        <hr/>
        <SelectBox
            :options="workStatueTypes"
            v-model="formData.origin"
            label="数据来源"
            name="type"
            placeholder="不分数据来源"
        />
        <hr/>
        <SelectBox
            :options="workStatueTypes"
            v-model="formData.bill_to"
            label="入账去向"
            name="type"
            placeholder="不分入账去向"
        />
        <hr/>
        <button @click="onSubmit" class="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-2 px-8 rounded">
          查询
        </button>
      </div>

      <div v-if="list.length > 0">
        <h3 class="text-[0.7rem] text-[#292929] mt-4 mb-2">查询结果</h3>
        <div class="bg-white rounded p-4 mb-2">
          <div class="grid grid-cols-2 gap-2">
            <div>
              <p class="txt-gray-7">总用量(升)</p>
            </div>
            <div class="text-right">
              <p class="txt-black-7">{{data.totalusage}}</p>
            </div>
            <div>
              <p class="txt-gray-7">流量计用量(升)</p>
            </div>
            <div class="text-right">
              <p class="txt-black-7">{{data.flowmeterusage}}</p>
            </div>
            <div>
              <p class="txt-gray-7">累计误差量(升)</p>
            </div>
            <div class="text-right">
              <p class="txt-black-7">{{data.erroramount}}</p>
            </div>
          </div>
        </div>
        <div class="bg-white rounded overflow-x-auto">
          <table class="w-full table-auto border-collapse">
            <thead>
            <tr class="border-b hover:bg-gray-100 text-left">
              <th class="py-2 px-1 txt-gray-7 text-nowrap">上传时间</th>
              <th class="py-2 px-1 txt-gray-7 text-nowrap">用量</th>
              <th class="py-2 px-1 txt-gray-7 text-nowrap">笔数</th>
              <th class="py-2 px-1 txt-gray-7 text-nowrap">用水时长</th>
              <th class="py-2 px-1 txt-gray-7 text-nowrap">明细</th>
            </tr>
            </thead>
            <tbody>
            <tr class="border-b hover:bg-gray-100" v-for="item in list" :key="item.id">
              <td class="py-2 px-1 txt-black-7 txt-black-7">{{item.createtime}}</td>
              <td class="py-2 px-1 txt-black-7 txt-black-7">{{item.reading}}</td>
              <td class="py-2 px-1 txt-black-7 txt-black-7">{{item.count}}</td>
              <td class="py-2 px-1 txt-black-7 txt-black-7">{{item.trx_duration}}</td>
              <td class="py-2 px-1 txt-black-7 txt-black-7 text-blue-500"><a href="#">查看</a></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>

    <div class="h-[1rem]"></div>

  </div>
</template>