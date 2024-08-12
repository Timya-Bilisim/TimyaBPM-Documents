export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/form.html", { loader: () => import(/* webpackChunkName: "form.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/github/TimyaBPM-Documents/docs/.vuepress/.temp/pages/form.html.js"), meta: {"title":"Form Oluşturma Adımları"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/github/TimyaBPM-Documents/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Kurulum"} }],
  ["/getting-started.html", { loader: () => import(/* webpackChunkName: "getting-started.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/github/TimyaBPM-Documents/docs/.vuepress/.temp/pages/getting-started.html.js"), meta: {"title":"Başlangıç"} }],
  ["/markdown-cheat-sheet.html", { loader: () => import(/* webpackChunkName: "markdown-cheat-sheet.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/github/TimyaBPM-Documents/docs/.vuepress/.temp/pages/markdown-cheat-sheet.html.js"), meta: {"title":"Markdown Cheat Sheet"} }],
  ["/nesne.html", { loader: () => import(/* webpackChunkName: "nesne.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/github/TimyaBPM-Documents/docs/.vuepress/.temp/pages/nesne.html.js"), meta: {"title":"İş Nesnesi Ekleme"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/github/TimyaBPM-Documents/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Anasayfa - Timya/BPM"} }],
  ["/surec.html", { loader: () => import(/* webpackChunkName: "surec.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/github/TimyaBPM-Documents/docs/.vuepress/.temp/pages/surec.html.js"), meta: {"title":"Süreç Oluşturma Adımları"} }],
  ["/veritanim.html", { loader: () => import(/* webpackChunkName: "veritanim.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/github/TimyaBPM-Documents/docs/.vuepress/.temp/pages/veritanim.html.js"), meta: {"title":"Veri Tanımlama Adımları"} }],
  ["/yeniproje.html", { loader: () => import(/* webpackChunkName: "yeniproje.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/github/TimyaBPM-Documents/docs/.vuepress/.temp/pages/yeniproje.html.js"), meta: {"title":"Proje Oluşturma"} }],
  ["/en/form.html", { loader: () => import(/* webpackChunkName: "en_form.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/github/TimyaBPM-Documents/docs/.vuepress/.temp/pages/en/form.html.js"), meta: {"title":"Form Creation Steps"} }],
  ["/en/get-started.html", { loader: () => import(/* webpackChunkName: "en_get-started.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/github/TimyaBPM-Documents/docs/.vuepress/.temp/pages/en/get-started.html.js"), meta: {"title":"SET UP"} }],
  ["/en/getting-started.html", { loader: () => import(/* webpackChunkName: "en_getting-started.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/github/TimyaBPM-Documents/docs/.vuepress/.temp/pages/en/getting-started.html.js"), meta: {"title":"Start Up"} }],
  ["/en/nesne.html", { loader: () => import(/* webpackChunkName: "en_nesne.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/github/TimyaBPM-Documents/docs/.vuepress/.temp/pages/en/nesne.html.js"), meta: {"title":"Adding Business Objects"} }],
  ["/en/", { loader: () => import(/* webpackChunkName: "en_index.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/github/TimyaBPM-Documents/docs/.vuepress/.temp/pages/en/index.html.js"), meta: {"title":"Home Page - Timya/BPM"} }],
  ["/en/surec.html", { loader: () => import(/* webpackChunkName: "en_surec.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/github/TimyaBPM-Documents/docs/.vuepress/.temp/pages/en/surec.html.js"), meta: {"title":"Process Creation Steps"} }],
  ["/en/veritanim.html", { loader: () => import(/* webpackChunkName: "en_veritanim.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/github/TimyaBPM-Documents/docs/.vuepress/.temp/pages/en/veritanim.html.js"), meta: {"title":"Data Specifications"} }],
  ["/en/yeniproje.html", { loader: () => import(/* webpackChunkName: "en_yeniproje.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/github/TimyaBPM-Documents/docs/.vuepress/.temp/pages/en/yeniproje.html.js"), meta: {"title":"Creating Project"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/github/TimyaBPM-Documents/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
