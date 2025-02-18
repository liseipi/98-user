<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 更换机械表` : '更换机械表';
  }
})


</script>

<template>
  <div class="container">
    <div class="mx-[0.8rem] py-4">
      <h3 class="text-[0.7rem] text-[#292929] mt-4 mb-2">填写资料信息</h3>
      <div class="bg-white">
        <div class="w-full max-w-md px-4">
          <div class="py-6 space-y-4">
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">楼盘 <span class="text-red-500">*</span></div>
              <div class="txt-black-7">
                请选择所在楼盘
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-4 h-4 inline-block">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                </svg>
              </div>
            </div>
            <hr class="border-t border-gray-200"/>
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">房号 <span class="text-red-500">*</span></div>
              <div class="txt-sub-7">请输入房号或门牌，从弹出列表中选择</div>
            </div>
            <hr class="border-t border-gray-200"/>
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">门牌</div>
            </div>
            <hr class="border-t border-gray-200"/>
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">用户类型 <span class="text-red-500">*</span></div>
              <div class="txt-black-7">
                业户
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-4 h-4 inline-block">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                </svg>
              </div>
            </div>
            <hr class="border-t border-gray-200"/>
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">上次抄表</div>
            </div>
            <hr class="border-t border-gray-200"/>
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">原表读数 <span class="text-red-500">*</span></div>
              <div class="txt-black-7">
                <input
                    type="text"
                    placeholder="请输入"
                    class="txt-input-box"
                />
              </div>
            </div>
            <hr class="border-t border-gray-200"/>
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">新表读数 <span class="text-red-500">*</span></div>
              <div class="txt-black-7">
                <input
                  type="text"
                  placeholder="请输入"
                  class="txt-input-box"
                />
              </div>
            </div>
            <hr class="border-t border-gray-200"/>
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">更换类型 <span class="text-red-500">*</span></div>
              <div class="txt-black-7">
                请选择类型
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-4 h-4 inline-block">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                </svg>
              </div>
            </div>
            <hr class="border-t border-gray-200"/>
            <div class="flex flex-col justify-start items-start">
              <div class="text-[#6E7177] text-[0.7rem] py-2">水表照片</div>
              <div class="flex items-center space-x-2">
                <div class="relative w-16 h-16 rounded-lg border border-gray-300 flex items-center justify-center">
                  <img src="https://via.placeholder.com/80" alt="placeholder" class="object-cover w-full h-full rounded-md"/>
                  <div class="absolute -top-2 -right-2 bg-gray-200 rounded-full p-0.5 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 text-gray-700">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
                <div class="w-16 h-16 rounded-lg border border-gray-300 flex items-center justify-center cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="py-4">
            <button class="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-[0.55rem] px-8 rounded w-full">
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