<template>
  <div class="Index w-100% h-100%">
    <search-table
      ref="table"
      v-model:data="data"
      v-model:params="params"
      :api="$apis.test.test"
      :columns="columns"
      :reset-params="resetParams"
      is-pagination
      title="搜索客户"
    >
      <template #filter>
        <n-space wrap>
          <filter-item title="客户名称">
            <n-input
              v-model:value="params.name"
              placeholder="请输入客户名称"
            ></n-input>
          </filter-item>
          <filter-item title="跟进人">
            <n-input
              v-model:value="params.name"
              placeholder="请输入跟进人名称"
            ></n-input>
          </filter-item>
          <filter-item title="跟进阶段">
            <n-select
              v-model:value="params.name"
              class="min-w-180px"
            ></n-select>
          </filter-item>
        </n-space>
      </template>
      <template #table-filter-left>
        <n-button type="primary">
          <template #icon>
            <svg-icon name="dc"></svg-icon>
          </template>
          导出
        </n-button>
      </template>
      <template #table-filter-right>
        <n-button ghost type="primary">
          <template #icon>
            <svg-icon name="add"></svg-icon>
          </template>
          批量导入客户
        </n-button>
        <n-button type="primary" @click="add">
          <template #icon>
            <svg-icon name="add"></svg-icon>
          </template>
          新建客户
        </n-button>
      </template>
    </search-table>
  </div>
</template>

<script lang="ts" setup title="客户公海">
import { DataTableColumns, NButton, NDropdown, NSpace } from "naive-ui";
import svgIcon from "@/components/svg-icon";

const table = $ref<any>();
const params = ref({});
const data = ref([{ name: "虎虎虎", id: 0 }]);
const columns = ref<DataTableColumns>([
  {
    type: "selection",
  },
  {
    title: "客户名称",
    key: "name",
  },
  {
    title: "联系人",
    key: "name",
  },
  {
    title: "联系电话",
    key: "name",
  },
  {
    title: "微信群号",
    key: "name",
  },
  {
    title: "跟进阶段",
    key: "name",
    render(row: any, index) {
      const color = ["#f0a168", "#ed7b71", "#b8dc81", "#e8e7e8"][index];
      return h(
        NButton,
        {
          type: "primary",
          round: true,
          size: "small",
          textColor: color === "#e8e7e8" ? "#b9b7b8" : undefined,
          color: color || "#f00",
        },
        () => row.name,
      );
    },
  },
  {
    title: "跟进人",
    key: "name",
  },
  {
    title: "操作",
    key: "name",
    render(row: any): any {
      const options = [
        {
          label: "设置跟进人",
          key: "1",
          click() {
            $alert.dialog({
              title: this.label,
              content: import("./alert/setupgjr.vue"),
              props: {
                row,
              },
              width: "500px",
            });
          },
        },
        {
          label: "详情",
          key: "2",
          click() {
            $router.push("./details");
          },
        },
        {
          label: "编辑基本信息",
          key: "3",
        },
        {
          label: "删除",
          key: "4",
          async click() {
            await $utils.confirm({
              content: "确定删除该数据吗？",
            });
          },
        },
      ];
      return h(
        NDropdown,
        {
          menuProps: () => ({
            class: "b b-solid b-1px b-#e1e0e0",
          }),
          options,
          onSelect(key) {
            (options.find((e) => e.key === key) as any)?.click?.();
          },
        },
        () =>
          h(
            NSpace,
            {
              justify: "center",
              align: "center",
              size: 0,
            },
            () => ["操作", h(svgIcon, { name: "xiala" })],
          ),
      );
    },
  },
]);
const resetParams = () => {
  params.value = {};
};
const add = async () => {
  $alert.dialog({
    title: "新建客户",
    content: import("./alert/add.vue"),
    width: "800px",
    props: {
      onSave: table.search,
    },
  });
};
</script>

<style lang="scss" scoped>
.Index {
}
</style>
