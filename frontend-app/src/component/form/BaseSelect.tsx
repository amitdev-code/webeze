import {
  type PropsWithChildren,
  type SelectHTMLAttributes,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { Icon } from "@iconify/react";
import { useWebezeId } from "../../hooks/useWebezeId";
import { cn } from "../../utils/classNameHelper";
import { useWebezeDefaultProperty } from "../../assets/styles/ui_provider/Provider";
import { BasePlaceload } from "../base/BasePlaceload";
import { IconChevronDown } from "../icons/IconChevronDown";
import { BaseInputHelpText } from "./BaseInputHelpText";

type BaseSelectProps = PropsWithChildren<{
  /**
   * A function that is called when the value of the select changes.
   *
   * @param value - The selected value of the select.
   */
  onChange?: (value: string) => void;

  /**
   * The form input identifier.
   */
  id?: string;

  /**
   * The label text for the select input.
   */
  label?: string;

  /**
   * If the label should be floating.
   */
  labelFloat?: boolean;

  /**
   * An icon to display in the select input.
   */
  icon?: string;

  /**
   * The placeholder to display for the select input.
   */
  placeholder?: string;

  /**
   * Whether the select input is in a loading state.
   */
  loading?: boolean;

  /**
   * Whether the select input is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the color of the input should change when it is focused.
   */
  colorFocus?: boolean;

  /**
   * An error message to display, or a boolean indicating whether there is an error.
   */
  error?: string | boolean;

  /**
   * The contrast of the select input.
   *
   * @default 'default'
   */
  contrast?: "default" | "default-contrast" | "muted" | "muted-contrast";

  /**
   * The radius of the select input.
   *
   * @since 2.0.0
   * @default 'sm'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The size of the select input.
   *
   * @default 'md'
   */
  size?: "sm" | "md" | "lg" | "xl";

  /**
   * Classes to apply to the select input.
   */
  classes?: {
    /**
     * A class or classes to apply to the wrapper element.
     */
    wrapper?: string | string[];

    /**
     * A class or classes to apply to the outer element.
     */
    outer?: string | string[];

    /**
     * A class or classes to apply to the label element.
     */
    label?: string | string[];

    /**
     * A class or classes to apply to the select element.
     */
    select?: string | string[];

    /**
     * A class or classes to apply to the chevron element.
     */
    chevron?: string | string[];

    /**
     * A class or classes to apply to the icon element.
     */
    icon?: string | string[];

    /**
     * A class or classes to apply to the error element.
     */
    error?: string | string[];
  };
}>;

const radiuses = {
  none: "",
  sm: "webeze-select-rounded-sm",
  md: "webeze-select-rounded-md",
  lg: "webeze-select-rounded-lg",
  full: "webeze-select-rounded-full",
};

const sizes = {
  sm: "webeze-select-sm",
  md: "webeze-select-md",
  lg: "webeze-select-lg",
  xl: "webeze-select-xl",
};

const contrasts = {
  default: "webeze-select-default",
  "default-contrast": "webeze-select-default-contrast",
  muted: "webeze-select-muted",
  "muted-contrast": "webeze-select-muted-contrast",
};

export type BaseSelectRef = {
  /**
   * The underlying HTMLInputElement element.
   */
  el: HTMLSelectElement | null;

  /**
   * The internal id of the select input.
   */
  id: string;
};

export const BaseSelect = forwardRef<
  BaseSelectRef,
  BaseSelectProps &
    Omit<SelectHTMLAttributes<HTMLSelectElement>, keyof BaseSelectProps>
>(function BaseSelect(
  { label = "", onChange = () => {}, error = false, children, ...props },
  ref
) {
  const selectRef = useRef<HTMLSelectElement>(null);

  const contrast = useWebezeDefaultProperty(props, "BaseSelect", "contrast");
  const rounded = useWebezeDefaultProperty(props, "BaseSelect", "rounded");
  const size = useWebezeDefaultProperty(props, "BaseSelect", "size");

  const id = useWebezeId(() => props.id);

  const placeholder = useMemo(() => {
    if (props.loading) {
      return undefined;
    }

    if (props.labelFloat) {
      return label;
    }

    return props.placeholder ?? "";
  }, [label, props.labelFloat, props.loading, props.placeholder]);

  useImperativeHandle(
    ref,
    () => ({
      get el() {
        return selectRef.current;
      },
      id,
    }),
    [id]
  );

  return (
    <div
      className={cn(
        "webeze-select-wrapper",
        contrast && contrasts[contrast],
        size && sizes[size],
        rounded && radiuses[rounded],
        error && !props.loading && "webeze-select-error",
        props.loading && "webeze-select-loading",
        props.labelFloat && "webeze-select-label-float",
        props.icon && "webeze-has-icon",
        props.colorFocus && "webeze-select-focus",
        props.classes?.wrapper
      )}
    >
      {label && !props.labelFloat && (
        <label
          className={cn("webeze-select-label", props.classes?.label)}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className={cn("webeze-select-outer", props.classes?.outer)}>
        <select
          id={id}
          ref={selectRef}
          disabled={props.disabled}
          className={cn("webeze-select", props.classes?.select)}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          value={props.value}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}

          {children}
        </select>

        {label && props.labelFloat && (
          <label
            htmlFor={id}
            className={cn("webeze-label-float", props.classes?.label)}
          >
            {label}
          </label>
        )}

        {props.loading && (
          <div className="webeze-select-placeload">
            <BasePlaceload className="webeze-placeload" />
          </div>
        )}

        {props.icon && (
          <div className={cn("webeze-select-icon", props.classes?.icon)}>
            <Icon className="webeze-select-icon-inner" icon={props.icon} />
          </div>
        )}

        <div
          className={cn(
            "webeze-select-chevron  webeze-chevron",
            props.classes?.chevron
          )}
        >
          <IconChevronDown className="webeze-select-chevron-inner" />
        </div>

        {error && typeof error === "string" && (
          <BaseInputHelpText
            color="danger"
            className={cn(props.classes?.error)}
          >
            {error}
          </BaseInputHelpText>
        )}
      </div>
    </div>
  );
});
