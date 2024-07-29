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
    <TextInput label="Weight (KG)" labelFor="weight" v-model="internalAttributes.weight" type="number" id="weight" class="!border !border-black" :class="{'!border-red-500': errors['weight']}" required />
    <div v-if="errors['weight']" class="mt-[-15px]">
      <InputError v-for="message in errors['weight']" :key="message" :message="message" />
    </div>
    <p class="font-bold">Please provide weight in (KG).</p>
  </div>
</template>