<script setup lang="ts">
  import type { Post } from '../../../../shared/types'
  import ImageLoader from '~~/src/widgets/ImageLoader'

  const props = defineProps<{
    post: Post
  }>()

  const handleClick = () => {
    navigateTo(`/articles/${props.post.id}`)
  }
</script>

<template>
  <div class="post-card" @click="handleClick">
    <ImageLoader :src="post.image" :alt="post.title" width="280" height="280" />

    <p>{{ post.preview }}</p>
  </div>
</template>

<style scoped>
  .post-card {
    cursor: pointer;
    width: 100%;
    height: 440px;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .post-card:hover {
    transform: translateY(-20px);
  }
</style>
