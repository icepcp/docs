import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'home',
    base: '/',
    description: 'Documentation for all things icepcp',
    titleTemplate: 'icepcp docs',
    lastUpdated: true,
    head: [
      ['link', { rel: 'icon', type: 'image/png', href: '/logo/ice.svg' }]
    ],
    themeConfig: {
      logo: '/logo/ice.svg',
      siteTitle: 'icepcp docs',
      nav: [
        { text: 'PythonProjects', link: '/PythonProjects/what-is-python', activeMatch: '/PythonProjects/' },
        { text: 'ImGonnaLie', link: '/ImGonnaLie/', activeMatch: '/ImGonnaLie/' },
        { text: 'RunIsomer', link: '/RunIsomer/introduction/', activeMatch: '/RunIsomer/' }
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
      '/ImGonnaLie/': [
        {
          items: [
            { text: 'Introduction', link: '/ImGonnaLie/' },
            { text: 'Getting Started', link: '/ImGonnaLie/getting-started' }
          ]
        }
      ],
      '/RunIsomer/': [
        {
          collapsible: true,
          items: [
            { text: 'Introduction', link: '/RunIsomer/introduction/' },
            { text: 'Getting Started', link: '/RunIsomer/introduction/getting-started' }
          ]
        },
        {
          text: 'Theme',
          collapsible: true,
          items: [
            { text: 'Introduction', link: '/RunIsomer/theme/introduction' },
            { text: 'Configuration', link: '/RunIsomer/theme/configuration' },
            { text: 'Navigation Bar', link: '/RunIsomer/theme/navigation-bar' }
          ]
        }
      ]
    },
    editLink: {
      pattern: 'https://github.com/icepcp/docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/icepcp/docs' }
    ],
    search: {
      provider: 'local'
    }
  },
  }
,)
