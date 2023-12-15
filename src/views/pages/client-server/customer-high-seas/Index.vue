<template>
  <div class="Index w-100% h-100%">
    {{ params }}
    <search-table
      v-model:params="params"
      :api="$apis.test.aa"
      :columns="columns"
      is-pagination
      title="搜索客户"
    >
      <template #filter>
        <n-space>
          <filter-item title="客户名称">
            <n-input v-model:value="params.name"></n-input>
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
const params = ref({});
const columns = ref([
  {
    type: "selection",
  },
  {
    key: "name",
    title: "asdas",
  },
]);
</script>

<style lang="scss" scoped>
.Index {
}
</style>
