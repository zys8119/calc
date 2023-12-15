<template>
  <div class="layout w-100% h-100% fixed">
    <n-layout class="w-100% h-100%" has-sider>
      <n-layout-sider class="h-100% n-layout-sider">
        <navbar></navbar>
      </n-layout-sider>
      <n-layout-content
        :style="{ '--n-color': 'var(--backgroundColor)' }"
        content-style="padding: 24px;"
      >
        <router-view />
      </n-layout-content>
    </n-layout>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.layout {
  .n-layout-sider {
    width: var(--aside-width) !important;
    max-width: var(--aside-width) !important;
  }
}
</style>
