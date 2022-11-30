export default {
    title: 'home',
    base: '/',
    description: 'Documentation for all things icepcp',
    titleTemplate: 'icepcp docs',
    lastUpdated: true,
    cleanUrls: 'with-subfolders',
    head: [
      ['link', { rel: 'icon', type: 'image/png', href: '/assets/logo/ice.png' }]
    ],
    themeConfig: {
      logo: '/assets/logo/ice.png',
      siteTitle: 'icepcp docs',
      nav: [
        { text: 'PythonProjects', link: '/PythonProjects/what-is-python', activeMatch: '/PythonProjects/' },
        { text: 'RunIsomer', link: '/RunIsomer/index', activeMatch: '/RunIsomer/' }
      ],
      sidebar: {
        '/PythonProjects/': [
        {
          items: [
            { text: 'What is Python?', link: '/PythonProjects/what-is-python' },
            { text: 'scriptspam', link: '/PythonProjects/scriptspam' }
          ]
        }
      ]
    },
    editLink: {
      pattern: 'https://github.com/icepcp/docs/tree/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/icepcp/docs' }
    ]
  }
}
