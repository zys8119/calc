<template>
  <div class="details">
    <search-table>
      <template #header>
        <breadcrumb></breadcrumb>
      </template>
      <template #middle>
        <enterprise-information></enterprise-information>
      </template>
      <template #table>
        <user-information></user-information>
      </template>
    </search-table>
  </div>
</template>

<script lang="ts" setup title="详情"></script>

<style lang="less" scoped></style>
