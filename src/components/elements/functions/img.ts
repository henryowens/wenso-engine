import { h, PropType, ref } from "vue";

import { imgStyle } from "../styles";
import { withProps } from "../../../utils/vue";
import { Spacings } from "../../../style";
import { classes, cssRaw, style } from "typestyle";

export default withProps(
  {
    src: {
      type: String,
      required: true,
    },
    margin: {
      type: String as PropType<Spacings>,
      required: false,
      default: "no",
    },
    width: {
      type: String,
      required: false,
      default: "auto",
    },
    height: {
      type: String,
      required: false,
      default: "auto",
    },
  },
  (props, _) => {
    const isLoaded = ref(false);
    return [
      h("p", `${isLoaded.value}`),
      h("img", {
        src: props.src,
        class: classes(
          imgStyle(props.margin, props.width, props.height),
          style({
            opacity: isLoaded.value === true ? 1 : 0,
          })
        ),
        loading: "lazy",
        onLoad: () => {
          isLoaded.value = true;
          console.log("isLoaded", isLoaded.value);
        },
      }),
    ];
  }
);
