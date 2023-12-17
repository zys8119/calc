<template>
  <div class="user-information">
    <div class="header-info">
      <n-grid :cols="6" class="m-b-10px" x-gap="15">
        <n-grid-item :span="6" class="flex items-center">
          <n-space align="center">
            <div class="w-30px h-30px bg-#1d43a9 b-rd-50%"></div>
            <div class="text-16px font-bold">用户名称</div>
          </n-space>
        </n-grid-item>
      </n-grid>
      <n-grid :cols="6" x-gap="15">
        <n-grid-item :span="3" class="flex items-center">
          <n-space class="m-l-42px" justify="center" vertical>
            <filter-item :size="0" justify="start" title="账号">-</filter-item>
            <filter-item :size="0" justify="start" title="姓名">-</filter-item>
            <filter-item :size="0" justify="start" title="账号等级"
              ><span
                class="p-x-10px p-y-2px text-12px text-#fff bg-#8e86d9 b-rd-15px"
                >主管</span
              ></filter-item
            >
            <filter-item :size="0" justify="start" title="每月绩效"
              >-</filter-item
            >
          </n-space>
        </n-grid-item>
        <n-grid-item :span="3" class="flex items-center">
          <n-space justify="center" vertical>
            <filter-item :size="0" justify="start" title="初始密码"
              >-</filter-item
            >
            <filter-item :size="0" justify="start" title="联系电话"
              >-</filter-item
            >
            <filter-item :size="0" justify="start" title="创建时间"
              >-</filter-item
            >
            <filter-item :size="0" justify="start" title="提成点数"
              >-</filter-item
            >
          </n-space>
        </n-grid-item>
      </n-grid>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.user-information {
  :deep(.filter-item) {
    color: #8c8c8c;

    .filter-item-title {
      color: initial;
    }
  }
}
</style>
