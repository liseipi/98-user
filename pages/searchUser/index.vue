<script setup lang="ts">
import type {SearchUserItem} from "~/types/searchUser";
import UserItem from "~/pages/searchUser/component/userItem.vue";

let keyword = ref('');
let list = ref<SearchUserItem[]>();

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 用户查询` : '用户查询';
  }
})

const onSearch = async () => {
  if (keyword.value.trim() === '') {
    showToast('输入房间编号');
    return
  }

  let res = await useRequest('/wxh5/staff/searchUser', {
    method: 'post',
    body: {
      keyword
    }
  });
}

</script>

<template>
  <div class="container">
    <div class="mx-[0.8rem] py-4">
      <div class="w-full">
        <div class="flex items-center rounded-lg  bg-gray-100 p-2 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
               class="w-5 h-5 text-gray-500 mr-2">
            <path fill-rule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clip-rule="evenodd"/>
          </svg>
          <input type="text" placeholder="输入房间编号"
                 v-model="keyword"
                 class="bg-transparent outline-none flex-1 text-[#292929] text-[0.7rem]"/>
          <button class="text-blue-500 text-[0.7rem]" @click="onSearch">查询</button>
        </div>

        <!--空时-->
        <div class="flex-1 mt-4" v-if="!list">
          <div class="flex flex-col items-center mt-[20%]">
            <img src="@/assets/image/empty.png" class="w-[3.7rem] h-[3.7rem]" alt="empty">
            <span class="txt-black-7">输入房间编号查询</span>
          </div>
        </div>

        <div class="mt-4">
          <h2 class="text-[#292929] text-[0.7rem] mb-2" v-if="list">查询结果</h2>

          <template v-for="user in list" :key="user.id">
            <UserItem :item="user"/>
          </template>

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