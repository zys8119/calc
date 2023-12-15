<template>
  <n-result :title="error ?? '页面加载错误'" status="error">
    <div class="flex justify-center text-#999">404 Page Not Found</div>
    <template #footer>
      <n-button @click="goHome">返回首页</n-button>
    </template>
  </n-result>
</template>

<script lang="ts" setup>
defineProps<{
  error?: string;
}>();
const router = useRouter();
const goHome = () => router.replace("/");
</script>

<style lang="less" scoped>
.n-result {
  margin-top: 20vh;
}
</style>
