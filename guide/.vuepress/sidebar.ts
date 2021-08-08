export default {
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
}
