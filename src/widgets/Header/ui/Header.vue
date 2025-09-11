<script setup lang="ts">
  import Logo from '../../../shared/assets/Logo.vue'
</script>

<template>
  <header class="flex justify-between items-center header">
    <Logo />

    <div class="flex wrapper">
      <div class="flex items-center link">
        <NuxtLink class="text-xl" to="/articles">Works</NuxtLink>
        <NuxtLink class="text-xl" to="/articles">About</NuxtLink>
      </div>

      <div class="flex items-center gap-4">
        <span>Contact</span>
        <UButton class="rounded-full text-xl cursor-pointer" size="xl"
          >Let’s work</UButton
        >
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  .header {
    padding: 47px 40px 49px 40px;
  }
  .link {
    gap: 58px;
  }
  .wrapper {
    gap: 91px;
  }
</style>
