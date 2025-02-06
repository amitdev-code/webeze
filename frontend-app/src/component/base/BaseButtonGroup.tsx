import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "../../assets/styles/classNameHelper";

export const BaseButtonGroup = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(function BaseButtonGroup(
  { className: classes = "", children, ...props },
  ref,
) {
  return (
    <div className={cn("webeze-button-group", classes)} {...props} ref={ref}>
      {children}
    </div>
  );
});
