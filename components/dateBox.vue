<template>
  <div>
    <div class="flex justify-between items-center">
      <div class="text-[#6E7177] text-[0.7rem]">{{ label }} <span class="text-red-500" v-if="required">*</span></div>
      <div class="text-[#292929] text-[0.7rem] flex flex-row items-center justify-center" @click="showDatePicker">
        <span>{{ modelValue || placeholder }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
             stroke="currentColor" class="w-[1.3rem] h-[0.74rem] inline-block">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
        </svg>
      </div>
    </div>

    <van-popup v-model:show="showPopup" position="bottom">
      <van-date-picker
          title="选择日期"
          :min-date="minDate"
          :max-date="maxDate"
          v-model="currentDate"
          @confirm="onConfirm"
          @cancel="onCancel"
      />
    </van-popup>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '请选择日期',
  },
});
const showPopup = ref(false);
const selectedDate = ref(null);
const currentDate = ref([new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()]);
const minDate = new Date(new Date().getFullYear() - 10, 0, 1);
const maxDate = new Date(new Date().getFullYear() + 10, 11, 31); // or Date.now() for today

const showDatePicker = () => {
  showPopup.value = true;
};

const onConfirm = (value) => {
  // console.log(value.selectedValues);
  const formattedDate = formatDate(value.selectedValues);
  // console.log('选择的日期:', formattedDate);
  selectedDate.value = formattedDate;
  showPopup.value = false;

  emit('update:modelValue', formattedDate); // Emitting the formatted date
};

const onCancel = () => {
  showPopup.value = false;
};

const formatDate = (date) => {
  // const year = date.getFullYear();
  // const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
  // const day = String(date.getDate()).padStart(2, '0');
  return `${date[0]}-${date[1]}-${date[2]}`;
};

import {defineEmits} from 'vue' // Add this line
const emit = defineEmits(['update:modelValue']) // Add this line
</script>