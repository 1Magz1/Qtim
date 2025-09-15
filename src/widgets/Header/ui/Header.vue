<script lang="ts">
  import Logo from '../../../shared/assets/icons/Logo.vue'
  import LanguageSelector from '../../LanguageSelector'

  export default {
    name: 'HeaderComponent',
    components: {
      Logo,
      LanguageSelector
    }
  }
</script>

<template>
  <header class="flex justify-between items-center header">
    <Logo />

    <div class="flex wrapper">
      <div class="flex items-center links">
        <NuxtLink class="text-xl link" to="/articles">Works</NuxtLink>
        <NuxtLink class="text-xl link" to="/articles">About</NuxtLink>
      </div>

      <div class="flex items-center gap-4">
        <LanguageSelector />
        <div class="btn">
          <UButton class="rounded-full text-xl cursor-pointer" size="xl"
            >Let’s work</UButton
          >
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  .header {
    padding: 47px 40px 49px 40px;
  }
  .links {
    gap: 58px;
  }
  .link {
    position: relative;
    overflow: hidden;

    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background-color: var(--color-accent);
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      transition: transform 0.2s ease-in-out;
    }

    &:hover {
      &:after {
        transform: translateX(0);
      }
    }
  }
  .wrapper {
    gap: 91px;
  }
  .btn {
    button {
      padding: 16px 32px;
    }
  }
</style>
