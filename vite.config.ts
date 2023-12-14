import {defineConfig} from "vite"
import Vue from "@vitejs/plugin-vue"
import {resolve} from "path"
import transformIndexHtml from "./vite/plugins/transformIndexHtml"
export default defineConfig({
    base:"",
    plugins:[
        Vue(),
        transformIndexHtml()
    ],
    resolve:{
        alias:{
            "@":resolve(__dirname,"./src")
        }
    },
})
