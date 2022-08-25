import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from './config/unocss'

const rollupOptions = {
  external: ['vue'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
}

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Unocss(),
  ],
  build: {
    rollupOptions,
    minify: 'terser',
    sourcemap: true,
    cssCodeSplit: true,
    lib: {
      entry: './src/components/index.ts',
      name: 'Maoi',
      fileName: 'maoi',
      formats: ['es', 'umd', 'iife', 'umd'],
    },
  },
})
