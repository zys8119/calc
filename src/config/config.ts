import { Options } from "wp-request";

export default {
  request: {
    baseURL: import.meta.env.VITE_API,
    successCode: [0, 200],
    useStore: () => {
      console.log($store.main);
      return $store.main as any;
    },
    trim: true,
    timeout: 20000,
    beforeEach(config) {
      if (!config) return;
      if (!config.headers) config.headers = {};
      // config.headers['unit'] = 'it is test header params'
    },
    afterEach(config) {
      if (!config) return;
    },
    errorHandle(msg) {
      $message.error(msg);
    },
    logout() {
      $router.push({ name: "login" });
    },
  } as Partial<Options>,
};
