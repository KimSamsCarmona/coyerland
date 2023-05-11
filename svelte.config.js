import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';

const config = {
	kit: {
		adapter: adapter()
	},

	hydrate: {
		enabled: false
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
