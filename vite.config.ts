import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoApi from "vitejs-plugin-api-auto-import";
import AutoRoute from "vitejs-plugin-vue-route-auto-import";
import UnoCss from "unocss/vite";
import VueMacros from "unplugin-vue-macros/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {
  NaiveUiResolver,
  VantResolver,
} from "unplugin-vue-components/resolvers";
import vueSetupExtend from "vite-plugin-vue-setup-extend-plus";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import vueJsx from "@vitejs/plugin-vue-jsx";
import legacy from "@vitejs/plugin-legacy";
import ReactivityTransform from "@vue-macros/reactivity-transform/vite";
import TransformIndexHtml from "./vite/plugins/transformIndexHtml";
import VineBrowser from "./vite/plugins/vine/VineBrowser";
import Resolvers from "./vite/resolvers";

export default defineConfig({
  base: "",
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue(),
        vueJsx: vueJsx(),
      },
    }),
    viteCommonjs(),
    vueSetupExtend(),
    ReactivityTransform(),
    legacy({
      targets: ["defaults", "not IE 11"],
      /**
       * For chrome >= 61
       * global-this is vaild from chrome 70
       */
      modernPolyfills: ["es.global-this", "es.array.flat"],
    }),
    TransformIndexHtml(),
    VineBrowser(),
    AutoRoute({
      views: "src/views",
      routes_extend: "./src/router/route.ts",
      routesFilter: /\/(alert|component)\//,
    }),
    AutoApi({
      resolveAliasName: "@/api",
      dir: "src/api",
    }),
    AutoApi({
      name: "$alert",
      resolveAliasName: "@/alert",
      dir: "src/alert",
    }),
    AutoApi({
      name: "$utils",
      resolveAliasName: "@/utils",
      dir: "src/utils",
    }),
    AutoApi({
      name: "$datas",
      resolveAliasName: "@/data",
      dir: "src/data",
    }),
    AutoApi({
      name: "$storeAuto",
      resolveAliasName: "@/store",
      dir: "src/store",
    }),
    UnoCss(),
    Components({
      extensions: ["vue", "tsx"],
      dts: "components.d.ts",
      resolvers: [NaiveUiResolver(), VantResolver()],
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ["vue", "vue-router", "@vueuse/core", "pinia", "vue/macros"],
      dts: "auto-import.d.ts",
      eslintrc: {
        enabled: true,
      },
      resolvers: [Resolvers()],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@pwd": resolve(__dirname, "./"),
    },
  },
});
