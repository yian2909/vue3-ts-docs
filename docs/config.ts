import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    title: "Vue 3 + TypeScript 学习文档",
    description: "详细学习 Vue3 与 TypeScript 的指南",
    themeConfig: {
        siteTitle: "前端学习",
        logo: "https://yian2909-bucket.oss-cn-hangzhou.aliyuncs.com/logo.gif",
        // 顶部导航栏
        nav: [
          {text:"首页",link:"/"},
          {text:"指南",link:"/guide/"},
          {text:"组件",link:"/components/"},
          {text:"API参考",link:"/api/"},
          {text:"常见问题",link:"/faq/"},
        ],
        socialLinks: [
            { icon:"github",link:"https://github.com/yian2909/front-study"}
        ],
        //侧边栏
        sidebar: {
            "/guide/": [
            {
              text: "开始",
              collapsible: true,
              items: [
                { text:"介绍",link:"/guide/"},
                // { text:"安装",link:"/guide/installation"},
                { text:"基本概念",link:"/guide/concepts"},
              ],
            },
        ],
        "/components/": [
          {
            text: "常用组件",
            items: [
              { text: "介绍",link:"/components/"},
              { text: "按钮 button",link:"/components/button"},
              { text: "表单 form",link:"components/form"},
            ],
          },
        ],
      },
      footer: {
        message: "谢谢光临本网站",
        copyright: "Copyright © 2024 GX"
      }
    },
});
