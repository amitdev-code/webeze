import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/classNameHelper";

type BasePlaceloadProps = HTMLAttributes<HTMLDivElement>;

export const BasePlaceload = forwardRef<HTMLDivElement, BasePlaceloadProps>(
  function BasePlaceload({ className: classes }, ref) {
    return (
      <div
        className={cn("webeze-placeload animate-webeze-placeload", classes)}
        ref={ref}
      />
    );
  },
);
