import { createApp } from "vue";
import App from "./App.vue";

// styles
import "virtual:uno.css";
import "@/assets/style/index.less";
import "@/alert/alert-dialog-custom-theme.less";
import route from "./route";
import useInstall from "@/use/install";

const app = createApp(App);

app.use(route);

app.use(useInstall);
app.mount("#app");
