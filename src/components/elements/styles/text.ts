/* eslint-disable prettier/prettier */
import { style } from "typestyle";
import { Property } from "csstype";

import {
  fontFamily,
  Spacings,
  textSizes,
  TextSizes,
  useColors,
} from "../../../style";
import { useMargin, usePadding } from "../../../style/helpers/spacing";
import { TextAlign } from "../../../models";

import useConfig from "../../../service/config";

const { config } = useConfig;

export const getTextFont = (size: TextSizes) =>
  fontFamily(
    config.components?.text?.fontFamily &&
      config.components.text.fontFamily[size]
      ? config.components?.text?.fontFamily[size]
      : config.defaultFont
  );

export default ({
  fontWeight,
  margin,
  padding,
  size,
  textAlign,
  color,
}: {
  size: TextSizes;
  textAlign: TextAlign;
  fontWeight: Property.FontWeight;
  margin: Spacings;
  padding: Spacings;
  color: string;
}) =>
  style({
    fontSize: textSizes[size].size,
    textAlign,
    fontWeight,
    color: useColors.colors[color],
    ...useMargin(margin),
    ...usePadding(padding),
  });
