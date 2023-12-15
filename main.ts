import { createApp } from "vue";
// styles
import "virtual:uno.css";
import "@/assets/style/index.less";
import "@/alert/alert-dialog-custom-theme.less";

import App from "./App.vue";
import request from "wp-request";
import config from "@/config/config";
import route from "./route";
import useInstall from "@/use/install";
import "@/router/permission";

const app = createApp(App);

app.use(request, config.request);
app.use(route);
app.use(useInstall);
app.mount("#app");
