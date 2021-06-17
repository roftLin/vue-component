import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import path from "path";
import config from './package.json' 

const { name, version } = config

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin()],
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
  },
   ...process.env.BULID_TYPE === 'lib' ? {
    build:{
      lib:{
        entry: path.resolve(__dirname, './src/index.js'),
        name
      },
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ['vue'],
        output: {
          assetFileNames: `${name}.[ext]`,
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            vue: 'Vue'
          }
        }
      }
    },
    publicDir:'',
  } : {
    build:{
      outDir:'docs'
    }
  }
})
