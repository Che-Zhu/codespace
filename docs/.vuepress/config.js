module.exports = {
  base: '/codespace/',

  head: [
    ['link', { rel: 'icon', href: '/site_logo.jpg' }],
  ],

  title: 'CodeSpace',
  description: 'Just some notes',

  themeConfig: {
    logo: "/site_logo.jpg",

    nav: [
      {text: 'Contact me', 
        items: [
          {text: 'Email', link: 'mailto:Che-dev@outlook.com'},
          {text: 'Github Profile', link: 'https://github.com/Che-Zhu'},
        ]
      },
      {text: 'Github', link: 'https://github.com/Che-Zhu/codespace'},
    ],



    sidebar: [
      {
        title: 'The missing semester',
        collapsable: true,
        path: '/notes/missing_semester/info',
        sidebarDepth: 1,
        children: [
          
          '/notes/missing_semester/shell',
        ]
      },

      {
        title: 'Coursera Machine Learning',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          'notes/coursera_machine_learning/overview',
        ]
      },

      {
        title: 'Numpy',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          'notes/numpy/numpy',
          'notes/numpy/statistic'
        ]
      }
    ]
  }
}