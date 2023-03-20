/*
 * @Description:
 * @Author: tianyw
 * @Date: 2023-03-12 20:54:37
 * @LastEditTime: 2023-03-13 20:02:43
 * @LastEditors: tianyw
 */
import { initGlobalState, addGlobalUncaughtErrorHandler } from "qiankun";
let state = {
  // 这里定义主、子应用的通信数据及期类型等
  num: 1,
  changeFrom: "主应用"
};

// 初始化 state
const actions = initGlobalState(state); // actions 的类型为 qiankun 的 MicroAppStateActions

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log("主应用检测到state变更：", state, prev);
});

// 你还可以定义一个获取state的方法下发到子应用
actions.getGlobalState = function () {
  return state;
};
actions.setGlobalState = function (data) {
  console.log("主应用中 setGlobalState 中的打印", data);
  state = data;
};
addGlobalUncaughtErrorHandler((event) => {
  console.log("全局异常", event);
});
export default actions;
