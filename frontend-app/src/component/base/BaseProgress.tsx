import { forwardRef, useMemo } from "react";
import { useWebezeDefaultProperty } from "../../assets/styles/ui_provider/Provider";
import { cn } from "../../assets/styles/classNameHelper";

type BaseProgressProps = {
  /**
   * The current value of the progress bar.
   * If `value` is not provided, the progress bar will be in an indeterminate state.
   */
  value?: number;

  /**
   * The maximum value of the progress bar.
   */
  max?: number;

  /**
   * The color of the progress bar.
   *
   * @default 'primary'
   */
  color?:
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "light"
    | "dark"
    | "black";

  /**
   * The contrast ot the progress bar.
   *
   * @default 'default'
   */
  contrast?: "default" | "contrast";

  /**
   * The radius of the progress bar.
   *
   * @default 'full'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The size of the progress bar.
   *
   * @default 'sm'
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";

  /**
   * Optional CSS classes to apply to the component inner elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[];

    /**
     * CSS classes to apply to the progress element.
     */
    progress?: string | string[];
  };
};

const colors = {
  primary: "webeze-progress-primary",
  info: "webeze-progress-info",
  success: "webeze-progress-success",
  warning: "webeze-progress-warning",
  danger: "webeze-progress-danger",
  light: "webeze-progress-light",
  dark: "webeze-progress-dark",
  black: "webeze-progress-black",
};

const contrasts = {
  default: "webeze-progress-default",
  contrast: "webeze-progress-contrast",
};

const radiuses = {
  none: "",
  sm: "webeze-progress-rounded-sm",
  md: "webeze-progress-rounded-md",
  lg: "webeze-progress-rounded-lg",
  full: "webeze-progress-rounded-full",
};

const sizes = {
  xs: "webeze-progress-xs",
  sm: "webeze-progress-sm",
  md: "webeze-progress-md",
  lg: "webeze-progress-lg",
  xl: "webeze-progress-xl",
};

export const BaseProgress = forwardRef<HTMLDivElement, BaseProgressProps>(
  function BaseProgress({ value: currentValue, max = 100, ...props }, ref) {
    const color = useWebezeDefaultProperty(props, "BaseProgress", "color");
    const contrast = useWebezeDefaultProperty(props, "BaseProgress", "contrast");
    const rounded = useWebezeDefaultProperty(props, "BaseProgress", "rounded");
    const size = useWebezeDefaultProperty(props, "BaseProgress", "size");

    const value = useMemo(() => {
      if (max === 0) {
        return 0;
      }

      return typeof currentValue === "number"
        ? (currentValue / max) * 100
        : undefined;
    }, [currentValue, max]);

    return (
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemax={max}
        className={cn(
          "webeze-progress",
          size && sizes[size],
          contrast && contrasts[contrast],
          color && colors[color],
          rounded && radiuses[rounded],
          props.classes?.wrapper,
        )}
        ref={ref}
      >
        <div
          className={cn(
            "webeze-progress-bar",
            value === undefined &&
              "webeze-progress-indeterminate animate-webeze-progress-indeterminate",
            props.classes?.progress,
          )}
          style={{ width: value !== undefined ? `${value}%` : "100%" }}
        />
      </div>
    );
  },
);
