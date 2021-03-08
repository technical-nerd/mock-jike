import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "",
        name: "trend",
        component: () => import("/Views/trend.vue")
    },
    {
        path:'/trend-detail',
        name:'trend-detail',
        component:()=>import('/Views/trend-detail.vue')
    },
    {
        path: "/find",
        name: "find",
        component: () => import("/Views//find.vue")
    },
    {
        path: '/demo',
        name: 'Demo',
        component: () => import('/Views/demo/Demo.vue')
    },
    {
        path: '/me',
        name: 'HomePage',
        component: () => import('/Views//home-page.vue')
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
