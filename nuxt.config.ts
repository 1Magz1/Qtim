// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  srcDir: 'src/app',
  app: {
    rootId: 'app',
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@nuxt/ui"
  ],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '~~/src/'
      }
    }
  },

  css: [
    '@/app/styles/main.css'
  ],
});
