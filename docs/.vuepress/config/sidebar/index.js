import { authorSidebar } from './author'
import { medicineSidebar } from './medicine'
import { experienceSidebar } from './experience'
import { programmingSidebar } from './programming'
import { toolsSidebar } from './tools'
import { sixYearsSidebar } from './six-years'
import { homeSidebar } from './home'

export const sidebar = {
    '/': homeSidebar,
    '/作者/': authorSidebar,
    '/中医自学/': medicineSidebar,
    '/过往经历/': experienceSidebar,
    '/编程分享/': programmingSidebar,
    '/实用工具/': toolsSidebar,
    '/六年之约/': sixYearsSidebar
} 