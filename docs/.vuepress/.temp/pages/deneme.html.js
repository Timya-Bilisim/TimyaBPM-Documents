import comp from "C:/Users/yusuf/source/repos/TimyaBPM-Documents/docs/.vuepress/.temp/pages/deneme.html.vue"
const data = JSON.parse("{\"path\":\"/deneme.html\",\"title\":\"\",\"lang\":\"tr\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"deneme.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
