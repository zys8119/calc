<template>
  <div class="setupgjr">
    <alert-content @save="save">
      <filter-item class="min-h-100px" title="跟进人">
        <n-space align="center">
          <n-select class="min-w-120px" placeholder="请选择跟进人"></n-select>
          <n-button text type="primary">设为无主</n-button>
        </n-space>
      </filter-item>
    </alert-content>
  </div>
</template>

<script lang="ts" setup>
const save = async () => {};
</script>

<style lang="less" scoped></style>
