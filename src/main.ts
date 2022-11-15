import { createApp } from "vue";
import App from "./App.vue";
import engine from "./lib.index";

createApp(App)
  .use(engine, {
    colors: {},
  })
  .mount("#app");
