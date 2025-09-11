<script setup lang="ts">
  import type { Post } from '../../../../shared/types'

  defineProps<{
    post: Post
  }>()
</script>

<template>
  <div class="post-card">
    <h3>{{ post.title }}</h3>
    <p>{{ post.preview }}</p>
    <span class="post-meta">User ID: {{ post.id }}</span>
  </div>
</template>

<style scoped>
  .post-card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .post-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .post-card h3 {
    margin-top: 0;
    color: #333;
    font-size: 1.1em;
    margin-bottom: 8px;
  }

  .post-card p {
    color: #666;
    line-height: 1.5;
    margin-bottom: 8px;
  }

  .post-meta {
    font-size: 0.9em;
    color: #888;
    display: block;
    margin-top: 10px;
  }
</style>
