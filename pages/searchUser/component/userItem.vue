<script lang="ts" setup>
 import type {SearchUserItem} from "~/types/searchUser";

 defineProps<{
   item: SearchUserItem
 }>()
</script>

<template>
  <NuxtLink to="/searchUser/userService">
    <div class="bg-white p-4 rounded-lg shadow-sm mb-4">
      <div class="flex justify-between items-start mb-2">
        <div class="text-[#292929] text-[0.7rem]">用户编号：059000000003-0764</div>
        <div class="bg-blue-100 text-blue-600 rounded-md text-[0.6rem] px-[0.4rem] py-[0.13rem]">在用</div>
      </div>
      <hr>
      <div class=" flex flex-col text-[#292929] text-[0.7rem] mt-2 mb-2">
        <span class="text-[#9EA0A4] text-[0.6rem]">楼盘/房号</span>
        <span>小星星倚云居张碧玲</span>
      </div>
      <div class=" flex flex-col text-[#292929] text-[0.7rem] mt-2 mb-2">
        <span class="text-[#9EA0A4] text-[0.6rem]">用户姓名/电话</span>
        <span>张碧玲1号表/13926107601</span>
      </div>
    </div>
  </NuxtLink>
</template>