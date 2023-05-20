import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */

const config = {
	preprocess: preprocess({
		scss: { renderSync: true },
	  }),

	kit: {
		vite: {
			optimizeDeps: {
				include: ['just-throttle', 'dayjs', '@fullcalendar/common']
			},
			resolve: {
				dedupe: ['@fullcalendar/common']
			},
			ssr: {
				external: ['@xstate/svelte']
			}
		},
		adapter: adapter()
	}
};

export default config;