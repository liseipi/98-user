<script setup lang="ts">
import AreaBox from "~/components/areaBox.vue";
import RoomsBox from "~/components/roomsBox.vue";
import InputBox from "~/components/inputBox.vue";
import {InstallPosition, InstallType, PowersStatus, userType} from "~/composables/optionsData";
import {MessageType} from "vscode-languageserver-protocol";
import Log = MessageType.Log;

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 安装智能水表` : '安装智能水表';
  }
})

let formData = reactive({
  areaid: '',
  buildingid: '',
  devicecode: '',
  devicereading: '',
  installimage: '',
  installposition: 1,
  installtype: 1,
  powerstatus: 1,
  powertype: 1,
  roomid: '',
  file: ''
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
    newForm.append('file', selectedFile.value); // 将文件附加到FormData对象

    // 发送POST请求到服务器上传文件
    const res = await useRequest('/wxh5/common/uploadfile', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: newForm,
    });

    // 处理服务器响应
    console.log('File uploaded successfully:', res);
    if (res.status === 0) {
      formData.file = res.data;
    } else {
      showToast(res.msg);
    }

  } catch (error) {
    // 处理上传错误
    console.error('Error uploading file:', error);
  }
};

const onSubmit = async () => {
  const res = await useRequest('/wxh5/staff/installIntelligence', {
    method: 'POST',
    body: formData,
  });
  if (res.status === 0) {

  } else {
    showToast(res.msg);
  }
}

</script>

<template>
  <div class="container container-blue-bg">
    <div class="mx-[0.8rem] py-4">
      <h3 class="text-[0.7rem] text-[#292929] mt-4 mb-2">填写个人信息</h3>
      <div class="bg-white rounded p-4">
        <form>
          <!-- Form Fields -->
          <div class="space-y-3">
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
                required
                label="楼盘"
                placeholder="请选择楼盘"
            />
            <hr class="border-t border-gray-200"/>
            <RoomsBox
                v-model="formData.roomid"
                :building-id="formData.buildingid"
                label="房号"
                placeholder="选择房号"
            />
            <hr class="border-t border-gray-200"/>
            <InputBox
                label="房间"
                placeholder="请输入房间"
                v-model="formData.username"
            />
            <hr class="border-t border-gray-200"/>
            <InputBox
                label="设备编号"
                placeholder="请输入设备编号"
                v-model="formData.devicecode"
            />
            <hr class="border-t border-gray-200"/>
            <InputBox
                label="通道"
                placeholder="请输入通道"
                v-model="formData.devicecode"
            />
            <hr class="border-t border-gray-200"/>
            <!--            <div class="flex justify-between items-center border-b border-gray-200 py-2">-->
            <!--              <label class="text-sm txt-gray-7">阀门状态</label>-->
            <!--              <span class="text-sm txt-black-7">开阀</span>-->
            <!--            </div>-->
            <!--            <div class="flex justify-between items-center border-b border-gray-200 py-2">-->
            <!--              <label class="text-sm txt-gray-7">出厂比例</label>-->
            <!--              <span class="text-sm txt-black-7">1</span>-->
            <!--            </div>-->
            <!--            <div class="flex justify-between items-center border-b border-gray-200 py-2">-->
            <!--              <label class="text-sm txt-gray-7">当前比例</label>-->
            <!--              <span class="text-sm txt-black-7">1</span>-->
            <!--            </div>-->
            <!--            <div class="flex justify-between items-center border-b border-gray-200 py-2">-->
            <!--              <label class="text-sm txt-gray-7">信息质量</label>-->
            <!--              <span class="text-sm txt-black-7">13</span>-->
            <!--            </div>-->
            <!--            <div class="flex justify-between items-center border-b border-gray-200 py-2">-->
            <!--              <label class="text-sm txt-gray-7">电压</label>-->
            <!--              <span class="text-sm txt-black-7">3.7</span>-->
            <!--            </div>-->
            <!--            <div class="flex justify-between items-center border-b border-gray-200 py-2">-->
            <!--              <label class="text-sm txt-gray-7">ICCID</label>-->
            <!--              <span class="text-sm txt-black-7">请输入ICCID</span>-->

            <!--            </div>-->
            <!--            <div class="flex justify-between items-center border-b border-gray-200 py-2">-->
            <!--              <label class="text-sm txt-gray-7">联系时间</label>-->
            <!--              <span class="text-sm txt-black-7">2024-12-14 03:31:46</span>-->
            <!--            </div>-->
            <SelectBox
                label="安装类型"
                required
                placeholder="请选择安装类型"
                v-model="formData.installtype"
                :options="InstallType">
            </SelectBox>
            <hr class="border-t border-gray-200"/>
            <SelectBox
                label="安装位置"
                required
                placeholder="请选择安装位置"
                v-model="formData.installposition"
                :options="InstallPosition">
            </SelectBox>
            <hr class="border-t border-gray-200"/>
            <SelectBox
                label="安装电源类型"
                required
                placeholder="请选择安装电源类型"
                v-model="formData.powertype"
                :options="PowerType">
            </SelectBox>
            <hr class="border-t border-gray-200"/>
            <SelectBox
                label="通电状态"
                required
                placeholder="请选择通电状态"
                v-model="formData.powerstatus"
                :options="PowersStatus">
            </SelectBox>
            <hr class="border-t border-gray-200"/>
            <InputBox
                label="最近抄表"
                placeholder="请输入最近抄表"
                v-model="formData.username"
            />
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
        </form>
      </div>

      <div class="mt-4">
        <button @click="onSubmit"
                class="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-[0.55rem] px-8 rounded w-full">
          提交
        </button>
      </div>
      <div class="mt-3">
        <button class="bg-[#D9E9FF] hover:bg-blue-700 text-[#292929] text-[0.8rem] py-[0.55rem] px-8 rounded w-full">
          拆机
        </button>
      </div>
      <div class="mt-3">
        <button class="bg-[#D9E9FF] hover:bg-blue-700 text-[#292929] text-[0.8rem] py-[0.55rem] px-8 rounded w-full">
          恢复出厂脉冲比例
        </button>
      </div>
      <div class="mt-3">
        <button class="bg-[#D9E9FF] hover:bg-blue-700 text-[#292929] text-[0.8rem] py-[0.55rem] px-8 rounded w-full">
          调整恢厂脉冲比例
        </button>
      </div>


    </div>

    <div class="h-[1rem]"></div>

  </div>
</template>