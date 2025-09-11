<script setup lang="ts">
  import type { Post } from '../../../../shared/types'
  import ArticleItem from '../ArticleItem/ArticleItem.vue'
  import Pagination from '~~/src/widgets/Pagination'

  interface Props {
    posts: Post[]
    pending: boolean
    error: any
    currentPage: number
    totalPages: number
    totalPosts: number
  }

  withDefaults(defineProps<Props>(), {
    posts: () => [],
    pending: false,
    error: null,
    currentPage: 1,
    totalPages: 0,
    totalPosts: 0
  })

  const emit = defineEmits<{
    (e: 'update:page', page: number): void
  }>()

  const handlePageChange = (page: number) => {
    emit('update:page', page)
  }
</script>

<template>
  <div class="container">
    <div v-if="pending">
      <span>Loading</span>
    </div>

    <div v-if="error">
      <p>Ошибка при загрузке постов</p>
    </div>

    <div v-else>
      <div class="posts-container">
        <ArticleItem v-for="post in posts" :key="post.id" :post="post" />
      </div>

      <Pagination
        :page="currentPage"
        :total="totalPosts"
        @update:page="handlePageChange"
      />
    </div>
  </div>
</template>

<style scoped>
  .container {
    width: 100%;
    max-width: 1216px;
    margin: 0 auto;
  }
  .posts-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 40px 20px;
    margin-bottom: 50px;
  }
</style>
