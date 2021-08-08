module.exports = {
  title: "Brawlup",
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
  plugins: [
			'@vuepress/plugin-docsearch',
			{
				apiKey: 'f56cbb9f1f596ffbbf7eee57fb0dad03',
				indexName: 'brawlupjs',
				placeholder: 'Search',
			},
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
    smoothScroll: true,
    searchPlaceholder: 'Search',
    docsDir: '',
    notFound: ['You lost in time with Collette!', 'Sweet dreams...', 'You got a Shelly super in the face!', 'And don\'t forget to stay hydrated...', 'Flying Hook took you to a wrong place!', 'Tell the bank I\'m busy...', 'You wanna play the flame game?', 'Hey, you clipped me.', 'Not there!'],
    nav: [
      {
        text: 'Bot Docs',
        link: '/bot/#welcome'
      },
      {
        text: 'NPM Docs',
        link: '/js/#welcome'
      },
      {
        text: 'Invite',
        link: 'https://discord.com/oauth2/authorize?client_id=817473313793376266&scope=bot+applications.commands&permissions=1543685241',
      },
      {
        text: 'Npm',
        link: 'https://www.npmjs.com/package/brawlup.js'
      },  
      {
        text: 'Vote',
        link: 'https://top.gg/bot/817473313793376266/vote'
      },
      {
        text: 'Twitter',
        link: 'https://twitter.com/UpBotsOfficial'
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/PhW2XJa2yy'
      },
    ], 
    sidebar: {
      '/bot/': [
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            './getting-started/welcome',
            './getting-started/FAQ'
          ]
        },
        {
          title: 'BS Commands',
          collapsable: false,
          children: [
          './bs/save',
          './bs/profile',
          './bs/brawlers',
          './bs/log',
          './bs/club',
          './bs/map',
          './bs/event'
          ]
        },
        {
          title: 'Admin Commands',
          collapsable: false,
          children: [
            './admin/language',
            './admin/prefix',
            './admin/eventch',
            './admin/clubch'
          ]
        },
      ],
      '/js/': [
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            './getting-started/welcome',
            './getting-started/setup',
            './getting-started/FAQ'
          ]
        },
        {
          title: 'Classes',
          collapsable: false,
          children: [
          './classes/client',
          './classes/player',
          './classes/club',
          './classes/battlelog',
          './classes/brawlers',
          './classes/rankings',
          './classes/allmaps',
          './classes/powerleaguemaps',
          './classes/map',
          './classes/events'
          ]
        },
        {
          title: 'Typedefs',
          collapsable: false,
          children: [
          './typedef/clientoptions',
          './typedef/sortoptions',
          './typedef/rankingsoptions'
          ]
        },
        {
          title: 'Additionals',
          collapsable: false,
          children: [
            './additional/v0tov1'
           ]
        },
      ]
    },
  },

  markdown: {
    lineNumbers: true,
  },
  
  plugins: [
    '@xiaopanda/vuepress-plugin-code-copy',
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom'
  ],
  
  globalUIComponents: ['v0-Notice', 'dev-Notice'],
}
