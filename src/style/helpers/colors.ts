import { reactive } from "vue";
import { ColorConfig } from "../types";

const useColors = () => {
  let colors = reactive<ColorConfig>({
    primary: "#347DD1",
    secondary: "#D764CB",
    success: "#1EF233",
    warning: "#EEF21E",
    error: "#F21E1E",
    black: "#000000",
    white: "#FFFFFF",
    link: "#0000EE",
    grey: "#A4A4A8",
  });

  const update = (config: ColorConfig) => (colors = { ...colors, ...config });

  return { colors, update };
};

export default useColors();
