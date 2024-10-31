import { defineUserConfig } from 'vuepress/cli';
import { webpackBundler } from '@vuepress/bundler-webpack';
import { defaultTheme } from '@vuepress/theme-default';

export default defineUserConfig({
  lang: 'en-US',
  title: '',
  description: 'TimyaBPM',
  base: '/TimyaBPM-Documents/', 

  theme: defaultTheme({
    logo: '/bpm_logo.png',
    logoDark: '/bpm_logo-docs.png',
 
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
          {
            text: 'Yeni Proje Oluşturma',
            collapsible: true,
            children: [
              '/yeniproje.md',               
              
            ],
            
          },
          {
            text: 'Veri Tanımları',
            collapsible: true,
            children: [
              '/veritanim.md',               
              
            ],
            
          },
          
          {
            text: 'Form Oluşturma',
            collapsible: true,
            children: [
              '/form.md',               
              
            ],
            
          },
          {
            text: 'Süreç Oluşturma',
            collapsible: true,
            children: [
              '/surec.md',               
              
            ],
            
          },

          {
            text: 'İş Nesneleri',
            collapsible: true,
            children: [
              '/nesne.md',               
              
            ],
            
          },
          {
            text: 'Roller',
            collapsible: true,
            children: [
              '/roller.md',               
              
            ],
            
          },

          {
            text: 'Bağlantılar',
            collapsible: true,
            children: [
              '/baglanti.md',               
              
            ],
            
          },
         
          {
            text: 'Listeler',
            collapsible: true,
            children: [
              '/listeler.md',               
              
            ],
            
          },

          {
            text: 'Scripts',
            collapsible: true,
            children: [
              '/script.md',               
              
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
          {
            text: 'Creating   Project ',
            collapsible: true,
            children: [
              '/en/yeniproje.md',               
            ],
          },
          {
            text: 'Data Definition ',
            collapsible: true,
            children: [
              '/en/veritanim.md',               
            ],
          },
          {
            text: 'Form Creation Processes  ',
            collapsible: true,
            children: [
              '/en/form.md',               
            ],
          },
          {
            text: ' Creating  Process ',
            collapsible: true,
            children: [
              '/en/surec.md',               
            ],
          },
          {
            text: '   Business Objects ',
            collapsible: true,
            children: [
              '/en/nesne.md',               
            ],
          },
          {
            text: 'Roles',
            collapsible: true,
            children: [
              '/en/roller.md',               
              
            ],
            
          },
          {
            text: 'Connections',
            collapsible: true,
            children: [
              '/en/baglanti.md',               
              
            ],
            
          },
         
          {
            text: 'Lists',
            collapsible: true,
            children: [
              '/en/listeler.md',               
              
            ],
            
          },

          {
            text: 'Script',
            collapsible: true,
            children: [
              '/en/script.md',               
              
            ],
            
          },
        ],
      },
    },
  }),

  head: [
    ['link', { rel: 'icon', href: '/TimyaBPM-Documents/favicon.ico' }]
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

 
});
