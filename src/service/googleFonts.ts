import axios from "axios";

interface GoogleFontItem {
  category: string;
  family: string;
  files: {
    regular: string;
  };
  kind: string;
  lastModified: string;
  subsets: string[];
  variants: string[];
  version: string;
}
interface GoogleFontResponse {
  items: GoogleFontItem[];
  kind: "webfonts#webfontList";
}

export const getGoogleFonts = async (name: string) => {
  try {
    const result = await axios.get<GoogleFontResponse>(
      "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDFfKVSfItSGrohzHtG5dhdcLJJYe1sxWY"
    );
    const resolvedFont = result.data.items.find((font) => (font.family = name));
    if (resolvedFont) return Promise.resolve(resolvedFont);
    return Promise.reject();
  } catch (error) {
    return Promise.reject(error);
  }
};
