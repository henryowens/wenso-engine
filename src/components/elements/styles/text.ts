import { style } from "typestyle";
import { Property } from "csstype";

import {
  Colors,
  Spacings,
  textSizes,
  TextSizes,
  useColors,
} from "../../../style";
import { useMargin, usePadding } from "../../../style/helpers/spacing";
import { TextAlign } from "../../../models";

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
  color: Colors;
}) =>
  style({
    fontSize: textSizes[size].size,
    textAlign,
    fontWeight,
    color: useColors.colorMap[color],
    ...useMargin(margin),
    ...usePadding(padding),
  });
