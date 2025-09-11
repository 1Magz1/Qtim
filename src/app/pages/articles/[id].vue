<script setup lang="ts">
  import type { Post } from '~~/src/shared/types'

  const route = useRoute()
  const router = useRouter()

  const postId = computed(() => route.params.id as string)
  const imageLoaded = ref(false)

  const {
    data: post,
    pending,
    error
  } = useFetch<Post>(
    `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${postId.value}`,
    {
      transform: (post: Post) => {
        return {
          ...post,
          image: 'https://picsum.photos/seed/' + Math.random() + '1024/768'
        }
      }
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
        content: computed(() => post.value?.description || 'Описание статьи')
      }
    ]
  })

  const goBack = () => {
    router.back()
  }

  const onImageLoad = () => {
    imageLoaded.value = true
  }
</script>

<template>
  <div class="article-page">
    <div v-if="pending" class="skeleton">
      <USkeleton class="skeleton__title" />
      <USkeleton class="skeleton__picture" />
      <USkeleton class="skeleton__legend" />
      <USkeleton class="skeleton__description" />
    </div>

    <div v-else-if="error" class="error">
      <h2>Ошибка загрузки</h2>
      <p>Не удалось загрузить статью</p>
      <button class="back-button" @click="goBack">Back</button>
    </div>

    <div v-else-if="post">
      <h1 class="title">{{ post.title }}</h1>

      <div class="image-container">
        <div v-if="!imageLoaded" class="image-placeholder" />

        <NuxtImg
          :src="post.image"
          :alt="post.title || 'Post image'"
          loading="lazy"
          width="1024"
          height="768"
          :class="{ 'image-loaded': imageLoaded }"
          @load="onImageLoad"
        />
      </div>

      <span class="legend">About</span>

      <p class="description">{{ post.description }}</p>

      <UButton size="xl" class="my-3 cursor-pointer" @click="goBack"
        >Back</UButton
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
  .article-page {
    padding: 0 112px;
    margin-bottom: 80px;
  }

  .title {
    margin-bottom: 73px;
  }

  .description {
    width: 60%;
  }

  .description {
    font-size: 2.25rem;
  }

  .legend {
    display: block;
    margin-top: 80px;
    margin-bottom: 32px;
  }

  .error {
    text-align: center;
    padding: 60px 0;
  }

  .image-container {
    position: relative;
    margin-bottom: 24px;

    img {
      width: 100%;
      object-fit: cover;
      height: 700px;
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
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  NuxtImg.image-loaded {
    opacity: 1;
  }

  .skeleton {
    &__title {
      width: 55%;
      height: 126px;
      margin-bottom: 73px;
    }
    &__picture {
      width: 100%;
      height: 700px;
    }
    &__legend {
      width: 10%;
      height: 24px;
      margin-top: 80px;
      margin-bottom: 32px;
    }
    &__description {
      height: 400px;
      width: 60%;
    }
  }
</style>
