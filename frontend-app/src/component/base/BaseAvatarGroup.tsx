import { forwardRef, useMemo } from "react";
import { BaseAvatar } from "./BaseAvatar";
import { cn } from "../../assets/styles/classNameHelper";
import { useWebezeDefaultProperty } from "../../assets/styles/ui_provider/Provider";

type BaseAvatarGroupProps = {
  /** An array of avatar objects. */
  avatars: {
    /** The source URL for the avatar image. */
    src: string;

    /** The source URL for the dark version of the avatar image. */
    srcDark?: string;

    /** The text to display as the avatar. */
    text?: string;
  }[];

  /**
   * The maximum number of avatars to display.
   *
   * @default 4
   */
  limit?: number;

  /**
   * The size of the avatars.
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
     * CSS classes to apply to the outer element.
     */
    outer?: string | string[];

    /**
     * CSS classes to apply to the count element.
     */
    count?: string | string[];
  };
};

const sizes = {
  xxs: "webeze-avatar-group-xxs",
  xs: "webeze-avatar-group-xs",
  sm: "webeze-avatar-group-sm",
  md: "webeze-avatar-group-md",
  lg: "webeze-avatar-group-lg",
  xl: "webeze-avatar-group-lg",
  "2xl": "webeze-avatar-group-lg",
  "3xl": "webeze-avatar-group-lg",
  "4xl": "webeze-avatar-group-lg",
};

export const BaseAvatarGroup = forwardRef<HTMLDivElement, BaseAvatarGroupProps>(
  function BaseAvatarGroup(props, ref) {
    const size = useWebezeDefaultProperty(props, "BaseAvatarGroup", "size");
    const limit = useWebezeDefaultProperty(props, "BaseAvatarGroup", "limit");

    const avatarDisplay = useMemo(() => {
      if (props.avatars && limit && props.avatars.length > limit) {
        return props.avatars.slice(0, limit - 1);
      }

      return props.avatars;
    }, [props.avatars, limit]);

    return (
      <div
        className={cn(
          "webeze-avatar-group",
          size && sizes[size],
          props.classes?.wrapper,
        )}
        ref={ref}
      >
        {avatarDisplay.map((avatar, index) => (
          <div
            key={`${avatar.src || avatar.srcDark || "avatar"}-${index}`}
            className={cn("webeze-avatar-outer", props.classes?.outer)}
          >
            <BaseAvatar
              size={size}
              rounded="full"
              tabIndex={0}
              className="bg-primary-500/20 text-primary-500 !scale-90"
              {...avatar}
              alt=""
            />
          </div>
        ))}
        {limit && props.avatars.length > limit && (
          <div className={cn("webeze-avatar-count", props.classes?.count)}>
            <div className="webeze-avatar-count-inner">
              <span className="webeze-avatar-count-text">
                +{props.avatars.length - limit + 1}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  },
);
