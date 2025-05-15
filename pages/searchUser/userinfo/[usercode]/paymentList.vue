<script setup lang="ts">
import type {PaymentData, PaymentDataList} from "~/types/userInfo";

let route = useRoute()
let usercode = route.params.usercode;

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 查询微信缴费流水` : '查询微信缴费流水';
  }
})

let page = 1;
let limit = 20;
let formData = reactive({
  usercode: usercode,
  starttime: '',
  endtime: '',
})

let count = ref();
let list = ref<PaymentDataList[]>([]);
const onSearch = async () => {
  if (!formData.starttime || !formData.endtime) {
    showToast('请选择时间区间');
    return;
  }
  let res = await useRequest<PaymentData>('/wxh5/staff/queryPayLog', {
    query: {
      page,
      limit,
      ...formData,
    },
  });
  if (res.status === 0) {
    count.value = res.data.count;
    list.value = res.data.list;
  } else {
    showToast(res.msg);
  }
}
</script>

<template>
  <div class="container container-blue-bg">
    <div class="mx-[0.8rem] py-4">
      <div class="bg-white rounded-md p-4 grid grid-cols-1 gap-y-4">
        <date-box label="创建开始时间" v-model="formData.starttime"/>
        <hr/>
        <date-box label="创建结束时间" v-model="formData.endtime"/>
        <hr/>
        <button @click="onSearch" class="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-2 px-8 rounded">
          查询
        </button>
      </div>

      <div v-if="list?.length>0"
           style="-webkit-mask: radial-gradient(circle at bottom center, #0000 7px, red 0); -webkit-mask-position: -40px; -webkit-mask-size:  20px 100%;">
        <div class="bg-white rounded-md mt-4 p-4"
             style="-webkit-mask: radial-gradient(circle at left 25%, transparent 12px, red 12px), radial-gradient(circle at right 25%, transparent 12px, red 0); -webkit-mask-size: 51%; -webkit-mask-position: 0, 100%; -webkit-mask-repeat: no-repeat;">
          <h2 class="text-[#292929] text-[0.8rem] font-bold mb-4">交易明细</h2>
          <hr class="border-t border-gray-200 border-dashed my-4"/>
          <div class="grid grid-cols-2 gap-y-2" v-for="item in list" :key="item.id">
            <div class="text-[0.65rem] text-[#6E7177]">交易单号</div>
            <div class="text-[#292929] text-[0.7rem]">{{ item.transaction }}</div>
            <div class="text-[0.65rem] text-[#6E7177]">缴费微信名</div>
            <div class="text-[#292929] text-[0.7rem]">{{ item.wxname }}</div>
            <div class="text-[0.65rem] text-[#6E7177]">金额</div>
            <div class="text-[#292929] text-[0.7rem]">¥ {{ item.amount }}</div>
            <div class="text-[0.65rem] text-[#6E7177]">支付方式</div>
            <div class="text-[#292929] text-[0.7rem]">{{ item.paytype }}</div>
            <div class="text-[0.65rem] text-[#6E7177]">支付时间</div>
            <div class="text-[#292929] text-[0.7rem]">{{ item.paytime }}</div>
          </div>
        </div>

      </div>

    </div>

    <div class="h-[1rem]"></div>

  </div>
</template>