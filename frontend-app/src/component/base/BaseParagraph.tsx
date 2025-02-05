import { type ElementType, forwardRef } from "react";
import { type PolymorphicComponentProps, type PolymorphicRef } from "../../types/ui_types";
import { useWebezeDefaultProperty } from "../../ui_provider/Provider";
import { cn } from "../../utils/classNameHelper";

type BaseParagraphProps<E extends ElementType = "p"> = {
  /**
   * The HTML element or component name to use for the paragraph.
   */
  as?: E;

  /**
   * The lead of the paragraph.
   *
   * @default 'normal'
   */
  lead?: "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";

  /**
   * The size of the paragraph.
   *
   * @default 'md'
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
   * The weight of the paragraph.
   *
   * @default 'normal'
   */
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
};

const sizes = {
  xs: "webeze-paragraph-xs",
  sm: "webeze-paragraph-sm",
  md: "webeze-paragraph-md",
  lg: "webeze-paragraph-lg",
  xl: "webeze-paragraph-xl",
  "2xl": "webeze-paragraph-2xl",
  "3xl": "webeze-paragraph-3xl",
  "4xl": "webeze-paragraph-4xl",
  "5xl": "webeze-paragraph-5xl",
  "6xl": "webeze-paragraph-6xl",
  "7xl": "webeze-paragraph-7xl",
  "8xl": "webeze-paragraph-8xl",
  "9xl": "webeze-paragraph-9xl",
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

export const BaseParagraph = forwardRef(function BaseParagraph<
  E extends ElementType = "p",
>(
  {
    as: element,
    className: classes,
    children,
    ...props
  }: PolymorphicComponentProps<E, BaseParagraphProps<E>>,
  ref: PolymorphicRef<E & HTMLParagraphElement>,
) {
  // const element = useWebezeDefaultProperty(props, 'BaseParagraph', 'as') // @todo
  const lead = useWebezeDefaultProperty(props, "BaseParagraph", "lead");
  const size = useWebezeDefaultProperty(props, "BaseParagraph", "size");
  const weight = useWebezeDefaultProperty(props, "BaseParagraph", "weight");

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
        "webeze-paragraph",
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
