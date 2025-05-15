<script setup lang="ts">
import AreaBox from "~/components/areaBox.vue";
import RoomsBox from "~/components/roomsBox.vue";
import {userType} from "~/composables/optionsData";
import InputBox from "~/components/inputBox.vue";

let route = useRoute()
let usercode = route.params.usercode;

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 编辑用户` : '编辑用户';
  }
})

let formData = reactive({
  "usercode": "",
  "areaid": 0,
  "buildingid": 0,
  "roomid": 0,
  "usertype": "",
  "username": "",
  "usermobile": "",
  "mealid": 0,
  "createtime": "",
  "bankid": "",
  "bankusername": "",
  "bankaccount": "",
  "notes": "",
  "balance": "",
  "rechargebalance": "",
  "giftbalance": ""
})

const getInfo = async () => {
  let res = await useRequest('/wxh5/staff/editUserDetails', {
    query: {usercode}
  });
  if (res.status === 0) {
    Object.assign(formData, res.data);
  } else {
    showToast(res.msg);
  }
}

const onSubmit = async () => {
  let res = await useRequest('/wxh5/staff/saveUserDetails', {
    method: 'POST',
    body: {...formData},
  })
  if (res.status === 0) {
    showToast(res.msg);
  } else {
    showToast(res.msg);
  }
}

onMounted(() => {
  getInfo();
})
</script>

<template>
  <div class="container container-blue-bg">
    <div class="mx-[0.8rem] py-4">
      <div class="bg-white rounded p-4">
        <form>
          <!-- Form Fields -->
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <label class="text-sm txt-gray-7">用户编号</label>
              <span class="text-sm txt-black-7 !text-gray-400">{{ formData.usercode }}</span>
            </div>
            <hr>
            <AreaBox
                v-model="formData.areaid"
                label="区域"
                init
                readonly
                placeholder="请选择区域"
            />
            <hr>
            <BuildingBox
                v-model="formData.buildingid"
                :area-id="formData.areaid"
                label="楼盘"
                init
                readonly
                placeholder="请选择楼盘"
            />
            <hr>
            <RoomsBox
                v-model="formData.roomid"
                :building-id="formData.buildingid"
                init
                readonly
                label="房号"
                placeholder="请选择房号"
            />
            <hr>
            <SelectBox
                label="用户类型"
                placeholder="请选择用户类型"
                v-model="formData.usertype"
                :options="userType">
            </SelectBox>
            <hr>
            <InputBox
                label="姓名"
                placeholder="请输入姓名"
                v-model="formData.username"
            ></InputBox>
            <hr>
            <InputBox
                label="手机"
                placeholder="请输入手机"
                v-model="formData.usermobile"
            ></InputBox>
            <hr>
            <ComboBox
                v-model="formData.mealid"
                init
                label="套餐"
                placeholder="请选择套餐"
            />
            <hr>
            <DateBox label="开户日期" v-model="formData.createtime"/>
            <hr>
            <BankBox
                v-model="formData.bankid"
                label="开户银行"
                init
                placeholder="请选择开户银行"
            />
            <hr>
            <InputBox
                label="银行户名"
                placeholder="请输入银行户名"
                v-model="formData.bankusername"
            ></InputBox>
            <hr>
            <InputBox
                label="银行账号"
                placeholder="请输入银行账户"
                v-model="formData.bankaccount"
            ></InputBox>
            <hr>
            <InputBox
                label="备注"
                placeholder="请输入备注内容"
                v-model="formData.notes"
            ></InputBox>
            <hr>
            <div class="flex justify-between items-center">
              <label class="text-sm txt-gray-7">余额</label>
              <span class="text-sm txt-black-7 !text-gray-400 px-2">{{ formData.balance }}</span>
            </div>
            <hr>
            <div class="flex justify-between items-center">
              <label class="text-sm txt-gray-7">充值余额</label>
              <span class="text-sm txt-black-7 !text-gray-400 px-2">{{ formData.rechargebalance }}</span>
            </div>
            <hr>
            <div class="flex justify-between items-center">
              <label class="text-sm txt-gray-7">赠送余额</label>
              <span class="text-sm txt-black-7 !text-gray-400 px-2">{{ formData.giftbalance }}</span>
            </div>
          </div>
        </form>
      </div>

      <div class="mt-4">
        <button @click="onSubmit"
                class="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-[0.55rem] px-8 rounded w-full">
          提交
        </button>
      </div>

    </div>

    <div class="h-[1rem]"></div>

  </div>
</template>