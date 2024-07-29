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
    <TextInput label="Height (CM)" labelFor="height" v-model="internalAttributes.height" type="number" id="height" class="!border !border-black" :class="{'!border-red-500': errors['height']}" required />
    <div v-if="errors['height']" class="mt-[-15px]">
      <InputError v-for="message in errors['height']" :key="message" :message="message" />
    </div>

    <TextInput label="Width (CM)" labelFor="width" v-model="internalAttributes.width" type="number" id="width" class="!border !border-black" :class="{'!border-red-500': errors['width']}" required />
    <div v-if="errors['width']" class="mt-[-15px]">
      <InputError v-for="message in errors['width']" :key="message" :message="message" />
    </div>

    <TextInput label="Length (CM)" labelFor="length" v-model="internalAttributes.length" type="number" id="length" class="!border !border-black" :class="{'!border-red-500': errors['length']}" required />
    <div v-if="errors['length']" class="mt-[-15px]">
      <InputError v-for="message in errors['length']" :key="message" :message="message" />
    </div>
    <p class="font-bold">Please provide dimentions in HxWxL format.</p>
  </div>
</template>