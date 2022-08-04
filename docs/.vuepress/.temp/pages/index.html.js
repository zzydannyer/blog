export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/index.jpeg\",\"heroText\":\"JS工具库\",\"tagline\":\"一点一滴都是进步\",\"actions\":[{\"text\":\"快速上手 →\",\"link\":\"/pages/index.md/\",\"type\":\"primary\"}],\"features\":[{\"title\":\"个人工具\",\"details\":\"JS工具类方法，手写常用js方法汇总，建造一个属于自己的工具库；不追求大而全，目标是小而实用\"},{\"title\":\"详细记录\",\"details\":\"每一个函数都能正常调用。写这个库的目的是为了更好的学习JS，所以每行代码都有注释，并且有详细解释，好记性不如烂笔头。\"},{\"title\":\"技术极为先进\",\"details\":\"使用目前极为先进的vue3和vuepress搭建，100%单元测试覆盖，目前函数方法使用js编写，后期将会使用TS改造\"}]},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")

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
