import { type ButtonHTMLAttributes, forwardRef } from "react";
import { IconClose } from "../icons";
import { useWebezeDefaultProperty } from "../../assets/styles/ui_provider/Provider";
import { cn } from "../../utils/classNameHelper";

type BaseButtonCloseProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * The color of the button.
   *
   * @default 'default'
   */
  color?:
    | "default"
    | "default-contrast"
    | "muted"
    | "muted-contrast"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "none";

  /**
   * The radius of the button.
   *
   * @default 'full'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The size of the button.
   *
   * @default 'sm'
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

const sizes = {
  xs: "webeze-button-xs",
  sm: "webeze-button-sm",
  md: "webeze-button-md",
  lg: "webeze-button-lg",
  xl: "webeze-button-xl",
};

const radiuses = {
  none: "",
  sm: "webeze-button-rounded-sm",
  md: "webeze-button-rounded-md",
  lg: "webeze-button-rounded-lg",
  full: "webeze-button-rounded-full",
};

const colors = {
  default: "webeze-button-default",
  "default-contrast": "webeze-button-default-contrast",
  muted: "webeze-button-muted",
  "muted-contrast": "webeze-button-muted-contrast",
  primary: "webeze-button-primary",
  info: "webeze-button-info",
  success: "webeze-button-success",
  warning: "webeze-button-warning",
  danger: "webeze-button-danger",
  none: "",
};

export const BaseButtonClose = forwardRef<
  HTMLButtonElement,
  BaseButtonCloseProps
>(function BaseButtonClose({ children, className, ...props }, ref) {
  const color = useWebezeDefaultProperty(props, "BaseButtonClose", "color");
  const rounded = useWebezeDefaultProperty(props, "BaseButtonClose", "rounded");
  const size = useWebezeDefaultProperty(props, "BaseButtonClose", "size");

  const attrs = {
    ...props,
    color: undefined,
    rounded: undefined,
    size: undefined,
  };

  return (
    <button
      type="button"
      className={cn(
        "webeze-button-close",
        size && sizes[size],
        rounded && radiuses[rounded],
        color && colors[color],
        className
      )}
      {...attrs}
      ref={ref}
    >
      {children || <IconClose className="webeze-button-icon" />}
    </button>
  );
});
