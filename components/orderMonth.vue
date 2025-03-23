<script setup lang="ts">
import {onClickOutside} from '@vueuse/core';
import type {MonthOrderList} from "~/types/searchPayment";

const props = defineProps<{
  orderList: MonthOrderList[];
  modelValue: string | number | boolean | object | null;
  onSelectBill?: () => void;
}>();

const emit = defineEmits(['update:modelValue', 'event:onSelectBill']);

const showDropdown = ref(false);
const selectedMonth = ref('');

const displayMonth = computed(() => selectedMonth.value || '请选择账单月份');

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const selectMonth = (month: MonthOrderList) => {
  selectedMonth.value = month.charging_time;
  emit('update:modelValue', month.charging_time);
  showDropdown.value = false;
};

const searchBill = () => {
  emit('event:onSelectBill');
};

const selectComponent = ref<HTMLElement | null>(null);
onClickOutside(selectComponent, () => {
  showDropdown.value = false;
});

</script>

<template>
  <div ref="selectComponent" class="flex items-center justify-between mb-4">
    <div class="relative flex items-center cursor-pointer" @click="toggleDropdown">
      <span class="text-gray-700 text-[0.7rem] min-w-24">{{ displayMonth }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400 ml-2" fill="none" viewBox="0 0 24 24"
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
      <div
          v-if="showDropdown"
          class="absolute top-[100%] left-0 z-10 w-full min-w-28 bg-white divide-y divide-gray-100 border border-gray-200 rounded-lg shadow-lg"
      >
        <ul class="py-2 text-sm text-gray-700 max-h-32 overflow-y-auto" aria-labelledby="dropdownHoverButton">
          <li v-for="order in orderList" :key="order.id">
            <button class="block w-full px-1 py-1 text-left hover:bg-gray-100 text-[0.7rem]" @click.stop="selectMonth(order)">
              {{ order.charging_time }}
            </button>
          </li>
        </ul>
      </div>
    </div>
    <button
        class="flex items-center bg-blue-50 hover:bg-blue-100 text-blue-500 px-2 py-1 rounded-sm focus:outline-none"
        @click="searchBill"
    >
      <img src="@/assets/image/search.png" class="w-[0.8rem] mr-1" alt="search"/>
      <span class="align-middle text-[0.7rem]">账单查询</span>
    </button>
  </div>
</template>