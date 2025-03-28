<script setup lang="ts">
interface Option {
  value: any; // The actual value to be emitted (can be any type)
  label: string; // The display text
}

const props = defineProps({
  options: {
    type: Array<Option>,
    required: true,
  },
  placeholder: {
    type: String,
    default: '选择一个选项',
  },
  modelValue: {
    type: [String, Number, Boolean, Object, null],  // Allow more types for modelValue
    default: null,
  },
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: 'name',
  },
  required: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);

const selectedOption = computed({
  get: () => {
    return props.options.find(option => option.value === props.modelValue) || null;
  },
  set: (option: Option | null) => {
    emit('update:modelValue', option ? option.value : null); // Use option.value
  }
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option: Option) => {
  selectedOption.value = option;  // Update the computed property
  isOpen.value = false;
};

const clearSelection = () => {
  selectedOption.value = null;
  isOpen.value = false;
};

//处理点击组件外的任何元素
const selectComponent = ref<HTMLElement | null>(null);
let clickHandler: (event: MouseEvent) => void;
onMounted(() => {
  clickHandler = (event: MouseEvent) => {
    if (selectComponent.value && !selectComponent.value.contains(event.target as Node)) {
      isOpen.value = false;
    }
  };
  document.addEventListener('click', clickHandler);
});
onUnmounted(() => {
  document.removeEventListener('click', clickHandler);
});

</script>

<template>
  <div ref="selectComponent" class="flex justify-between items-center relative">
    <div class="text-[#6E7177] text-[0.7rem] leading-6">{{ label }} <span class="text-red-500" v-if="required">*</span>
    </div>

    <div class="text-[#292929] text-[0.7rem] flex flex-row items-center justify-center cursor-pointer"
         @click="toggleDropdown">
      <span>{{ selectedOption ? selectedOption.label : placeholder }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
           stroke="currentColor" class="w-[1.3rem] h-[0.74rem] inline-block">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
      </svg>
    </div>

    <button v-if="props.clearable && selectedOption" @click.stop="clearSelection"
            class="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
           class="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>

    <div v-if="isOpen"
         class="w-full absolute top-[100%] left-0 z-10 bg-white divide-y divide-gray-100 border border-gray-200 rounded-lg shadow-lg">
      <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
        <li v-for="(option, index) in props.options"
            :key="index"
            @click="selectOption(option)"
            :class="{ 'bg-gray-100': selectedOption === option }"
        >
          <span class="block px-4 py-1 hover:bg-gray-100 text-[0.7rem]">{{ option.label }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>