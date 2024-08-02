export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/timyagit/TimyaBPM-Documents/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Kurulum"} }],
  ["/getting-started.html", { loader: () => import(/* webpackChunkName: "getting-started.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/timyagit/TimyaBPM-Documents/docs/.vuepress/.temp/pages/getting-started.html.js"), meta: {"title":"Başlangıç"} }],
  ["/markdown-cheat-sheet.html", { loader: () => import(/* webpackChunkName: "markdown-cheat-sheet.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/timyagit/TimyaBPM-Documents/docs/.vuepress/.temp/pages/markdown-cheat-sheet.html.js"), meta: {"title":"Markdown Cheat Sheet"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/timyagit/TimyaBPM-Documents/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Anasayfa - Timya/BPM"} }],
  ["/en/get-started.html", { loader: () => import(/* webpackChunkName: "en_get-started.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/timyagit/TimyaBPM-Documents/docs/.vuepress/.temp/pages/en/get-started.html.js"), meta: {"title":"SET UP"} }],
  ["/en/getting-started.html", { loader: () => import(/* webpackChunkName: "en_getting-started.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/timyagit/TimyaBPM-Documents/docs/.vuepress/.temp/pages/en/getting-started.html.js"), meta: {"title":"Start Up"} }],
  ["/en/", { loader: () => import(/* webpackChunkName: "en_index.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/timyagit/TimyaBPM-Documents/docs/.vuepress/.temp/pages/en/index.html.js"), meta: {"title":"Home Page - Timya/BPM"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Nursah.LAPTOP-TA4CIEMF/Desktop/timyagit/TimyaBPM-Documents/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
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
