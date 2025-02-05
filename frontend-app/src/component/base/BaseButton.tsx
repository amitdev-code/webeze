import { type PropsWithChildren, forwardRef } from "react";
import { BasePlaceload } from "./BasePlaceload";
import { type WebezeButtonProps, useWebezeButton } from "../../hooks/useWebezeButton";
import { useWebezeDefaultProperty } from "../../ui_provider/Provider";
import { cn } from "../../utils/classNameHelper";

type BaseButtonProps = Omit<WebezeButtonProps, "children"> &
  PropsWithChildren<{
    /** The type of the button. Can be 'button', 'submit', or 'reset'. */
    // type?: "button" | "submit" | "reset";

    /** The location to which the button should navigate when clicked. This is only applicable if the button is a link. */
    // to?: string;

    /** Using href instead of to result in a native anchor with no router functionality. */
    // href?: string;

    /** Whether the button should be disabled. */
    // disabled?: boolean;

    /** The value of the 'rel' attribute of the button. This attribute is used to specify the relationship of the linked document with the current document. */
    // rel?: string;

    /** The value of the 'target' attribute of the button. This attribute is used to specify where to open the linked document. */
    // target?: string;

    /**
     * Adds a flat or a on hover shadow to the button.
     */
    shadow?: "flat" | "hover";

    /** The button badge indicator */
    badge?: boolean;

    /** Add a pulse animation on the badge */
    badgePulse?: boolean;

    /** Whether the button is in a loading state. */
    loading?: boolean;

    /** Whether the button should be disabled. */
    disabled?: boolean;

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
     * The radius of the button.
     *
     * @default 'sm'
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";

    /**
     * The size of the button
     *
     * @default 'md'
     */
    size?: "sm" | "md" | "lg" | "xl";

    /**
     * The variant of the button..
     *
     * @default 'solid'
     */
    variant?: "solid" | "outline" | "pastel";
  }>;

const badgeColors = {
  primary: "webeze-badge-primary",
  info: "webeze-badge-info",
  success: "webeze-badge-success",
  warning: "webeze-badge-warning",
  danger: "webeze-badge-danger",
  none: "",
  default: "",
  "default-contrast": "",
  light: "",
  dark: "",
  black: "",
  muted: "",
  "muted-contrast": "",
};

const sizes = {
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

const variants = {
  solid: "webeze-button-solid",
  pastel: "webeze-button-pastel",
  outline: "webeze-button-outline",
};

const colors = {
  none: "",
  default: "webeze-button-default",
  "default-contrast": "webeze-button-default-contrast",
  primary: "webeze-button-primary",
  info: "webeze-button-info",
  success: "webeze-button-success",
  warning: "webeze-button-warning",
  danger: "webeze-button-danger",
  muted: "webeze-button-muted",
  "muted-contrast": "webeze-button-muted-contrast",
  light: "webeze-button-light",
  dark: "webeze-button-dark",
  black: "webeze-button-black",
};

const shadows = {
  flat: "webeze-button-shadow",
  hover: "webeze-button-shadow-hover",
};

export const BaseButton = forwardRef<
  HTMLAnchorElement & HTMLButtonElement,
  BaseButtonProps
>(function BaseButton(
  {
    disabled = false,
    badge = false,
    badgePulse = false,
    shadow,
    href,
    type,
    rel = "",
    target = "",
    className: classes,
    loading,
    children,
    ...props
  },
  ref,
) {
  const { is: Component, attributes } = useWebezeButton({
    href,
    type,
    target,
    rel,
    disabled,
  });

  const color = useWebezeDefaultProperty(props, "BaseButton", "color");
  const rounded = useWebezeDefaultProperty(props, "BaseButton", "rounded");
  const size = useWebezeDefaultProperty(props, "BaseButton", "size");
  const variant = useWebezeDefaultProperty(props, "BaseButton", "variant");

  const attrs: Record<string, unknown> = {
    ...attributes,
    ...props,
    color: undefined,
    rounded: undefined,
    size: undefined,
    variant: undefined,
  };

  return (
    <Component
      className={cn(
        "webeze-button",
        loading && "webeze-button-loading",
        size && sizes[size],
        rounded && radiuses[rounded],
        variant && variants[variant],
        color && colors[color],
        shadow && shadows[shadow],
        classes,
      )}
      {...attrs}
      ref={ref}
    >
      {!loading && children}
      {loading && <BasePlaceload className="h-4 w-12 rounded" />}
      {badge && (
        <span className={cn("webeze-button-badge", badgeColors[color])}>
          {badgePulse && <span className="webeze-button-badge-pulse" />}
          <span className="webeze-button-badge-inner" />
        </span>
      )}
    </Component>
  );
});
