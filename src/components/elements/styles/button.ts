import {
  Spacings,
  TextSizes,
  textSizes,
  useColors,
  useMargin,
  usePadding,
} from "../../../style";
import { px } from "csx";
import { classes, style } from "typestyle";
import { ButtonAppearance, ButtonType } from "../functions/button";

const baseButton = (margin: Spacings) =>
  style({
    color: useColors.colors.white,
    border: `5px solid`,
    borderRadius: px(15),
    background: useColors.colors.white,
    ...usePadding("xx-sm x-sm"),
    ...useMargin(margin),
  });

export const buttonAppearanceMap = {
  default: (color: string) =>
    style({
      borderColor: color,
      background: color,
      $debugName: "we-btn-default",
    }),
  outlined: (color: string) =>
    style({
      background: useColors.colors.white,
      color,
      $debugName: "we-btn-outlined",
    }),
};

export const buttonTypeMap = {
  primary: useColors.colors.primary,
  secondary: useColors.colors.secondary,
};

export const buttonTextStyle = (size: TextSizes) =>
  style({
    fontSize: textSizes[size].size,
  });

export const buttonStyle = (
  type: ButtonType,
  appearance: ButtonAppearance,
  margin: Spacings
) =>
  classes(
    baseButton(margin),
    buttonAppearanceMap[appearance](buttonTypeMap[type] || "black")
  );
