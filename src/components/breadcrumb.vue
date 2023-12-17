<template>
  <div class="breadcrumb">
    <n-breadcrumb separator=">">
      <n-breadcrumb-item
        v-for="(item, key) in munes"
        :key="key"
        :href="item.path"
      >
        {{ item.title }}
      </n-breadcrumb-item>
    </n-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const menusFlat = computed(() => {
  return $utils.flat.objectDeep<any>(
    JSON.parse(JSON.stringify($store.nav.munes || [])),
    "filename",
    null,
    false,
    false,
    (e) => {
      e.filename = e.filename
        .replace("./src/views", "")
        .replace(/\/Index\.[^.]+$/g, "");
    },
  );
});
const munes = computed(() =>
  route.matched.slice(1).map((e: any, k) => {
    const title =
      menusFlat.value[
        route.path
          .split("/")
          .slice(0, k + 3)
          .join("/")
      ]?.title || route.meta?.title;
    return {
      path: typeof e.path === "string" ? `/#${e.path}` : null,
      title,
    };
  }),
);
</script>

<style lang="less" scoped>
.breadcrumb {
  :deep(.n-breadcrumb) {
    .n-breadcrumb-item {
      &:last-child {
        .n-breadcrumb-item__link {
          color: var(--primaryColor);
        }
      }
    }
  }
}
</style>
