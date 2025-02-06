import { type FC, type PropsWithChildren, Children } from "react";
import { cn } from "../../assets/styles/classNameHelper";

type BaseListProps = PropsWithChildren<{
  className?: string;

  /**
   * If the list should be ordered.
   */
  ordered?: boolean;

  /**
   * Force the list to be media.
   */
  media?: boolean;
}>;

export const BaseList: FC<BaseListProps> = ({
  ordered = false,
  media,
  children,
  className: classes,
}) => {
  const Component = ordered ? "ol" : "ul";

  const hasMedia =
    media ??
    Children.toArray(children).some((child) => {
      if (typeof child === "string") {
        return false;
      }

      return typeof (child as { type: unknown }).type !== "string";
    });

  return (
    <Component
      className={cn(
        "webeze-list",
        hasMedia && "webeze-list-media",
        !hasMedia && ["webeze-list-base", ordered ? "webeze-list-ol" : "webeze-list-ul"],
        classes,
      )}
    >
      {children}
    </Component>
  );
};
