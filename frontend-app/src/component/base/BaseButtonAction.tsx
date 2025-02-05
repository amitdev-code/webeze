import { type PropsWithChildren, forwardRef } from "react";
import {
  type WebezeButtonProps,
  useWebezeButton,
} from "../../hooks/useWebezeButton";
import { BasePlaceload } from "./BasePlaceload";
import { useWebezeDefaultProperty } from "../../ui_provider/Provider";
import { cn } from "../../utils/classNameHelper";

type BaseButtonActionProps = Omit<WebezeButtonProps, "children"> &
  PropsWithChildren<{
    /**
     * The type of button.
     */
    // type?: "button" | "submit" | "reset";

    /**
     * The route to navigate to when the button is clicked.
     */
    // to?: string;

    /** Using href instead of to result in a native anchor with no router functionality. */
    // href?: string;

    /**
     * Whether the button is disabled.
     */
    // disabled?: boolean;

    /**
     * The value for the `rel` attribute on the button.
     */
    // rel?: string;

    /**
     * The value for the `target` attribute on the button.
     */
    // target?: string;

    /**
     * Whether the button is in a loading state.
     */
    // loading?: boolean;

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
  }>;

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

export const BaseButtonAction = forwardRef<
  HTMLAnchorElement & HTMLButtonElement,
  BaseButtonActionProps
>(function BaseButtonAction(
  {
    target = "",
    href,
    type,
    rel = "",
    disabled = false,
    loading = false,
    children,
    className: classes,
    ...props
  },
  ref
) {
  const { is: Component, attributes } = useWebezeButton({
    href,
    type,
    target,
    rel,
    disabled,
  });

  const color = useWebezeDefaultProperty(props, "BaseButtonAction", "color");
  const rounded = useWebezeDefaultProperty(
    props,
    "BaseButtonAction",
    "rounded"
  );

  const attrs: Record<string, unknown> = {
    ...attributes,
    ...props,
    color: undefined,
    rounded: undefined,
  };

  return (
    <Component
      className={cn(
        "webeze-button-action",
        loading && "webeze-button-loading",
        color && colors[color],
        rounded && radiuses[rounded],
        classes
      )}
      {...attrs}
      ref={ref}
    >
      {loading ? <BasePlaceload className="h-3 w-8 rounded" /> : children}
    </Component>
  );
});
