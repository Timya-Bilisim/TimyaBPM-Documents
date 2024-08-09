export const themeData = JSON.parse("{\"logo\":\"/bpm_logo.png\",\"logoDark\":\"/bpm_logo-docs.png\",\"locales\":{\"/\":{\"selectLanguageName\":\"Türkçe\",\"navbar\":[{\"text\":\"Anasayfa\",\"link\":\"/\"},{\"text\":\"TimyaBPM Kurulum\",\"link\":\"/get-started\"}],\"sidebar\":[{\"text\":\"Kurulum\",\"collapsible\":true,\"children\":[\"/get-started.md\"]},{\"text\":\"Başlangıç\",\"collapsible\":true,\"children\":[\"/getting-started.md\"]},{\"text\":\"Yeni Proje Oluşturma\",\"collapsible\":true,\"children\":[\"/yeniproje.md\"]},{\"text\":\"Veri Tanımları\",\"collapsible\":true,\"children\":[\"/veritanim.md\"]},{\"text\":\"Form Oluşturma\",\"collapsible\":true,\"children\":[\"/form.md\"]},{\"text\":\"Süreç Oluşturma\",\"collapsible\":true,\"children\":[\"/surec.md\"]}]},\"/en/\":{\"selectLanguageName\":\"English\",\"navbar\":[{\"text\":\"Home\",\"link\":\"/en/\"},{\"text\":\"TimyaBPM Setup\",\"link\":\"/en/get-started\"}],\"sidebar\":[{\"text\":\"Setup\",\"collapsible\":true,\"children\":[\"/en/get-started.md\"]},{\"text\":\"Getting Started\",\"collapsible\":true,\"children\":[\"/en/getting-started.md\"]},{\"text\":\"Creating   Project \",\"collapsible\":true,\"children\":[\"/en/yeniproje.md\"]},{\"text\":\"Data Definition \",\"collapsible\":true,\"children\":[\"/en/veritanim.md\"]},{\"text\":\"Form Creation Processes  \",\"collapsible\":true,\"children\":[\"/en/form.md\"]},{\"text\":\" Creating  Process \",\"collapsible\":true,\"children\":[\"/en/surec.md\"]}]}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
