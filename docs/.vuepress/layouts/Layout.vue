<template>
  <Layout>
    <template #page>
      <main class="page">
        <div class="theme-default-content">
          <Content />
        </div>
        <ClientOnly>
          <div class="toc-wrapper">
            <Toc />
          </div>
        </ClientOnly>
      </main>
    </template>
  </Layout>
</template>

<script>
import { defineComponent } from 'vue'
import Layout from '@vuepress/theme-default/layouts/Layout.vue'

export default defineComponent({
  name: 'CustomLayout',
  components: {
    Layout
  }
})
</script>

<style lang="scss">
.toc-wrapper {
  position: fixed;
  right: 1rem;
  top: calc(var(--navbar-height) + 4.6rem);
  width: 16rem;
  background: var(--c-bg);
  border-left: 1px solid var(--c-border);
  padding: 1rem;
  box-sizing: border-box;
  max-height: calc(100vh - var(--navbar-height) - 5rem);
  overflow-y: auto;
  z-index: 100;

  @media (max-width: 959px) {
    display: none;
  }
}

// 调整主内容区域的布局
.theme-default-content {
  // 默认布局（有左侧边栏时）
  margin-left: calc(var(--sidebar-width) + 2rem);
  padding-top: 3rem;
  
  @media (min-width: 960px) {
    padding-right: 19rem;
    max-width: calc(100% - var(--sidebar-width) - 20rem);
  }

  // 在没有左侧边栏时
  .no-sidebar & {
    margin-left: 2rem;
    max-width: calc(100% - 20rem);
  }

  // 在小屏幕上
  @media (max-width: 959px) {
    margin-left: 1rem;
    margin-right: 1rem;
    padding-right: 0;
    max-width: 100%;
  }

  // 调整标题样式
  h1:first-child {
    margin-top: 0;
    padding-top: 0;
  }
}

// 确保页面容器正确定位
.page {
  padding-left: 0;
  padding-top: 2rem;
}

// 调整页面标题
.page-title,
h1.title {
  margin-top: -0.5rem !important;
  padding-top: 0 !important;
  margin-bottom: 2rem;
}
</style>
