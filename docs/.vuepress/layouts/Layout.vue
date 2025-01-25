<template>
  <ParentLayout>
    <template #page>
      <div class="theme-default-content custom-content">
        <Content class="content"/>
        <Toc class="toc"/>
        <div class="custom-footer">
          <p>2025 <a href="https://www.guoshunfa.com" target="_blank">郭顺发</a> | 保留所有权利</p>
            <p>
            <a href="https://www.beian.miit.gov.cn/" target="_blank">ICP备案号：黑ICP备2025034955号-1</a>
          </p>
        </div>
      </div>
    </template>
  </ParentLayout>
</template>

<script>
import { defineComponent } from 'vue'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'

export default defineComponent({
  name: 'CustomLayout',
  components: {
    ParentLayout
  }
})
</script>

<style lang="scss">
.theme-default-content {
  margin: 0 auto;
  padding: 2rem 2.5rem;
  max-width: 1200px;
}

.content {
  width: 100%;
}

.toc {
  position: fixed;
  right: 1.5rem;
  top: 5rem;
  width: 10rem;
  background: var(--c-bg);
  z-index: 2;
  padding-left: 1rem;
  
  @media (max-width: 959px) {
    display: none; /* 在移动设备上隐藏目录 */
  }
}

.footer {
  padding-top: 2rem;
}

.custom-footer {
  margin-top: auto;
  margin-left: 0;
  padding: 1.5rem;
  border-top: 1px solid var(--c-border);
  text-align: center;
  color: var(--c-text-lighter);
  background-color: #f8f9fa;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  
  p {
    margin: 0.5rem 0;
    width: 100%;
    text-align: center;
  }
  
  a {
    color: var(--c-text-lighter);
    &:hover {
      color: var(--c-brand);
    }
  }
}

.custom-content {
  margin-left: calc(var(--sidebar-width) + 1rem);
  padding: 4rem 0 0;
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  max-width: 48rem;
  flex: 1;
  padding: 0 2rem;
}

/* 响应式布局调整 */
@media (max-width: 959px) {
  .custom-content {
    margin-left: 0;
    max-width: 100%;
    padding: 2rem 0 0;
  }
  
  .custom-footer {
    margin-left: 0;
    width: 100%;
  }
  
  .content {
    max-width: 100%;
    padding: 0 1rem;
  }
}
</style>
