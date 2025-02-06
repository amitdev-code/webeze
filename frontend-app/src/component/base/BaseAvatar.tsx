import { forwardRef } from "react";
import { cn } from "../../assets/styles/classNameHelper";
import { useWebezeDefaultProperty } from "../../assets/styles/ui_provider/Provider";

type BaseAvatarProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "width" | "height" | "alt"> & {
  /**
   * The URL of the image to display.
   */
  src?: string;

  /**
   * The URL of a dark version of the image to display when the component is in dark mode.
   */
  srcDark?: string;

  /**
   * The URL of a badge to display on top of the image.
   */
  badgeSrc?: string;

  /**
   * The text to display below the image.
   */
  text?: string;

  /**
   * Applies an svg mask from the available presets. (needs rounded to be set to `none`).
   */
  mask?: "hex" | "hexed" | "deca" | "blob" | "diamond";

  /**
   * Whether to display a dot on top of the image, or the color of the dot.
   */
  dot?:
    | boolean
    | "primary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "pink"
    | "yellow";

  /**
   * Whether to display a ring around the image .
   */
  ring?:
    | boolean
    | "primary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "pink"
    | "yellow";

  /**
   * The alternative text for the image.
   */
  alt?: string;

  /**
   * Defines the color of the avatar
   *
   * @default 'default'
   */
  color?:
    | "white"
    | "muted"
    | "primary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "pink"
    | "yellow"
    | "indigo"
    | "violet";

  /**
   * The radius of the image.
   *
   * @default 'full'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The size of the image.
   *
   * @default 'sm'
   */
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

  /**
   * Optional CSS classes to apply to the component inner elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[];

    /**
     * CSS classes to apply to the inner element.
     */
    inner?: string | string[];

    /**
     * CSS classes to apply to the img element.
     */
    img?: string | string[];

    /**
     * CSS classes to apply to the badge element.
     */
    badge?: string | string[];

    /**
     * CSS classes to apply to the dot element.
     */
    dot?: string | string[];
  };
};

const colors = {
  white: "bg-white dark:bg-muted-800 text-muted-600 dark:text-muted-200",
  muted: "bg-muted-100 dark:bg-muted-800 text-muted-600 dark:text-muted-200",
  primary: "bg-primary-500/20 text-primary-500",
  info: "bg-info-500/20 text-info-500",
  success: "bg-success-500/20 text-success-500",
  warning: "bg-warning-500/20 text-warning-500",
  danger: "bg-danger-500/20 text-danger-500",
  yellow: "bg-yellow-500/20 text-yellow-400",
  pink: "bg-pink-500/20 text-pink-400",
  indigo: "bg-indigo-500/20 text-indigo-500",
  violet: "bg-violet-500/20 text-violet-500",
};

const dots = {
  success: "webeze-dot-success",
  primary: "webeze-dot-primary",
  info: "webeze-dot-info",
  warning: "webeze-dot-warning",
  danger: "webeze-dot-danger",
  pink: "webeze-dot-pink",
  yellow: "webeze-dot-yellow",
};

const rings = {
  success: "webeze-ring-success",
  primary: "webeze-ring-primary",
  info: "webeze-ring-info",
  warning: "webeze-ring-warning",
  danger: "webeze-ring-danger",
  pink: "webeze-ring-pink",
  yellow: "webeze-ring-yellow",
};

const sizes = {
  xxs: "webeze-avatar-xxs",
  xs: "webeze-avatar-xs",
  sm: "webeze-avatar-sm",
  md: "webeze-avatar-md",
  lg: "webeze-avatar-lg",
  xl: "webeze-avatar-xl",
  "2xl": "webeze-avatar-2xl",
  "3xl": "webeze-avatar-3xl",
  "4xl": "webeze-avatar-4xl",
};

const radiuses = {
  none: "webeze-avatar-rounded-none",
  sm: "webeze-avatar-rounded-sm",
  md: "webeze-avatar-rounded-md",
  lg: "webeze-avatar-rounded-lg",
  full: "webeze-avatar-rounded-full",
};

const masks = {
  hex: "webeze-mask-hex",
  hexed: "webeze-mask-hexed",
  deca: "webeze-mask-deca",
  blob: "webeze-mask-blob",
  diamond: "webeze-mask-diamond",
};

/**
 *  derived from sizes to apply to next/image height and width
 */
const imageSizes: Record<keyof typeof sizes, number> = {
  xxs: 6,
  xs: 8,
  sm: 10,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  "3xl": 28,
  "4xl": 32,
};

/**
 *  derived from sizes to apply to next/image (badge) height and width
 */
const badgeSizes: Record<keyof typeof sizes, number> = {
  xxs: 3,
  xs: 4,
  sm: 5,
  md: 5,
  lg: 6,
  xl: 8,
  "2xl": 10,
  "3xl": 10,
  "4xl": 12,
};

export const BaseAvatar = forwardRef<HTMLDivElement, BaseAvatarProps>(
  function BaseAvatar(
    {
      src,
      srcDark,
      text = "?",
      badgeSrc,
      mask,
      className: wrapperClasses,
      dot = false,
      ring = false,
      alt = "",
      ...props
    },
    ref,
  ) {
    const color = useWebezeDefaultProperty(props, "BaseAvatar", "color");
    const rounded = useWebezeDefaultProperty(props, "BaseAvatar", "rounded");
    const size = useWebezeDefaultProperty(props, "BaseAvatar", "size");

    const attrs = {
      ...props,
      color: undefined,
      rounded: undefined,
      size: undefined,
    };

    const imageSize = {
      width: imageSizes[size ?? "sm"],
      height: imageSizes[size ?? "sm"],
    };

    const badgeSize = {
      width: badgeSizes[size ?? "sm"],
      height: badgeSizes[size ?? "sm"],
    };

    return (
      <div
        className={cn(
          "webeze-avatar",
          size && sizes[size],
          rounded && radiuses[rounded],
          !src && color && colors[color],
          mask &&
            (props.rounded === "none" || rounded === "none") && [
              "webeze-avatar-mask",
              masks[mask],
            ],
          ring &&
            (ring === true
              ? ["webeze-avatar-ring", rings.primary]
              : ["webeze-avatar-ring", rings[ring]]),
          props.classes?.wrapper,
          wrapperClasses,
        )}
        ref={ref}
      >
        <div className={cn("webeze-avatar-inner", props.classes?.inner)}>
          {src && (
            <img
              src={src}
              {...attrs}
              {...imageSize}
              className={cn(
                "webeze-avatar-img",
                rounded && radiuses[rounded],
                srcDark && "dark:hidden",
                props.classes?.img,
              )}
              alt={alt}
            />
          )}

          {src && srcDark && (
            <img
              src={srcDark}
              {...attrs}
              {...imageSize}
              className={cn(
                "webeze-avatar-img hidden dark:block",
                rounded && radiuses[rounded],
                props.classes?.img,
              )}
              alt={alt}
            />
          )}

          {!src && <span className="webeze-avatar-text">{text}</span>}
        </div>

        {badgeSrc && (
          <div className={cn("webeze-avatar-badge", props.classes?.badge)}>
            <img
              className="webeze-badge-img"
              src={badgeSrc}
              {...badgeSize}
              alt=""
            />
          </div>
        )}

        {dot && (
          <span
            className={cn(
              "webeze-avatar-dot",
              dot === true ? dots.primary : dots[dot],
              props.classes?.dot,
            )}
          />
        )}
      </div>
    );
  },
);
