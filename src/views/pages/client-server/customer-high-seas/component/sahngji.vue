<template>
  <div class="sahngji">
    <div class="text-16px font-bold m-b-15px">商机名称标题</div>
    <n-space :size="30" vertical>
      <n-space :size="50">
        <filter-item justify="start" title="预计成交金额">￥10000</filter-item>
        <filter-item justify="start" title="预计成交日期"
          >2023-09-09</filter-item
        >
      </n-space>
      <filter-item justify="start" title="相关备注">备注备注</filter-item>
      <filter-item align="start" justify="start" title="相关记录">
        <n-space :size="15" class="m-t-10px" wrap>
          <template v-for="(file, k) in files" :key="k">
            <n-image
              v-if="file.url"
              :src="file.url"
              class="w-100px h-100px b-rd-5px"
              object-fit="cover"
            ></n-image>
          </template>
        </n-space>
      </filter-item>
    </n-space>
  </div>
</template>

<script lang="ts" setup>
const files = ref([
  { url: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" },
  { url: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" },
  { url: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" },
  { url: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" },
]);
</script>

<style lang="less" scoped>
.sahngji {
  :deep(.filter-item) {
    color: #8c8c8c;

    .filter-item-title {
      color: initial;
    }
  }
}
</style>
