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
const currentDate = ref();
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
  return `${date[0]}-${date[1]}-${date[2]}`;
};

const emit = defineEmits(['update:modelValue']);

watch(() => props.modelValue, (val) => {
  const dateStr = val;
  const [datePart, timePart] = dateStr.split(" ");
  const [year, month, day] = datePart.split("-");
  const [hours, minutes, seconds] = timePart.split(":");
  const date = new Date(year, month - 1, day, hours, minutes, seconds); // 月份从 0 开始，所以减 1
  currentDate.value = date
})
</script>