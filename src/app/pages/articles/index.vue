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
  } = usePosts(8)
</script>

<template>
  <div class="container">
    <h1 class="title">Articles</h1>
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

<style scoped lang="scss">
  .container {
    width: 100%;
    margin: 0 auto 140px auto;
    padding: 0 40px;
  }
  .title {
    margin-bottom: 59px;
  }
</style>
