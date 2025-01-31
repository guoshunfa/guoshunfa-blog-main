import { copyrightPlugin } from '@vuepress/plugin-copyright'
import { iconPlugin } from '@vuepress/plugin-icon'
import { noticePlugin } from '@vuepress/plugin-notice'
import { photoSwipePlugin } from '@vuepress/plugin-photo-swipe'
import { watermarkPlugin } from '@vuepress/plugin-watermark'
import { searchPlugin } from '@vuepress/plugin-search'
import { baiduAnalyticsPlugin } from '@vuepress/plugin-baidu-analytics'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { tocPlugin } from '@vuepress/plugin-toc'
import { cachePlugin } from '@vuepress/plugin-cache'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { seoPlugin } from '@vuepress/plugin-seo'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import { rightAnchorPlugin } from 'vuepress-plugin-right-anchor'
export const plugins = [
    copyrightPlugin({
        author: '郭顺发',
        license: 'MIT',
        copyright: 'Copyright © 2025 guoshunfa',
        authorGetter: (page) => null,
        licenseGetter: (page) => null,
        copyrightGetter: (page) => null,
        triggerLength: 0,
        maxLength: 0,
        global: true,
        disableCopy: false,
        disableSelection: false,
        canonical: 'https://www.guoshunfa.com',
    }),
    iconPlugin({
        // 选项
    }),
    // 右侧目录
    // https://github.com/xuek9900/vuepress-plugin-right-anchor/blob/master/zh-README.md
    // rightAnchorPlugin({
    //     showDepth: 2,
    //     ignore: [
    //       // 更多...
    //     ],
    //     expand: {
    //       trigger: 'click',
    //       clickModeDefaultOpen: true
    //     },
    //     customClass: null,
    // }),
    noticePlugin({
        config: [
            // {
            //     path: '/',
            //     title: '哈喽',
            //     content: '',
            //     actions: [
            //         {
            //             text: 'Primary Action',
            //             link: 'https://theme-hope.vuejs.press/',
            //             type: 'primary',
            //         },
            //         { text: 'Default Action' },
            //     ],
            // },
        ],
    }),
    // 图片预览 
    photoSwipePlugin({
        selector: '.theme-default-content img',
        download: true,
        fullscreen: true, 
        scrollToClose: true,
        locales: {
            '/': {
                close: '关闭',
                fullscreen: '全屏',
                share: '分享',
                zoom: '缩放',
                prev: '上一张',
                next: '下一张',
            }
        }
    }),
    // 图片放大
    mediumZoomPlugin({
        selector: 'no-zoom',
    }),
    // 水印
    watermarkPlugin({
        enabled: false,
    }),
    searchPlugin({
        locales: {
            '/': {
                placeholder: '搜索',
            },
        },
        hotKeys: ['f', 'F'],
        maxSuggestions: 10,
    }),
    baiduAnalyticsPlugin({
        id: '861d8202fb22bd71cfd74b173c070dda',
    }),
    googleAnalyticsPlugin({
        id: 'G-6T4389LF8L',
    }),
    tocPlugin({
        componentName: 'Toc',
        defaultPropsOptions: {
            containerTag: 'div',
            containerClass: 'right-toc',
            listClass: 'toc-list'
        }
    }),
    seoPlugin({
    }),
    sitemapPlugin({
        hostname: 'https://www.guoshunfa.com',
        
    }),
    cachePlugin({
        type: 'memory',
    }),
] 