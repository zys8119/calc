<template>
  <div class="details">
    <search-table>
      <template #header>
        <breadcrumb></breadcrumb>
      </template>
      <template #middle>
        <enterprise-information></enterprise-information>
      </template>
      <template #table>
        <n-tabs v-model:value="active">
          <n-tab-pane
            v-for="(item, key) in tabs"
            :key="key"
            :name="item.value"
            :tab="item.title"
          ></n-tab-pane>
        </n-tabs>
        <component :is="content" v-if="content"></component>
      </template>
    </search-table>
  </div>
</template>

<script lang="ts" setup title="详情">
const active = ref(2);
const tabs = shallowRef([
  {
    title: "跟进记录",
    value: 1,
    content: defineAsyncComponent({
      loader: () => import("./component/gjjl.vue"),
    }),
  },
  {
    title: "商机",
    value: 2,
    content: defineAsyncComponent({
      loader: () => import("./component/sahngji.vue"),
    }),
  },
]);
const activeInfo = computed(() =>
  tabs.value.find((e) => e.value === active.value),
);
const content = computed(() => activeInfo.value?.content);
</script>

<style lang="less" scoped></style>
