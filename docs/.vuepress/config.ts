// 配置文件的入口文件   
// 当前文件相当于webpack.config.ts

import { defineConfig } from "vuepress/config";

export default defineConfig({ 
    base: '/web-docs/',   
    // title: 'Web Docs',
    // description: '前端开发技术文档集成',
    head: [
        ['link', { rel: 'icon', href: '/curry.jpg' }]
    ],
    // 是否在每个代码块的左侧显示行号。
    markdown: {
        lineNumbers: true
    },
    plugins: [
        '@vuepress/plugin-nprogress',
        '@vuepress/plugin-active-header-links',
        '@vuepress/plugin-back-to-top'
    ],
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
          lang: 'zh-CN',
          title: 'Web Docs',
          description: '前端技术开发文档集成'
        },
        '/en/': {
          lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
          title: 'Web Docs',
          description: 'Web'
        },
    },
    // theme: '@vuepress/blog',
    themeConfig: {
        locales: {
            '/': {
                // 多语言下拉菜单的标题
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                nav: [
                  { text: '代码仓库', link: 'https://gitee.com/zhang_huai_wei', target: '_blank' },
                  { text: '博客', link: 'https://blog.csdn.net/weixin_44224921', target: '_blank' },
                ],
                sidebar: [
                  {
                    title: '前端包管理工具',   // 必要的
                    path: '/guide/包管理工具',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                  },
                  // {
                  //   title: 'Group 2',
                  //   children: [ /* ... */ ],
                  //   initialOpenGroupIndex: -1 // 可选的, 默认值是 0
                  // }
                ]
              },
          '/en/': {
            selectText: 'Languages',
            label: 'English',
            ariaLabel: 'Languages',
            editLinkText: 'Edit this page on GitHub',
            algolia: {},
            nav: [
              { text: 'Nested', link: '/nested/', ariaLabel: 'Nested' }
            ],
            sidebar: {
              '/': [/* ... */],
              '/guide/': [/* ... */]
            }
          }
          
        }
      }
});