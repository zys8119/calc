import {RouteRecordRaw} from "vue-router";
export default [
    {
        path:"/:pathMatch(.*)*",
        component:()=> import("@/views/aa.vue")
    },
] as RouteRecordRaw[]
