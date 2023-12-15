import { Config, RouterConfig } from "@/types/BaseConfig";
import baseConfig from "./base";

const routerConfig: RouterConfig = {
  history: false,
  /** 是否使用远程路由 */
  remote: false,
  /**
   * 系统是否需要登录
   */
  needLogin: true,
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
};
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
  router: routerConfig,
  hooks: {
    firstTimeEnter() {
      const storage = routerConfig.session ? sessionStorage : localStorage;
      const userInfo = storage.getItem(baseConfig.unique + "userInfo");
      const token = storage.getItem(baseConfig.unique + "token");
      if (userInfo) {
        const store = $store.main;
        store.userInfo = JSON.parse(userInfo);
        store.userInfo.token = token ?? ("" as any);
      }
    },
    beforeEach() {
      // 每个路由进入前发起一个请求
    },
    /**
     * 用于 登录 / 第一次进入页面时获取权限
     * 可验证token是否有效及续期
     */
    async getUserinfo() {
      if (!$store.main.token) throw new Error("Token 不存在");
    },
  },
} as Config;
