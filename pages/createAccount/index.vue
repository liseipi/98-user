<script setup lang="ts">
import {
  InstallPosition,
  InstallType,
  IsInstallType,
  invoicingType,
  PowersStatus,
  userType
} from "~/composables/optionsData";
import InputBox from "~/components/inputBox.vue";
import AreaBox from "~/components/areaBox.vue";
import {useToday} from "~/composables/states";
import RoomsBox from "~/components/roomsBox.vue";
import type {UploadFile} from "~/types/global";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 新增用户` : '新增用户';
  }
})

let formData = reactive({
  areaid: '',
  buildingid: '',
  roomid: '',
  usercode: '',
  bankaccount: '',
  bankid: '',
  bankusername: '',
  devicecode: '',
  devicereading: '',
  installimage: '',
  installposition: '',
  installtype: '',
  is_intelligence: 0,
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

const fileInput = ref(null);
const selectedFile = ref(null);
const previewUrl = ref(null);

const triggerFileUpload = () => {
  if (fileInput.value) {
    fileInput.value.click();
  }
}

const onFileChange = (event) => {
  const file = event.target.files; // 获取第一个（也是唯一一个）文件
  if (file) {
    selectedFile.value = file
    generatePreview(file[0]);
    uploadFile(); // 如果有文件，则上传
  }
}

// 生成预览图
const generatePreview = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    previewUrl.value = e.target.result; // 设置预览图的base64编码
  };
  reader.readAsDataURL(file);
};

//清除预览图片
const closePreviewUrl = () => {
  previewUrl.value = null;
  selectedFile.value = null;
  fileInput.value.value = '';
  formData.file = '';
}

const uploadFile = async () => {
  try {
    const newForm = new FormData();
    newForm.append('file', selectedFile.value[0]); // 将文件附加到FormData对象

    // 发送POST请求到服务器上传文件
    const res = await useRequest<UploadFile>('/wxh5/common/uploadfile', {
      method: 'POST',
      headers: {
        // 'Content-Type': 'multipart/form-data'
      },
      body: newForm,
    });

    // 处理服务器响应
    console.log('File uploaded successfully:', res);
    if (res.status === 0) {
      formData.installimage = res.data.file_url;
    } else {
      showToast(res.msg);
    }

  } catch (error) {
    // 处理上传错误
    console.error('Error uploading file:', error);
  }
};

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
    body: {...formData},
  });
  if (res.status === 0) {
    showToast("创建成功");
  } else {
    showToast(res.msg);
  }
}

watch(() => formData.roomid, async (val) => {
  if (val) {
    let res = await useRequest<{ usercode: string }>('/wxh5/staff/createUserCode', {
      query: {
        roomid: val
      }
    });
    if (res.status === 0) {
      formData.usercode = res.data.usercode
    } else {
      showToast(res.msg);
    }
  }
})

</script>

<template>
  <div class="container container-blue-bg">
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
                :status="1"
                label="房号"
                placeholder="请选择房号"
            />
            <hr/>
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">用户编号</div>
              <div class="txt-sub-7">
                <input
                    type="text"
                    placeholder="选择房号后自动生成，无需输入"
                    v-model="formData.usercode"
                    readonly
                    class="txt-input-box focus:text-left"
                >
              </div>
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
            <hr class="border-t border-gray-200"/>
            <SelectBox
                label="是否安装智能水表"
                placeholder="请选择是否安装"
                v-model="formData.is_intelligence"
                :options="IsInstallType">
            </SelectBox>
            <div class="space-y-4" v-show="formData.is_intelligence === 1">
              <hr class="border-t border-gray-200"/>
              <SelectBox
                  label="安装类型"
                  placeholder="请选择安装类型"
                  v-model="formData.installtype"
                  :options="InstallType">
              </SelectBox>
              <hr class="border-t border-gray-200"/>
              <InputBox
                  label="设备编号"
                  placeholder="请输入设备编号"
                  v-model="formData.devicecode"
              />
              <hr class="border-t border-gray-200"/>
              <SelectBox
                  label="安装位置"
                  placeholder="请选择安装位置"
                  v-model="formData.installposition"
                  :options="InstallPosition">
              </SelectBox>
              <hr class="border-t border-gray-200"/>
              <SelectBox
                  label="安装电源类型"
                  placeholder="请选择安装电源类型"
                  v-model="formData.powertype"
                  :options="PowerType">
              </SelectBox>
              <hr class="border-t border-gray-200"/>
              <SelectBox
                  label="通电状态"
                  placeholder="请选择通电状态"
                  v-model="formData.powerstatus"
                  :options="PowersStatus">
              </SelectBox>
              <hr class="border-t border-gray-200"/>
              <InputBox
                  label="当前读数"
                  placeholder="请输入当前机械表读数"
                  v-model="formData.username"
              />
              <hr class="border-t border-gray-200"/>
              <div class="flex flex-col justify-start items-start">
                <div class="text-[#6E7177] text-[0.7rem] py-2">上传安装位置图 <span class="text-red-500">*</span></div>
                <div class="flex items-center space-x-2">
                  <input type="file" ref="fileInput" @change="onFileChange" style="display: none;">
                  <div v-if="previewUrl"
                       class="relative w-16 h-16 rounded-lg border border-gray-300 flex items-center justify-center">
                    <img :src="previewUrl" alt="placeholder"
                         class="object-cover w-full h-full rounded-md"/>
                    <div @click="closePreviewUrl"
                         class="absolute -top-2 -right-2 bg-gray-200 rounded-full p-0.5 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                           stroke="currentColor" class="w-3 h-3 text-gray-700">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </div>
                  </div>
                  <div @click="triggerFileUpload"
                       class="w-16 h-16 rounded-lg border border-gray-300 flex items-center justify-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-10 h-10 text-gray-500">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
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