import { createApp } from "vue";
import App from "./App.vue";
import router from "./views/router";
import store from "./store";

createApp(App)
  .use(store)
  .use(router)
  .component('trend-item',require('@/components/trend-item/trend-item.vue').default)
  .mount("#app");
