<template>
  <div class="search-table w-100% h-100% flex flex-col">
    <div
      v-if="$slots.filter || $slots.filterBtn || title"
      class="search-table-filter bg-$white m-b-15px b-rd-15px p-15px"
    >
      <div v-if="title" class="text-16px text-#333 m-b-18px font-bold">
        {{ title }}
      </div>
      <div class="flex">
        <div class="flex-1">
          <slot name="filter"></slot>
        </div>
        <div>
          <slot name="filter-btn">
            <n-space>
              <n-button @click="reset">重置</n-button>
              <n-button type="primary" @click="search">
                <template #icon>
                  <n-icon>
                    <Search />
                  </n-icon>
                </template>
                搜索
              </n-button>
            </n-space>
          </slot>
        </div>
      </div>
    </div>
    <div
      class="search-table-content bg-$white flex-1 flex flex-col b-rd-15px p-15px"
    >
      <div class="search-table-table flex-1 flex flex-col">
        <n-space align="center" class="m-b-15px" justify="space-between">
          <n-space align="center" justify="center">
            <n-button type="primary">导出</n-button>
          </n-space>
          <n-space align="center" justify="center">
            <n-button ghost type="primary">批量倒入客户</n-button>
            <n-button type="primary">新建客户</n-button>
          </n-space>
        </n-space>
        <div class="flex-1">
          <n-data-table v-bind="dataTableProps"> </n-data-table>
        </div>
      </div>
      <div class="search-table-footer"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Search } from "@vicons/ionicons5";
import { DataTableColumns, DataTableProps } from "naive-ui";

const props = defineProps<{
  title?: string;
  columns: DataTableColumns;
  api?: (data: any) => Promise<{
    code: number;
    data: {
      list: any[];
      total: number;
    };
    messages: string;
  }>;
  isPagination?: boolean;
  getData?: (data: any) => any;
  getDataTotal?: (data: any) => any;
  resetParams?: (params: Record<any, any>) => any;
}>();
const { params, data, tableProps } = defineModels<{
  params: Record<any, any>;
  data: any[];
  tableProps?: Partial<DataTableProps>;
}>();

const checkedRowKeys = ref([]);
const pagination = ref(
  props.isPagination
    ? {
        page: 1,
        pageSize: 15,
        pageCount: 1,
        itemCount: 0,
        prefix({ itemCount, startIndex, endIndex }: any) {
          return `第${startIndex}-${endIndex}条/总共 ${itemCount} 条`;
        },
        showQuickJumper: true,
        showSizePicker: true,
      }
    : {},
);
const dataTableProps = computed<DataTableProps>(() => ({
  columns: props.columns,
  checkedRowKeys: checkedRowKeys.value,
  "onUpdate:checkedRowKeys"(data) {
    checkedRowKeys.value = data as any;
  },
  rowKey: (row) => row.id,
  remote: true,
  data: data.value,
  pagination: pagination.value,
  "onUpdate:page"(d) {
    pagination.value.page = d;
    search();
  },
  ...tableProps.value,
}));
const search = async () => {
  const res =
    (await props.api?.({
      ...params.value,
      ...l_pick(
        pagination.value,
        props.isPagination ? ["page", "pageSize"] : [],
      ),
    })) || data.value;
  if (props.isPagination) {
    data.value =
      (await props.getData?.(res)) || l_get(res, "data.list", data.value || []);
    const total = await props.getDataTotal?.(res);
    pagination.value.itemCount =
      typeof total === "number"
        ? total
        : l_get(res, "data.total", data.value?.length || 0);
  } else {
    data.value =
      (await props.getData?.(res)) || l_get(res, "data", data.value || []);
  }
};
const reset = async () => {
  pagination.value.page = 1;
  params.value = {};
  await props.resetParams?.(params.value);
  await search();
};
onMounted(async () => {
  await reset();
});
defineExpose({
  search,
  reset,
  pagination: pagination.value,
  checkedRowKeys: checkedRowKeys.value,
  dataTableProps: dataTableProps.value,
});
</script>

<style lang="scss" scoped>
.search-table {
}
</style>
