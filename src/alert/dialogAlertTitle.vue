<template>
  <div class="dialogAlertTitle p-b-23px w-100%">
    <div class="dialogAlertTitleLine" />
    <div class="dialogAlertTitleContent w-100%">
      <n-ellipsis style="max-width: 100%">{{ title }}</n-ellipsis>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style scoped lang="less">
.dialogAlertTitle {
  &Content {
    font-size: 18px;
    font-weight: 500;
    color: #333333;
    line-height: 25px;
  }

  &Line {
    position: absolute;
    left: 0;
    top: 57px;
    width: 100%;
    height: 1px;
    background: #eaeaea;
  }
}
</style>
