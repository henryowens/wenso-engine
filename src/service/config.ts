import { library } from "@fortawesome/fontawesome-svg-core";
import { reactive } from "vue";

import { Config } from "../models/config";
import { useColors, useFont } from "../style";

const instance = () => {
  const config = reactive<Config>({
    colors: undefined,
    fonts: undefined,
    defaultFont: undefined,
    icons: undefined,
    style: undefined,
    components: undefined,
  });

  const setup = () => {
    const { addFont } = useFont();
    config.colors && useColors.update(config.colors);
    config.fonts?.forEach((font) => addFont(font));
    config.icons && library.add(config.icons);
  };

  const mutateConfig = (cfg: Config) => {
    config.colors = cfg.colors;
    config.fonts = cfg.fonts;
    config.defaultFont = cfg.defaultFont;
    config.icons = cfg.icons;
    config.style = cfg.style;
    config.components = cfg.components;
    setup();
  };

  return { config, mutateConfig };
};

export default instance();

export const defineConfig = (config: Config) => config;
