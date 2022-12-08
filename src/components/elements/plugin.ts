import { App } from "vue";
import { WeButton, WeIcon, WeInput, WeLink, WeText } from "./functions";
import { WeImg } from "./ui";

export default (app: App) => {
  app.component("we-text", WeText);
  app.component("we-button", WeButton);
  app.component("we-img", WeImg);
  app.component("we-input", WeInput);
  app.component("we-link", WeLink);
  app.component("we-icon", WeIcon);
};
