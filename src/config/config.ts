import { Config } from "@/types/BaseConfig";

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
  },
  router: {
    history: false,
    /** 是否使用远程路由 */
    remote: false,
    /**
     * 系统是否需要登录
     */
    needLogin: false,
    /**
     * 是否使用 SessionStorage 记录登录状态
     * 如果为 false 则使用 LocalStorage
     */
    session: false,
    /**
     * 白名单，用于排除不需要登录的页面
     */
    whiteList: ["login"],
    /**
     * 是否保持 alive 状态
     */
    keepAlive: false,
    /**
     * 菜单是否需要 icon 图标以及页面响应式
     */
    needSideMenuIcon: true,
  },
} as Config;
