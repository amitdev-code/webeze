import { type Ref, forwardRef } from "react";
import { type PolymorphicComponentProps } from "../../types/ui_types";
import { useWebezeDefaultProperty } from "../../assets/styles/ui_provider/Provider";
import { cn } from "../../utils/classNameHelper";


type Headings = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";

type HeadingProps<E extends Headings> = {
  /**
   * The heading element to use (e.g. 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p').
   */
  as?: E;

  /**
   * The size of the heading.
   *
   * @default 'xl'
   */
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";

  /**
   * The spacing below the heading.
   *
   * @default 'normal'
   */
  lead?: "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";

  /**
   * The weight of the heading.
   *
   * @default 'semibold'
   */
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
};

const sizes = {
  xs: "webeze-heading-xs",
  sm: "webeze-heading-sm",
  md: "webeze-heading-md",
  lg: "webeze-heading-lg",
  xl: "webeze-heading-xl",
  "2xl": "webeze-heading-2xl",
  "3xl": "webeze-heading-3xl",
  "4xl": "webeze-heading-4xl",
  "5xl": "webeze-heading-5xl",
  "6xl": "webeze-heading-6xl",
  "7xl": "webeze-heading-7xl",
  "8xl": "webeze-heading-8xl",
  "9xl": "webeze-heading-9xl",
};

const weights = {
  light: "webeze-weight-light",
  normal: "webeze-weight-normal",
  medium: "webeze-weight-medium",
  semibold: "webeze-weight-semibold",
  bold: "webeze-weight-bold",
  extrabold: "webeze-weight-extrabold",
};

const leads = {
  none: "webeze-lead-none",
  tight: "webeze-lead-tight",
  snug: "webeze-lead-snug",
  normal: "webeze-lead-normal",
  relaxed: "webeze-lead-relaxed",
  loose: "webeze-lead-loose",
};

export const BaseHeading = forwardRef(function BaseHeading<
  E extends Headings = "p",
>(
  {
    as: element,
    className: classes,
    children,
    ...props
  }: PolymorphicComponentProps<E, HeadingProps<E>>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: Ref<any>,
) {
  // const element = useWebezeDefaultProperty(props, "BaseHeading", "as"); // @todo
  const lead = useWebezeDefaultProperty(props, "BaseHeading", "lead");
  const size = useWebezeDefaultProperty(props, "BaseHeading", "size");
  const weight = useWebezeDefaultProperty(props, "BaseHeading", "weight");

  const Component = element || "p";

  const attrs = {
    ...props,
    lead: undefined,
    size: undefined,
    weight: undefined,
  };

  return (
    <Component
      className={cn(
        "webeze-heading",
        size && sizes[size],
        weight && weights[weight],
        lead && leads[lead],
        classes,
      )}
      {...attrs}
      ref={ref}
    >
      {children}
    </Component>
  );
});
