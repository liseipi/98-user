<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="mx-[0.8rem] py-4">
      <h3 class="text-[0.7rem] text-[#292929] mt-4 mb-2">未完成工单总数：12</h3>
      <div class="bg-white">
        <div class="w-full max-w-md px-4">
          <div class="py-6 space-y-4">
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">用户编号</div>
              <div class="txt-sub-7">选择房号后自动生成，无需输入</div>
            </div>
            <hr class="border-t border-gray-200"/>
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
              <div class="txt-gray-7">姓名 <span class="text-red-500">*</span></div>
              <div class="txt-black-7">
                <input
                    type="text"
                    placeholder="请输入姓名"
                    class="txt-input-box"
                />
              </div>
            </div>
            <hr class="border-t border-gray-200"/>
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">手机号码 <span class="text-red-500">*</span></div>
              <div class="txt-black-7">
                <input
                  type="text"
                  placeholder="请输入手机号码"
                  class="txt-input-box"
                />
              </div>
            </div>
            <hr class="border-t border-gray-200"/>
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">套餐 <span class="text-red-500">*</span></div>
              <div class="txt-black-7">
                请选择套餐
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-4 h-4 inline-block">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                </svg>
              </div>
            </div>
            <hr class="border-t border-gray-200"/>
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">开户日期</div>
              <div class="txt-black-7">2024-11-25</div>
            </div>
            <hr class="border-t border-gray-200"/>
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">开户银行</div>
              <div class="txt-black-7">
                请选择开户银行
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-4 h-4 inline-block">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                </svg>
              </div>
            </div>
            <hr class="border-t border-gray-200"/>
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">银行户名</div>
              <div class="txt-black-7">
                <input
                    type="text"
                    placeholder="请输入银行账户名"
                    class="txt-input-box"
                />
              </div>
            </div>
            <hr class="border-t border-gray-200"/>
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">银行账号</div>
              <div class="txt-black-7">
                <input
                  type="text"
                  placeholder="请输入银行账户"
                  class="txt-input-box"
                />
              </div>
            </div>
            <hr class="border-t border-gray-200"/>
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">水表读数</div>
              <div class="txt-black-7">
                <input
                    type="text"
                    placeholder="请输入水表读数"
                    class="txt-input-box"
                />
              </div>
            </div>
            <hr class="border-t border-gray-200"/>
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">是否开票</div>
              <div class="txt-black-7">
                否
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-4 h-4 inline-block">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                </svg>
              </div>
            </div>
            <hr class="border-t border-gray-200"/>
            <div class="flex justify-between items-center">
              <div class="txt-gray-7">备注</div>
              <div class="txt-black-7">
                <input
                    type="text"
                    placeholder="请输入备注内容"
                    class="txt-input-box"
                />
              </div>
            </div>
            <hr class="border-t border-gray-200"/>
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