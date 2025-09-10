<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
router.replace("/articles");
</script>

<template>
  <div>
    <p>Перенаправление на articles...</p>
  </div>
</template>

<style scoped></style>
