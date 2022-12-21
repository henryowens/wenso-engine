import { TextAlign } from "../../../models";
import {
  Spacings,
  textSizes,
  TextSizes,
  useColors,
  useHover,
  useMargin,
} from "../../../style";
import { style } from "typestyle";

export default ({
  textAlign,
  size,
  margin,
}: {
  textAlign: TextAlign;
  size: TextSizes;
  margin: Spacings;
}) =>
  style({
    textAlign,
    textDecoration: "underline",
    color: useColors.colors.link,
    fontSize: textSizes[size].size,
    ...useMargin(margin),
    $nest: { ...useHover },
  });
