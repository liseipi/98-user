<script setup lang="ts">
import type {WatchDetail} from "~/types/WatchDetail";

let route = useRoute()
let router = useRouter()

let {id} = route.query;
let usercode = route.params.usercode;

let details = ref<WatchDetail|null>(null)

let getData = async () => {
  let res = await useRequest<WatchDetail>('/wxh5/staff/queryWaterUsageDetails', {
    query: {
      logid: id,
      usercode,
    }
  });
  if (res.status === 0) {
    details.value = res.data;
  } else {
    showToast(res.msg);
  }
}

onMounted(() => {
  getData();
});

</script>

<template>
  <div class="container container-blue-bg">
    <div class="mx-[0.8rem] py-4">
      <div v-if="details" class="bg-white rounded overflow-x-auto p-4">
        <div class="grid grid-cols-2 gap-y-2">
          <div class="text-[0.65rem] text-[#6E7177]">上传时间</div>
          <div class="text-[#292929] text-[0.7rem]">{{ details.createtime }}</div>
          <div class="text-[0.65rem] text-[#6E7177]">交易时间</div>
          <div class="text-[#292929] text-[0.7rem]">{{ details.tradingtime }}</div>
          <div class="text-[0.65rem] text-[#6E7177]">用量</div>
          <div class="text-[#292929] text-[0.7rem]">{{ details.reading }}</div>
          <div class="text-[0.65rem] text-[#6E7177]">笔数</div>
          <div class="text-[#292929] text-[0.7rem]">{{ details.count }}</div>
          <div class="text-[0.65rem] text-[#6E7177]">脉冲数</div>
          <div class="text-[#292929] text-[0.7rem]">{{ details.pulse }}</div>
          <div class="text-[0.65rem] text-[#6E7177]">用水时长</div>
          <div class="text-[#292929] text-[0.7rem]">{{ details.trx_duration }}</div>
          <div class="text-[0.65rem] text-[#6E7177]">来源</div>
          <div class="text-[#292929] text-[0.7rem]">{{ details.src }}</div>
          <div class="text-[0.65rem] text-[#6E7177]">入账去向</div>
          <div class="text-[#292929] text-[0.7rem]">{{ details.bill_to }}</div>
          <div class="text-[0.65rem] text-[#6E7177]">帐期</div>
          <div class="text-[#292929] text-[0.7rem]">{{ details.charging_time }}</div>
        </div>
      </div>
    </div>

    <div class="h-[1rem]"></div>

    <div class="mx-[0.8rem] py-4">
      <button @click="router.back()" class="w-full bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-2 px-8 rounded">
        返回
      </button>
    </div>
  </div>
</template>