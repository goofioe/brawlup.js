import path from 'path';
import { defineUserConfig } from 'vuepress-vite';
import type { DefaultThemeOptions, ViteBundlerOptions } from 'vuepress-vite';
import sidebar from './sidebar';

const config = defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
	bundler: '@vuepress/vite',
	templateDev: path.join(__dirname, 'templates', 'index.dev.html'),
	templateSSR: path.join(__dirname, 'templates', 'index.ssr.html'),
  lang: 'en-US',
  title: "Brawlup",
  base: '/guide/',
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/16x16.png" }],
    ['meta', { name: 'theme-color', content: '#ffe200' }],
    ['meta', { property: 'og:title', content: 'Brawlup Docs' }],
    ['meta', { property: 'og:description', content: 'Brawlup and brawlup.js docs. Helps you to use our bot & our NPM module better!\n\n- Don\'t forget to get support when needed!' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://brawlup.js.org' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:image', content: 'https://i.imgur.com/WwnlQ57.png' }],
  ],
  theme: 'jac',
  themeConfig: {
    jac: {
      logo: 'JacLogo',
      extraOptions: {
        before: 'BranchSelector',
        below: 'LanguageSelector'
      }
    },
		contributors: false,
		sidebar,
		repo: 'brawlup/brawlup.js',
		docsDir: 'guide',
		sidebarDepth: 3,
		editLinks: true,
		lastUpdated: true,
    smoothScroll: true,
    searchPlaceholder: 'Search',
    docsBranch: 'docs',
    notFound: ['You lost in time with Collette!', 'Sweet dreams...', 'You got a Shelly super in the face!', 'And don\'t forget to stay hydrated...', 'Flying Hook took you to a wrong place!', 'Tell the bank I\'m busy...', 'You wanna play the flame game?', 'Hey, you clipped me.', 'Not there!'],
    navbar: [
			{
				text: 'Documentation',
				link: 'https://brawlup.js.org/docs/',
			},
	    {
		text: 'Original',
		link: 'https://discordjs.guide/'
	    },
		],
    themePlugins: {
			mediumZoom: false,
		},
	},
	plugins: [],
});


if (process.env.NODE_ENV === 'production') {
config.plugins.push(
		[
			'@vuepress/plugin-docsearch',
			{
				apiKey: 'f56cbb9f1f596ffbbf7eee57fb0dad03',
				indexName: 'brawlupjs',
				placeholder: 'Search',
			},
		],
		[
			'@vuepress/plugin-google-analytics',
			{ id: '2ELF0EPC7J' },
		],
	);

}

export default config;
