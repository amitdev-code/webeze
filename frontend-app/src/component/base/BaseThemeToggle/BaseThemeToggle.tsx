import { forwardRef, useEffect, useRef } from "react";
import { IconMoon, IconSun } from "../../icons";
import { useWebezeDefaultProperty } from "../../../assets/styles/ui_provider/Provider";
import { cn } from "../../../utils/classNameHelper";
import { useColorMode } from "../../../hooks/useColorMode";

import "./BaseThemeToggle.css";

type BaseThemeToggleProps = {
  /**
   * Sets the toggle element to inverted colors mode.
   */
  inverted?: boolean;

  /**
   * Disables transitions when toggling between light and dark mode.
   */
  disableTransitions?: boolean;
};

export const BaseThemeToggle = forwardRef<
  HTMLLabelElement,
  BaseThemeToggleProps
>(function BaseThemeToggle({ inverted = false, ...props }, ref) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const { colorMode, setColorMode } = useColorMode();

  const disableTransitions = useWebezeDefaultProperty(
    props,
    "BaseThemeSwitch",
    "disableTransitions",
  );

  function handleChange(isChecked: boolean) {
    // disable transitions
    if (disableTransitions) {
      document.documentElement.classList.add("webeze-no-transition");
    }

    setColorMode(isChecked ? "dark" : "light");

    // re-enable transitions
    if (disableTransitions) {
      timeoutRef.current = setTimeout(() => {
        document.documentElement.classList.remove("webeze-no-transition");
      }, 0);
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  });

  return (
    <label
      className={cn(
        "webeze-theme-toggle",
        inverted && "webeze-theme-toggle-inverted",
      )}
      ref={ref}
    >
      <input
        type="checkbox"
        className="webeze-theme-toggle-input"
        onChange={(e) => handleChange(e.target.checked)}
        checked={colorMode.value === "dark"}
      />
      <span className="webeze-theme-toggle-inner">
        <IconSun className="webeze-sun" />
        <IconMoon className="webeze-moon" />
      </span>
    </label>
  );
});
