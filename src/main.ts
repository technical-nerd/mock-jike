import { createApp } from "vue";
import App from "./App.vue";
import router from "./views/router";
import store from "./store";

createApp(App)
  .use(store)
  .use(router)
  .component('trend-item',require('@/components/trend-item/trend-item.vue').default)
  .component('header1',require('@/components/header1.vue').default)
  .component('header2',require('@/components/header2.vue').default)
  .mount("#app");
