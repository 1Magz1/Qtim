<script setup lang="ts">
  const cards = Array(8).fill(null)
</script>

<template>
  <div class="wrapper">
    <div v-for="(_, i) in cards" :key="i">
      <USkeleton class="picture" />
      <USkeleton class="text" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 40px 20px;
    margin-bottom: 50px;
  }
  .picture {
    width: 100%;
    height: 280px;
    margin-bottom: 24px;
  }
  .text {
    height: 90px;
  }
</style>
