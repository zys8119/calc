<template>
  <div class="Index w-100% h-100%">
    <search-table title="搜索客户">
      <template #filter>
        <n-space>
          <filter-item title="客户名称">
            <n-input></n-input>
          </filter-item>
          <filter-item title="跟进人">
            <n-input></n-input>
          </filter-item>
          <filter-item title="跟进阶段">
            <n-input></n-input>
          </filter-item>
        </n-space>
      </template>
    </search-table>
  </div>
</template>

<script lang="ts" setup title="客户公海">
import FilterItem from "@/components/filter-item.vue";
</script>

<style lang="scss" scoped>
.Index {
}
</style>
