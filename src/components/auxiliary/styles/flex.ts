import { Spacings } from "@/style";
import { useMargin, usePadding } from "@/style/helpers/spacing";
import { FlexDirectionProperty, FlexWrapProperty } from "@/models";
import { Property } from "csstype";
import { classes, style } from "typestyle";

export default (flexOptions: {
  alignItems?: Property.AlignItems | undefined;
  justifyContent?: Property.JustifyContent | undefined;
  flexDirection?: FlexDirectionProperty | undefined;
  flexWrap?: FlexWrapProperty | undefined;
  margin: Spacings;
  padding: Spacings;
  flexGrow?: Property.FlexGrow;
  class?: string;
}) =>
  classes(
    flexOptions.class,
    style({
      display: "flex",
      ...flexOptions,
      ...useMargin(flexOptions.margin),
      ...usePadding(flexOptions.padding),
    })
  );
