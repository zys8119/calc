<template>
  <div class="gjjl">
    <n-space class="m-b-15px">
      <n-button
        v-for="(item, key) in tabs"
        :key="key"
        :type="active === item.value ? 'primary' : 'default'"
        round
        @click="active = item.value"
        >{{ item.title }}
      </n-button>
    </n-space>
    <n-timeline>
      <n-timeline-item
        v-for="(item, key) in timeline"
        :key="key"
        :title="item.time"
      >
        <div class="m-t-15px flex justify-between items-start">
          <filter-item
            align="start"
            class="flex-1"
            justify="start"
            title="客户名称"
            >{{ item.name }}</filter-item
          >
          <filter-item
            align="start"
            class="flex-1"
            justify="start"
            title="拜访地点"
            >{{ item.address }}</filter-item
          >
        </div>
        <div class="m-t-15px flex justify-be items-start">
          <filter-item
            align="start"
            class="flex-1"
            justify="start"
            title="拜访总结"
            >{{ item.result }}</filter-item
          >
          <filter-item
            align="start"
            class="flex-1"
            justify="start"
            title="拍摄照片"
          >
            <n-space :size="15" class="m-t-10px" wrap>
              <template v-for="(file, k) in item.files" :key="k">
                <n-image
                  v-if="file.url"
                  :src="file.url"
                  class="w-100px h-100px b-rd-5px"
                  object-fit="cover"
                ></n-image>
              </template>
            </n-space>
          </filter-item>
        </div>
      </n-timeline-item>
    </n-timeline>
  </div>
</template>

<script lang="ts" setup>
const active = ref(0);
const tabs = ref([
  { title: "会话沟通", value: 0 },
  { title: "外勤拜访", value: 1 },
]);
const timeline = ref([
  {
    time: "2018-04-03 20:46",
    name: "浙江某某某有限公司",
    result: "总结描述总结描述总结前描述描述描述描述",
    address: "总结描述总结描述总结前描述描述描述描述",
    files: [
      { url: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" },
      { url: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" },
      { url: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" },
      { url: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" },
    ],
  },
]);
</script>

<style lang="less" scoped>
.gjjl {
  :deep(.filter-item) {
    color: #8c8c8c;

    .filter-item-title {
      color: initial;
    }
  }
}
</style>
