<!--
 * @Description: 
 * @Author: tianyw
 * @Date: 2023-03-12 15:22:04
 * @LastEditTime: 2023-03-13 22:43:48
 * @LastEditors: tianyw
-->
<template>
  <div class="home-item">
    <div>主应用</div>
    <div>
      <button @click="goToVite">加载子应用</button>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import actions from "@/actions";
export default {
  name: "HomePage",
  props: {
    msg: String
  },
  methods: {
    goToVite() {
      actions.setGlobalState({
        num: 10,
        changeFrom: "我是在主应用的 Home 做的改变"
      });
      console.log("$router.push(/uevwebuisystem)");
      setTimeout(() => {
        window.history.pushState({}, "", "/uevwebuisystem");
        // this.$router.push("/uevwebuisystem");
      }, 2000);
    }
  }
};
</script>

<style scoped>
.home-item {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
