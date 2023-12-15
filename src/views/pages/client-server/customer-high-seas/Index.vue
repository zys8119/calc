<template>
  <div class="Index w-100% h-100%">
    <search-table
      ref="table"
      v-model:data="data"
      v-model:params="params"
      :api="$apis.test.aa"
      :columns="columns"
      :reset-params="resetParams"
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
import { DataTableColumns } from "naive-ui";

const table = $ref();
const params = ref({});
const data = ref([{ name: "虎虎虎", id: 0 }]);
const columns = ref<DataTableColumns>([
  {
    type: "selection",
  },
  {
    key: "name",
    title: "asdas",
    render({ name }) {
      return h("div", name + "----asda");
    },
  },
]);
const resetParams = () => {
  params.value = {};
};
onMounted(async () => {
  console.log(await table);
});
</script>

<style lang="scss" scoped>
.Index {
}
</style>
