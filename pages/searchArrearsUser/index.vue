<script setup lang="ts">
import {workTypes} from "~/composables/optionsData";
import SelectBox from "~/components/selectBox.vue";
import InputBox from "~/components/inputBox.vue";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 欠费用户查询` : '欠费用户查询';
  }
})

let formData = reactive({
  areaid: '',
  buildingid: '',
  roomid: '',
  usercode: '',
})

const onSearch = async () => {
  let res = await useRequest('/wxh5/staff/queryBill', {
    areaid: formData.areaid,
    buildingid: formData.areaid,
    roomid: formData.areaid,
    usercode: formData.areaid
  });
}

</script>

<template>
  <div class="container">
    <div class="mx-[0.8rem] py-4">
      <div class="bg-white rounded-md p-4 grid grid-cols-1 gap-y-2">
        <SelectBox
            :options="workTypes"
            label="区域"
            v-model="formData.areaid"
            placeholder="不分区域"
        />
        <hr/>
        <SelectBox
            :options="workTypes"
            v-model="formData.buildingid"
            label="楼盘"
            placeholder="不分楼盘"
        />
        <hr/>
        <InputBox
            label="房号"
            required
            placeholder="请输入房号"
            v-model="formData.roomid"
        ></InputBox>
        <hr/>
        <InputBox
            label="用户编号"
            required
            placeholder="请输入用户编号"
            v-model="formData.usercode"
        ></InputBox>
        <hr/>
        <button class="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-2 px-8 rounded" @click="onSearch">
          查询
        </button>
      </div>

      <h3 class="text-[0.7rem] text-[#292929] mt-4 mb-2">查询结果</h3>
      <div class="bg-white rounded-lg p-4 mb-2">
        <div class="flex justify-between mb-2">
          <p class="txt-gray-7">欠费金额</p>
          <p class="txt-black-7">¥ 2300.00</p>
        </div>
        <div class="flex justify-between mb-2">
          <p class="txt-gray-7">违约金额</p>
          <p class="txt-black-7">¥ 96.43</p>
        </div>
        <div class="flex justify-between mb-2">
          <p class="txt-gray-7">欠费期数</p>
          <p class="txt-black-7">20</p>
        </div>
        <div class="flex justify-between">
          <p class="txt-gray-7">合计金额</p>
          <p class="txt-black-7">¥ 2396.96</p>
        </div>
      </div>

      <div class="bg-white rounded-lg py-2 px-2">
        <table class="min-w-full table-auto">
          <thead class="border-b border-gray-200">
          <tr>
            <th class="py-1 px-1 text-center txt-gray-7 font-normal">房号</th>
            <th class="py-1 px-1 text-center txt-gray-7 font-normal">欠费<br>金额</th>
            <th class="py-1 px-1 text-center txt-gray-7 font-normal">违约<br>金额</th>
            <th class="py-1 px-1 text-center txt-gray-7 font-normal">合计<br>金额</th>
            <th class="py-1 px-1 text-center txt-gray-7 font-normal">欠费<br>期数</th>
            <th class="py-1 px-1 text-center txt-gray-7 font-normal">明细</th>
          </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          <tr>
            <td class="py-1 px-1 text-center txt-black-7">902</td>
            <td class="py-1 px-1 text-center txt-black-7">865.32</td>
            <td class="py-1 px-1 text-center txt-black-7">86.43</td>
            <td class="py-1 px-1 text-center txt-black-7">968.375</td>
            <td class="py-1 px-1 text-center txt-black-7">12</td>
            <td class="py-1 px-1 text-center">
              <a href="#" class="text-blue-500 hover:underline text-[0.7rem]">查看</a>
            </td>
          </tr>
          </tbody>
        </table>
        <hr>
        <table class="min-w-full">
          <tbody>
          <tr>
            <td class="py-1 px-1 text-left">
              <p class="txt-gray-7">
                用户编号
                <a href="#" class="text-blue-500 hover:underline text-[0.7rem]">查看</a>
              </p>
            </td>
            <td class="py-1 px-1 text-right">
              <p class="txt-black-7">
                <span class="txt-black-7">059000000003-0764</span>
                <span
                    class="inline-flex items-center px-[0.4rem] py-[0.2rem] text-[#555A60] text-[0.6rem] rounded font-medium bg-gray-200 ml-2">
                        销户
                      </span>
              </p>
            </td>
          </tr>
          <tr>
            <td class="py-1 px-1 text-left"><p class="txt-gray-7">用户名</p></td>
            <td class="py-1 px-1 text-right">
              <p class="txt-black-7">小星星</p>
            </td>
          </tr>
          <tr>
            <td class="py-1 px-1 text-left"><p class="txt-gray-7">手机号</p></td>
            <td class="py-1 px-1 text-right">
              <p class="txt-black-7">13800138000</p>
            </td>
          </tr>
          <tr>
            <td class="py-1 px-1 text-left"><p class="txt-gray-7">欠费金额</p></td>
            <td class="py-1 px-1 text-right">
              <p class="txt-black-7">2024-12-18</p>
            </td>
          </tr>
          <tr>
            <td class="py-1 px-1 text-left"><p class="txt-gray-7">违约金额</p></td>
            <td class="py-1 px-1 text-right">
              <p class="txt-black-7">¥ 856.32</p>
            </td>
          </tr>
          <tr>
            <td class="py-1 px-1 text-left"><p class="txt-gray-7">合计金额</p></td>
            <td class="py-1 px-1 text-right">
              <p class="txt-black-7">¥ 856.32</p>
            </td>
          </tr>
          </tbody>
        </table>
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