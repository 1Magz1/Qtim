<script setup lang="ts">
  import { ref } from 'vue'

  defineProps<{
    src: string
    alt?: string
    width?: number | string
    height?: number | string
    aspectRatio?: number
  }>()

  const imageLoaded = ref(false)

  const onImageLoad = () => {
    imageLoaded.value = true
  }
</script>

<template>
  <div class="image-container">
    <div v-if="!imageLoaded" class="image-placeholder" />

    <NuxtImg
      :src="src"
      :alt="alt || 'Image'"
      :width="width"
      :height="height"
      :class="{ 'image-loaded': imageLoaded }"
      loading="lazy"
      @load="onImageLoad"
    />
  </div>
</template>

<style scoped>
  .image-container {
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .image-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(248, 213, 195, 1);
    transition: opacity 0.3s ease;
  }

  NuxtImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  NuxtImg.image-loaded {
    opacity: 1;
  }
</style>
