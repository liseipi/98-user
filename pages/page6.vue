<script setup lang="ts">

</script>

<template>
  <div class="container container-blue-bg">
    <div class="mx-[0.8rem] py-4">
      <div class="bg-white rounded-md p-4 grid grid-cols-1 gap-y-4">
        <div class="flex justify-between items-center">
          <div class="text-[#6E7177] text-[0.7rem]">楼盘</div>
          <div class="text-[#292929] text-[0.7rem] flex flex-row items-center justify-center">
            <span>请选择楼盘</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-[1.3rem] h-[0.74rem] inline-block">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
            </svg>
          </div>
        </div>
        <hr/>
        <div class="flex justify-between items-center">
          <div class="text-[#6E7177] text-[0.7rem]">房号</div>
          <div class="txt-black-7">
            <input
                type="text"
                placeholder="请输入房号"
                class="txt-input-box"
            />
          </div>
        </div>
        <hr/>
        <button class="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] py-2 px-8 rounded">
          查询
        </button>
      </div>

      <h3 class="text-[0.7rem] text-[#292929] mt-4 mb-2">合计金额: <span class=" text-gray-800">2396.96元</span></h3>

      <div class="bg-white rounded-lg">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="">
            <tr>
              <th class="px-4 py-3 text-left txt-sub-7 font-normal uppercase tracking-wider">
                房号
              </th>
              <th class="px-4 py-3 text-left txt-sub-7 font-normal uppercase tracking-wider">
                金额(元)
              </th>
              <th class="px-4 py-3 text-right txt-sub-7 font-normal uppercase tracking-wider">
                明细
              </th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-4 py-4 whitespace-nowrap">
                <p class="txt-black-7">902</p>
              </td>
              <td class="px-4 py-4 whitespace-nowrap">
                <p class="txt-black-7">865.32</p>
              </td>
              <td class="px-4 py-4 text-right whitespace-nowrap">
                <button
                    class=" text-[0.7rem] text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  查看
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block transform -rotate-180"
                       viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"/>
                  </svg>
                </button>
              </td>
            </tr>
            <tr>
              <td class="py-1" colspan="3">
                <table class="min-w-full">
                  <tbody>
                  <tr>
                    <td class="px-4 py-2 text-left"><p class="txt-gray-7">用户编号</p></td>
                    <td class="px-4 py-2 text-right">
                      <p class="txt-black-7">
                        <span class="txt-black-7">059000000003-0764</span>
                        <span
                            class="inline-flex items-center px-[0.4rem] py-[0.2rem] text-[#555A60] text-[0.6rem] rounded font-medium bg-gray-200 ml-2">
                        销户
                      </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 text-left"><p class="txt-gray-7">计费期</p></td>
                    <td class="px-4 py-2 text-right">
                      <p class="txt-black-7">2024-12-18</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 text-left"><p class="txt-gray-7">金额</p></td>
                    <td class="px-4 py-2 text-right">
                      <p class="txt-black-7">¥ 856.32</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 text-left"><p class="txt-gray-7">合计金额</p></td>
                    <td class="px-4 py-2 text-right">
                      <p class="txt-black-7">¥ 856.32</p>
                    </td>
                  </tr>
                  </tbody>
                </table>

              </td>
            </tr>

            <tr>
              <td class="px-4 py-4 whitespace-nowrap">
                <p class="txt-black-7">1005</p>
              </td>
              <td class="px-4 py-4 whitespace-nowrap">
                <p class="txt-black-7">865.32</p>
              </td>
              <td class="px-4 py-4 text-right whitespace-nowrap">
                <button
                    class=" text-[0.7rem] text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  查看
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block transform -rotate-180"
                       viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"/>
                  </svg>
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>

    <div class="h-[1rem]"></div>

  </div>
</template>