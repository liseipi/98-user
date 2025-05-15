<script setup lang="ts">
import InputBox from "~/components/inputBox.vue";
import RoomsBox from "~/components/roomsBox.vue";
import AreaBox from "~/components/areaBox.vue";
import type {ArrearsList, ArrearsUser} from "~/types/searchArrearsUser";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 欠费用户查询` : '欠费用户查询';
  }
})

let arrearsamount = ref(0);
let defaultamount = ref(0);
let arrearscount = ref(0);
let totalamount = ref(0);
let list = ref<ArrearsList[]>([]);

let formData = reactive({
  areaid: '',
  buildingid: '',
  roomid: '',
  usercode: '',
})

const onSearch = async () => {
  let res = await useRequest<ArrearsUser[]>('/wxh5/staff/queryBill', {
    areaid: formData.areaid,
    buildingid: formData.areaid,
    roomid: formData.areaid,
    usercode: formData.areaid
  });
  if (res.status == 0) {
    arrearsamount.value = res.data.arrearsamount;
    defaultamount.value = res.data.defaultamount;
    arrearscount.value = res.data.arrearscount;
    totalamount.value = res.data.totalamount;
    list.value = res.data.list as ArrearsList[];
  }
}

</script>

<template>
  <div class="container container-blue-bg">
    <div class="mx-[0.8rem] py-4">
      <div class="bg-white rounded-md p-4 grid grid-cols-1 gap-y-2">
        <AreaBox
            v-model="formData.areaid"
            label="区域"
            placeholder="不分区域"
        />
        <hr/>
        <BuildingBox
            v-model="formData.buildingid"
            :area-id="formData.areaid"
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
        <InputBox
            label="用户编号"
            placeholder="请输入用户编号"
            v-model="formData.usercode"
        ></InputBox>
        <hr/>
        <button class="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-2 px-8 rounded" @click="onSearch">
          查询
        </button>
      </div>

      <div v-if="list.length>0">
        <h3 class="text-[0.7rem] text-[#292929] mt-4 mb-2">查询结果</h3>
        <div class="bg-white rounded-lg p-4 mb-2">
          <div class="flex justify-between mb-2">
            <p class="txt-gray-7">欠费金额</p>
            <p class="txt-black-7">¥ {{arrearsamount}}</p>
          </div>
          <div class="flex justify-between mb-2">
            <p class="txt-gray-7">违约金额</p>
            <p class="txt-black-7">¥ {{defaultamount}}</p>
          </div>
          <div class="flex justify-between mb-2">
            <p class="txt-gray-7">欠费期数</p>
            <p class="txt-black-7">{{arrearscount}}</p>
          </div>
          <div class="flex justify-between">
            <p class="txt-gray-7">合计金额</p>
            <p class="txt-black-7">¥ {{totalamount}}</p>
          </div>
        </div>

        <div class="bg-white rounded-lg py-2 px-2" v-for="(item, index) in list" :key="index">
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
              <td class="py-1 px-1 text-center txt-black-7">{{item.rommname}}</td>
              <td class="py-1 px-1 text-center txt-black-7">{{item.arrearsamount}}</td>
              <td class="py-1 px-1 text-center txt-black-7">{{item.defaultamount}}</td>
              <td class="py-1 px-1 text-center txt-black-7">{{item.totalamount}}</td>
              <td class="py-1 px-1 text-center txt-black-7">{{item.arrearscount}}</td>
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
                  <span class="txt-black-7">{{item.detailslist.usercode}}</span>
                  <span class="inline-flex items-center px-[0.4rem] py-[0.2rem] text-[#555A60] text-[0.6rem] rounded font-medium bg-gray-200 ml-2">销户</span>
                </p>
              </td>
            </tr>
            <tr>
              <td class="py-1 px-1 text-left"><p class="txt-gray-7">用户名</p></td>
              <td class="py-1 px-1 text-right">
                <p class="txt-black-7">{{item.detailslist.username}}</p>
              </td>
            </tr>
            <tr>
              <td class="py-1 px-1 text-left"><p class="txt-gray-7">手机号</p></td>
              <td class="py-1 px-1 text-right">
                <p class="txt-black-7">{{item.detailslist.usermobile}}</p>
              </td>
            </tr>
            <tr>
              <td class="py-1 px-1 text-left"><p class="txt-gray-7">欠费金额</p></td>
              <td class="py-1 px-1 text-right">
                <p class="txt-black-7">{{item.detailslist.itemlist.arrearsamount}}</p>
              </td>
            </tr>
            <tr>
              <td class="py-1 px-1 text-left"><p class="txt-gray-7">违约金额</p></td>
              <td class="py-1 px-1 text-right">
                <p class="txt-black-7">¥ {{item.detailslist.itemlist.defaultamount}}</p>
              </td>
            </tr>
            <tr>
              <td class="py-1 px-1 text-left"><p class="txt-gray-7">合计金额</p></td>
              <td class="py-1 px-1 text-right">
                <p class="txt-black-7">¥ {{item.detailslist.itemlist.totalamount}}</p>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="h-[1rem]"></div>

  </div>
</template>