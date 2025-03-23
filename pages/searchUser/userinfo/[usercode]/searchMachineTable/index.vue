<script setup lang="ts">
import {DepositDestinationType} from "~/composables/optionsData";
import type {MachineTableData, MachineTableList} from "~/types/userInfo";

let route = useRoute()
let usercode = route.params.usercode;

let formData = reactive({
  usercode: usercode,
  starttime: '',
  endtime: '',
  bill_to: ''
})

let data = reactive({
  recentlyreading: '',
  recentlyliters: '',
  recentlytime: ''
})
let list = ref<MachineTableList[]>([]);
const onSubmit = async () => {
  if (!formData.starttime || !formData.endtime || !formData.bill_to) {
    showToast('请选择搜索项');
    return;
  }
  let res = await useRequest<MachineTableData>('/wxh5/staff/queryMechanical', {
    data: {...formData}
  })
  if (res.status === 0) {
    data.recentlyreading = res.data.recentlyreading;
    data.recentlyliters = res.data.recentlyliters;
    data.recentlytime = res.data.recentlytime;
    list.value = res.data.list;
  }

}

</script>

<template>
  <div class="container container-blue-bg">
    <div class="mx-[0.8rem] py-4">
      <div v-if="list.length>0" class="bg-white rounded p-4 mb-2">
        <div class="grid grid-cols-3 gap-4">
          <div>
            <p class="txt-gray-7">最近抄表数</p>
            <p class="txt-black-7">{{data.recentlyreading}}</p>
          </div>
          <div>
            <p class="txt-gray-7">最近抄表数(升)</p>
            <p class="txt-black-7">{{data.recentlyliters}}</p>
          </div>
          <div>
            <p class="txt-gray-7">最近抄表日期</p>
            <p class="txt-black-7">{{data.recentlytime}}</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded p-4 mb-4 grid grid-cols-1 gap-y-4">
        <date-box label="创建开始时间" v-model="formData.starttime"/>
        <hr/>
        <date-box label="创建结束时间" v-model="formData.endtime"/>
        <hr/>
        <SelectBox
            label="⼊账去向"
            placeholder="请选择⼊账去向"
            v-model="formData.bill_to"
            :options="DepositDestinationType">
        </SelectBox>
        <hr/>
        <button @click="onSubmit" class="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-2 px-8 rounded">
          查询
        </button>
      </div>

      <div v-if="list.length>0">
        <h3 class="text-[0.7rem] text-[#292929] mt-4 mb-2">查询结果</h3>
        <div class="bg-white rounded p-4 mb-2">
          <div class="flex justify-between">
            <p class="txt-gray-7">机械表用量(升)</p>
            <p class="txt-black-7">{{data.count}}</p>
          </div>
        </div>
        <div class="bg-white rounded mb-2">
          <table class="w-full table-auto border-collapse">
            <thead>
            <tr class="text-left">
              <th class="py-2 px-4 txt-black-7">抄表时间</th>
              <th class="py-2 px-4 txt-black-7">用量</th>
              <th class="py-2 px-4 txt-black-7">明细</th>
            </tr>
            </thead>
            <tbody>
            <tr class="border-b hover:bg-gray-100 txt-black-7" v-for="item in list" :key="item.id">
              <td class="py-2 px-4 txt-black-7">{{item.date}}</td>
              <td class="py-2 px-4 txt-black-7">{{item.liters}}</td>
              <td class="py-2 px-4 text-blue-500"><a href="#">查看</a></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>

    <div class="h-[1rem]"></div>

  </div>
</template>