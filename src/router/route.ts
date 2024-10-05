import {RouteRecordRaw} from "vue-router";

export default [
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/404.vue"),
  },
    {
        path: "/",
        redirect: "/calc",
    },
] as RouteRecordRaw[];
