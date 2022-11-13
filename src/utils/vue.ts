import { UnionToIntersection } from "@vue/shared";
import {
  EmitsOptions,
  ExtractPropTypes,
  FunctionalComponent,
  ObjectEmitsOptions,
  Prop,
  SetupContext,
  Slots,
} from "vue";

type ArrayPropsTemplate = Readonly<Array<string>>;
export type ExtractArrayPropTypes<P extends ArrayPropsTemplate> = {
  [idx in Extract<keyof P, number>]: Record<P[idx], any>;
}[number];
type ObjectPropsTemplate = Readonly<Record<string, Prop<any>>>;

export const withProps: {
  <
    P extends ObjectPropsTemplate,
    S extends FunctionalComponent<ExtractPropTypes<P>, any>
  >(
    props: P,
    setup: S
  ): S;

  <
    P extends ArrayPropsTemplate,
    S extends FunctionalComponent<ExtractArrayPropTypes<P>>
  >(
    props: P,
    setup: S
  ): S;
} = <P, S>(props: P, setup: S): S => (((setup as any).props = props), setup);

// prettier-ignore
type EmitFn<
  Options = ObjectEmitsOptions,
  Event extends keyof Options = keyof Options
> = Options extends Array<infer V>
  ? (event: V, ...args: any[]) => void
  : Record<string, never> extends Options
  ? (event: string, ...args: any[]) => void
  : UnionToIntersection<
    {
      [key in Event]: Options[key] extends (...args: infer Args) => any
      ? (event: key, ...args: Args) => void
      : (event: key, ...args: any[]) => void;
    }[Event]
  >;
type SetupContextOptions<E = EmitsOptions> = {
  attrs?: Record<string, unknown>;
  slots?: Slots;
  emit?: EmitFn<E>;
  expose?: (exposed?: Record<string, any>) => void;
};

export const useContext = (
  options?: SetupContextOptions
): Omit<SetupContext, "expose"> => ({
  attrs: {},
  emit: () => ({}),
  slots: {},
  ...options,
});
