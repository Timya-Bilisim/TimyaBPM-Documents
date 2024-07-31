// sidebar.js
const sidebar = {
	'/': [
	  {
		text: 'Kurulum',
		collapsible: true,
		children: [
		  '/kurulum/index.md',
		  


           

		  {
			text: '2-Timya BPM Web Kurulumu',
			collapsible: true,
			children: [
			  '/kurulum/timya-bpm-web-kurulumu/index.md',
			  '/kurulum/timya-bpm-web-kurulumu/iis-kurulumu.md',
			  '/kurulum/timya-bpm-web-kurulumu/dotnet-7-kurulumlari.md',
			],
		  },
		  {
			text: '3-Timya BPM Web Konfigurasyonu',
			collapsible: true,
			children: [
				'/kurulum/timya-bpm-web-konfigurasyon/index.md',
			  '/kurulum/timya-bpm-web-konfigurasyon/iss-ayarlari.md',
			  '/kurulum/timya-bpm-web-konfigurasyon/yeni-database-kurulumu.md',
			],
		  },

		  {
			text: '4-Timya BPM Engine Kurulumu',
			collapsible: true,
			children: [
				'/kurulum/timya-bpm-engine-kurulumu.md',
			
			],
		  },
		
		  {
			text: '5- Timya BPM Engine Konfigurasyon',
			collapsible: true,
			children: [
			  '/kurulum/timya-bpm-engine-konfigurasyon/index.md',
			  '/kurulum/timya-bpm-engine-konfigurasyon/database-baglanti-metni.md',
			  '/kurulum/timya-bpm-engine-konfigurasyon/e-posta-sunucusu-bilgileri.md',
			  '/kurulum/timya-bpm-engine-konfigurasyon/server-ve-workingmodule-ayarlari.md',
			],
		  },
		],
	  },
	  {
		text: 'Başlangıç',
		path: '/getting-started.md',
	  },
	  {
		text: 'Dijital Cüzdanlardan TR Karekod ile Ödeme',
		path: '/dijital-cuzdan',
	  },
	  {
		text: 'Sürüm Yönetimi',
		path: '/surum-yonetimi',
	  },
	  {
		text: 'ÖHVPS Uyum Tarihleri',
		path: '/uyum-tarihleri',
	  },
	  {
		text: 'ÖHVPS Sıkça Sorulan Sorular',
		path: '/sorulan-sorular',
	  },
	],
	'/en/': [
	  {
		text: 'Setup',
		collapsible: true,
		children: [
		  '/en/get-started.md',
		  '/en/installation.md',
		],
	  },
	  {
		text: 'FAQ',
		path: '/en/faq',
	  },
	],
  };
  
  export default sidebar;
  