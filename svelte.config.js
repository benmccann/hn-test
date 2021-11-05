import netlify from '@sveltejs/adapter-netlify';

export default {
	kit: {
		adapter: netlify(),
		target: '#svelte',
		vite: {
			build: {
				rollupOptions: {
					output: {
						inlineDynamicImports: false
					}
				}
			}
		}
	}
};
