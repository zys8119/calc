<template>
  <div class="confirm">
    <alert-content @save="save">
      <div class="text-#666">{{ content }}</div>
    </alert-content>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  content: string;
}>();
const emit = defineEmits<{
  (e: "save"): void;
}>();
const save = async () => {
  emit("save");
  $alert.dialog.close();
};
</script>

<style lang="less" scoped></style>
