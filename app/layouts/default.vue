<script lang="ts">
export default {
  name: "DefaultLayout",
};
</script>

<template>
  <div>
    <header>Header</header>
    <main>
      <slot />
    </main>
    <footer>Footer</footer>
  </div>
</template>

<style scoped></style>
