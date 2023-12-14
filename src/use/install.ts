import { App, Plugin } from "vue";
// eslint-disable-next-line vue/prefer-import-from-vue
import "@vue/runtime-core";

function getStores(): Store {
  return Object.fromEntries(
    Object.entries($store).map(([k, v]) => [k, v()]),
  ) as Store;
}

export default {
  install: (app: App) => {
    app.config.globalProperties.$alert = $alert;
    window.$alert = $alert;
    app.config.globalProperties.$utils = $utils;
    window.$utils = $utils;
    app.config.globalProperties.$datas = $datas;
    window.$datas = $datas;
    app.config.globalProperties.$apis = $apis;
    window.$apis = $apis;
    app.use(createPinia());
    const store = getStores();
    app.config.globalProperties.$store = store;
    window.$store = store;
  },
} as Plugin;
type Store = {
  [k in keyof typeof $store]: ReturnType<(typeof $store)[k]>;
};

interface GlobalType {
  $alert: typeof $alert;
  $utils: typeof $utils;
  $datas: typeof $datas;
  $apis: typeof $apis;
  $store: Store;
}

declare global {
  interface Window extends GlobalType {}
}

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties extends GlobalType {}
}
