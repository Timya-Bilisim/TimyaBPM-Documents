import { defineUserConfig } from 'vuepress/cli';
import { webpackBundler } from '@vuepress/bundler-webpack';
import { defaultTheme } from '@vuepress/theme-default';

export default defineUserConfig({
  lang: 'en-US',
  title: '',
  description: 'TimyaBPM',
  
  base: '/TimyaBPM-Documents/', // base ayarını buraya ekleyin

  theme: defaultTheme({
    logo: '/TimyaBPM-Documents/bpm_logo.png', // logo yolunu güncelleyin
    logoDark: '/TimyaBPM-Documents/bpm_logo-docs.png',
    locales: {
      '/': {
        selectLanguageName: 'Türkçe',
        navbar: [
          { text: 'Anasayfa', link: '/' },
          { text: 'TimyaBPM Kurulum', link: '/get-started' }
        ],
        sidebar: [
          {
            text: 'Kurulum',
            collapsible: true,
            children: [
              '/get-started.md',
            ],
          },
          {
            text: 'Başlangıç',
            collapsible: true,
            children: [
              '/getting-started.md',
            ],
          },
        ],
      },
      '/en/': {
        selectLanguageName: 'English',
        navbar: [
          { text: 'Home', link: '/en/' },
          { text: 'TimyaBPM Setup', link: '/en/get-started' }
        ],
        sidebar: [
          {
            text: 'Setup',
            collapsible: true,
            children: [
              '/en/get-started.md',
            ],
          },
          {
            text: 'Getting Started',
            collapsible: true,
            children: [
              '/en/getting-started.md',
            ],
          },
        ],
      },
    },
  }),

  head: [
    ['link', { rel: 'icon', href: '/TimyaBPM-Documents/favicon.ico' }] // favicon yolunu güncelleyin
  ],

  bundler: webpackBundler(),

  locales: {
    '/': {
      lang: 'tr',
      title: '',
      description: 'TimyaBPM\'e hoş geldiniz.',
    },
    '/en/': {
      lang: 'en',
      title: '',
      description: 'Welcome to TimyaBPM.',
    },
  },

  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ]
});
