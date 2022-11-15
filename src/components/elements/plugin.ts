import { App } from "vue";
import { WeText } from "./functions";

export default (app: App) => {
  app.component("we-text", WeText);
};
