import { type HTMLAttributes, forwardRef } from "react";
import { useWebezeDefaultProperty } from "../../ui_provider/Provider";
import { cn } from "../../utils/classNameHelper";

type BaseTextProps = HTMLAttributes<HTMLParagraphElement> & {
  /**
   * The lead of the text.
   *
   * @default 'normal'
   */
  lead?: "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";

  /**
   * The size of the text.
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
   * The weight of the text.
   *
   * @default 'normal'
   */
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
};

const sizes = {
  xs: "webeze-content-xs",
  sm: "webeze-content-sm",
  md: "webeze-content-md",
  lg: "webeze-content-lg",
  xl: "webeze-content-xl",
  "2xl": "webeze-content-2xl",
  "3xl": "webeze-content-3xl",
  "4xl": "webeze-content-4xl",
  "5xl": "webeze-content-5xl",
  "6xl": "webeze-content-6xl",
  "7xl": "webeze-content-7xl",
  "8xl": "webeze-content-8xl",
  "9xl": "webeze-content-9xl",
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

export const BaseText = forwardRef<HTMLParagraphElement, BaseTextProps>(
  function BaseText({ children, ...props }, ref) {
    const lead = useWebezeDefaultProperty(props, "BaseText", "lead");
    const size = useWebezeDefaultProperty(props, "BaseText", "size");
    const weight = useWebezeDefaultProperty(props, "BaseText", "weight");

    return (
      <p
        className={cn(
          "webeze-text",
          size && sizes[size],
          weight && weights[weight],
          lead && leads[lead]
        )}
        ref={ref}
      >
        {children}
      </p>
    );
  }
);
