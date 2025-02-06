import { forwardRef } from "react";
import { Icon } from "@iconify/react";
import { BaseButtonClose } from "./BaseButtonClose";
import { useWebezeDefaultProperty } from "../../assets/styles/ui_provider/Provider";
import { cn } from "../../assets/styles/classNameHelper";

type BaseSnackProps = {
  /**
   * The text to display in the snackbar.
   */
  label?: string;

  /**
   * An optional icon to display in the snackbar.
   */
  icon?: string;

  /**
   * An optional image to display in the snackbar.
   */
  image?: string;

  /**
   * The color of snack.
   *
   * @default 'default'
   */
  color?: "default" | "default-contrast" | "muted" | "muted-contrast";

  /**
   * The size of the snack.
   *
   * @default 'md'
   */
  size?: "xs" | "sm" | "md";

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
     * CSS classes to apply to the img element.
     */
    img?: string | string[];

    /**
     * CSS classes to apply to the text element.
     */
    text?: string | string[];

    /**
     * CSS classes to apply to the button element.
     */
    button?: string | string[];
  };

  /**
   * Click handler
   */
  onClick?: () => void;
};

const sizes = {
  xs: "webeze-snack-xs",
  sm: "webeze-snack-sm",
  md: "webeze-snack-md",
};

const colors = {
  default: "webeze-snack-default",
  "default-contrast": "webeze-snack-default-contrast",
  muted: "webeze-snack-muted",
  "muted-contrast": "webeze-snack-muted-contrast",
};

const imageSize: Record<keyof typeof sizes, number> = {
  xs: 24,
  sm: 32,
  md: 40,
};

export const BaseSnack = forwardRef<HTMLDivElement, BaseSnackProps>(
  function BaseSnack(
    { icon, image, label = "", onClick = () => {}, ...props },
    ref
  ) {
    const color = useWebezeDefaultProperty(props, "BaseSnack", "color");
    const size = useWebezeDefaultProperty(props, "BaseSnack", "size");

    return (
      <div
        className={cn(
          "webeze-snack",
          size && sizes[size],
          color && colors[color],
          (icon || image) && "webeze-has-media",
          props.classes?.wrapper
        )}
        ref={ref}
      >
        {icon && !image && (
          <div className={cn("webeze-snack-icon", props.classes?.icon)}>
            <Icon icon={icon} name={icon} className="webeze-snack-icon-inner" />
          </div>
        )}
        {image && !icon && (
          <div className={cn("webeze-snack-image", props.classes?.img)}>
            <img
              src={image}
              height={imageSize[size ?? "md"]}
              width={imageSize[size ?? "md"]}
              className="webeze-snack-image-inner"
              alt=""
            />
          </div>
        )}
        <span className={cn("webeze-snack-text", props.classes?.text)}>
          {label}
        </span>
        <BaseButtonClose
          className={cn("webeze-snack-button", props.classes?.button)}
          rounded="full"
          onClick={onClick}
          size={size}
        />
      </div>
    );
  }
);
