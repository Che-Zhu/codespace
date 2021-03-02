module.exports = {

  head: [
    ['link', { rel: 'icon', href: '/site_logo.jpg' }],
  ],

  title: 'CodeSpace',
  description: 'Just some notes',

  themeConfig: {
    logo: "/site_logo.jpg",
    smoothScroll: true,

    nav: [
      {text: 'Contact me', 
        items: [
          {text: 'Email', link: 'mailto:Che-dev@outlook.com'},
          {text: 'Github Profile', link: 'https://github.com/Che-Zhu'},
        ]
      },
    ],



    sidebar: [
      {
        title: 'The missing semester',
        collapsable: true,
        path: '/notes/01.missing_semester/00.info',
        sidebarDepth: 1,
        children: [
          '/notes/01.missing_semester/01.shell',
        ]
      },


      {
        title: 'Matplotlib',
        collapsable: true,
        path: '/notes/03.matplotlib/00.info',
        sidebarDepth: 1,
        children: [
          '/notes/03.matplotlib/01.overview',
          '/notes/03.matplotlib/02.basic_functionalities.md',
          '/notes/03.matplotlib/03.steps.md',
          '/notes/03.matplotlib/04.types_of_plot.md',
        ]
      },


      {
        title: 'Numpy',
        collapsable: true,
        path: '/notes/04.numpy/00.info',
        sidebarDepth: 1,
        children: [
          '/notes/04.numpy/01.ndarray_properties',
          'notes/04.numpy/numpy',
          'notes/04.numpy/statistic'
        ]
      },


      {
        title: 'Pandas',
        collapsable: true,
        path: '/notes/05.pandas/00.info',
        sidebarDepth: 1,
        children: [

        ]
      },


      {
        title: '🙀Machine Learning',
        collapsable: true,
        path: '/notes/06.machine_learning/00.info',
        sidebarDepth: 1,
        children: [
          'notes/06.machine_learning/01.overview',
        ]
      },


    ],


    // page condig
    lastUpdated: 'Last Updated',
    repo: 'https://github.com/Che-Zhu/codespace',
    repoLabel: 'Github',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Help me to improve this page',
  }
}