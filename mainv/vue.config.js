/*
 * @Description:
 * @Author: tianyw
 * @Date: 2023-03-12 15:22:04
 * @LastEditTime: 2023-03-19 21:20:29
 * @LastEditors: tianyw
 */
const { defineConfig } = require("@vue/cli-service");
if (process.env.NODE_ENV === "production") {
  console.log("生产环境", "/demo-main-vue");
} else if (process.env.NODE_ENV === "docker") {
  console.log("docker环境", process.env.NODE_ENV);
}
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/demo-main-vue/" : "/",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    open: process.env.NODE_ENV === "development",
    port: "30309"
  },
  transpileDependencies: true
});
