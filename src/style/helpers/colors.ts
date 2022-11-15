import { reactive } from "vue";
import { ColorConfig, Colors } from "../types";

export const defaultColors = {
  primary: "#347DD1",
  secondary: "#D764CB",
  success: "#1EF233",
  warning: "#EEF21E",
  error: "#F21E1E",
  black: "#000000",
  white: "#FFFFFF",
  link: "#0000EE",
  grey: "#A4A4A8",
};

const useColors = () => {
  const colorMap: { [key in Colors]: string } = reactive(defaultColors);
  const update = (config: ColorConfig) => {
    config.primary && (colorMap.primary = config.primary);
    config.secondary && (colorMap.secondary = config.secondary);
    config.success && (colorMap.success = config.success);
    config.warning && (colorMap.warning = config.warning);
    config.error && (colorMap.error = config.error);
    config.link && (colorMap.link = config.link);
  };
  return { colorMap, update };
};

export default useColors();
