<template>
  <div
      class="relative inline-block w-[2.9rem] h-[1.4rem] rounded-full cursor-pointer transition-colors duration-200 ease-in-out"
      :class="isToggled ? 'bg-blue-500' : 'bg-gray-300'"
      @click="toggleSwitch"
  >
    <div
        class="absolute w-[1.3rem] h-[1.3rem] bg-white rounded-full shadow-md transform translate-y-[1px] transition-transform duration-200 ease-in-out"
        :class="isToggled ? 'translate-x-[1.55rem]' : 'translate-x-[1px]'"
    ></div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  // 允许 modelValue 的类型是布尔值或数字
  modelValue: {
    type: [Boolean, Number],
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const isToggled = computed(() => !!props.modelValue);

function toggleSwitch() {
  let newValue;
  if (typeof props.modelValue === 'boolean') {
    newValue = !props.modelValue;
  } else {
    newValue = props.modelValue === 0 ? 1 : 0;
  }
  emit('update:modelValue', newValue);
}
</script>