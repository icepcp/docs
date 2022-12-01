export default {
    title: 'home',
    base: '/',
    description: 'Documentation for all things icepcp',
    titleTemplate: 'icepcp docs',
    lastUpdated: true,
    cleanUrls: 'with-subfolders',
    head: [
      ['link', { rel: 'icon', type: 'image/png', href: '/logo/ice.png' }]
    ],
    themeConfig: {
      logo: '/logo/ice.png',
      siteTitle: 'icepcp docs',
      nav: [
        { text: 'PythonProjects', link: '/PythonProjects/what-is-python', activeMatch: '/PythonProjects/' },
        { text: 'RunIsomer', link: '/RunIsomer/what-is-isomer', activeMatch: '/RunIsomer/' }
      ],
      sidebar: {
        '/PythonProjects/': [
        {
          items: [
            { text: 'What is Python?', link: '/PythonProjects/what-is-python' },
            { text: 'scriptspam', link: '/PythonProjects/scriptspam' }
          ]
        }
      ],
      '/RunIsomer/': [
        {
          text: 'Introduction',
          collapsible: true,
          items: [
            { text: 'What is Isomer?', link: '/RunIsomer/what-is-isomer' },
            { text: 'Getting Started', link: '/RunIsomer/getting-started' }
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
