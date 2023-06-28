import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import config from './env/config'

// https://vitejs.dev/config/
export default defineConfig({
  base: config.base,
  server: {
    port: 3100,
  },
  plugins: [vue(), vueJsx()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
