<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/">Index</NuxtLink></li>
          <li><NuxtLink to="/add-product">Add Product</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>
</template>
