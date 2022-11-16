import { createApp } from "vue";
import App from "./App.vue";
import engine from "./lib.index";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

console.log("faTicket", faTicket);

createApp(App)
  .use(engine, {
    colors: {},
    icons: [faTicket],
  })
  .mount("#app");
