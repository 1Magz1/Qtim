<script setup lang="ts">
  import { ref, computed } from 'vue'
  import Pagination from '@/widgets/Pagination'

  interface Post {
    id: number
    createdAt: Date
    title: string
    preview: string
    image: string
    description: string
  }

  const currentPage = ref(1)
  const postsPerPage = 8

  const {
    data: allPosts,
    pending,
    error
  } = await useFetch<Post[]>(
    'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/'
  )

  const displayedPosts = computed(() => {
    if (!allPosts.value) return []

    const startIndex = (currentPage.value - 1) * postsPerPage
    const endIndex = startIndex + postsPerPage

    return allPosts.value.slice(startIndex, endIndex)
  })

  const totalPages = computed(() => {
    if (!allPosts.value) return 0

    return Math.ceil(allPosts.value.length / postsPerPage)
  })

  const handlePageChange = (page: number) => {
    currentPage.value = page
  }
</script>

<template>
  <div>
    <h1>Articles</h1>

    <div v-if="pending">
      <div class="flex items-center gap-4">
        <USkeleton class="h-12 w-12 rounded-full" />

        <div class="grid gap-2">
          <USkeleton class="h-4 w-[250px]" />
          <USkeleton class="h-4 w-[200px]" />
        </div>
      </div>
    </div>

    <div v-if="error">
      <p>Ошибка при загрузке постов</p>
    </div>

    <div v-else>
      <p>Текущая страница: {{ currentPage }} из {{ totalPages }}</p>
      <p>Всего постов: {{ allPosts?.length || 0 }}</p>

      <div class="posts-container">
        <div v-for="post in displayedPosts" :key="post.id" class="post-card">
          <h3>{{ post.title }}</h3>
          <p>{{ post.title }}</p>
          <span class="post-meta">User ID: {{ post.id }}</span>
        </div>
      </div>

      <Pagination
        :page="currentPage"
        :total="allPosts?.length || 0"
        :per-page="postsPerPage"
        @update:page="handlePageChange"
      />
    </div>
  </div>
</template>

<style scoped>
  .posts-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }

  .post-card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .post-card h3 {
    margin-top: 0;
    color: #333;
    font-size: 1.1em;
  }

  .post-card p {
    color: #666;
    line-height: 1.5;
  }

  .post-meta {
    font-size: 0.9em;
    color: #888;
    display: block;
    margin-top: 10px;
  }
</style>
