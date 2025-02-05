import { type HTMLAttributes, forwardRef } from "react";
import { useWebezeDefaultProperty } from "../../ui_provider/Provider";
import { cn } from "../../utils/classNameHelper";


type BaseIconBoxProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * Applies an svg mask from the available presets. (needs rounded to be set to `none`).
   */
  mask?: "hex" | "hexed" | "deca" | "blob" | "diamond";

  /**
   * Whether the icon is bordered.
   */
  bordered?: boolean;

  /** The color of the box.
   *
   * @default 'default'
   */
  color?:
    | "default"
    | "default-contrast"
    | "muted"
    | "muted-contrast"
    | "dark"
    | "black"
    | "light"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "none";

  /**
   * The radius of the icon.
   *
   * @default 'sm'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The size of the icon.
   *
   * @default 'xs'
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

  /** The variant of the box.
   *
   * @default 'solid'
   */
  variant?: "solid" | "outline" | "pastel";
};

const radiuses = {
  none: "",
  sm: "webeze-box-rounded-sm",
  md: "webeze-box-rounded-md",
  lg: "webeze-box-rounded-lg",
  full: "webeze-box-rounded-full",
};

const sizes = {
  xs: "webeze-box-xs",
  sm: "webeze-box-sm",
  md: "webeze-box-md",
  lg: "webeze-box-lg",
  xl: "webeze-box-xl",
  "2xl": "webeze-box-2xl",
};

const variants = {
  solid: "webeze-box-solid",
  pastel: "webeze-box-pastel",
  outline: "webeze-box-outline",
};

const colors = {
  none: "",
  default: "webeze-box-default",
  "default-contrast": "webeze-box-default-contrast",
  muted: "webeze-box-muted",
  "muted-contrast": "webeze-box-muted-contrast",
  light: "webeze-box-light",
  dark: "webeze-box-dark",
  black: "webeze-box-black",
  primary: "webeze-box-primary",
  info: "webeze-box-info",
  success: "webeze-box-success",
  warning: "webeze-box-warning",
  danger: "webeze-box-danger",
};

const masks = {
  hex: "webeze-mask webeze-mask-hex",
  hexed: "webeze-mask webeze-mask-hexed",
  deca: "webeze-mask webeze-mask-deca",
  blob: "webeze-mask webeze-mask-blob",
  diamond: "webeze-mask webeze-mask-diamond",
};

export const BaseIconBox = forwardRef<HTMLDivElement, BaseIconBoxProps>(
  function BaseIconBox(
    { bordered = false, children, className: classes, ...props },
    ref,
  ) {
    const color = useWebezeDefaultProperty(props, "BaseIconBox", "color");
    const rounded = useWebezeDefaultProperty(props, "BaseIconBox", "rounded");
    const size = useWebezeDefaultProperty(props, "BaseIconBox", "size");
    const variant = useWebezeDefaultProperty(props, "BaseIconBox", "variant");

    return (
      <div
        className={cn(
          "webeze-icon-box",
          bordered && "webeze-box-bordered",
          rounded && radiuses[rounded],
          size && sizes[size],
          variant && variants[variant],
          color && colors[color],
          rounded === "none" && props.mask && masks[props.mask],
          classes,
        )}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);
