import type { Options } from "wp-request";
import type { RouteRecordName } from "vue-router";

export interface BaseConfigHtml {
  title: string;
}
export interface BaseConfig {
  html: BaseConfigHtml;
  unique: string;
}

export interface Config {
  request: Partial<Options>;
  router: {
    history: boolean;
    remote: boolean;
    needLogin: boolean;
    whiteList: RouteRecordName[];
    keepAlive: boolean;
    session: boolean;
    needSideMenuIcon: boolean;
  };
}
