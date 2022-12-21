import { getGoogleFonts } from "../../service/googleFonts";
import { cssRaw, style } from "typestyle";
import { FontInput } from "../types";

export const fontFamily = (name?: string) => style({ fontFamily: name });

export default () => {
  const registerFont = (src: string) => cssRaw(`@import url('${src}');`);
  const addFont = async (font?: FontInput) => {
    switch (font?.type) {
      case "custom":
        registerFont(font.url);
        break;
      case "google":
        try {
          const resolvedFont = await getGoogleFonts(font?.name);
          const weights =
            (font.weights && `:wght@${font.weights.join(";")}`) || "";
          registerFont(
            `https://fonts.googleapis.com/css?family=${resolvedFont.family}${weights}`
          );
        } catch (error) {
          return Promise.reject();
        }
        break;
      default:
        try {
          const resolvedFont = await getGoogleFonts("Rubik");
          registerFont(
            `https://fonts.googleapis.com/css?family=${resolvedFont.family}`
          );
        } catch (error) {
          return Promise.reject();
        }
        break;
    }
  };

  return { addFont };
};
