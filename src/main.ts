import { createApp } from "vue";
import App from "./App.vue";
import engine from "./lib.index";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

createApp(App)
  .use(engine, {
    colors: {},
    icons: [faTicket],
  })
  .mount("#app");
