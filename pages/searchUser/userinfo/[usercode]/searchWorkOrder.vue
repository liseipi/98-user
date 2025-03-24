<script setup lang="ts">
import {workStatueTypes, workTypes} from "~/composables/optionsData";

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
</script>

<template>
  <div class="container container-blue-bg">
    <div class="mx-[0.8rem] py-4">
      <div class="bg-white rounded p-4 grid grid-cols-1 gap-y-4">
        <date-box label="创建开始时间" v-model="formData.starttime"/>
        <hr/>
        <date-box label="创建结束时间" v-model="formData.endtime"/>
        <hr/>
        <SelectBox
            :options="workTypes"
            v-model="formData.type"
            label="工单类型"
            name="type"
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
        <button class="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-2 px-8 rounded">
          查询
        </button>
      </div>

      <h3 class="text-[0.7rem] text-[#292929] mt-4 mb-2">查询结果</h3>
      <div class="bg-white rounded p-4 mb-2">
        <div class="grid grid-cols-2 gap-2">
          <div>
            <p class="txt-gray-7">未完成工单总数</p>
          </div>
          <div class="text-right">
            <p class="txt-black-7">72</p>
          </div>
        </div>
      </div>

    </div>

    <div class="h-[1rem]"></div>

  </div>
</template>