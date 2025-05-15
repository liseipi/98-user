<script setup lang="ts">
import type {WatchDetail} from "~/types/WatchDetail";


let route = useRoute()
let router = useRouter()

let {id} = route.query;
let usercode = route.params.usercode;

let list = ref<WatchDetail[]>([])

let getData = async () => {
  let res = await useRequest<WatchDetail[]>('/wxh5/staff/queryWaterUsageDetails', {
    query: {
      logid: id,
      usercode,
    }
  });
  if (res.status === 0) {
    list.value = res.data;
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
      <div class="bg-white rounded overflow-x-auto">
        <table class="w-full table-auto border-collapse">
          <thead>
          <tr class="text-left">
            <th class="py-2 px-4 text-nowrap txt-gray-7">上传时间<br>交易时间</th>
            <th class="py-2 px-4 text-nowrap txt-gray-7">用量<br>笔数</th>
            <th class="py-2 px-4 text-nowrap txt-gray-7">脉冲数<br>用水时长</th>
            <th class="py-2 px-4 text-nowrap txt-gray-7">来源<br>入账去向</th>
            <th class="py-2 px-4 text-nowrap txt-gray-7">帐期</th>
          </tr>
          </thead>
          <tbody>
          <tr v-if="list.length>0" v-for="(item, index) in list" :key="index" class="border-b hover:bg-gray-100">
            <td class="py-2 px-4 txt-black-7 font-normal text-nowrap">{{item.createtime}}<br>{{item.tradingtime}}</td>
            <td class="py-2 px-4 txt-black-7 font-normal text-nowrap">{{item.reading}}<br>{{item.count}}</td>
            <td class="py-2 px-4 txt-black-7 font-normal text-nowrap">{{item.pulse}}<br>{{item.trx_duration}}</td>
            <td class="py-2 px-4 txt-black-7 font-normal text-nowrap">{{item.src}}<br>{{item.bill_to}}</td>
            <td class="py-2 px-4 txt-black-7 font-normal text-nowrap">{{item.charging_time}}</td>
          </tr>
          <tr>
            <td colspan="5" class="py-12 px-4 txt-black-7 font-normal text-nowrap text-center">暂无数据</td>
          </tr>
          </tbody>
        </table>
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