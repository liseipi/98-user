<script setup lang="ts">
import InputBox from "~/components/inputBox.vue";
import RoomsBox from "~/components/roomsBox.vue";
import AreaBox from "~/components/areaBox.vue";
import type {ArrearsList, ArrearsUser} from "~/types/searchArrearsUser";
import {useInfiniteScroll} from "@vueuse/core";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 欠费用户查询` : '欠费用户查询';
  }
})

let page = 1;
let limit = 20;

let arrearsamount = ref(0);
let defaultamount = ref(0);
let arrearscount = ref(0);
let totalamount = ref(0);

let list = ref<ArrearsList[]>([]);
let status = ref(false);
let isLoading = ref(false);
const scrollContainer = ref<HTMLElement | null>(null)
let hasMore = ref(true);

let formData = reactive({
  areaid: '',
  buildingid: '',
  roomid: '',
  usercode: '',
})

const onSearch = async () => {
  resetList();
  getData();
}

const getData = async () => {
  try {
    isLoading.value = true;
    let res = await useRequest<ArrearsUser>('/wxh5/staff/queryBill', {
      query: {...formData, page, limit}
    });
    if (res.status == 0) {
      arrearsamount.value = res.data.arrearsamount;
      defaultamount.value = res.data.defaultamount;
      arrearscount.value = res.data.arrearscount;
      totalamount.value = res.data.totalamount;
      list.value.push(...res.data.list);
      page += 1;
    } else {
      hasMore.value = false;
      showToast(res.msg)
    }
    status.value = true
    isLoading.value = false
  } catch (e) {
    console.log(e)
  }
}

//重置
const resetList = () => {
  page = 1;
  arrearsamount.value = 0;
  defaultamount.value = 0;
  arrearscount.value = 0;
  totalamount.value = 0;
  list.value = [];
  hasMore.value = true
}

useInfiniteScroll(
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
          {{ isLoading ? '查询中...' : '查询' }}
        </button>
      </div>

      <h3 v-if="status&&list.length==0" class="text-[0.7rem] text-[#292929] mt-4 mb-2">查询结果为空</h3>

      <div v-if="list.length>0">
        <h3 class="text-[0.7rem] text-[#292929] mt-4 mb-2">查询结果</h3>

        <div class="bg-white rounded-lg p-4 mb-2">
          <div class="flex justify-between mb-2">
            <p class="txt-gray-7">欠费金额</p>
            <p class="txt-black-7">¥ {{ arrearsamount }}</p>
          </div>
          <div class="flex justify-between mb-2">
            <p class="txt-gray-7">违约金额</p>
            <p class="txt-black-7">¥ {{ defaultamount }}</p>
          </div>
          <div class="flex justify-between mb-2">
            <p class="txt-gray-7">欠费期数</p>
            <p class="txt-black-7">{{ arrearscount }}</p>
          </div>
          <div class="flex justify-between">
            <p class="txt-gray-7">合计金额</p>
            <p class="txt-black-7">¥ {{ totalamount }}</p>
          </div>
        </div>

        <div ref="scrollContainer">
          <div class="bg-white rounded-lg py-2 px-2 mb-2" v-for="(item, index) in list" :key="index">
            <table class="min-w-full">
              <tbody>
              <tr>
                <td class="py-1 px-1 text-left">
                  <p class="txt-gray-7">
                    用户编号
                    <!--                  <a href="#" class="text-blue-500 hover:underline text-[0.7rem]">查看</a>-->
                  </p>
                </td>
                <td class="py-1 px-1 text-right">
                  <p class="txt-black-7">
                    <span class="txt-black-7">{{ item.usercode }}</span>
                    <span v-show="item.userstatus == -1"
                          class="inline-flex items-center px-[0.4rem] py-[0.2rem] text-[#555A60] text-[0.6rem] rounded font-medium bg-gray-200 ml-2">已销户</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td class="py-1 px-1 text-left"><p class="txt-gray-7">期数</p></td>
                <td class="py-1 px-1 text-right">
                  <p class="txt-black-7">
                    {{ item.charging_time }}
                    <NuxtLink :to="`/searchUser/userinfo/${item.usercode}/searchPayment/${item.charging_time}`" class="inline-flex items-center px-[0.4rem] py-[0.2rem] text-white text-[0.6rem] rounded font-medium bg-blue-600 ml-2">查看</NuxtLink>
                  </p>
                </td>
              </tr>
              <tr>
                <td class="py-1 px-1 text-left"><p class="txt-gray-7">楼盘</p></td>
                <td class="py-1 px-1 text-right">
                  <p class="txt-black-7">{{ item.building_name }}</p>
                </td>
              </tr>
              <tr>
                <td class="py-1 px-1 text-left"><p class="txt-gray-7">房间</p></td>
                <td class="py-1 px-1 text-right">
                  <p class="txt-black-7">{{ item.rommname }}</p>
                </td>
              </tr>
              <tr>
                <td class="py-1 px-1 text-left"><p class="txt-gray-7">用户名</p></td>
                <td class="py-1 px-1 text-right">
                  <p class="txt-black-7">{{ item.name }}</p>
                </td>
              </tr>
              <tr>
                <td class="py-1 px-1 text-left"><p class="txt-gray-7">手机号</p></td>
                <td class="py-1 px-1 text-right">
                  <p class="txt-black-7">{{ item.mobile }}</p>
                </td>
              </tr>
              <!--            <tr>-->
              <!--              <td class="py-1 px-1 text-left"><p class="txt-gray-7">欠费金额</p></td>-->
              <!--              <td class="py-1 px-1 text-right">-->
              <!--                <p class="txt-black-7">{{ item.arrearsamount }}</p>-->
              <!--              </td>-->
              <!--            </tr>-->
              <tr>
                <td class="py-1 px-1 text-left"><p class="txt-gray-7">违约金额</p></td>
                <td class="py-1 px-1 text-right">
                  <p class="txt-black-7">¥ {{ item.penalty }}</p>
                </td>
              </tr>
              <tr>
                <td class="py-1 px-1 text-left"><p class="txt-gray-7">合计金额</p></td>
                <td class="py-1 px-1 text-right">
                  <p class="txt-black-7">¥ {{ item.total_money }}</p>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>

    <div class="h-[1rem]"></div>

  </div>
</template>