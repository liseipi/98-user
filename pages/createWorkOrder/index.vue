<script setup lang="ts">
import {workTypes} from "~/composables/optionsData";
import SelectBox from "~/components/selectBox.vue";
import AreaBox from "~/components/areaBox.vue";
import RoomsBox from "~/components/roomsBox.vue";
import InputBox from "~/components/inputBox.vue";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 创建工单` : '创建工单';
  }
})

const initialFormData = {
  areaid: '',
  buildingid: '',
  describe: '',
  image: '',
  roomid: '',
  type: '',
  mobile: '',
};

let formData = reactive({...initialFormData});

//重置数据
const resetFormData = () => {
  Object.assign(formData, initialFormData);
}

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
  formData.image = '';
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
    if (res.status === '200') {
      formData.image = res.data;
    }

  } catch (error) {
    // 处理上传错误
    console.error('Error uploading file:', error);
  }
};

const onSubmit = async () => {
  const res = await useRequest('/wxh5/staff/createJobOrder', {
    method: 'POST',
    body: formData,
  });
  if (res.status === '200') {
    showToast('创建成功.')
  }
}

</script>

<template>
  <div class="container">
    <div class="h-4"></div>
    <div class="mx-[0.8rem]">
      <div class="bg-white p-8 rounded-lg">
        <div class="space-y-4">
          <AreaBox
              v-model="formData.areaid"
              label="区域"
              placeholder="不分区域"
          />
          <hr/>
          <BuildingBox
              v-model="formData.buildingid"
              :area-id="formData.areaid"
              label="楼盘"
              placeholder="不分楼盘"
          />
          <hr/>
          <RoomsBox
              v-model="formData.roomid"
              :building-id="formData.buildingid"
              label="房号"
              placeholder="不分房号"
          />
          <hr/>
          <div class="flex justify-between items-center">
            <div class="text-[#6E7177] text-[0.7rem]">用户编号</div>
            <div class="text-[#292929] text-[0.7rem]">
              059000000000001-6102
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-3 h-3 inline-block">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
              </svg>
            </div>
          </div>
          <hr class="border-t border-gray-200"/>
          <InputBox
              label="手机号"
              placeholder="请输入手机号"
              v-model="formData.mobile"
          />
          <hr class="border-t border-gray-200"/>
          <div class="flex justify-between items-center">
            <div class="text-[#6E7177] text-[0.7rem]">服务类型</div>
            <div class="text-[#292929] text-[0.7rem]">
              请选择服务类型
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-3 h-3 inline-block">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
              </svg>
            </div>
          </div>
          <hr class="border-t border-gray-200"/>
          <InputBox
              label="需求描述"
              placeholder="请输入需求描述"
              v-model="formData.mobile"
          />
          <hr class="border-t border-gray-200"/>
          <div class="flex flex-col justify-start items-start">
            <div class="text-[#6E7177] text-[0.7rem] py-2">水表照片</div>
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

      <div class="flex justify-center mt-4">
        <button @click="onSubmit"
                class="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] w-full py-[0.5rem] px-8 rounded">
          提交
        </button>
      </div>

      <div class="flex justify-center mt-4">
        <button @click="resetFormData" class="bg-white hover:bg-white text-[#222222] text-[0.8rem] w-full py-[0.5rem] px-8 rounded">
          重置
        </button>
      </div>

    </div>
    <div class="h-4"></div>

    <!--    <div class="fixed inset-0 bg-gray-900 bg-opacity-85 flex justify-center items-center">-->
    <!--      <div class="bg-white px-[1rem] py-4 rounded-lg shadow-xl max-w-md relative">-->
    <!--        <div class="absolute top-2 right-2 cursor-pointer">-->
    <!--          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"-->
    <!--               stroke="currentColor" class="w-6 h-6 text-gray-700">-->
    <!--            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>-->
    <!--          </svg>-->
    <!--        </div>-->
    <!--        <h2 class="text-[0.8rem] text-[#292929] font-bold mb-4 text-center py-6 flex items-center justify-center">已完成抄表并输入出了账单</h2>-->
    <!--        <div class="flex justify-center space-x-3 mt-6 w-[14rem]">-->
    <!--          <button class="flex-1 bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-[0.55rem] px-6 rounded">-->
    <!--            确定-->
    <!--          </button>-->
    <!--          <button class="flex-1 bg-gray-200 hover:bg-gray-300 text-[#292929] text-[0.7rem] text-[0.8rem] py-[0.55rem] px-6 rounded">-->
    <!--            取消-->
    <!--          </button>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->

  </div>
</template>

<style scoped>
.container {
  background-color: #f0f5f8;
}
</style>