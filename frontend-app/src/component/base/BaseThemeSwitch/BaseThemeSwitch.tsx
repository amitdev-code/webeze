import { forwardRef, useEffect, useRef } from "react";
import { useWebezeDefaultProperty } from "../../../assets/styles/ui_provider/Provider";

import "./BaseThemeSwitch.css";
import { useColorMode } from "../../../hooks/useColorMode";
import { IconMoon, IconSun } from "../../icons";

type BaseThemeSwitchProps = {
  /**
   * Disables transitions when toggling between light and dark mode.
   *
   * @default false
   */
  disableTransitions?: boolean;
};
export const BaseThemeSwitch = forwardRef<
  HTMLLabelElement,
  BaseThemeSwitchProps
>(function BaseThemeSwitch({ ...props }, ref) {
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
    <label className="webeze-theme-switch" ref={ref}>
      <input
        className="webeze-theme-switch-input"
        type="checkbox"
        onChange={(e) => handleChange(e.target.checked)}
        checked={colorMode.value === "dark"}
      />
      <span className="webeze-theme-switch-inner">
        <IconSun className="webeze-sun" />
        <IconMoon className="webeze-moon" />
      </span>
    </label>
  );
});
