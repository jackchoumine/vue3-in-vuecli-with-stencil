// import { createApp } from "vue";
import Vue from "vue";
import App from "./App.vue";

// NOTE: This is required for the stencil-rating-component-test to work
import { defineCustomElements } from "stencil-rating-component-test/loader";
defineCustomElements();

// .then(() => {})
// defineCustomElements(window, {
//   // @ts-ignore
//   ce: (eventName, opts) => new CustomEvent(eventName.toLowerCase(), opts),
// });

// const app = createApp(App);
// app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith("-");
// NOTE 在 #app 上挂载根实例 --- #app.append
// app.mount("#app");

Vue.config.ignoredElements = ["my-rating"];
// NOTE 直接替换 #app
new Vue({ render: (h) => h(App) }).$mount("#app");
