import { getGoogleFonts } from "../../service/googleFonts";
import { cssRaw, fontFace } from "typestyle";
import { FontInput } from "../types";

export default () => {
  const registerFont = (name: string, src: string) =>
    cssRaw(`@import url('${src}'); * { font-family: ${name} }`);

  const update = async (font?: FontInput) => {
    switch (font?.type) {
      case "custom":
        registerFont(font.name, font.url);
        break;
      case "google":
        try {
          const resolvedFont = await getGoogleFonts(font?.name);
          fontFace({
            fontFamily: resolvedFont.family,
            src: `https://fonts.googleapis.com/css?family=${resolvedFont.family}`,
          });
        } catch (error) {
          return Promise.reject();
        }
        break;
      default:
        try {
          const resolvedFont = await getGoogleFonts("Rubik");
          registerFont(
            resolvedFont.family,
            `https://fonts.googleapis.com/css?family=${resolvedFont.family}`
          );
        } catch (error) {
          return Promise.reject();
        }
        break;
    }
  };

  return { update };
};
