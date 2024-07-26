<script setup lang="ts">
defineProps({
  title: {
    type: String, 
    required: true 
  }
});
</script>

<template>	
  <header class="text-center">
		<div class="container mx-auto border-b-4 border-gray-700 py-4 px-3 flex justify-between">
      <h1 class="flex items-center text-2xl">{{ title }}</h1>
			<div>
        <slot />
      </div>
		</div>
	</header>
</template>