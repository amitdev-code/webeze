import { type HTMLAttributes, forwardRef } from "react";
import { useWebezeDefaultProperty } from "../../ui_provider/Provider";
import { cn } from "../../utils/classNameHelper";

type BaseCardProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * Adds a flat or a on hover shadow to the card.
   */
  shadow?: "flat" | "hover";

  /**
   * The color of the card.
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
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "none";

  /**
   * The radius of the card.
   *
   * @default 'sm'
   */
  rounded?: "none" | "sm" | "md" | "lg";
};

const radiuses = {
  none: "",
  sm: "webeze-card-rounded-sm",
  md: "webeze-card-rounded-md",
  lg: "webeze-card-rounded-lg",
};

const colors = {
  default: "webeze-card-default",
  "default-contrast": "webeze-card-default-contrast",
  muted: "webeze-card-muted",
  "muted-contrast": "webeze-card-muted-contrast",
  dark: "webeze-card-dark",
  black: "webeze-card-black",
  primary: "webeze-card-primary",
  info: "webeze-card-info",
  success: "webeze-card-success",
  warning: "webeze-card-warning",
  danger: "webeze-card-danger",
  none: "",
};

const shadows = {
  flat: "webeze-card-shadow",
  hover: "webeze-card-shadow-hover",
};

export const BaseCard = forwardRef<HTMLDivElement, BaseCardProps>(
  function BaseCard({ className: classes, children, ...props }, ref) {
    const color = useWebezeDefaultProperty(props, "BaseCard", "color");
    const rounded = useWebezeDefaultProperty(props, "BaseCard", "rounded");

    const attrs = {
      ...props,
      color: undefined,
      rounded: undefined,
    };

    return (
      <div
        className={cn(
          "webeze-card",
          rounded && radiuses[rounded],
          color && colors[color],
          props.shadow && shadows[props.shadow],
          classes,
        )}
        {...attrs}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);
