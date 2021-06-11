import { defineConfig } from 'vite'
import vue3 from '@vitejs/plugin-vue'
import { createVuePlugin } from "vite-plugin-vue2";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue3()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './docs-src'),
      "styles": path.resolve(__dirname, "./docs-src/styles"),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "styles/imports.scss";`
      }
    }
  }
})
