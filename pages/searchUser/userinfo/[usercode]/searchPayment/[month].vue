<script setup lang="ts">
import type {BillDetails} from "~/types/billDetails";
import paid from 'assets/image/paid.png'
import pending from 'assets/image/pending.png'

const route = useRoute()
const userCode = route.params.usercode;
const month = route.params.month;

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${month}账单详细` : `${month}账单详细`;
  }
})

let data = ref() // <BillDetails> 暂时不用 type
const getData = async () => {
  let res = await useRequest('/wxh5/staff/billDetails', {
    query: {
      usercode: userCode,
      charging_time: month
    }
  })
  if (res.status == 0) {
    data.value = res.data;
  } else {
    showToast(res.msg);
  }
}

onMounted(() => {
  getData();
})

const icon = computed(() => data.value?.pay_status == 1 ? paid : pending);

</script>

<template>
  <div class="container container-blue-color">
    <div class="mx-[0.8rem]">
      <div class="h-4"></div>
      <div class="line">
        <div class="bg-white px-4 pt-2 pb-4 line2">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-[0.85rem] font-bold">直饮水费账单</h2>
            <div class="relative inline-block">
              <div class="w-20 h-14 rounded-full flex items-center justify-center relative">
                <img :src="icon" class="absolute top-0 w-20 h-20" alt="paid">
              </div>
            </div>
          </div>
          <hr class="border-t border-dashed border-gray-200 my-4"/>
          <div class="grid grid-cols-2 gap-y-2">
            <div class="text-[#6E7177] text-[0.65rem]">用户地址</div>
            <div class="text-[#222222] text-[0.65rem]">{{ data?.user?.area_name }} {{ data?.user?.building_name }} {{ data?.user?.room_name }}</div>
            <div class="text-[#6E7177] text-[0.65rem]">支付项目</div>
            <div class="text-[#222222] text-[0.65rem]">{{ data?.info?.paid_item }}</div>
            <div class="text-[#6E7177] text-[0.65rem]">开始时间</div>
            <div class="text-[#222222] text-[0.65rem]">{{ data?.user?.s_charging_time_text }}</div>
            <div class="text-[#6E7177] text-[0.65rem]">结束时间</div>
            <div class="text-[#222222] text-[0.65rem]">{{ data?.user?.e_charging_time_text }}</div>
            <div class="text-[#6E7177] text-[0.65rem]">上期读数</div>
            <div class="text-[#222222] text-[0.65rem]">{{ data?.info?.last_num }} 升</div>
            <div class="text-[#6E7177] text-[0.65rem]">本期读数</div>
            <div class="text-[#222222] text-[0.65rem]">{{ data?.info?.now_num }} 升</div>
            <div class="text-[#6E7177] text-[0.65rem]">减免数 (升)</div>
            <div class="text-[#222222] text-[0.65rem]">{{ data?.user?.reduction_num }}升</div>
            <div class="text-[#6E7177] text-[0.65rem]">水费金额 (元)</div>
            <div class="text-[#222222] text-[0.65rem]">¥{{ data?.user?.water }}</div>
            <div class="text-[#6E7177] text-[0.65rem]">优惠金额 (元)</div>
            <div class="text-[#222222] text-[0.65rem]">¥{{ data?.info?.discount_money }}</div>
            <div class="text-[#6E7177] text-[0.65rem]">赠送金额 (元)</div>
            <div class="text-[#222222] text-[0.65rem]">¥{{ data?.user?.gift_amount }}</div>
            <div class="text-[#6E7177] text-[0.65rem]">充值金额 (元)</div>
            <div class="text-[#222222] text-[0.65rem]">¥{{ data?.user?.recharge }}</div>
            <div class="text-[#6E7177] text-[0.65rem]">应缴金额 (元)</div>
            <div class="text-[#222222] text-[0.65rem]">¥{{ data?.info?.money }}</div>
            <div class="text-[#6E7177] text-[0.65rem]">违约金 (元)</div>
            <div class="text-[#222222] text-[0.65rem]">¥{{ data?.info?.penalty }}</div>
            <div class="text-[#6E7177] text-[0.65rem]">合计应缴金额 (元)</div>
            <div class="text-[#222222] text-[0.65rem]">¥{{ data?.info?.totalmoney }}</div>
          </div>

          <div class="h-4"></div>
        </div>
      </div>
      <div class="h-4"></div>
    </div>
  </div>
</template>

<style scoped>
.line {
  -webkit-mask: radial-gradient(circle at bottom center, #0000 7px, red 0);
  -webkit-mask-position: -40px;
  -webkit-mask-size: 20px 100%;
}

.line2 {
  -webkit-mask: radial-gradient(circle at left 18%, transparent 12px, red 12px), radial-gradient(circle at right 18%, transparent 12px, red 0);
  -webkit-mask-size: 51%;
  -webkit-mask-position: 0, 100%;
  -webkit-mask-repeat: no-repeat;
}
</style>