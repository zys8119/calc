/**
 * 挂载 store
 */
import useMainStore from "./modules/main";
import { App } from "vue";

interface Store {
  main: ReturnType<typeof useMainStore>;
}

/**
 * 把导入的模块放到这里
 */
function getStores(): Store {
  return {
    main: useMainStore(),
  };
}

/**
 * 一般情况下不需要维护这里
 */
export default {
  install(app: App<Element>) {
    app.use(createPinia());
    const stores = getStores();
    app.config.globalProperties.$store = stores;
    window.store = stores;
  },
};

// eslint-disable-next-line vue/prefer-import-from-vue
import "@vue/runtime-core";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $store: Store;
  }
}

declare global {
  interface Window {
    store: Store;
  }
}
