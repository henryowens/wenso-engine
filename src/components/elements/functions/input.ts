import { computed, h, PropType, resolveComponent } from "vue";

import { inputStyle } from "../styles";
import { withProps } from "../../../utils/vue";
import { Spacings, TextSizes } from "../../../style";
import icon from "./icon";

export default withProps(
  {
    modelValue: {
      type: String,
      required: true,
    },
    size: {
      type: String as PropType<TextSizes>,
      required: false,
      default: "lg",
    },
    placeholder: { type: String, required: false, default: "" },
    margin: {
      type: String as PropType<Spacings>,
      required: false,
      default: "no",
    },
    icon: {
      type: String,
      reqired: false,
    },
  },
  (props, { emit }) => {
    const model = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    });

    return [
      h("input", {
        value: model.value,
        placeholder: props.placeholder,
        class: inputStyle(props.margin, props.size),
        onInput: (event: InputEvent & { target: { value: string } }) =>
          (model.value = event.target.value),
      }),
    ];
  }
);
