<template>
  <div class="home">
    <h1>Home Page</h1>
    <div v-for="i in 100" :key="i">{{ i }}</div>
  </div>
</template>

<script lang="ts" setup title="首页"></script>

<style scoped lang="scss">
.home {
}
</style>
