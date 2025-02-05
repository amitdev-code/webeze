import { Menu } from "@headlessui/react";
import { type PropsWithChildren, type ReactNode, forwardRef } from "react";
import { useWebezeDefaultProperty } from "../../ui_provider/Provider";
import { type WebezeButtonProps, useWebezeButton } from "../../hooks/useWebezeButton";
import { cn } from "../../utils/classNameHelper";

type BaseDropdownItemProps = Omit<WebezeButtonProps, "children"> &
  PropsWithChildren<{
    /**
     * The type of button.
     */
    // type?: "button" | "submit" | "reset";

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
     * The title to display for the dropdown item.
     */
    title?: string;

    /**
     * The text to display for the dropdown item.
     */
    text?: string;

    /**
     * The hover color of the dropdown-item inner elements.
     *
     * @default 'primary'
     */
    color?:
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "dark"
      | "black";

    /**
     * The contrast of the dropdown-item.
     *
     * @default 'default'
     */
    contrast?: "default" | "contrast";

    /**
     * The radius of the dropdown-item.
     *
     * @default 'sm'
     */
    rounded?: "none" | "sm" | "md" | "lg";

    /**
     * Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[];

      /**
       * CSS classes to apply to the title element.
       */
      title?: string | string[];

      /**
       * CSS classes to apply to the text element.
       */
      text?: string | string[];
    };

    /**
     * start slot
     */
    start?: ReactNode;

    /**
     * end slot
     */
    end?: ReactNode;
  }>;

const radiuses = {
  none: "",
  sm: "webeze-item-rounded-sm",
  md: "webeze-item-rounded-md",
  lg: "webeze-item-rounded-lg",
};

const contrasts = {
  default: "webeze-item-default",
  contrast: "webeze-item-contrast",
};

const colors = {
  primary: "webeze-item-primary",
  info: "webeze-item-info",
  success: "webeze-item-success",
  warning: "webeze-item-warning",
  danger: "webeze-item-danger",
  dark: "webeze-item-dark",
  black: "webeze-item-black",
};

export const BaseDropdownItem = forwardRef<
  HTMLAnchorElement & HTMLButtonElement,
  BaseDropdownItemProps
>(function BaseDropdownItem(
  {
    title,
    text,
    disabled = false,
    start,
    end,
    rel,
    target,
    href,
    type,
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

  const classes = {
    title:
      "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white",
    text: "text-muted-400 font-sans text-xs",
    ...props.classes,
  };

  const color = useWebezeDefaultProperty(props, "BaseDropdownItem", "color");
  const contrast = useWebezeDefaultProperty(props, "BaseDropdownItem", "contrast");
  const rounded = useWebezeDefaultProperty(props, "BaseDropdownItem", "rounded");

  const attrs: Record<string, unknown> = {
    ...attributes,
    ...props,
    color: undefined,
    rounded: undefined,
    size: undefined,
    variant: undefined,
    disabled: false,
    classes: undefined,
  };

  return (
    <Menu.Item as="div">
      {({ active, close }) => (
        <Component
          className={cn(
            "webeze-dropdown-item",
            active && "webeze-active",
            rounded && radiuses[rounded],
            contrast && contrasts[contrast],
            color && colors[color],
            disabled && "webeze-item-disabled",
            classes?.wrapper,
          )}
          onClick={close}
          {...attrs}
          ref={ref}
        >
          {start}
          <div className="webeze-item-content">
            <div className={cn(classes?.title)}>{children || title}</div>
            {text && (
              <p
                className={cn(
                  "text-muted-400 font-sans text-xs",
                  classes?.text,
                )}
              >
                {text}
              </p>
            )}
          </div>
          {end}
        </Component>
      )}
    </Menu.Item>
  );
});
