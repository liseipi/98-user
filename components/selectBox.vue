<template>
  <div ref="myComponent" class="flex justify-between items-center relative">
    <div class="text-[#6E7177] text-[0.7rem] leading-6">{{label}} <span class="text-red-500" v-if="required">*</span></div>
    <div class="text-[#292929] text-[0.7rem] flex flex-row items-center justify-center" @click="toggleDropdown">
      <span>{{ selectedOption || placeholder }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
           stroke="currentColor" class="w-[1.3rem] h-[0.74rem] inline-block">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
      </svg>
    </div>
    <div v-if="isOpen" class="w-full absolute top-[100%] left-0 z-10 bg-white divide-y divide-gray-100 border border-gray-200 rounded-lg shadow-lg">
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
        <li v-for="(option, index) in uniqueOptions"
            :key="index"
            @click="selectOption(option)"
          :class="{'bg-gray-100': selectedOption === option}"
        >
          <span class="block px-4 py-2 hover:bg-gray-100 text-[0.7rem]">{{ option.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  options: {
    type: Array as () => string[],
    required: true,
  },
  placeholder: { // Also modify here
    type: String,
    default: '选择一个选项',
  },
  modelValue: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false);
const selectedOption = ref(props.modelValue || null);

const uniqueOptions = computed(() => {
  // Remove duplicates
  return [...new Set(props.options)];
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option.name;
  emit('update:modelValue', option.name); // Update v-model
  isOpen.value = false;
};

watch(() => props.modelValue, (newValue) => {
  selectedOption.value = newValue;
})

//处理点击组件外的任何元素
const myComponent = ref(null);
let clickHandler;

onMounted(() => {
  const clickHandler = (event) => {
    if (!myComponent.value.contains(event.target)) {
      // 点击事件发生在组件外部
      // console.log('Clicked outside the component!');
      isOpen.value = false;
    }
  };

  document.addEventListener('click', clickHandler);
});

onUnmounted(() => {
  // 组件卸载时，移除事件监听器，避免内存泄漏
  document.removeEventListener('click', clickHandler);
});

</script>