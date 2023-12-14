import {createApp} from "vue"
import App from "./App.vue"

// styles
import 'virtual:uno.css'
import '@/assets/style/index.less';
import '@/alert/alert-dialog-custom-theme.less';

const app = createApp(App)

import route from "./route"

console.log(route.options.routes)
app.use(route)

app.mount('#app')
