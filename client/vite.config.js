import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import { defineConfig } from 'vite'

// //vitejs.dev/config/
export default defineConfig({
  build: {
    polyfillDynamicImport: false,
    cssCodeSplit: false
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    dedupe: ['svelte', '@fullcalendar/common', 'svelte-apexcharts']
  },
  plugins: [svelte({
    preprocess: sveltePreprocess()
  })
  ],
  optimizeDeps: {
    include: ['svelte-apexcharts']
  }
})
