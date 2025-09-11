<script lang="ts">
  import Triangle from '../../../shared/assets/icons/Triangle.vue'

  export default {
    name: 'FooterComponent',
    components: { Triangle }
  }
</script>

<template>
  <footer class="footer">
    <div class="flex items-center justify-between top">
      <div>
        <span>Is there a project?</span>
        <span class="special">Let’s work together</span>
      </div>
      <div class="flex flex-col info">
        <div class="flex flex-col">
          <span>For all questions</span>
          <a href="tel:+79202780068">+7 (920) 278—00—68</a>
          <a href="mailto:qtim@agency.com">qtim@agency.com</a>
        </div>
        <div class="flex flex-col">
          <span class="label">Office in Russia</span>
          <span class="text">139 Ruben Station Lake Drew, NM 52678</span>
          <NuxtLink class="btn flex items-center justify-center" to="/articles">
            <Triangle />
          </NuxtLink>
        </div>
        <div class="flex flex-col">
          <span class="label">Office in Dubai</span>
          <span class="text">139 Ruben Station Lake Drew, NM 52678</span>
          <NuxtLink class="btn flex items-center justify-center" to="/articles">
            <Triangle />
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <nav class="footer-nav">
        <ul class="flex items-center gap-4">
          <li>
            <NuxtLink class="link" to="https://facebook.com">Facebook</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="https://instagram.com"
              >Instagram</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="link" to="https://telegram.com">Telegram</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="flex items-center justify-center decor">
        <span class="decor__text">Go</span>
      </div>
      <nav class="footer-nav">
        <ul class="flex items-center gap-4">
          <li>
            <NuxtLink class="link" to="https://behance.net">Behance</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="https://www.linkedin.com"
              >Linkedn</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="link" to="/">Privacy Policy</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  .footer {
    padding: 140px 112px 30px 112px;
    background-color: #e2beffff;
    overflow: hidden;
    position: relative;
  }

  .link {
    display: block;
    position: relative;
    overflow: hidden;

    &:after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: #000;
      transition: transform 0.3s ease-in-out;
    }

    &:hover {
      &:after {
        transform: translateX(100%);
      }
    }
  }

  .special {
    display: block;
    font-size: 112px;
    color: #101010ff;
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 8px;
    width: 100%;
    max-width: 450px;
  }

  .text {
    width: 100%;
    max-width: 147px;
  }

  .label {
    margin-bottom: 12px;
  }

  .info {
    gap: 36px;
  }

  .top {
    margin-bottom: 143px;
  }

  .decor {
    position: absolute;
    bottom: -50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 358px;
    height: 358px;
    background-color: #000;
    border-radius: 50%;

    &__text {
      transform: translateY(-40px);
      color: #fff;
      font-size: 32px;
    }
  }

  .btn {
    width: 32px;
    height: 32px;
    background-color: #000;
    border-radius: 50%;
    margin-top: 8px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #fff;
    }
  }
</style>
