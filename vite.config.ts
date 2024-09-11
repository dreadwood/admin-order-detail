import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      },
      {
        find: '@assets',
        replacement: fileURLToPath(new URL('./src/assets', import.meta.url))
      },
      {
        find: '@components',
        replacement: fileURLToPath(new URL('./src/components', import.meta.url))
      },
      {
        find: '@common',
        replacement: fileURLToPath(
          new URL('./src/components/common', import.meta.url)
        )
      },
      {
        find: '@gigs',
        replacement: fileURLToPath(
          new URL('./src/components/gigs', import.meta.url)
        )
      },
      {
        find: '@pages',
        replacement: fileURLToPath(new URL('./src/pages', import.meta.url))
      },
      {
        find: '@style',
        replacement: fileURLToPath(
          new URL('./src/assets/less', import.meta.url)
        )
      },
      {
        find: '@icons',
        replacement: fileURLToPath(
          new URL('./src/assets/icons', import.meta.url)
        )
      },
      {
        find: '@buttons',
        replacement: fileURLToPath(
          new URL('./src/components/buttons', import.meta.url)
        )
      },
      {
        find: '@cards',
        replacement: fileURLToPath(
          new URL('./src/components/cards', import.meta.url)
        )
      },
      {
        find: '@form',
        replacement: fileURLToPath(
          new URL('./src/components/form', import.meta.url)
        )
      },
      {
        find: '@labels',
        replacement: fileURLToPath(
          new URL('./src/components/labels', import.meta.url)
        )
      },
      {
        find: '@tables',
        replacement: fileURLToPath(
          new URL('./src/components/tables', import.meta.url)
        )
      },
      {
        find: '@modal',
        replacement: fileURLToPath(
          new URL('./src/components/modal', import.meta.url)
        )
      }
    ]
  }
})
