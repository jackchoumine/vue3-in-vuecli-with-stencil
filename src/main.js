import { createApp } from "vue";
import App from "./App.vue";
import { defineCustomElements } from "stencil-rating-component-test/loader";

defineCustomElements();
// .then(() => {})
// defineCustomElements(window, {
//   // @ts-ignore
//   ce: (eventName, opts) => new CustomEvent(eventName.toLowerCase(), opts),
// });
const app = createApp(App);
// app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith("-");
app.mount("#app");
