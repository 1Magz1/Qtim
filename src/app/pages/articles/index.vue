<script setup lang="ts">
  import { ArticleList, usePosts } from '~~/src/entities/Article'

  const {
    displayedPosts,
    pending,
    error,
    currentPage,
    totalPages,
    totalPosts,
    handlePageChange
  } = usePosts()
</script>

<template>
  <div>
    <h1>Articles</h1>
    <ArticleList
      :posts="displayedPosts"
      :pending="pending"
      :error="error"
      :current-page="currentPage"
      :total-pages="totalPages"
      :total-posts="totalPosts"
      @update:page="handlePageChange"
    />
  </div>
</template>
