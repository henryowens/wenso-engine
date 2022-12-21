import { Property } from "csstype";
import { classes } from "typestyle";
import { h, PropType } from "vue";

import { TextAlign } from "../../../models";
import { Spacings, TextSizes, textSizes } from "../../../style";
import { withProps } from "../../../utils/vue";
import { getTextFont, textStyle } from "../styles";

export default withProps(
  {
    textAlign: {
      type: String as PropType<TextAlign>,
      required: false,
      default: "left",
    },
    fontWeight: {
      type: String as PropType<Property.FontWeight>,
      required: false,
      default: "normal",
    },
    size: {
      type: String as PropType<TextSizes>,
      required: false,
      default: "x-sm",
    },
    margin: {
      type: String as PropType<Spacings>,
      required: false,
      default: "no",
    },
    padding: {
      type: String as PropType<Spacings>,
      required: false,
      default: "no",
    },
    color: {
      type: String,
      required: false,
      default: "black",
    },
  },
  (props, context) =>
    h(
      textSizes[props.size].type,
      { class: classes(textStyle(props), getTextFont(props.size)) },
      context.slots
    )
);
