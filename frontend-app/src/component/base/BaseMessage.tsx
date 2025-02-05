import { type PropsWithChildren, forwardRef } from "react";
import { Icon } from "@iconify/react";
import { useWebezeDefaultProperty } from "../../ui_provider/Provider";
import { cn } from "../../utils/classNameHelper";


type BaseMessageProps = PropsWithChildren<{
  /**
   * The message to display.
   */
  message?: string;

  /**
   * Whether to show an icon, or the name of the icon to display.
   */
  icon?: boolean | string;

  /**
   * Default icons to apply to the messages, when the icon is active.
   */
  defaultIcons?: {
    /**
     * The default default icon
     */
    default?: string;

    /**
     * The default default contrast icon
     */
    "default-contrast"?: string;

    /**
     * The default muted icon
     */
    muted?: string;

    /**
     * The default muted contrast icon
     */
    "muted-contrast"?: string;

    /**
     * The default info icon
     */
    info?: string;

    /**
     * The default success icon
     */
    success?: string;

    /**
     * The default warning icon
     */
    warning?: string;

    /**
     * The default danger icon
     */
    danger?: string;

    /**
     * The default primary icon
     */
    primary?: string;
  };

  /**
   * The icon to show in the close button
   */
  closeIcon?: string;

  /**
   * Whether to show a close button.
   */
  closable?: boolean;

  /**
   * The color of the message.
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
    | "danger";

  /**
   * The radius of the message.
   *
   * @default 'sm'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * Optional CSS classes to apply to the component inner elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[];

    /**
     * CSS classes to apply to the icon element.
     */
    icon?: string | string[];

    /**
     * CSS classes to apply to the text element.
     */
    text?: string | string[];
  };

  /**
   * close handler
   */
  onClose?: () => void;
}>;

const radiuses = {
  none: "",
  sm: "webeze-message-rounded-sm",
  md: "webeze-message-rounded-md",
  lg: "webeze-message-rounded-lg",
  full: "webeze-message-rounded-full",
};

const colors = {
  default: "webeze-message-default",
  "default-contrast": "webeze-message-default-contrast",
  muted: "webeze-message-muted",
  "muted-contrast": "webeze-message-muted-contrast",
  primary: "webeze-message-primary",
  info: "webeze-message-info",
  success: "webeze-message-success",
  warning: "webeze-message-warning",
  danger: "webeze-message-danger",
};

export const BaseMessage = forwardRef<HTMLDivElement, BaseMessageProps>(
  function BaseMessage(
    {
      message = "",
      icon: defaultIcon = false,
      closable = false,
      closeIcon = "lucide:x",
      onClose = () => {},
      classes,
      children,
      ...props
    },
    ref,
  ) {
    const color = useWebezeDefaultProperty(props, "BaseMessage", "color");
    const rounded = useWebezeDefaultProperty(props, "BaseMessage", "rounded");
    const icons = useWebezeDefaultProperty(props, "BaseMessage", "defaultIcons");

    const icon = typeof defaultIcon === "string" ? defaultIcon : icons[color];

    return (
      <div
        className={cn(
          "webeze-message",
          rounded && radiuses[rounded],
          color && colors[color],
          defaultIcon && icon && "webeze-has-icon",
          !defaultIcon && "webeze-has-text",
          classes?.wrapper,
        )}
        ref={ref}
      >
        {defaultIcon && icon && (
          <div className="webeze-message-icon-outer">
            <Icon icon={icon} name="icon" className="webeze-message-icon" />
          </div>
        )}
        <span className="webeze-message-inner-text">
          {message}
          {children}
        </span>
        {closable && (
          <div className="webeze-message-close-wrapper">
            <button
              type="button"
              tabIndex={0}
              className={cn("webeze-message-close", rounded && radiuses[rounded])}
              onClick={onClose}
            >
              <Icon
                icon={closeIcon}
                name="closeIcon"
                className="webeze-close-icon"
              />
            </button>
          </div>
        )}
      </div>
    );
  },
);
