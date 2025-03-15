<template>
  <div class="flex justify-between items-center">
    <div class="txt-gray-7">{{ label }} <span class="text-red-500" v-if="required">*</span></div>
    <div class="txt-black-7">
      <input
          :type="type"
          :placeholder="placeholder"
          class="txt-input-box focus:text-left"
          :value="modelValue"
          @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
          :disabled="disabled"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'text',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);
</script>