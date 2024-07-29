<script setup>
import { useProductTypeAttributes } from '@/composables/useProductTypeAttributes';

const props = defineProps({
  modelValue: Object,
  errors: {
    type: Array,
    default: []
  }
});

const emit = defineEmits(['update:modelValue']);

const internalAttributes = useProductTypeAttributes(props, emit);
</script>


<template>
  <div>
    <TextInput label="Size (MB)" labelFor="size" v-model="internalAttributes.size" type="number" id="size" class="!border !border-black" :class="{'!border-red-500': errors['size']}" required />
    <div v-if="errors['size']" class="mt-[-15px]">
      <InputError v-for="message in errors['size']" :key="message" :message="message" />
    </div>
    <p class="font-bold">Please provide size in (MB).</p>
  </div>
</template>