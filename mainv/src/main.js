/*
 * @Description:
 * @Author: tianyw
 * @Date: 2023-03-12 15:22:04
 * @LastEditTime: 2023-03-20 17:19:30
 * @LastEditors: tianyw
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import actions from "./actions";
Vue.config.productionTip = false;

import {
  addGlobalUncaughtErrorHandler,
  registerMicroApps,
  start
} from "qiankun";
console.log("什么环境", process.env.NODE_ENV);
const apps = [
  {
    name: "uevwebuisystem", // app name registered http://localhost:8028/ueweb/home
    entry:
      process.env.NODE_ENV === "production"
        ? "/uevwebuisystem/" // nginx/tomcat 生产环境
        : process.env.NODE_ENV === "development"
        ? "http://localhost:30307/uevwebuisystem/index" // 开发环境
        : "http://localhost:30307/index", // docker 生产环境
    container: "#uevwebuisystem-container", // 微应用挂载的节点
    activeRule: "/uevwebuisystem", // 当访问路由为 /micro-vue 时加载微应用
    props: {
      parentActions: actions //  主应用向微应用传递参数
    }
  }
];

/**
 * 注册微应用
 * 第一个参数 - 微应用的注册信息
 * 第二个参数 - 全局生命周期钩子
 */
registerMicroApps(apps, {
  // qiankun 生命周期钩子 - 微应用加载前
  beforeLoad: (app) => {
    console.log("注册的app", apps);
    // 加载微应用前，加载进度条
    console.log("before load", app.name);
    return Promise.resolve();
  },
  // qiankun 生命周期钩子 - 微应用挂载后
  afterMount: (app) => {
    // 加载微应用前，进度条加载完成
    console.log("after mount", app.name);
    return Promise.resolve();
  }
});
/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event) => {
  console.log("qiankun全局异常", event);
  console.error("qiankun全局异常", event);
});

start();

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
