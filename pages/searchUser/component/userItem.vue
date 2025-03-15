<script lang="ts" setup>
import type {SearchUserItem} from "~/types/searchUser";

defineProps<{
  item: SearchUserItem
}>()

const userStatus = (value: number) => {
  let str = ''
  switch (value) {
    case -1:
      str = '注销';
      break;
    case 1:
      str = '在用';
      break;
    default:
      str = '未知';
  }
  return str;
}

</script>

<template>
  <NuxtLink :to="'/searchUser/userinfo/'+item.usercode">
    <div class="bg-white px-4 py-2 rounded-lg shadow-sm mb-2">
      <div class="flex justify-between items-start mb-2">
        <div class="text-[#292929] text-[0.7rem]">用户编号：{{ item.usercode }}</div>
        <div class="bg-blue-100 text-blue-600 rounded-md text-[0.6rem] px-[0.4rem] py-[0.13rem]">
          {{ userStatus(item.userstatus) }}
        </div>
      </div>
      <hr>
      <div class=" flex flex-col text-[#292929] text-[0.7rem] mt-2 mb-1">
        <span class="text-[#9EA0A4] text-[0.6rem]">楼盘/房号</span>
        <span>{{ item.buildingname }}/{{ item.roomname }}</span>
      </div>
      <div class=" flex flex-col text-[#292929] text-[0.7rem] mt-2 mb-1">
        <span class="text-[#9EA0A4] text-[0.6rem]">用户姓名/电话</span>
        <span>{{ item.roomname }}/{{ item.usermobile }}</span>
      </div>
    </div>
  </NuxtLink>
</template>