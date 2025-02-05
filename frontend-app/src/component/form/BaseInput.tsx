import {
  type HTMLAttributes,
  type ReactNode,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { Icon } from "@iconify/react";
import { cn } from "../../utils/classNameHelper";
import { useWebezeDefaultProperty } from "../../ui_provider/Provider";
// import { useWebezeId } from "../../hooks/useWebezeId";
import { BasePlaceload } from "../base/BasePlaceload";
import { BaseInputHelpText } from "./BaseInputHelpText";

type BaseInputProps = HTMLAttributes<HTMLInputElement> & {
  /**
   * Callback function called when the value of the input changes.
   *
   * @param {string | number} value - The new value of the input.
   * @returns {void}
   */
  onChange?: (value: string | number) => void;

  /**
   * The value of the input.
   */
  value?: string | number;

  /**
   * Used internaly to allow .number, .trim
   * and .lazy v-model modifiers.
   */
  stateModifiers?: {
    number?: boolean;
    trim?: boolean;
    lazy?: boolean;
  };

  /**
   * The form input identifier.
   */
  id?: string;

  /**
   * The type of input.
   */
  type?: string;

  /**
   * The label to display for the input.
   */
  label?: string;

  /**
   * If the label should be floating.
   */
  labelFloat?: boolean;

  /**
   * The icon to display for the input.
   */
  icon?: string;

  /**
   * The placeholder to display for the input.
   */
  placeholder?: string;

  /**
   * An error message or boolean value indicating whether the input is in an error state.
   */
  error?: string | boolean;

  /**
   * Whether the color of the input should change when it is focused.
   */
  colorFocus?: boolean;

  /**
   * Whether the input is in a loading state.
   */
  loading?: boolean;

  /**
   * The contrast of the input.
   *
   * @default 'default'
   */
  contrast?: "default" | "default-contrast" | "muted" | "muted-contrast";

  /**
   * The radius of the input.
   *
   * @default 'sm'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The size of the input.
   *
   * @default 'md'
   */
  size?: "sm" | "md" | "lg" | "xl";

  /**
   * Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[];

    /**
     * CSS classes to apply to the outer element.
     */
    outer?: string | string[];

    /**
     * CSS classes to apply to the label element.
     */
    label?: string | string[];

    /**
     * CSS classes to apply to the input element.
     */
    input?: string | string[];

    /**
     * CSS classes to apply to the addon element.
     */
    addon?: string | string[];

    /**
     * CSS classes to apply to the error element.
     */
    error?: string | string[];

    /**
     * CSS classes to apply to the icon element.
     */
    icon?: string | string[];
  };

  action?: ReactNode;
};

const radiuses = {
  none: "",
  sm: "webeze-input-rounded-sm",
  md: "webeze-input-rounded-md",
  lg: "webeze-input-rounded-lg",
  full: "webeze-input-rounded-full",
};

const sizes = {
  sm: "webeze-input-sm",
  md: "webeze-input-md",
  lg: "webeze-input-lg",
  xl: "webeze-input-xl",
};

const contrasts = {
  default: "webeze-input-default",
  "default-contrast": "webeze-input-default-contrast",
  muted: "webeze-input-muted",
  "muted-contrast": "webeze-input-muted-contrast",
};

export type BaseInputRef = {
  /**
   * The underlying HTMLInputElement element.
   */
  el: HTMLInputElement | null;

  /**
   * The internal id of the input.
   */
  id: string;
};

export const BaseInput = forwardRef<BaseInputRef, BaseInputProps>(
  function BaseInput(
    {
      placeholder: defaultPlaceholder,
      loading = false,
      labelFloat = false,
      error = false,
      stateModifiers,
      type = "text",
      label,
      action,
      id,
      icon,
      classes,
      colorFocus,
      value,
      onChange,
      ...props
    },
    ref,
  ) {
    const inputRef = useRef<HTMLInputElement>(null);

    const contrast = useWebezeDefaultProperty(props, "BaseInput", "contrast");
    const rounded = useWebezeDefaultProperty(props, "BaseInput", "rounded");
    const size = useWebezeDefaultProperty(props, "BaseInput", "size");

    const attrs = {
      ...props,
      contrast: undefined,
      rounded: undefined,
      size: undefined,
    };

    const placeholder = useMemo(() => {
      if (loading) {
        return undefined;
      }

      if (labelFloat) {
        return label;
      }

      return defaultPlaceholder ?? "";
    }, [label, labelFloat, loading, defaultPlaceholder]);

    function looseToNumber(val: string) {
      const n = Number.parseFloat(val);

      return Number.isNaN(n) ? val : n;
    }

    function handleUpdate(val: string) {
      if (stateModifiers?.trim) {
        onChange?.(val.trim());
      } else if (stateModifiers?.number) {
        onChange?.(looseToNumber(val));
      } else {
        onChange?.(val);
      }
    }

    useImperativeHandle(
      ref,
      () => ({
        get el() {
          return inputRef.current;
        },
        id: id || "",
      }),
      [id],
    );

    return (
      <div
        className={cn(
          "webeze-input-wrapper",
          contrast && contrasts[contrast],
          size && sizes[size],
          rounded && radiuses[rounded],
          error && !loading && "webeze-input-error",
          loading && "webeze-input-loading",
          labelFloat && "webeze-input-label-float",
          icon && "webeze-has-icon",
          colorFocus && "webeze-input-focus",
          classes?.wrapper,
        )}
      >
        {label && !labelFloat && (
          <label className={cn("webeze-input-label", classes?.label)} htmlFor={id}>
            {label}
          </label>
        )}
        <div className={cn("webeze-input-outer", classes?.outer)}>
          <div>
            {stateModifiers?.lazy ? (
              <input
                id={id}
                ref={inputRef}
                type={type}
                className={cn("webeze-input", classes?.input)}
                placeholder={placeholder}
                onChange={(e) => handleUpdate(e.target.value)}
                value={value}
                {...attrs}
              />
            ) : (
              <input
                id={id}
                ref={inputRef}
                type={type}
                className={cn("webeze-input", classes?.input)}
                placeholder={placeholder}
                onInput={(e) => handleUpdate(e.currentTarget.value)}
                value={value}
                {...attrs}
              />
            )}
            {label && labelFloat && (
              <label
                htmlFor={id}
                className={cn("webeze-label-float", classes?.label)}
              >
                {label}
              </label>
            )}
            {loading && (
              <div className="webeze-input-placeload">
                <BasePlaceload className="webeze-placeload" />
              </div>
            )}
            {icon && (
              <div className={cn("webeze-input-icon", classes?.icon)}>
                <Icon icon={icon} className="webeze-input-icon-inner" />
              </div>
            )}

            {action}
          </div>
          {error && typeof error === "string" && (
            <BaseInputHelpText color="danger" className={cn(classes?.error)}>
              {error}
            </BaseInputHelpText>
          )}
        </div>
      </div>
    );
  },
);
