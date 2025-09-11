import { computed, ref } from 'vue'
import { useFetch } from 'nuxt/app'
import type { Post } from '../../../shared/types'

export const usePosts = () => {
  const currentPage = ref(1)
  const postsPerPage = 8

  const {
    data: allPosts,
    pending,
    error,
    refresh
  } = useFetch<Post[]>(
    'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/',
    {
      transform: (posts: Post[]) => {
        // Заменяем URL изображений на picsum.photos
        return posts.map(post => ({
          ...post,
          image: 'https://picsum.photos/seed/' + Math.random() + '640/480'
        }))
      }
    }
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

  const totalPosts = computed(() => allPosts.value?.length || 0)

  const handlePageChange = (page: number) => {
    currentPage.value = page
  }

  return {
    allPosts,
    displayedPosts,
    pending,
    error,
    currentPage,
    totalPages,
    totalPosts,
    handlePageChange,
    refresh
  }
}
