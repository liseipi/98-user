<script setup lang="ts">
import type {BankItem} from "~/types/options";

const props = defineProps({
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
  required: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  init: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);

let list = ref<BankItem[]>([]);

const selectedOption = computed({
  get: () => {
    return list.value.find(option => option.id === props.modelValue) || null;
  },
  set: (option: BankItem | null) => {
    emit('update:modelValue', option ? option.id : null); // Use option.value
  }
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;

  if (list.value.length == 0) {
    getCombo();
  }
};

const selectOption = (option: BankItem) => {
  selectedOption.value = option;  // Update the computed property
  isOpen.value = false;
};

const clearSelection = () => {
  selectedOption.value = null;
  isOpen.value = false;
};

const getCombo = async () => {
  let res = await useRequest<BankItem[]>('/wxh5/common/getBankList');
  if (res.data) {
    list.value = res.data as BankItem[];
  }
}

// 输入框绑定的数据
const searchQuery = ref('');
// 搜索过滤
const filteredList = computed(() => {
  if (!searchQuery.value) {
    return list.value; // 如果搜索框为空，显示所有项
  }
  return list.value.filter(item => item.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

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

onMounted(() => {
  if (props.init && list.value.length == 0) {
    getCombo();
  }
})

</script>

<template>
  <div ref="selectComponent" class="flex justify-between items-center relative">
    <div class="text-[#6E7177] text-[0.7rem] leading-6">{{ label }} <span class="text-red-500" v-if="required">*</span>
    </div>

    <div class="text-[#292929] text-[0.7rem] flex flex-row items-center justify-center cursor-pointer"
         @click="toggleDropdown">
      <span>{{ selectedOption ? selectedOption.name : placeholder }}</span>
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
      <div class="px-2 flex justify-between items-center border-b border-gray-200 py-2">
        <div class="flex items-center text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
               class="w-5 h-5 text-gray-500 mr-2">
            <path fill-rule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clip-rule="evenodd"/>
          </svg>
          <span class="txt-black-7 mr-2 flex-1">
            <input type="text" v-model="searchQuery" placeholder="搜索..." class="w-full border rounded px-2">
          </span>
          <button
              class="bg-[#E3EEFF] text-[0.7rem] px-[0.57rem] text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            搜索银行
          </button>
        </div>
      </div>
      <ul class="py-2 text-sm text-gray-700 max-h-64 overflow-y-auto" aria-labelledby="dropdownHoverButton">
        <li v-for="option in filteredList"
            :key="option.value"
            @click="selectOption(option)"
            :class="{ 'bg-gray-100': selectedOption === option }"
        >
          <span class="block px-4 py-1 hover:bg-gray-100 text-[0.7rem]">{{ option.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>