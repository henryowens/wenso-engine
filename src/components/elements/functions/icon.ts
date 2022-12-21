import { h, PropType } from "vue";

import { iconStyle } from "../styles";
import { withProps } from "../../../utils/vue";
import { Spacings, useColors } from "../../../style";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { percent } from "csx";

export default withProps(
  {
    name: {
      type: String,
      required: true,
    },
    margin: {
      type: String as PropType<Spacings>,
      required: false,
      default: "no",
    },
    color: {
      type: String,
      required: false,
      default: "black",
    },
    width: {
      type: String,
      required: false,
      default: percent(100),
    },
    height: {
      type: String,
      required: false,
      default: percent(100),
    },
  },
  (props) =>
    h(FontAwesomeIcon, {
      icon: props.name,
      color: useColors.colors[props.color as any],
      class: iconStyle(props.margin, props.width, props.height),
    })
);
