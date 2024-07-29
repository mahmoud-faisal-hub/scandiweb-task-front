<script setup>
import { useProductTypeAttributesComponent } from '~/composables/useProductTypeAttributesComponent';
import { notifyError } from "~/composables/useNotify";

const form = ref({
  sku: null,
  name: null,
  price: null,
  type: null,
});

let { selectedComponent } = useProductTypeAttributesComponent(form.value.type);

const errors = ref([]);

let save = async () => {
  console.log('executed');
  const { data: message, error } = await useMyFetch(`/products`, {
    method: 'POST',
    body: {
      ...form.value
    },
  });

  if (!error.value) {
    await navigateTo('/')
  } else {
    errors.value = error.value.data;
    console.log(error.value.data.message);
    notifyError("Please, submit required data");
  }
};

watch(
  form,
  (newValue) => {
    selectedComponent = useProductTypeAttributesComponent(newValue.type)?.selectedComponent;
  },
  { deep: true }
);

defineExpose({
  save
});
</script>

<template>	
  <form id="product_form" class="px-5 py-2 border-2 border-black rounded shadow-2xl">
    <TextInput label="SKU" labelFor="sku" v-model="form.sku" type="text" id="sku" class="!border !border-black" :class="{'!border-red-500': errors['sku']}" required />
    <div v-if="errors['sku']" class="mt-[-15px]">
      <InputError v-for="message in errors['sku']" :key="message" :message="message" />
    </div>

    <TextInput label="Name" labelFor="name" v-model="form.name" type="text" id="name" class="!border !border-black" :class="{'!border-red-500': errors['name']}" required />
    <div v-if="errors['name']" class="mt-[-15px]">
      <InputError v-for="message in errors['name']" :key="message" :message="message" />
    </div>

    <TextInput label="Price ($)" labelFor="price" v-model="form.price" type="number" id="price" class="!border !border-black" :class="{'!border-red-500': errors['price']}" required />
    <div v-if="errors['price']" class="mt-[-15px]">
      <InputError v-for="message in errors['price']" :key="message" :message="message" />
    </div>

    <SelectInput label="Type Switcher" labelFor="productType" v-model="form.type" id="productType" class="!border !border-black" :class="{'!border-red-500': errors['type']}" required>
      <option disabled value selected class="hidden"></option>
      <option id="DVD" value="DVD">DVD</option>
      <option id="Book" value="Book">Book</option>
      <option id="Furniture" value="Furniture">Furniture</option>
    </SelectInput>
    <div v-if="errors['type']" class="mt-[-15px]">
      <InputError v-for="message in errors['type']" :key="message" :message="message" />
    </div>

    <selectedComponent v-if="selectedComponent" v-model="form" :errors="errors" />
    <!-- <Component :is="selectedComponent" v-if="selectedComponent" v-model="form" /> -->
  </form>
</template>