import { type ReactNode, forwardRef, useEffect, useState } from "react";
import { useWebezeDefaultProperty } from "../../assets/styles/ui_provider/Provider";
import { cn } from "../../utils/classNameHelper";

interface BaseTabSliderProps {
  /**
   * An array of objects representing each tab. Each object should have a 'label' and a 'value' property.
   */
  tabs: {
    /** The label displayed for the tab. */
    label?: string;
    /** The value associated with the tab. */
    value: string;
  }[];

  /**
   * The value of the currently selected tab.
   */
  defaultValue?: string;

  /**
   *
   * change handler function
   *
   */
  onChange?: (value: string) => void;

  children:
    | ReactNode
    | ((activeValue: string, toggle: (value: string) => void) => ReactNode);

  /**
   * Defines the color of the active tab
   *
   * @default 'default'
   */
  color?:
    | "default"
    | "default-contrast"
    | "primary"
    | "light"
    | "dark"
    | "black";

  /**
   * Controls the alignment of the tabs. Can be 'start', 'center', or 'end'.
   *
   * @default 'start'
   */
  justify?: "start" | "center" | "end";

  /**
   * Controls the radius of the tabs.
   *
   * @default 'lg'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The size of the tabs.
   *
   * @default 'md'
   */
  size?: "sm" | "md";

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
     * CSS classes to apply to the track element.
     */
    track?: string | string[];

    /**
     * CSS classes to apply to the item element.
     */
    item?: string | string[];

    /**
     * CSS classes to apply to the naver element.
     */
    naver?: string | string[];

    /**
     * CSS classes to apply to the content element.
     */
    content?: string | string[];
  };
}

const justifies = {
  start: "",
  center: "webeze-tabs-centered",
  end: "webeze-tabs-end",
};

const sizes = {
  sm: "webeze-tabs-sm",
  md: "webeze-tabs-md",
};

const radiuses = {
  none: "",
  sm: "webeze-tabs-rounded-sm",
  md: "webeze-tabs-rounded-md",
  lg: "webeze-tabs-rounded-lg",
  full: "webeze-tabs-rounded-full",
};

const colors = {
  default: "webeze-tabs-default",
  "default-contrast": "webeze-tabs-default-contrast",
  primary: "webeze-tabs-primary",
  light: "webeze-tabs-light",
  dark: "webeze-tabs-dark",
  black: "webeze-tabs-black",
};

export const BaseTabSlider = forwardRef<HTMLDivElement, BaseTabSliderProps>(
  function BaseTabSlider(
    { tabs, defaultValue, onChange, children, ...props },
    ref,
  ) {
    const [activeValue, setActiveValue] = useState<string>(
      defaultValue || tabs[0]?.value || "",
    );

    const color = useWebezeDefaultProperty(props, "BaseTabSlider", "color");
    const justify = useWebezeDefaultProperty(props, "BaseTabSlider", "justify");
    const rounded = useWebezeDefaultProperty(props, "BaseTabSlider", "rounded");
    const size = useWebezeDefaultProperty(props, "BaseTabSlider", "size");

    const tabsLength = Math.min(3, Math.max(2, tabs.length));

    useEffect(() => {
      onChange?.(activeValue);
    }, [activeValue, onChange]);

    return (
      <div
        className={cn(
          "webeze-tab-slider",
          color && colors[color],
          justify && justifies[justify],
          rounded && radiuses[rounded],
          size && sizes[size],
          tabsLength === 2 ? "webeze-tabs-two-slots" : "webeze-tabs-three-slots",
          props.classes?.wrapper,
        )}
        ref={ref}
      >
        <div className={cn("webeze-tab-slider-inner", props.classes?.inner)}>
          <div className={cn("webeze-tab-slider-track", props.classes?.track)}>
            {tabs.slice(0, tabsLength).map((tab, index) => (
              <button
                key={index}
                type="button"
                className={cn(
                  "webeze-tab-slider-item",
                  activeValue === tab.value && "webeze-active",
                  props.classes?.item,
                )}
                onKeyDown={(e) => {
                  if (e.code === "Space") {
                    setActiveValue(tab.value);
                  }
                }}
                onClick={() => setActiveValue(tab.value)}
              >
                {tab.label ?? tab.value}
              </button>
            ))}
            {activeValue && <div className="webeze-tab-slider-naver" />}
          </div>
        </div>
        {!!children && (
          <div className={cn("webeze-tab-content", props.classes?.content)}>
            {typeof children === "function"
              ? children(activeValue, (toggleValue) =>
                  setActiveValue(toggleValue),
                )
              : children}
          </div>
        )}
      </div>
    );
  },
);
