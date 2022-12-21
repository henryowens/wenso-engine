import { createApp } from "vue";
import App from "./App.vue";
import engine, { defineConfig } from "./lib.index";

createApp(App)
  .use(
    engine,
    defineConfig({
      colors: {},
      // icons: [faTicket],
      fonts: [
        { type: "google", name: "Dosis", weights: ["600", "700"] },
        { type: "google", name: "Nunito" },
        { type: "google", name: "Hind Vadodara" },
      ],
      defaultFont: "Dosis",
      components: {
        text: {
          fontFamily: {
            "x-lg": "Nunito",
          },
        },
      },
    })
  )
  .mount("#app");
