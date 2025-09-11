<script setup lang="ts">
  import type { Post } from '../../../../shared/types'

  const route = useRoute()
  const router = useRouter()

  const postId = computed(() => route.params.id as string)

  const {
    data: post,
    pending,
    error
  } = useFetch<Post>(
    `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${postId.value}`,
    {
      transform: (post: Post) => {
        console.log('Post', post)
        return {
          ...post,
          image: 'https://picsum.photos/seed/' + Math.random() + '1024/768'
        }
      },
      key: `post-${postId.value}`,
      lazy: true
    }
  )

  if (error.value) {
    console.error('Ошибка загрузки статьи:', error.value)
  }

  useHead({
    title: computed(() => post.value?.title || 'Статья'),
    meta: [
      {
        name: 'description',
        content: computed(() => post.value?.preview || 'Описание статьи')
      }
    ]
  })

  const goBack = () => {
    router.back()
  }
</script>

<template>
  <div class="post-detail-page">
    <!-- Загрузка -->
    <div v-if="pending" class="loading">
      <div class="loading-spinner" />
      <p>Загрузка статьи...</p>
    </div>

    <!-- Ошибка -->
    <div v-else-if="error" class="error">
      <h2>Ошибка загрузки</h2>
      <p>Не удалось загрузить статью</p>
      <button class="back-button" @click="goBack">Back</button>
    </div>

    <div v-else-if="post" class="post-content">
      <button class="back-button" @click="goBack">← Back</button>

      <h1 class="post-title">{{ post.title }}</h1>

      <div class="post-image-container">
        <img
          :src="post.image"
          :alt="post.title"
          class="post-image"
          loading="lazy"
        />
      </div>

      <span>About</span>

      <div class="post-body">
        <p class="post-preview">{{ post.description }}</p>
      </div>
    </div>

    <div v-else class="not-found">
      <h2>Статья не найдена</h2>
      <button class="back-button" @click="goBack">Назад</button>
    </div>
  </div>
</template>

<style scoped>
  .post-detail-page {
    padding: 0 112px;
  }

  .loading {
    text-align: center;
    padding: 60px 0;
  }

  .loading-spinner {
    width: 40px;
    height: 40px;
    border: 3px solid #f3f3f3;
    border-top: 3px solid #ff0000;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 20px;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .error,
  .not-found {
    text-align: center;
    padding: 60px 0;
  }

  .back-button {
    background: blue;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.2s ease;
  }

  .back-button:hover {
    background: #cc0000;
  }

  .post-content {
    margin-top: 20px;
  }

  .post-title {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #333;
  }

  .post-image-container {
    width: 100%;
    height: 700px;
    margin-bottom: 24px;
    overflow: hidden;
  }

  .post-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .post-meta {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    color: #666;
    font-size: 0.9rem;
  }

  .post-body {
    line-height: 1.6;
    margin-bottom: 30px;
  }

  .post-preview {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 20px;
    color: #444;
  }

  .post-full-content {
    font-size: 1rem;
    color: #333;
    white-space: pre-line;
  }
</style>
