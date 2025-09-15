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
    item: 'w-11 h-full justify-center cursor-pointer item',
    prev: 'w-11 h-full justify-center cursor-pointer control',
    next: 'w-11 h-full justify-center cursor-pointer control'
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

    .control {
      background-color: var(--color-light);
    }

    .item:not(.bg-primary) {
      background-color: rgba(243, 243, 243, 1);
    }
  }
</style>
