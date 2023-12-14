<template>
  <div class="App">
    <slot v-if="$slots.default"></slot>
    <router-view v-else />
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.App {
}
</style>
