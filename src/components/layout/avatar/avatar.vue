<template>
  <div class="avatar flex">
    <div
      class="bg-$navbar-color p-t-10px p-b-15px w-$navbar-width flex justify-center items-center"
    >
      <div class="w-46px of-hidden flex justify-center items-center">
        <img :src="`./images/nav-icon1.png`" alt="" class="w-100% h-100%" />
      </div>
    </div>
    <div class="flex-1 flex items-center">
      <div class="text-20px font-bold p-x-24px">{{ title }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import configBase from "@/config/base";

const title = ref(import.meta.env.VITE_TITLE || configBase.html.title);
</script>

<style lang="scss" scoped>
.avatar {
}
</style>
