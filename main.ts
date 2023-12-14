import {createApp} from "vue";
import App from "./App.vue";

// styles
import "virtual:uno.css";
import "@/assets/style/index.less";
import "@/alert/alert-dialog-custom-theme.less";

const app = createApp(App);

import route from "./route";

app.use(route);

app.mount("#app");
