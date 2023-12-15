<template>
  <div class="search-table w-100% h-100% flex flex-col">
    <div
      v-if="$slots.filter || $slots.filterBtn || title"
      class="search-table-filter bg-$white m-b-15px b-rd-15px p-15px"
    >
      <div v-if="title" class="text-16px text-#333 m-b-18px font-bold">
        {{ title }}
      </div>
      <div class="flex">
        <div class="flex-1">
          <slot name="filter"></slot>
        </div>
        <div>
          <slot name="filter-btn">
            <n-space>
              <n-button>重置</n-button>
              <n-button type="primary">
                <template #icon>
                  <n-icon>
                    <Search />
                  </n-icon>
                </template>
                搜索
              </n-button>
            </n-space>
          </slot>
        </div>
      </div>
    </div>
    <div
      class="search-table-content bg-$white flex-1 flex flex-col b-rd-15px p-15px"
    >
      <div class="search-table-table flex-1">asdas</div>
      <div class="search-table-footer">asda</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Search } from "@vicons/ionicons5";

defineProps<{
  title?: string;
}>();
</script>

<style lang="scss" scoped>
.search-table {
}
</style>
