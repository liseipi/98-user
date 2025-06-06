<script setup lang="ts">
import RoomsBox from "~/components/roomsBox.vue";
import AreaBox from "~/components/areaBox.vue";
import {InstallType} from "~/composables/optionsData";
import InputBox from "~/components/inputBox.vue";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 更换机械表` : '更换机械表';
  }
})

let formData = reactive({
  areaid: '',
  buildingid: '',
  image: '',
  reading: '',
  data_time: '',
  newreading: '',
  originalreading: '',
  roomid: '',
  type: '',
  usertype: '',
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
    if (res.status === 0) {
      formData.image = res.data;
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
    showToast({
      type: 'success',
      message: res.msg,
      onClose: () => {
        location.reload(); //刷新一下页面
      }
    })
  } else {
    showToast(res.msg);
  }
}

const getOriginalreading = async () => {
  const res = await useRequest('/wxh5/staff/getMechanicalReading', {
    query: {
      areaid: formData.areaid,
      buildingid: formData.buildingid,
      roomid: formData.roomid,
    },
  });
  if (res.status == 0) {
    formData.reading = res.data.reading;
    formData.data_time = res.data.data_time;
  }
}

watch(() => formData.roomid, () => {
  getOriginalreading();
})

</script>

<template>
  <div class="container container-blue-bg">
    <div class="mx-[0.8rem] py-4">
      <h3 class="text-[0.7rem] text-[#292929] mt-4 mb-2">填写资料信息</h3>
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
                required
                label="楼盘"
                placeholder="请选择楼盘"
            />
            <hr class="border-t border-gray-200"/>
            <RoomsBox
                v-model="formData.roomid"
                :building-id="formData.buildingid"
                label="房号"
                required
                :status="1"
                placeholder="选择房号"
            />
            <!--            <hr class="border-t border-gray-200"/>-->
            <!--            <div class="flex justify-between items-center">-->
            <!--              <div class="txt-gray-7">门牌</div>-->
            <!--            </div>-->
            <!--            <hr class="border-t border-gray-200"/>-->
            <!--            <SelectBox-->
            <!--                label="用户类型"-->
            <!--                required-->
            <!--                placeholder="请选择用户类型"-->
            <!--                v-model="formData.usertype"-->
            <!--                :options="userType">-->
            <!--            </SelectBox>-->
            <hr class="border-t border-gray-200"/>
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">上次抄表</div>
              <div class="txt-black-7" v-if="formData.data_time">{{ formData.reading }} ({{ formData.data_time }})</div>
            </div>
            <hr class="border-t border-gray-200"/>
            <InputBox
                label="原表读数"
                placeholder="请输入原表读数"
                required
                v-model="formData.originalreading"
            />
            <hr class="border-t border-gray-200"/>
            <InputBox
                label="新表读数"
                placeholder="请输入新表读数"
                required
                v-model="formData.newreading"
            />
            <hr class="border-t border-gray-200"/>
            <SelectBox
                label="更换类型"
                required
                placeholder="请选择更换类型"
                v-model="formData.type"
                :options="InstallType">
            </SelectBox>
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

          <div class="py-4">
            <button @click="onSubmit" class="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-[0.55rem] px-8 rounded w-full">
              提交
            </button>
          </div>
        </div>
      </div>

    </div>

    <div class="h-[1rem]"></div>

  </div>
</template>