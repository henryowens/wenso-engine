import { App } from "vue";
import { WeButton, WeImg, WeText } from "./functions";

export default (app: App) => {
  app.component("we-text", WeText);
  app.component("we-button", WeButton);
  app.component("we-img", WeImg);
};
