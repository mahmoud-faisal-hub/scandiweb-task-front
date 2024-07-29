<script setup>
const props = defineProps({
  product: { 
    type: Object, 
    required: true 
  },
  modelValue: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['update:modelValue']);

const isChecked = computed(() => props.modelValue.includes(props.product.id));

const toggleCheckbox = () => {
  const newValue = [...props.modelValue];
  if (isChecked.value) {
    const index = newValue.indexOf(props.product.id);
    newValue.splice(index, 1);
  } else {
    newValue.push(props.product.id);
  }
  emit('update:modelValue', newValue);
};
</script>

<template>	
  <div class="border-[3px] border-gray-700 w-[200px] flex items-center justify-center flex-col relative py-10">
    <input 
      type="checkbox"
      :value="props.product.id"
      :checked="isChecked"
      @change="toggleCheckbox"
      class="delete-checkbox absolute top-4 left-4 hover:cursor-pointer"
    />
    <p>{{ product.sku }}</p>
    <p>{{ product.name }}</p>
    <p>{{ product.price }} $</p>
    <p v-if="props.product.type == 'DVD'">Size: {{ product.attributes.size }} MB</p>
    <p v-else-if="props.product.type == 'Book'">Weight: {{ product.attributes.weight }}KG</p>
    <p v-else-if="props.product.type == 'Furniture'">Dimentions: {{ product.attributes.height }}x{{ product.attributes.width }}x{{ product.attributes.length }}</p>
  </div>
</template>