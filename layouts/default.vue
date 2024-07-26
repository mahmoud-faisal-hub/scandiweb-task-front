<template>
  <div class="min-h-screen relative">
    <div class="pb-[4.5rem]">
      <slot />
    </div>
    <div class="absolute bottom-0 w-full h-[4.5rem] flex justify-center items-center">
      <AppFooter />
    </div>
  </div>
</template>