import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { navbar } from './config/navbar.js'
import { plugins } from './config/plugins.js'
import { sidebar } from './config/sidebar/index.js'
import path from 'path'
import { path as vuepressPath } from '@vuepress/utils'

// https://vuepress.vuejs.org/zh/reference/config.html
// 默认主题：https://ecosystem.vuejs.press/zh/themes/default/config.html
export default defineUserConfig({
    // 打包工具配置
    bundler: viteBundler(),

    // 主题配置
    theme: defaultTheme({
        // 部署的域名
        hostname: 'https://www.guoshunfa.com',

        // Logo 配置
        logo: 'https://pic.guoshunfa.com/20250121/20250121210144561.jpg',

        // 夜间模式 Logo（可选）
        logoDark: null,

        // Logo 替代文字
        logoAlt: '郭顺发',

        // 首页配置
        home: '/',

        // 导航栏配置
        navbar,

        // 仓库配置（可选）
        repo: 'guoshunfa',

        // 侧边栏配置，可以是数组或对象格式
        // 设置 'heading' 会自动根据页面标题生成侧边栏
        sidebar,

        // 侧边栏深度，默认为2（显示 h2 和 h3 标题）
        sidebarDepth: 0,

        // 编辑链接配置
        editLink: true,
        docsRepo: null,
        docsBranch: 'main',
        docsDir: '',

        // 最近更新时间戳
        lastUpdated: true,

        // 贡献者列表
        contributors: true,

        // 颜色模式配置
        colorMode: 'auto',
        colorModeSwitch: true,
    }),

    // 站点基础路径，默认为 "/"
    base: '/',

    // 站点语言配置
    lang: 'zh-CN',

    // 站点标题
    title: '郭顺发的站点',

    // 站点描述
    description: '站点信息正在搭建......',

    // 站点头部配置
    head: [
        ['link', { rel: 'icon', href: 'https://pic.guoshunfa.com/20250121/20250121210144561.jpg' }],
        ['meta', { name: 'author', content: '郭顺发' }],
        ['meta', { name: 'keywords', content: 'vuepress,blog,郭顺发,guoshunfa' }],
    ],

    // 目录配置
    dest: 'docs/.vuepress/dist',    // 输出目录
    temp: 'docs/.vuepress/.temp',   // 临时文件目录
    cache: 'docs/.vuepress/.cache', // 缓存目录
    public: 'docs/.vuepress/public',// 静态资源目录

    // 调试模式
    debug: false,

    // 页面路由配置
    pagePatterns: ['**/*.md', '!.vuepress', '!node_modules'],

    // 永久链接格式
    permalinkPattern: ':raw',

    // 插件
    plugins,
})
