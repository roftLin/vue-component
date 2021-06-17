import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import viteTestPlugin from 'vite-plugin-test'

export default defineConfig({
  plugins: [
    createVuePlugin(),
    viteTestPlugin()
  ]
})