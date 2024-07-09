import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import envCompatible from 'vite-plugin-env-compatible'

export default defineConfig({
  plugins: [
    vue(),
    envCompatible(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

