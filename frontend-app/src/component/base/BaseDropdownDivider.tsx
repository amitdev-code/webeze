import { forwardRef } from "react";

export const BaseDropdownDivider = forwardRef<HTMLDivElement>(
  function BaseDropdownDivider(props, ref) {
    return <div className="webeze-dropdown-divider" ref={ref} />;
  },
);
