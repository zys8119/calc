<template>
  <n-space align="center" class="filter-item" justify="center">
    <span v-if="title" class="text-#666666 text-14px">{{ title }}：</span>
    <slot></slot>
  </n-space>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string;
}>();
</script>

<style lang="scss" scoped>
.filter-item {
}
</style>
