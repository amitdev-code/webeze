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
import { useWebezeDefaultProperty } from "../../assets/styles/ui_provider/Provider";
import { BasePlaceload } from "../base/BasePlaceload";
import { BaseInputHelpText } from "./BaseInputHelpText";

type BaseInputProps = HTMLAttributes<HTMLInputElement> & {
  onChange?: (value: string | number) => void;
  value?: string | number;
  stateModifiers?: {
    number?: boolean;
    trim?: boolean;
    lazy?: boolean;
  };
  id?: string;
  type?: string;
  label?: string;
  labelFloat?: boolean;
  icon?: string;
  placeholder?: string;
  error?: string | boolean;
  colorFocus?: boolean;
  loading?: boolean;
  contrast?: "default" | "default-contrast" | "muted" | "muted-contrast";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  size?: "sm" | "md" | "lg" | "xl";
  classes?: {
    wrapper?: string | string[];
    outer?: string | string[];
    label?: string | string[];
    input?: string | string[];
    addon?: string | string[];
    error?: string | string[];
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
  el: HTMLInputElement | null;
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
