import { type PropsWithChildren, type ReactNode, forwardRef } from "react";
import { Menu } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { Float } from "@headlessui-float/react";
import { BaseButton } from "../BaseButton";
import { useWebezeDefaultProperty } from "../../../ui_provider/Provider";
import { cn } from "../../../utils/classNameHelper";
import "./BaseDropdown.css";

type BaseDropdownProps = PropsWithChildren<{
  /**
   * The label to display for the dropdown.
   */
  label?: string;

  /**
   * The header label to display for the dropdown.
   */
  headerLabel?: string;

  /**
   * Used a fixed strategy to float the component
   */
  fixed?: boolean;

  /**
   * The color of the button.
   *
   * @default 'default'
   */
  buttonColor?:
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
   * The color of the dropdown.
   *
   * @default 'default'
   */
  color?: "default" | "default-contrast" | "muted" | "muted-contrast" | "none";

  /**
   * The placement of the dropdown via floating-ui.
   *
   * @default 'bottom-start'
   */
  placement?:
    | "top"
    | "top-start"
    | "top-end"
    | "right"
    | "right-start"
    | "right-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "left-start"
    | "left-end";

  /**
   * The radius of the dropdown button.
   *
   * @default 'sm'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The size of the dropdown.
   *
   * @default 'md'
   */
  size?: "md" | "lg";

  /**
   * The variant of the dropdown.
   *
   * @default 'button'
   */
  variant?: "button" | "context" | "text";

  /**
   * Optional CSS classes to apply to the component inner elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[];

    /**
     * CSS classes to apply to the menu element.
     */
    menu?: string | string[];

    /**
     * CSS classes to apply to the header element.
     */
    header?: string | string[];

    /**
     * CSS classes to apply to the content element.
     */
    content?: string | string[];
  };

  /**
   *  The render function for custom button
   */
  renderButton?: ReactNode | ((open: boolean, close: () => void) => ReactNode);
}>;

const sizes = {
  md: "webeze-menu-md",
  lg: "webeze-menu-lg",
};

const radiuses = {
  none: "",
  sm: "webeze-menu-rounded-sm",
  md: "webeze-menu-rounded-md",
  lg: "webeze-menu-rounded-lg",
  full: "webeze-menu-rounded-lg",
};

const colors = {
  default: "webeze-menu-default",
  "default-contrast": "webeze-menu-default-contrast",
  muted: "webeze-menu-muted",
  "muted-contrast": "webeze-menu-muted-contrast",
  primary: "webeze-menu-primary",
  info: "webeze-menu-info",
  success: "webeze-menu-success",
  warning: "webeze-menu-warning",
  danger: "webeze-menu-danger",
  none: "",
};

const textColors = {
  default: "text-inherit",
  "default-contrast": "text-inherit",
  muted: "text-muted-500",
  "muted-contrast": "text-muted-500",
  primary: "text-primary-500",
  info: "text-info-500",
  success: "text-success-500",
  warning: "text-warning-500",
  danger: "text-danger-500",
  light: "text-muted-100",
  dark: "text-muted-900 dark:text-muted-100",
  black: "text-black dark:text-white",
  none: "",
};

export const BaseDropdown = forwardRef<HTMLDivElement, BaseDropdownProps>(
  function BaseDropdown(
    { children, label = "", fixed = false, renderButton, ...props },
    ref
  ) {
    const buttonColor = useWebezeDefaultProperty(
      props,
      "BaseDropdown",
      "buttonColor"
    );
    const color = useWebezeDefaultProperty(props, "BaseDropdown", "color");
    const placement = useWebezeDefaultProperty(
      props,
      "BaseDropdown",
      "placement"
    );
    const rounded = useWebezeDefaultProperty(props, "BaseDropdown", "rounded");
    const size = useWebezeDefaultProperty(props, "BaseDropdown", "size");
    const variant = useWebezeDefaultProperty(props, "BaseDropdown", "variant");

    return (
      <div className={cn("webeze-dropdown", props.classes?.wrapper)} ref={ref}>
        <Menu as="div" className="webeze-menu">
          {({ open, close }) => (
            <Float
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-in"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
              flip
              offset={props.variant === "context" ? 6 : 4}
              strategy={fixed ? "fixed" : "absolute"}
              placement={placement}
              adaptiveWidth={fixed}
              zIndex={20}
            >
              <Menu.Button as="div">
                {typeof renderButton === "function" ? (
                  renderButton?.(open, close)
                ) : renderButton ? (
                  renderButton
                ) : (
                  <>
                    {variant === "button" && (
                      <BaseButton
                        color={buttonColor}
                        rounded={rounded}
                        className="!pe-3 !ps-4"
                      >
                        <span>{label}</span>
                        <Icon
                          icon="lucide:chevron-down"
                          className={cn("webeze-chevron", open && "rotate-180")}
                        />
                      </BaseButton>
                    )}
                    {variant === "context" && (
                      <button
                        type="button"
                        className="webeze-context-button webeze-focus"
                      >
                        <span className="webeze-context-button-inner">
                          <Icon
                            icon="lucide:more-horizontal"
                            className={cn(
                              "webeze-context-icon",
                              open && "rotate-90"
                            )}
                          />
                        </span>
                      </button>
                    )}
                    {variant === "text" && (
                      <button
                        type="button"
                        className={cn(
                          "webeze-text-button webeze-focus",
                          buttonColor && textColors[buttonColor]
                        )}
                      >
                        <span className="webeze-text-button-inner">
                          {label}
                        </span>
                        <Icon
                          icon="lucide:chevron-down"
                          className={cn("webeze-chevron", open && "rotate-180")}
                        />
                      </button>
                    )}
                  </>
                )}
              </Menu.Button>

              <Menu.Items
                className={cn(
                  "webeze-dropdown-menu",
                  size && sizes[size],
                  rounded && radiuses[rounded],
                  color && colors[color],
                  props.classes?.menu
                )}
              >
                {props.headerLabel && (
                  <div
                    className={cn("webeze-menu-header", props.classes?.header)}
                  >
                    <div className="webeze-menu-header-inner">
                      <h4 className="webeze-menu-header-title">
                        {props.headerLabel}
                      </h4>
                    </div>
                  </div>
                )}
                <div className="webeze-menu-content">{children}</div>
              </Menu.Items>
            </Float>
          )}
        </Menu>
      </div>
    );
  }
);
