export const siteData = JSON.parse("{\"base\":\"/TimyaBPM-Documents/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"TimyaBPM\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/TimyaBPM-Documents/favicon.ico\"}]],\"locales\":{\"/\":{\"lang\":\"tr\",\"title\":\"\",\"description\":\"TimyaBPM'e hoş geldiniz.\"},\"/en/\":{\"lang\":\"en\",\"title\":\"\",\"description\":\"Welcome to TimyaBPM.\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
