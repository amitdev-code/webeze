import { type HTMLAttributes, forwardRef } from "react";
import { Icon } from "@iconify/react";
import { useWebezeDefaultProperty } from "../../ui_provider/Provider";
import { cn } from "../../utils/classNameHelper";


type BaseKbdProps = HTMLAttributes<HTMLElement> & {
  /**
   * The icon to display for the kbd.
   */
  icon?: string;

  /**
   * The color of the kbd.
   *
   * @default 'default'
   */
  color?: "default" | "default-contrast" | "muted" | "muted-contrast" | "none";

  /**
   * The radius of the kbd.
   *
   * @default 'sm'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The radius of the kbd.
   *
   * @default 'sm'
   */
  size?: "xs" | "sm" | "md" | "lg";
};

const radiuses = {
  none: "",
  sm: "webeze-kbd-rounded-sm",
  md: "webeze-kbd-rounded-md",
  lg: "webeze-kbd-rounded-lg",
  full: "webeze-kbd-rounded-full",
};

const sizes = {
  xs: "webeze-kbd-xs",
  sm: "webeze-kbd-sm",
  md: "webeze-kbd-md",
  lg: "webeze-kbd-lg",
};

const colors = {
  none: "",
  default: "webeze-kbd-default",
  "default-contrast": "webeze-kbd-default-contrast",
  muted: "webeze-kbd-muted",
  "muted-contrast": "webeze-kbd-muted-contrast",
};

export const BaseKbd = forwardRef<HTMLElement, BaseKbdProps>(function BaseKbd(
  { className: classes, ...props },
  ref,
) {
  const color = useWebezeDefaultProperty(props, "BaseKbd", "color");
  const rounded = useWebezeDefaultProperty(props, "BaseKbd", "rounded");
  const size = useWebezeDefaultProperty(props, "BaseKbd", "size");

  return (
    <kbd
      className={cn(
        "webeze-kbd",
        color && colors[color],
        size && sizes[size],
        rounded && radiuses[rounded],
        classes,
      )}
      ref={ref}
    >
      {props.children
        ? props.children
        : props.icon && (
            <span className="webeze-kbd-icon-outer">
              <Icon icon={props.icon} className="webeze-kbd-icon-inner" />
            </span>
          )}
    </kbd>
  );
});
