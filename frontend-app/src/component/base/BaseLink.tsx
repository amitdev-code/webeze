import { forwardRef } from "react";
import { cn } from "../../assets/styles/classNameHelper";



import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

interface BaseLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  className?: string;
}

export const BaseLink = forwardRef<HTMLAnchorElement, BaseLinkProps>(
  function BaseLink({ className, children, ...props }, ref) {
    return (
      <a className={cn("webeze-link", className)} {...props} ref={ref}>
        {children}
      </a>
    );
  },
);
