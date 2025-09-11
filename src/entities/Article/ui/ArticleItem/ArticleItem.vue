<script setup lang="ts">
  import type { Post } from '../../../../shared/types'

  const props = defineProps<{
    post: Post
  }>()

  const imageLoaded = ref(false)

  const onImageLoad = () => {
    imageLoaded.value = true
  }

  const handleClick = () => {
    navigateTo(`/articles/${props.post.id}`)
  }
</script>

<template>
  <div class="post-card" @click="handleClick">
    <div class="image-container">
      <div v-if="!imageLoaded" class="image-placeholder" />

      <NuxtImg
        :src="post.image"
        :alt="post.title || 'Post image'"
        loading="lazy"
        width="280"
        height="280"
        :class="{ 'image-loaded': imageLoaded }"
        @load="onImageLoad"
      />
    </div>

    <p>{{ post.preview }}</p>
  </div>
</template>

<style scoped>
  .post-card {
    cursor: pointer;
    width: 100%;
    height: 394px;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .post-card:hover {
    transform: translateY(-20px);
  }

  .image-container {
    position: relative;
    height: 280px;
    margin-bottom: 24px;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .image-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(248, 213, 195, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 500;
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
