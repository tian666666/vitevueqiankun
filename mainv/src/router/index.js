/*
 * @Description:
 * @Author: tianyw
 * @Date: 2023-03-12 15:30:07
 * @LastEditTime: 2023-03-13 21:56:42
 * @LastEditors: tianyw
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Vite from "../components/Vite.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/uevwebuisystem/:home*",
    name: "uevwebuisystem",
    component: Vite
  },
  {
    path: "/",
    redirect: "/home"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.NODE_ENV === "production" ? "/demo-main-vue/" : "/", //
  routes
});

export default router;
