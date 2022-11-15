import { style } from "typestyle";
import { Property } from "csstype";

import { Spacings, textSizes, TextSizes } from "../../../style";
import { useMargin, usePadding } from "../../../style/helpers/spacing";
import { TextAlign } from "../../../models";

export default ({
  fontWeight,
  margin,
  padding,
  size,
  textAlign,
}: {
  size: TextSizes;
  textAlign: TextAlign;
  fontWeight: Property.FontWeight;
  margin: Spacings;
  padding: Spacings;
}) =>
  style({
    fontSize: textSizes[size].size,
    textAlign,
    fontWeight,
    ...useMargin(margin),
    ...usePadding(padding),
  });
