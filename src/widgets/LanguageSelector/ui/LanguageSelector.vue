<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import ukFlag from '~~/src/shared/assets/icons/UKFlag.vue'
  import ruFlag from '~~/src/shared/assets/icons/RUflag.vue'

  const languages = [
    {
      code: 'en',
      label: 'English',
      icon: ukFlag
    },
    {
      code: 'ru',
      label: 'Русский',
      icon: ruFlag
    }
  ]

  const currentLang = ref(languages[0])
  const isOpen = ref(false)
  const selectorRef = ref(null)

  function toggleDropdown() {
    isOpen.value = !isOpen.value
  }

  function selectLanguage(lang) {
    currentLang.value = lang
    isOpen.value = false
  }

  function handleClickOutside(e) {
    if (selectorRef.value && !selectorRef.value.contains(e.target)) {
      isOpen.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
  })
</script>

<template>
  <div ref="selectorRef" class="relative inline-block">
    <button
      class="flex items-center space-x-2 rounded-full p-2 cursor-pointer button"
      @click="toggleDropdown"
    >
      <Component
        :is="currentLang.icon"
        alt="flag"
        class="w-6 h-6 rounded-full"
      />
    </button>

    <div
      v-if="isOpen"
      class="absolute left-0 mt-2 rounded-lg shadow-lg z-50 dropdown"
    >
      <ul>
        <li
          v-for="lang in languages"
          :key="lang.code"
          class="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer"
          @click="selectLanguage(lang)"
        >
          <Component :is="lang.icon" class="w-6 h-6 rounded-full" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
  .button,
  .dropdown {
    border: 2px solid rgba(0, 0, 0, 0.1);
  }

  .dropdown {
    z-index: 3;
    background-color: #fff;
  }
</style>
