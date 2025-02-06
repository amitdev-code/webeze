import { type HTMLAttributes, forwardRef } from "react";
import { useWebezeDefaultProperty } from "../../assets/styles/ui_provider/Provider";
import { cn } from "../../assets/styles/classNameHelper";

type BaseProseProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * Inner elements shapes.
   *
   * @default 'none'
   */
  rounded?: "none" | "sm" | "md" | "lg";
};

const radiuses = {
  none: "webeze-prose-rounded-none",
  sm: "webeze-prose-rounded-sm",
  md: "webeze-prose-rounded-md",
  lg: "webeze-prose-rounded-lg",
};

export const BaseProse = forwardRef<HTMLDivElement, BaseProseProps>(
  function BaseProse({ children, ...props }, ref) {
    const rounded = useWebezeDefaultProperty(props, "BaseProse", "rounded");

    return (
      <div
        className={cn(
          "webeze-prose",
          rounded && radiuses[rounded],
          props.className,
        )}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);
