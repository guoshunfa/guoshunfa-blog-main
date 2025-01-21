export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"郭顺发的站点\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"https://pic.guoshunfa.com/20250121/20250121210144561.jpg\"}],[\"meta\",{\"name\":\"author\",\"content\":\"郭顺发\"}],[\"meta\",{\"name\":\"keywords\",\"content\":\"vuepress,blog,郭顺发,guoshunfa\"}]],\"locales\":{}}")

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
