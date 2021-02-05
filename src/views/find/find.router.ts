import { RouteRecordRaw } from "vue-router";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/find",
    name: "find",
    component: import("./find.vue")
  }
];

export default routes;
