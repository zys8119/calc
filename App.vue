<template>
  <div class="App">
    <n-config-provider
      :date-locale="localeDateName"
      :locale="localeName"
      :theme="theme"
      :theme-overrides="themeOverrides"
      :theme-vars="themeVars"
    >
      <slot v-if="$slots.default"></slot>
      <router-view v-else />
    </n-config-provider>
  </div>
</template>

<script lang="ts" setup>
import appConfig from "@/config/setting";
import { LocaleName, ThemeMode } from "@/types/BaseConfig.d";
import { darkTheme, dateEnUS, dateZhCN, enUS, zhCN } from "naive-ui";

const theme = computed(() => {
  return appConfig.theme === ThemeMode.DARK ? darkTheme : null;
});
const localeName = computed(() => {
  return appConfig.localeName === LocaleName.zhCN ? zhCN : enUS;
});
const localeDateName = computed(() => {
  return appConfig.localeName === LocaleName.zhCN ? dateZhCN : dateEnUS;
});
// 主题样式自定义
const themeOverrides = computed(() => {
  return {
    common: {
      primaryColor: appConfig.themeColor,
      primaryColorHover: appConfig.themeColorHover,
    },
    Button: {
      colorPressedPrimary: appConfig.themeColor,
      textColorPressed: appConfig.themeColor,
      borderPressedPrimary: appConfig.themeColor,
      borderPressed: `1px solid ${appConfig.themeColor}`,
    },
  };
});
// 主题样式自定义变量
const themeVars = reactive({
  rateIconFullColor: appConfig.themeColor,
  sliderActiveBackground: appConfig.themeColor,
  buttonPrimaryBackground: appConfig.themeColor,
  buttonPrimaryBorderColor: appConfig.themeColor,
});
</script>

<style scoped lang="scss">
.App {
}
</style>
