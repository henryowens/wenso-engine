import { Meta } from "@storybook/vue3";
import { Component, ComputedOptions, MethodOptions } from "vue";

type VueComponent = Component<any, any, any, ComputedOptions, MethodOptions>;

// prettier-ignore
export default (component: VueComponent) =>
({
  component,
  argTypes: {
    textAlign: {
      options: ["center", "end", "justify", "left", "match-parent", "right", "start"],
      control: { type: "select" },
      name: 'Text Align'
    },
  },
} as Meta);
