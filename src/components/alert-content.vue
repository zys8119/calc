<template>
  <div class="alert-content flex flex-col w-100% h-100%">
    <div class="alert-content-box flex-1 of-x-hidden hide-scrollbar">
      <slot></slot>
    </div>
    <div class="m-t-15px flex justify-center items-center gap-15px">
      <slot name="button">
        <n-button @click="cancel">{{ textCancel || "取消" }}</n-button>
        <n-button type="primary" @click="$emit('confirm')">{{
          textConfirm || "确定"
        }}</n-button>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  hideConfirm?: boolean;
  hideCancel?: boolean;
  textCancel?: string;
  textConfirm?: string;
}>();
defineEmits<{
  (e: "confirm"): void;
}>();
const cancel = () => {
  $alert.dialog.close();
};
</script>

<style lang="less" scoped>
.alert-content {
  .alert-content-box {
    max-height: calc(var(--n-dialog-max-height) - 50px);
  }
}
</style>
