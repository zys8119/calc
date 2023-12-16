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
          class="navbarItem w-$navbar-width h-42px text-$white p-y-15px flex flex-col justify-center items-center"
          @click="setMenusActive(key)"
        >
          <svg-icon
            v-if="isSvgIcon(item.icon)"
            :icon-props="{ size: 28 }"
            :name="item.icon"
            class="w-28px h-28px m-b--4px"
          ></svg-icon>
          <img :src="item.icon" alt="" class="w-22px h-22px m-b-4px" />
          <div>{{ item.title }}</div>
        </div>
      </div>
      <div
        v-if="childMenus && childMenus.length > 0"
        class="flex-1 h-100% of-x-hidden hide-scrollbar p-x-15px"
      >
        <n-tree
          :data="childMenus"
          :render-label="renderLabel"
          class="w-100% n-tree"
          label-field="title"
          :default-selected-keys="defaultSelectedKeys"
          key-field="url"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SvgIcon from "@/components/svg-icon";

const router = useRouter();
const route = useRoute();
const defaultSelectedKeys = ref([]);
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
const setMenusActive = (key: number) => {
  $store.nav.setMenusActive(key);
  defaultSelectedKeys.value = [];
  nextTick(() => {
    if (
      childMenus.value.length === 0 &&
      (menusActiveInfo.value.redirect || menusActiveInfo.value.url)
    ) {
      router.push(menusActiveInfo.value.redirect || menusActiveInfo.value.url);
    }
  });
};
const isSvgIcon = (src: string) => {
  return !/^(http|\/{2})|\.(png|jpg|jpeg|gif|bmp)$/.test(src);
};
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
      isSvgIcon(option.icon)
        ? h(SvgIcon, {
            name: option.icon,
            class: "navbarTreeItemIcon",
            iconProps: {
              size: 18,
            },
          })
        : h(
            "img",
            { class: "navbarTreeItemIcon", src: option.icon },
            option.title,
          ),
      h("span", { class: "navbarTreeItemLabel" }, option.title),
    ],
  );
};
onMounted(async () => {
  // 选中状态回显
  // 一级菜单
  const path = route.path.match(/^\/*pages\/[^/]+/)?.[0];
  setMenusActive(menus.value.findIndex((e) => e.url?.indexOf?.(path) > -1));
  // 二级菜单
  const childPath = route.path.match(/^\/*pages\/[^/]+\/[^/]+/)?.[0];
  const selectChild = childMenus.value.find(
    (e: any) => e.url?.indexOf?.(childPath) > -1,
  );
  if (selectChild && selectChild.url) {
    defaultSelectedKeys.value = [selectChild.url] as any;
  }
});
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
        display: flex;
        justify-content: center;
        align-items: center;
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
