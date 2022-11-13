import { App } from "vue";
import text from "./functions/text";

export default (app: App) => {
  app.component("text", text);
};
