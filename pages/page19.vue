<script setup lang="ts">

</script>

<template>
  <div class="container container-blue-bg">
    <div class="mx-[0.8rem] py-4">
      <div class="bg-white rounded p-4">
        <form>
          <!-- Form Fields -->
          <div class="">
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">用户编号</label>
              <span class="text-sm txt-black-7">059000000013</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">区域 </label>
              <span class="text-sm txt-black-7">
                <input type="text" class="txt-input-box" placeholder="" value="测试" />
              </span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">楼盘 </label>
              <span class="text-sm txt-black-7">
                <input type="text" class="txt-input-box" placeholder="" value="倚云居张碧玲" />
              </span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">用户类别</label>
              <div class="text-sm txt-black-7 flex items-center">
                <span>业户</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">姓名</label>
              <span class="text-sm txt-black-7">
                <input type="text" class="txt-input-box" placeholder="" value="小星星" />
              </span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">手机</label>
              <span class="text-sm txt-black-7">
                <input type="text" class="txt-input-box" placeholder="" value="13926107601" />
              </span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">套餐</label>
              <div class="text-sm txt-black-7 flex items-center">
                <span>标准套餐0.5元/升/180升/超0.4元/升</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">开户日期</label>
              <span class="text-sm txt-black-7">
                <input type="text" class="txt-input-box" value="2020-09-08" />
              </span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">开户日期</label>
              <span class="text-sm txt-black-7">
                <input type="text" class="txt-input-box" placeholder="" value="2020-09-08" />
              </span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">开户银行</label>
              <div class="text-sm txt-black-7 flex items-center">
                <span>请选择开户银行</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">银行户名</label>
              <span class="text-sm txt-black-7">
                <input type="text" class="txt-input-box" placeholder="" value="8" />
              </span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">银行帐号</label>
              <span class="text-sm txt-black-7">
                <input type="text" class="txt-input-box" placeholder="" value="8" />
              </span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">备注</label>
              <span class="text-sm txt-black-7">
                <input type="text" class="txt-input-box" placeholder="" value="" />
              </span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">余额</label>
              <span class="text-sm txt-black-7">
                <input type="text" class="txt-input-box" placeholder="" value="0.03" />
              </span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">充值余额</label>
              <span class="text-sm txt-black-7">
                <input type="text" class="txt-input-box" placeholder="" value="0.03" />
              </span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 py-2">
              <label class="text-sm txt-gray-7">赠送余额</label>
              <span class="text-sm txt-black-7">
                <input type="text" class="txt-input-box" placeholder="" value="0.03" />
              </span>
            </div>


          </div>
        </form>
      </div>

      <div class="mt-4">
        <button class="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-[0.55rem] px-8 rounded w-full">
          提交
        </button>
      </div>

    </div>

    <div class="h-[1rem]"></div>

  </div>
</template>