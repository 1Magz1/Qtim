<script lang="ts">
  import HeaderComponent from '@/widgets/Header'
  import FooterComponent from '@/widgets/Footer'

  export default {
    name: 'DefaultLayout',
    components: { FooterComponent, HeaderComponent }
  }
</script>

<template>
  <HeaderComponent />
  <main>
    <slot />
  </main>
  <FooterComponent />
</template>

<style scoped></style>
