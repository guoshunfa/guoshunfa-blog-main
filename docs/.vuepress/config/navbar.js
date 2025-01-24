// https://ecosystem.vuejs.press/zh/themes/default/config.html#navbar
export const navbar = [
    {
        text: '六年之约',
        link: '/六年之约/六年之约',
        activeMatch: '/六年之约/',
    },
    // 经历、编程经验分享、主营产品、技术、bug、产品推广、作者
    // 以往的经验
    { text: '过往经历', link: '/', children: [{ text: '创业经历', link: '/' }, { text: '日常生活', link: '/' }, { text: '职场经历', link: '/' }] },
    // 编程经验，编程中的所思所想
    { text: '编程分享', link: '/', children: [{ text: '接单经验', link: '/' }, { text: '技术碎片', link: '/' }] },
    // 自学古中医
    {
        text: '中医自学',
        link: '/中医自学/中医自学简要'
    },
    // 自己的产品、开源、网站、案例。
    { text: '实用工具', link: '/实用工具/实用工具' },
    // 作者介绍、产品介绍、联系方式
    { text: '作者', link: '/郭顺发' },
]