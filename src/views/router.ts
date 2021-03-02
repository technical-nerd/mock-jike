import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "",
        name: "trend",
        component: () => import("./trend/trend.vue")
    },
    {
        path: "/find",
        name: "find",
        component: () => import("./find/find.vue")
    },
    {
        path: '/demo',
        name: 'Demo',
        component: () => import('./demo/Demo.vue')
    },
    {
        path: '/me',
        name: 'HomePage',
        component: () => import('./home-page/home-page.vue')
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
