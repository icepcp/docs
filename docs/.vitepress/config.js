export default {
    title: 'icepcp docs',
    base: '/docs/',
    description: 'Documentation for all things icepcp',
    themeConfig: {
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
    }
  }
}
