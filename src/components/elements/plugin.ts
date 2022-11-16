import { App } from "vue";
import { WeButton, WeIcon, WeImg, WeLink, WeText } from "./functions";

export default (app: App) => {
  app.component("we-text", WeText);
  app.component("we-button", WeButton);
  app.component("we-img", WeImg);
  app.component("we-link", WeLink);
  app.component("we-icon", WeIcon);
};
