import { App } from "vue";
import { WeFlex } from "./functions";

export default (app: App) => {
  app.component("we-flex", WeFlex);
};
