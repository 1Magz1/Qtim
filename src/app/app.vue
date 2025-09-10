<template>
  <NuxtLayout>
    <UApp>
      <NuxtPage />
    </UApp>
    <NuxtRouteAnnouncer />
  </NuxtLayout>
</template>

<script setup lang="ts">
  useHead({
    title: 'Qtim',
    meta: [{ name: 'description', content: 'Тестовое задание для Qtim' }]
  })
</script>
