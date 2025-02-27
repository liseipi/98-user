<script setup lang="ts">
import {invoicingType, userType} from "~/composables/optionsData";
import InputBox from "~/components/inputBox.vue";
import AreaBox from "~/components/areaBox.vue";
import {useToday} from "~/composables/states";
import RoomsBox from "~/components/roomsBox.vue";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 新增用户` : '新增用户';
  }
})

let formData = reactive({
  areaid: '',
  buildingid: '',
  roomid: '',
  bankaccount: '',
  bankid: '',
  bankusername: '',
  devicecode: '',
  devicereading: '',
  installimage: '',
  installposition: '',
  installtype: '',
  is_intelligence: '',
  is_invoicing: 0,
  mealid: '',
  notes: '',
  powerstatus: '',
  powertype: '',
  reading: '',
  usermobile: '',
  username: '',
  usertype: '',
  property: '',
  createdate: useToday()
})

const onSubmit = async () => {
  if (formData.areaid == '' || formData.buildingid == '' || formData.mealid == '') {
    showToast({
      type: 'fail',
      message: '请填写必要项.'
    });
    return;
  }

  let res = await useRequest('/wxh5/staff/postAccount', {
    method: 'POST',
    body: formData,
  });
  if (res.status === '200') {
    showToast("创建成功");
  }
}

</script>

<template>
  <div class="container">
    <div class="mx-[0.8rem] py-4">
      <h3 class="text-[0.7rem] text-[#292929] mt-4 mb-2">填写个人信息</h3>
      <div class="bg-white">
        <div class="w-full max-w-md px-4">
          <div class="py-6 space-y-4">
            <AreaBox
                v-model="formData.areaid"
                required
                label="区域"
                placeholder="请选择区域"
            />
            <hr class="border-t border-gray-200"/>
            <BuildingBox
                v-model="formData.buildingid"
                :area-id="formData.areaid"
                label="楼盘"
                required
                placeholder="请选择楼盘"
            />
            <hr class="border-t border-gray-200"/>
            <RoomsBox
                v-model="formData.roomid"
                :building-id="formData.buildingid"
                label="房号"
                placeholder="请选择房号"
            />
            <hr/>
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">用户编号</div>
              <div class="txt-sub-7">选择房号后自动生成，无需输入</div>
            </div>
            <hr class="border-t border-gray-200"/>
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">门牌</div>
            </div>
            <hr class="border-t border-gray-200"/>
            <SelectBox
                label="用户类型"
                required
                placeholder="请选择用户类型"
                v-model="formData.usertype"
                :options="userType">
            </SelectBox>
            <hr class="border-t border-gray-200"/>
            <InputBox
                label="姓名"
                required
                placeholder="请输入姓名"
                v-model="formData.username"
            ></InputBox>
            <hr class="border-t border-gray-200"/>
            <InputBox
                label="手机号码"
                required
                placeholder="请输入手机号码"
                v-model="formData.usermobile"
            ></InputBox>
            <hr class="border-t border-gray-200"/>
            <ComboBox
                v-model="formData.mealid"
                required
                label="套餐"
                placeholder="请选择套餐"
            />
            <hr class="border-t border-gray-200"/>
            <DateBox label="开户日期" v-model="formData.createdate"/>
            <hr class="border-t border-gray-200"/>
            <BankBox
                v-model="formData.bankid"
                label="开户银行"
                placeholder="请选择开户银行"
            />
            <hr class="border-t border-gray-200"/>
            <InputBox
                label="银行户名"
                placeholder="请输入银行账户名"
                v-model="formData.bankusername"
            ></InputBox>
            <hr class="border-t border-gray-200"/>
            <InputBox
                label="银行账号"
                placeholder="请输入银行账户"
                v-model="formData.bankaccount"
            ></InputBox>
            <hr class="border-t border-gray-200"/>
            <InputBox
                label="水表读数"
                placeholder="请输入水表读数"
                v-model="formData.reading"
            ></InputBox>
            <hr class="border-t border-gray-200"/>
            <SelectBox
                label="是否开票"
                required
                placeholder="请选择开票"
                v-model="formData.is_invoicing"
                :options="invoicingType">
            </SelectBox>
            <hr class="border-t border-gray-200"/>
            <InputBox
                label="备注"
                placeholder="请输入备注内容"
                v-model="formData.notes"
            ></InputBox>
            <!--            <div class="flex justify-between items-center">-->
            <!--              <div class="txt-gray-7">备注</div>-->
            <!--              <div class="txt-black-7">-->
            <!--                <input-->
            <!--                    type="text"-->
            <!--                    placeholder="请输入备注内容"-->
            <!--                    class="txt-input-box"-->
            <!--                />-->
            <!--              </div>-->
            <!--            </div>-->
            <hr class="border-t border-gray-200"/>
          </div>

          <div class="py-4">
            <button @click="onSubmit"
                    class="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-[0.55rem] px-8 rounded w-full">
              提交
            </button>
          </div>
        </div>
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