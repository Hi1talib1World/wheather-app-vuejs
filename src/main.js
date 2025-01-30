import Vue from "vue";
import App from "./App.vue";
import router from "./router"; // Import router

Vue.config.productionTip = false;

new Vue({
  router, // Register router
  render: (h) => h(App),
}).$mount("#app");
