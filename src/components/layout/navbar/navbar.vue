<template>
  <div class="navbar flex w-100% h-100% flex-col of-hidden">
    <avatar></avatar>
    <div class="flex flex-1 w-100% of-hidden">
      <div class="bg-$navbar-color h-100% of-x-hidden hide-scrollbar">
        <div
          v-for="(item, key) in menus"
          :key="key"
          :class="{
            active: $store.nav.menusActive === key,
          }"
          class="navbarItem w-$navbar-width h-42px text-$white p-y-10px flex flex-col justify-center items-center"
          @click="$store.nav.setMenusActive(key)"
        >
          <img :src="item.icon" alt="" class="w-22px h-22px m-b-4px" />
          <div>{{ item.title }}</div>
        </div>
      </div>
      <div
        v-if="childMenus && childMenus.length > 0"
        class="flex-1 h-100% of-x-hidden hide-scrollbar"
      >
        <n-tree
          :data="childMenus"
          :render-label="renderLabel"
          class="w-100% n-tree"
          label-field="title"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const routes = computed(() =>
  $utils.flat.objectDeep<any>(
    router.options.routes as any,
    (d: any) => d.filePath || d.fileName,
  ),
);
const getUrl = (e: any) => {
  const routeInfo = routes.value[e.filename] || routes.value[e.filePath];
  return {
    ...e,
    url: e.url || "/" + routeInfo?.key.replace(/\.[^.]+$/g, ""),
    redirect: e.redirect || routeInfo?.redirect,
  };
};

const menus = computed(() => $store.nav.munes.map(getUrl));
const menusActiveInfo = computed(
  () => menus.value[$store.nav.menusActive] || {},
);
const childMenus = computed(() => {
  return $utils.flat.objectDeep<any>(
    menusActiveInfo.value?.children || [],
    null,
    null,
    false,
    true,
    (e: any) => {
      return getUrl(e);
    },
  );
});
watchEffect(() => {
  $store.nav.setMenusActiveInfo(menusActiveInfo.value);
});
watchEffect(() => {
  if (childMenus.value.length === 0) {
    router.push(menusActiveInfo.value.redirect || menusActiveInfo.value.url);
  }
});
const renderLabel = ({ option }: any) => {
  return h(
    "div",
    {
      class: "navbarTreeItem",
      onClick() {
        router.push(option.url);
      },
    },
    [
      h(
        "img",
        { class: "navbarTreeItemIcon", src: "./images/nav-icon2.png" },
        option.title,
      ),
      h("span", { class: "navbarTreeItemLabel" }, option.title),
    ],
  );
};
</script>

<style lang="less" scoped>
.navbar {
  .navbarItem {
    cursor: pointer;
    user-select: none;

    &.active {
      background-color: var(--navbar-color-active);
    }

    &:hover {
      background-color: var(--navbar-color-hover);
    }
  }

  :deep(.n-tree) {
    .n-tree-node-content {
      flex: 1;
    }

    .n-tree-node-switcher--hide {
      display: none;
    }

    .navbarTreeItem {
      height: 42px;
      display: flex;
      align-items: center;
      padding: 0 23px;
      border-radius: 8px;
      color: #666666;

      .navbarTreeItemIcon {
        margin-right: 15px;
        width: 18px;
        filter: invert(0.1);
      }

      .navbarTreeItemLabel {
        flex: 1;
      }
    }

    .n-tree-node--selected {
      .n-tree-node-content {
        background-color: transparent !important;
      }

      .navbarTreeItem {
        background-color: var(--primaryColor);
        color: #ffffff;

        .navbarTreeItemIcon {
          filter: invert(0);
        }
      }
    }
  }
}
</style>
