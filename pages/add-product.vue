<script setup lang="ts">
const route = useRoute()
const form = ref();

const save = () => {
  form.value.save();
}
</script>

<template>
  <div>
    <AppHeader title="Product Add">
      <Button @click="save()">Save</Button>
      <NuxtLink to="/"><Button>Cancel</Button></NuxtLink>
    </AppHeader>
    <section class="py-7">
      <div class="container mx-auto px-3 max-w-[600px] justify-center justify-items-center">
        <ProductForm ref="form" />
      </div>
    </section>
  </div>
</template>
