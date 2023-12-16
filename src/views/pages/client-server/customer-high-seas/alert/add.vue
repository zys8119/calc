<template>
  <div class="add">
    <div class="flex gap-30px justify-between">
      <n-form label-align="left" label-placement="left" label-width="120px">
        <n-form-item label="客户logo">
          <n-upload>
            <n-button>
              <template #icon>
                <svg-icon name="upload"></svg-icon>
              </template>
              上传图片
            </n-button>
          </n-upload>
        </n-form-item>
        <n-form-item label="客户地址">
          <n-input placeholder="请输入客户地址" />
        </n-form-item>
      </n-form>
      <n-form label-align="left" label-placement="left" label-width="120px">
        <n-form-item label="客户名称" required>
          <n-input placeholder="请输入客户名称" />
        </n-form-item>
        <n-form-item label="微信群号">
          <n-input placeholder="请输入微信群号" />
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped></style>
