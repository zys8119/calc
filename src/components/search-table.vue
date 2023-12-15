<template>
  <div class="search-table w-100% h-100% flex flex-col">
    <div
      v-if="$slots.header"
      class="search-table-filter bg-$white m-b-15px b-rd-15px p-15px"
    >
      <slot name="header"></slot>
    </div>
    <div
      v-if="
        (!hideFilter && $slots.filter) ||
        $slots['filter-btn'] ||
        $slots['filter-btn-left'] ||
        $slots['filter-btn-right'] ||
        title
      "
      class="search-table-filter bg-$white m-b-15px b-rd-15px p-15px"
    >
      <div v-if="title" class="text-16px text-#333 m-b-18px font-bold">
        {{ title }}
      </div>
      <div class="flex">
        <div class="flex-1 gap-15px">
          <slot name="filter"></slot>
        </div>
        <div>
          <slot name="filter-btn">
            <n-space>
              <slot name="filter-btn-left"></slot>
              <n-button v-if="!hideReset" @click="reset">重置</n-button>
              <n-button v-if="!hideSearch" type="primary" @click="search">
                <template #icon>
                  <n-icon>
                    <Search />
                  </n-icon>
                </template>
                搜索
              </n-button>
              <slot name="filter-btn-right"></slot>
            </n-space>
          </slot>
        </div>
      </div>
    </div>
    <div
      v-if="$slots.middle"
      class="search-table-filter bg-$white m-b-15px b-rd-15px p-15px"
    >
      <slot name="middle"></slot>
    </div>
    <div
      class="search-table-content bg-$white flex-1 flex flex-col b-rd-15px p-15px"
    >
      <div class="search-table-table flex-1 flex flex-col">
        <n-space
          v-if="$slots['table-filter-left'] || $slots['table-filter-right']"
          align="center"
          class="m-b-15px"
          justify="space-between"
        >
          <n-space
            v-if="$slots['table-filter-left']"
            align="center"
            justify="center"
          >
            <slot name="table-filter-left"></slot>
          </n-space>
          <n-space
            v-if="$slots['table-filter-right']"
            align="center"
            justify="center"
          >
            <slot name="table-filter-right"></slot>
          </n-space>
        </n-space>
        <div class="flex-1">
          <n-data-table ref="tableRef" v-bind="dataTableProps">
            <template #empty>
              <slot name="empty"></slot>
            </template>
            <template #loading>
              <slot name="loading"></slot>
            </template>
          </n-data-table>
        </div>
      </div>
      <div v-if="$slots.footer" class="search-table-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Search } from "@vicons/ionicons5";
import { DataTableColumns, DataTableProps } from "naive-ui";

const tableRef = ref();
const props = defineProps<{
  columns: DataTableColumns;
  title?: string;
  hideReset?: boolean;
  hideSearch?: boolean;
  hideFilter?: boolean;
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
  pagination: pagination,
  checkedRowKeys: checkedRowKeys,
  dataTableProps: dataTableProps,
  table: tableRef,
});
</script>

<style lang="scss" scoped>
.search-table {
}
</style>
