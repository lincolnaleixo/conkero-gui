import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess'

// //vitejs.dev/config/
export default defineConfig({
  build: {
    polyfillDynamicImport: false,
    cssCodeSplit: false,
  },
  resolve: {
    alias:{
      '@' : path.resolve(__dirname, './src')
    },
    dedupe: ["svelte", "@fullcalendar/common",'svelte-apexcharts']
  },
  plugins: [svelte({
    preprocess: sveltePreprocess()
  })
  ],
  optimizeDeps: {
    include: ['svelte-apexcharts']
  }
});