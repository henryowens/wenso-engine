import { Property } from "csstype";
import { h, PropType } from "vue";

import { TextAlign } from "../../../models";
import { Colors, Spacings, TextSizes, textSizes } from "../../../style";
import { withProps } from "../../../utils/vue";
import { textStyle } from "../styles";

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
      type: String as PropType<Colors>,
      required: false,
      default: "black",
    },
  },
  (props, context) =>
    h(textSizes[props.size].type, { class: textStyle(props) }, context.slots)
);
