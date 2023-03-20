<!--
 * @Description: 
 * @Author: tianyw
 * @Date: 2023-03-12 15:22:04
 * @LastEditTime: 2023-03-13 20:06:46
 * @LastEditors: tianyw
-->
<template>
  <div class="child-item">
    <div>在主应用里的描述：微前端子应用</div>
    <div
      id="uevwebuisystem-container"
      class="uevwebuisystem-container-item"
    ></div>
  </div>
</template>

<script>
export default {
  name: "VitePage",
  data() {
    return {};
  },
  mounted() {
    console.log("执行了执行了");
    console.log("22222");
    console.log("22222");
    console.log("22222");
    console.log("22222");
    console.log("22222");
    console.log("22222");
    console.log("22222");
    console.log("22222");
    console.log("22222");
    setTimeout(() => {
      console.log("两秒钟过去了");
    }, 2000);
  }
};
</script>

<style scoped>
.child-item {
  width: 100%;
  height: 100%;
}
.uevwebuisystem-container-item {
  height: 100%;
  width: 100%;
}
</style>
