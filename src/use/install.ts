import { App, Plugin } from "vue";
// eslint-disable-next-line vue/prefer-import-from-vue
import "@vue/runtime-core";
import { createDiscreteApi } from "naive-ui";

const router = useRouter();

const { message, notification, dialog, loadingBar } = createDiscreteApi([
  "message",
  "notification",
  "dialog",
  "loadingBar",
]);

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
    app.config.globalProperties.$message = message;
    window.$message = message;
    app.config.globalProperties.$notification = notification;
    window.$notification = notification;
    app.config.globalProperties.$dialog = dialog;
    window.$dialog = dialog;
    app.config.globalProperties.$loadingBar = loadingBar;
    window.$loadingBar = loadingBar;
    window.$router = router;
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
  $message: typeof message;
  $notification: typeof notification;
  $dialog: typeof dialog;
  $loadingBar: typeof loadingBar;
  $router: typeof router;
}

declare global {
  interface Window extends GlobalType {}

  const $message: typeof message;
  const $notification: typeof notification;
  const $dialog: typeof dialog;
  const $loadingBar: typeof loadingBar;
  const $router: typeof router;
}

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties extends GlobalType {}
}
