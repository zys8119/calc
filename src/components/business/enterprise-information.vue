<template>
  <div class="enterprise-information">
    <div class="header-info">
      <n-grid :cols="6" class="m-b-15px" x-gap="15">
        <n-grid-item :span="2" class="flex items-center">
          <n-space align="center">
            <div class="w-30px h-30px bg-#1d43a9 b-rd-5px"></div>
            <div class="text-16px font-bold">浙江某某某有限公司</div>
          </n-space>
        </n-grid-item>
        <n-grid-item :span="4" class="flex items-center">
          <filter-item :size="0" justify="start" title="负责人"
            >-阿神解答吧</filter-item
          >
        </n-grid-item>
      </n-grid>
      <n-grid :cols="6" x-gap="15">
        <n-grid-item :span="2" class="flex items-center">
          <n-space class="m-l-50px" justify="center" vertical>
            <filter-item :size="0" justify="start" title="客户地址"
              >鄞州区深蓝大厦1233栋3726号</filter-item
            >
            <filter-item :size="0" justify="start" title="跟进阶段"
              >鄞州区深蓝大厦1233栋3726号</filter-item
            >
          </n-space>
        </n-grid-item>
        <n-grid-item :span="2" class="flex items-center">
          <filter-item :size="0" justify="start" title="备注"
            >鄞州区深蓝大厦1233栋3726号</filter-item
          >
        </n-grid-item>
        <n-grid-item :span="2" class="flex items-center">
          <n-space justify="center" vertical>
            <filter-item :size="0" justify="start" title="微信群号"
              >鄞州区深蓝大厦1233栋3726号</filter-item
            >
            <filter-item :size="0" justify="start" title="跟进人"
              >鄞州区深蓝大厦1233栋3726号</filter-item
            >
          </n-space>
        </n-grid-item>
      </n-grid>
      <n-space :size="15" class="m-t-15px" justify="center" vertical>
        <div v-for="i in 2" :key="i" class="bg-#f6f6f5 p-y-10px p-x-15px">
          <n-grid :cols="30" x-gap="15">
            <n-grid-item :span="2">
              <div class="text-14px font-bold">联系人{{ i }}</div>
            </n-grid-item>
            <n-grid-item :span="5">
              <n-space justify="center" vertical>
                <filter-item :size="0" justify="start" title="联系人"
                  >阿四大技术</filter-item
                >
                <filter-item :size="0" justify="start" title="备注"
                  >鄞州区深蓝大厦1233栋3726号</filter-item
                >
              </n-space>
            </n-grid-item>
            <n-grid-item :span="7">
              <filter-item :size="0" justify="start" title="联系方式"
                >鄞州区深蓝大厦1233栋3726号</filter-item
              >
            </n-grid-item>
            <n-grid-item :span="7">
              <filter-item :size="0" justify="start" title="职位"
                >鄞州区深蓝大厦1233栋3726号</filter-item
              >
            </n-grid-item>
            <n-grid-item :span="8">
              <filter-item :size="0" justify="start" title="邮箱"
                >鄞州区深蓝大厦1233栋3726号</filter-item
              >
            </n-grid-item>
          </n-grid>
        </div>
      </n-space>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.enterprise-information {
  :deep(.filter-item) {
    color: #8c8c8c;

    .filter-item-title {
      color: initial;
    }
  }
}
</style>
