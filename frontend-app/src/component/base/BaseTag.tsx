import { type HTMLAttributes, forwardRef } from "react";
import { useWebezeDefaultProperty } from "../../ui_provider/Provider";
import { cn } from "../../utils/classNameHelper";

type BaseTagProps = HTMLAttributes<HTMLElement> & {
  /**
   * Determines when the tag should have a shadow.
   */
  shadow?: "flat" | "hover";

  /**
   * The color of the tag.
   *
   * @default 'default'
   */
  color?:
    | "default"
    | "default-contrast"
    | "muted"
    | "muted-contrast"
    | "light"
    | "dark"
    | "black"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger";

  /**
   * The radius of the tag.
   *
   * @since 2.0.0
   * @default 'lg'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The size of the tag.
   *
   * @default 'md'
   */
  size?: "sm" | "md";

  /**
   * The variant of the tag.
   *
   * @since 2.0.0
   * @default 'solid'
   */
  variant?: "solid" | "outline" | "pastel";
};

const variants = {
  solid: "webeze-tag-solid",
  pastel: "webeze-tag-pastel",
  outline: "webeze-tag-outline",
};

const radiuses = {
  none: "",
  sm: "webeze-tag-rounded-sm",
  md: "webeze-tag-rounded-md",
  lg: "webeze-tag-rounded-lg",
  full: "webeze-tag-rounded-full",
};

const colors = {
  default: "webeze-tag-default",
  "default-contrast": "webeze-tag-default-contrast",
  muted: "webeze-tag-muted",
  "muted-contrast": "webeze-tag-muted-contrast",
  light: "webeze-tag-light",
  dark: "webeze-tag-dark",
  black: "webeze-tag-black",
  primary: "webeze-tag-primary",
  info: "webeze-tag-info",
  success: "webeze-tag-success",
  warning: "webeze-tag-warning",
  danger: "webeze-tag-danger",
};

const sizes = {
  sm: "webeze-tag-sm",
  md: "webeze-tag-md",
};

const shadows = {
  flat: "webeze-tag-shadow",
  hover: "webeze-tag-shadow-hover",
};

export const BaseTag = forwardRef<HTMLSpanElement, BaseTagProps>(
  function BaseTag({ children, shadow, ...props }, ref) {
    const color = useWebezeDefaultProperty(props, "BaseTag", "color");
    const rounded = useWebezeDefaultProperty(props, "BaseTag", "rounded");
    const size = useWebezeDefaultProperty(props, "BaseTag", "size");
    const variant = useWebezeDefaultProperty(props, "BaseTag", "variant");

    const attrs = {
      ...props,
      color: undefined,
      rounded: undefined,
      size: undefined,
      variant: undefined,
    };

    return (
      <span
        className={cn(
          "webeze-tag",
          size && sizes[size],
          rounded && radiuses[rounded],
          variant && variants[variant],
          color && colors[color],
          shadow && shadows[shadow],
        )}
        {...attrs}
        ref={ref}
      >
        {children}
      </span>
    );
  },
);
