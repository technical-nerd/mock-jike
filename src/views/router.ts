import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import trendRoutes from './trend/trend.router'
import findRoutes from './find/find.router'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
  {
    path:'/demo',
    name :'Demo',
    component:()=>import('./demo/Demo.vue')
  },
  // ...trendRoutes,
  ...findRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
