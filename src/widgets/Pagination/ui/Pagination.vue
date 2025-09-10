<script lang="ts">
  export default {
    name: 'PaginationComponent'
  }
</script>

<script setup lang="ts">
  const props = defineProps({
    total: {
      type: Number,
      required: true
    },
    page: {
      type: Number,
      default: 1
    }
  })

  const emit = defineEmits<{
    (e: 'update:page', value: number): void
  }>()

  const handlePageChange = (newPage: number) => {
    emit('update:page', newPage)
  }

  const customUi = {
    list: 'flex items-center gap-2 pagination',
    first: 'hidden',
    last: 'hidden',
    item: 'w-11 h-full justify-center cursor-pointer',
    prev: 'w-11 h-full justify-center cursor-pointer',
    next: 'w-11 h-full justify-center cursor-pointer'
  }
</script>

<template>
  <UPagination
    :page="props.page"
    :total="props.total"
    :ui="customUi"
    @update:page="handlePageChange"
  />
</template>

<style lang="scss">
  .pagination {
    height: 44px;
  }
</style>
