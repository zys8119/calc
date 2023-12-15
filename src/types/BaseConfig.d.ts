import type { Options } from "wp-request";
import type {
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordName,
} from "vue-router";

export interface BaseConfigHtml {
  title: string;
}
export interface BaseConfig {
  html: BaseConfigHtml;
  unique: string;
}

export interface RouterConfig {
  history: boolean;
  remote: boolean;
  needLogin: boolean;
  whiteList: RouteRecordName[];
  keepAlive: boolean;
  session: boolean;
  needSideMenuIcon: boolean;
}

export interface Config {
  request: Partial<Options>;
  router: RouterConfig;
  hooks: {
    beforeEach: (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext,
    ) => void | boolean;
    getUserinfo: () => Promise<any>;
    firstTimeEnter: () => void;
  };
}
