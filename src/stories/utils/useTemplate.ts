import { Story } from "@storybook/vue3";
import { Component, ComputedOptions, MethodOptions } from "vue";

type VueComponent = Component<any, any, any, ComputedOptions, MethodOptions>;
export default (name: string, component: VueComponent): Story =>
  (args) => ({
    components: { component },
    setup: () => ({ args }),
    template: `<${name} v-bind="args" />`,
  });
