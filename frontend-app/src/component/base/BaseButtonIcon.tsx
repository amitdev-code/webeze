import { type PropsWithChildren, forwardRef } from "react";
import { BasePlaceload } from "./BasePlaceload";
import {
  type WebezeButtonProps,
  useWebezeButton,
} from "../../hooks/useWebezeButton";
import { useWebezeDefaultProperty } from "../../assets/styles/ui_provider/Provider";
import { cn } from "../../assets/styles/classNameHelper";

type BaseButtonIconProps = Omit<WebezeButtonProps, "children"> &
  PropsWithChildren<{
    /**
     * The type of button.
     * If this is not set and the `to` property is set, the component will be treated as a link.
     */
    // type?: "button" | "submit" | "reset";

    /**
     * The route to navigate to when the button or link is clicked.
     * If this is set and the `type` property is not set, the component will be treated as a link.
     */
    // to?: string;

    /** Using href instead of to result in a native anchor with no router functionality. */
    // href?: string;

    /**
     * Whether the button or link is disabled.
     */
    // disabled?: boolean;

    /**
     * The value for the `rel` attribute on the button or link.
     * This property is only relevant for links.
     */
    // rel?: string;

    /**
     * The value for the `target` attribute on the button or link.
     * This property is only relevant for links.
     */
    // target?: string;

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
      | "light"
      | "dark"
      | "black"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "none";

    /**
     * The radius of the button or link.
     *
     * @default 'sm'
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";

    /**
     * The size of the button.
     *
     * @default 'md'
     */
    size?: "sm" | "md" | "lg" | "xl";
  }>;

const radiuses = {
  none: "",
  sm: "webeze-button-rounded-sm",
  md: "webeze-button-rounded-md",
  lg: "webeze-button-rounded-lg",
  full: "webeze-button-rounded-full",
};

const sizes = {
  sm: "webeze-button-sm",
  md: "webeze-button-md",
  lg: "webeze-button-lg",
  xl: "webeze-button-xl",
};

const colors = {
  default: "webeze-button-default",
  "default-contrast": "webeze-button-default-contrast",
  muted: "webeze-button-muted",
  "muted-contrast": "webeze-button-muted-contrast",
  light: "webeze-button-light",
  dark: "webeze-button-dark",
  black: "webeze-button-black",
  primary: "webeze-button-primary",
  info: "webeze-button-info",
  success: "webeze-button-success",
  warning: "webeze-button-warning",
  danger: "webeze-button-danger",
  none: "",
};

export const BaseButtonIcon = forwardRef<
  HTMLAnchorElement & HTMLButtonElement,
  BaseButtonIconProps
>(function BaseButtonIcon(
  {
    type,
    href,
    disabled,
    rel = "",
    target = "",
    loading = false,
    className,
    children,
    ...props
  },
  ref
) {
  const { is: Component, attributes } = useWebezeButton({
    href,
    type,
    rel,
    target,
    disabled,
  });

  const color = useWebezeDefaultProperty(props, "BaseButtonIcon", "color");
  const rounded = useWebezeDefaultProperty(props, "BaseButtonIcon", "rounded");
  const size = useWebezeDefaultProperty(props, "BaseButtonIcon", "size");

  return (
    <Component
      className={cn(
        "webeze-button-icon",
        loading && "webeze-button-loading",
        rounded && radiuses[rounded],
        size && sizes[size],
        color && colors[color],
        className
      )}
      {
        ...(props as object) /** TODO: add correct type */
      }
      {...attributes}
      ref={ref}
    >
      {loading ? <BasePlaceload className="h-4 w-4 rounded-md" /> : children}
    </Component>
  );
});
