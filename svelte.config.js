import adapter from '@sveltejs/adapter-auto';
import path from 'path'
import houdini from 'houdini-preprocess'

const config = {

	preprocess: [houdini()],
	kit: {
		vite: {
            resolve: {
                alias: {
                    $houdini: path.resolve('.', '$houdini')
                }
            }
        },
		
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
