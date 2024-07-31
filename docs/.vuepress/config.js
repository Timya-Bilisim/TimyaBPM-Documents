import { defineUserConfig } from 'vuepress/cli';
import { webpackBundler } from '@vuepress/bundler-webpack';
import { defaultTheme } from '@vuepress/theme-default';
import sidebar from './sidebar.js'; // İçe aktar

export default defineUserConfig({
  lang: 'en-US',
  title: '',
  description: 'TimyaBPM',
  theme: defaultTheme({
    logo: '/bpm_logo.png',
    logoDark: '/bpm_logo-docs.png',
    heroImage: 'timya_bpm1.png',
    heroImageDark: 'timya_bpm-dark.png',
    locales: {
      '/': {
        selectLanguageName: 'Türkçe',
        navbar: [
          { text: 'Anasayfa', link: '/' },
          { text: 'TimyaBPM Kurulum', link: '/get-started' },
        
        ],
        sidebar: sidebar['/'], // Sidebar yapılandırması
      },
      '/en/': {
        selectLanguageName: 'English',
        navbar: [
          { text: 'Home', link: '/en/' },
          { text: 'TimyaBPM Setup', link: '/en/get-started' },
        ],
        sidebar: sidebar['/en/'], // İngilizce sidebar yapılandırması
      },
    },
  }),
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  markdown: { assets: { absolutePathPrependBase: true } },
  bundler: webpackBundler(),
  base: "/TimyaBPM-Documents/",
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
