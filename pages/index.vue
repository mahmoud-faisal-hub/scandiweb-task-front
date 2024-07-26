<script setup lang="ts">
const route = useRoute()
const bulkSelect = ref([]);
const { data: products, refresh: refreshProducts } = await useMyFetch('products')

const bulkDelete = async () => {
  const { data: message, error } = await useMyFetch(`/products/bulk`, {
    method: 'DELETE',
    body: {
      ids: bulkSelect.value,
    },
  });

  if (!error.value) {
    bulkSelect.value = [];
    await refreshProducts();
  } else {
    console.log(error.value.data.message);
  }
}
</script>

<template>
  <div>
    <AppHeader title="Product List">
      <NuxtLink to="/add-product"><Button>ADD</Button></NuxtLink>
      <Button id="delete-product-btn" @click="bulkDelete()" :disabled="bulkSelect.length == 0">MASS DELETE</Button>
    </AppHeader>
    <section class="py-7">
      <div class="container mx-auto px-3 grid gap-14 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center justify-items-center">
        <ProductCard v-model="bulkSelect" v-for="product in products" :key="product.id" :product="product" />
      </div>
    </section>
  </div>
</template>
