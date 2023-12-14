import {defineConfig} from "vite"
import Vue from "@vitejs/plugin-vue"
import {resolve} from "path"
import AutoApi from "vitejs-plugin-api-auto-import"
import AutoRoute from "vitejs-plugin-vue-route-auto-import"
import TransformIndexHtml from "./vite/plugins/transformIndexHtml"
import UnoCss from 'unocss/vite'
export default defineConfig({
    base:"",
    plugins:[
        Vue(),
        TransformIndexHtml(),
        AutoRoute({
            views:'src/views',
            routes_extend:"./src/route.ts"
        }),
        AutoApi({
            resolveAliasName: '@/api',
            dir: 'src/api',
        }),
        UnoCss(),
    ],
    resolve:{
        alias:{
            "@":resolve(__dirname,"./src")
        }
    },
})
