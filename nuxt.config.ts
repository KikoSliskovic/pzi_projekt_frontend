import { defineNuxtConfig } from 'nuxt/config'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  css: [
    '@/assets/css/main.css', // Ensure this is the correct path
  ],
  modules: [
    function (_options, nuxt) {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins = config.plugins || [];
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
    '@nuxt/ui',
    // Add any other modules here
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})