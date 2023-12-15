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

// 脚手架主题类型
export interface AppConfigState {
  projectName: string;
  theme: ThemeMode;
  sideTheme: SideTheme;
  themeColor: string;
  themeColorHover: string;
  layoutMode: LayoutMode;
  deviceType: DeviceType;
  pageAnim: PageAnim;
  isCollapse: boolean;
  actionBar: {
    isShowRefresh: boolean;
    isShowFullScreen: boolean;
  };
  localeName: LocaleName;
}

export enum LayoutMode {
  LTR = "ltr",
  LCR = "lcr",
  TTB = "ttb",
}

export enum DeviceType {
  PC = "pc",
  PAD = "pad",
  MOBILE = "mobile",
}

export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
}

export enum SideTheme {
  DARK = "dark",
  WHITE = "white",
  IMAGE = "image",
}

// 页面切换动画类型
export enum PageAnim {
  FADE = "fade",
  OPACITY = "opacity",
  DOWN = "down",
  SCALE = "scale",
}

export enum LocaleName {
  zhCN = "zh-CN",
  enUS = "en-US",
}
