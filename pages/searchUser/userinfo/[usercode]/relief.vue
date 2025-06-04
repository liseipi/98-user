<script setup lang="ts">
import {ReliefReasonType} from "~/composables/optionsData";
import type {ReduceWaterData, ReduceWaterList} from "~/types/userInfo";

let route = useRoute()
let usercode = route.params.usercode;

let formData = reactive({
  reductionamount: '',
  reason: 0
})

let page = 1;
let limit = 20;
let list = ref<ReduceWaterList[]>([]);
const getData = async () => {
  let res = await useRequest<ReduceWaterData>('/wxh5/staff/queryExemptionLog', {
    query: {
      usercode,
      page,
      limit,
    }
  });
  if (res.status == 0) {
    list.value = res.data;
  } else {
    showToast({
      message: res.msg
    })
  }
}

const onSubmit = async () => {
  if (!formData.reductionamount || !formData.reductionamount.length) {
    showToast({type: 'fail', message: '请填写必须项'});
    return;
  }

  let res = await useRequest('/wxh5/staff/postExemptionLog', {
    method: 'POST',
    body: {
      usercode,
      ...formData,
      reason: ReliefReasonType.find(item => item.value == formData.reason)?.label
    },
  })
  if (res.status === 0) {
    showToast({
      type: 'success',
      message: res.msg,
      onClose: () => {
        location.reload()
      }
    });
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
      <div class="bg-white rounded p-4 mb-4 space-y-2">
        <InputBox
            label="减免量(L)"
            placeholder="请输入减免量"
            required
            v-model="formData.reductionamount"
        ></InputBox>
        <hr class="border-t border-gray-200">
        <SelectBox
            label="原因"
            placeholder="请选择原因"
            required
            v-model="formData.reason"
            :options="ReliefReasonType">
        </SelectBox>
        <hr class="border-t border-gray-200">
        <div class="pt-2">
          <button @click="onSubmit"
                  class="bg-blue-500 hover:bg-blue-700 text-white text-[0.7rem] py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
            提交减免
          </button>
        </div>
      </div>

      <div v-if="list.length>0">
        <h2 class="text-[#292929] text-[0.7rem] mb-2">减免记录</h2>
        <div class="bg-white rounded overflow-x-auto">
          <table class="w-full table-auto border-collapse">
            <thead>
            <tr class="text-left text-nowrap">
              <th class="py-2 px-2 txt-gray-7 font-normal">减免量</th>
              <th class="py-2 px-2 txt-gray-7 font-normal">时间</th>
              <th class="py-2 px-2 txt-gray-7 font-normal">账期</th>
              <th class="py-2 px-2 txt-gray-7 font-normal">原因</th>
            </tr>
            </thead>
            <tbody>
            <tr class="border-b hover:bg-gray-100 text-nowrap"
                v-for="item in list" :key="item.id"
            >
              <td class="py-2 px-2 txt-black-7">{{ item.reductionamount }}</td>
              <td class="py-2 px-2 txt-black-7 text-nowrap">{{ item.createtime }}</td>
              <td class="py-2 px-2 txt-black-7">{{ item.charging_time }}</td>
              <td class="py-2 px-2 txt-black-7">{{ item.reason }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
    <div class="h-[1rem]"></div>
  </div>
</template>