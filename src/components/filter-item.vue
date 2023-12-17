<template>
  <n-space
    :align="`${align || 'center'}`"
    :justify="`${justify || 'center'}`"
    :size="size"
    class="filter-item"
  >
    <span v-if="title" class="filter-item-title text-#666666 text-14px"
      >{{ title }}：</span
    >
    <slot class="filter-item-value"></slot>
  </n-space>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string;
  justify?: string;
  align?: string;
  size?: number | [number, number] | "small" | "medium" | "large";
}>();
</script>

<style lang="scss" scoped>
.filter-item {
}
</style>
