// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.pal-ette.org',
	integrations: [
		alpinejs(),
		starlight({
			title: 'Pal-ette',
			logo: {
				src: './src/assets/logo.png',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/pal-ette' },
			],
			sidebar: [
				{
					label: 'iNotePal',
					autogenerate: { directory: 'inotepal' },
				},
				{
					label: 'iPetPal',
					autogenerate: { directory: 'ipetpal' },
				},
				{
					label: 'reflex-wordcloud',
					autogenerate: { directory: 'reflex-wordcloud' },
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
			components: {
				Head: './src/components/CustomHead.astro',
			},
		}),
	],
});
