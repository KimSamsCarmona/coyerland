import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercelgit ';

const config = {
	kit: {
		adapter: adapter()
		//    {
		//    pages: 'build',
		//    assets: 'build',
		//    fallback: null,
		//    precompress: false
		// }
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
