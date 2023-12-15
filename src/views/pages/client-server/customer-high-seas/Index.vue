<template>
  <div class="Index w-100% h-100%">
    <search-table title="搜索客户">
      <template #filter>
        <n-space>
          <n-space align="center" justify="center">
            <span class="text-#666666 text-14px">客户名称：</span>
            <n-input></n-input>
          </n-space>
          <n-space align="center" justify="center">
            <span class="text-#666666 text-14px">跟进人：</span>
            <n-input></n-input>
          </n-space>
          <n-space align="center" justify="center">
            <span class="text-#666666 text-14px">跟进阶段：</span>
            <n-input></n-input>
          </n-space>
        </n-space>
      </template>
    </search-table>
  </div>
</template>

<script lang="ts" setup title="客户公海"></script>

<style lang="scss" scoped>
.Index {
}
</style>
