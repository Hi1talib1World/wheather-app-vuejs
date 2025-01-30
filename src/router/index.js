import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./../components/Home.vue";
import Map from "./../components/Map.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/map", component: Map },
];

const router = new VueRouter({
  mode: "history", // Enables clean URLs (without #)
  routes,
});

export default router;
