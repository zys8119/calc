import { Plugin } from "vite";
import { template } from "lodash";
import baseConfig from "../../src/config/base";

export default function () {
  return {
    name: "transformIndexHtml",
    transformIndexHtml(code) {
      return template(code)({
        title: baseConfig.html.title,
      });
    },
  } as Plugin;
}
