import { RouteRecordRaw } from "vue-router";


const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "trend",
    component: import("./trend.vue")
  }
];

export default routes;
