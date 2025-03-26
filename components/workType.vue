<script setup lang="ts">
import type {WorkTypeData, WorkTypeDataItem} from "~/types/options";
import {findInNestedArray} from "~/composables/states";

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
  readonly: {
    type: Boolean,
    default: false,
  }
});

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);

let list = ref<WorkTypeData[]>([]);

const selectedOption = computed({
  get: () => {
    // return list.value.find(option => option.id === props.modelValue) || null;
    return findInNestedArray(list.value, props.modelValue, 'item');
  },
  set: (option: WorkTypeDataItem | null) => {
    emit('update:modelValue', option ? option.id : null);
  }
});

const toggleDropdown = () => {
  if (props.readonly) return;

  isOpen.value = !isOpen.value;

  if (list.value.length == 0) {
    getData();
  }
};

const selectOption = (option: WorkTypeDataItem) => {
  selectedOption.value = option;
  isOpen.value = false;
};

const clearSelection = () => {
  selectedOption.value = null;
  isOpen.value = false;
};

const getData = async () => {
  let res = await useRequest<WorkTypeData[]>('/wxh5/common/getJoborderType');
  if (res.data) {
    list.value = res.data as WorkTypeData[];
  }
}

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
    getData();
  }
})

const showSubOptions = ref({}); // Ref to control the visibility of sub-options

const toggleSubOptions = (option: WorkTypeData) => {
  showSubOptions.value = {
    ...showSubOptions.value,
    [option.id]: !showSubOptions.value[option.id]
  }
}

</script>

<template>
  <div ref="selectComponent" class="flex justify-between items-center relative">
    <div class="text-[#6E7177] text-[0.7rem] leading-6">
      {{ label }} <span class="text-red-500" v-if="required">*</span>
    </div>
    <div class="text-[#292929] text-[0.7rem] flex flex-row items-center justify-center cursor-pointer" @click="toggleDropdown">
      <span>{{ selectedOption ? selectedOption.name : placeholder }}</span>
      <button v-if="props.clearable && selectedOption" @click.stop="clearSelection"
              class="mx-2 text-gray-500 hover:text-gray-700 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
           stroke="currentColor" class="w-[1.3rem] h-[0.74rem] inline-block">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
      </svg>
    </div>


    <div v-if="isOpen"
         class="w-full absolute top-[100%] left-0 z-10 bg-white divide-y divide-gray-100 border border-gray-200 rounded-lg shadow-lg">
      <ul class="py-2 text-sm text-gray-700 max-h-64 overflow-y-auto" aria-labelledby="dropdownHoverButton">
        <li v-for="option in list"
            :key="option.id"
            :class="{ 'bg-gray-100': selectedOption === option }"
        >
          <span class="block px-4 py-1 hover:bg-gray-100 text-[0.7rem]"
                @click="option.item?.length > 0 ? toggleSubOptions(option): selectOption(option)">{{ option.name }}
              <span v-if="option.item?.length > 0" class="float-right">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-[1.3rem] h-[0.74rem] inline-block">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                </svg>
              </span>
          </span>

          <ul v-if="option.item?.length > 0" :class="{'hidden': !showSubOptions[option.id]}">
            <li v-for="opt in option.item"
                :key="opt.id"
                @click="selectOption(opt)"
                :class="{ 'bg-gray-100': selectedOption === opt }"
            >
              <span class="block ml-2 px-4 py-1 hover:bg-gray-100 text-[0.7rem]">{{ opt.name }}</span>
            </li>
          </ul>

        </li>
      </ul>
    </div>
  </div>
</template>