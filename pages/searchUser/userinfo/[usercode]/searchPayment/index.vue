<script lang="ts" setup>
import type {MonthOrderList, PaymentData} from "~/types/searchPayment";

const route = useRoute();
const router = useRouter();
const usercode = route.params.usercode;

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 账单查询` : '账单查询';
  }
})

let info = ref<MonthOrderList[]>([]);

let monthID = ref('');
const onSelectBill = () => {
  router.push(`/searchUser/userinfo/${usercode}/searchPayment/${monthID.value}`);
}

const getData = async () => {
  let res = await useRequest<PaymentData>('/wxh5/staff//getUserOrderDate', {
    query: {
      usercode
    }
  })
  if (res.status == 0) {
    info.value = res.data;
  }
}

onMounted(() => {
  getData();
})

</script>

<template>
  <div class="container container-blue-color pt-4">
    <div class="bg-white rounded-lg shadow-md mx-[0.8rem] p-4">
      <order-month :orderList="info" v-model="monthID" @event:onSelectBill="onSelectBill"></order-month>

      <hr class="border-gray-300 mb-4"/>

<!--      <div class="mb-2">-->
<!--        <div class="flex justify-between">-->
<!--          <span class="text-[#87888C] text-[0.7rem]">当前计费期:</span>-->
<!--          <span class="text-[#131416] text-[0.7rem]">{{ info?.charging_time }}</span>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="mb-2">-->
<!--        <div class="flex justify-between">-->
<!--          <span class="text-[#87888C] text-[0.7rem]">应缴金额:</span>-->
<!--          <span class="text-[#131416] text-[0.7rem]">{{ info?.arrearsamount }}元</span>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="mb-2">-->
<!--        <div class="flex justify-between">-->
<!--          <span class="text-[#87888C] text-[0.7rem]">违约金:</span>-->
<!--          <span class="text-[#131416] text-[0.7rem]">{{ info?.defaultamount }}元</span>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="mb-4">-->
<!--        <div class="flex justify-between">-->
<!--          <span class="text-[#87888C] text-[0.7rem]">合计应缴:</span>-->
<!--          <span class="text-[#131416] text-[0.7rem]">{{ info?.totalamount }}元</span>-->
<!--        </div>-->
<!--      </div>-->

    </div>
  </div>
</template>
