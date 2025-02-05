import {
  type MouseEventHandler,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  type ForwardedRef,
  type InputHTMLAttributes,
} from "react";
import { cn } from "~/utils";
import { useWebezeDefaultProperty } from "~/Provider";
import { useNinjaId } from "~/hooks/useNinjaId";
import { IconCheck } from "../icons/IconCheck";
import { IconIndeterminate } from "../icons/IconIndeterminate";
import { BaseInputHelpText } from "~/components/form/BaseInputHelpText";

interface BaseCheckboxAttributes<T> {
  /**
   * The label to display for the checkbox.
   */
  label?: string;

  /**
   * Defines the value of the checkbox when it's checked.
   */
  value?: T;

  /**
   * The value to set when the checkbox is checked.
   */
  trueValue?: T;

  /**
   * The value to set when the checkbox is unchecked.
   */
  falseValue?: T;

  /**
   *  if the checkbox is checked
   */
  checked?: boolean;

  /**
   * The form input identifier.
   */
  id?: string;

  /**
   * An error message to display below the checkbox label.
   */
  error?: string | boolean;

  /**
   * Whether the checkbox is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the checkbox is in indeterminate state.
   */
  indeterminate?: boolean;

  /** The color of the checkbox.
   *
   * @default 'default'
   */
  color?:
    | "default"
    | "muted"
    | "light"
    | "dark"
    | "black"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger";

  /**
   * The radius of the checkbox.
   *
   * @default 'sm'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * Optional CSS classes to apply to the wrapper, label, and input elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[];

    /**
     * CSS classes to apply to the label element.
     */
    label?: string | string[];

    /**
     * CSS classes to apply to the input element.
     */
    input?: string | string[];
  };
}

interface BaseCheckboxEmits<T> {
  /**
   * The value of the component.
   * @param checked Whether the checkbox is checked.
   * @param value The value associated with the checkbox.
   */
  onChange?: (checked: boolean, value: NonNullable<T>) => void;

  /**
   * The function to call when the checkbox is clicked.
   */
  onClick?: MouseEventHandler<HTMLInputElement>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface BaseCheckboxSlots<T> {
  //
}

export interface BaseCheckboxExpose {
  el: HTMLInputElement | null;
}

type BaseCheckboxPropsInner<T> = BaseCheckboxAttributes<T> &
  BaseCheckboxEmits<T> &
  BaseCheckboxSlots<T>;

export type BaseCheckboxProps<T> = BaseCheckboxPropsInner<T> &
  Omit<InputHTMLAttributes<HTMLInputElement>, keyof BaseCheckboxPropsInner<T>>;

const radiuses = {
  none: "",
  sm: "webeze-checkbox-rounded-sm",
  md: "webeze-checkbox-rounded-md",
  lg: "webeze-checkbox-rounded-lg",
  full: "webeze-checkbox-rounded-full",
};

const colors = {
  default: "webeze-checkbox-default",
  muted: "webeze-checkbox-muted",
  light: "webeze-checkbox-light",
  dark: "webeze-checkbox-dark",
  black: "webeze-checkbox-black",
  primary: "webeze-checkbox-primary",
  info: "webeze-checkbox-info",
  success: "webeze-checkbox-success",
  warning: "webeze-checkbox-warning",
  danger: "webeze-checkbox-danger",
};

function BaseCheckboxInner<T>(
  {
    error = "",
    trueValue,
    falseValue,
    onChange = () => {},
    ...props
  }: BaseCheckboxProps<T>,
  ref?: ForwardedRef<BaseCheckboxExpose | undefined>,
): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  const color = useWebezeDefaultProperty(props, "BaseCheckbox", "color");
  const rounded = useWebezeDefaultProperty(props, "BaseCheckbox", "rounded");

  const id = useNinjaId(() => props.id);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = props.indeterminate || false;
    }
  }, [props.indeterminate]);

  useImperativeHandle(
    ref,
    () => {
      return {
        get el() {
          return inputRef.current;
        },
      };
    },
    [],
  );

  return (
    <div
      className={cn(
        "webeze-checkbox",
        props.disabled && "opacity-50",
        rounded && radiuses[rounded],
        color && colors[color],
        props.classes?.wrapper,
      )}
    >
      <div className="webeze-checkbox-outer">
        <input
          id={id}
          ref={inputRef}
          disabled={props.disabled}
          className={cn("webeze-checkbox-input", props.classes?.input)}
          type="checkbox"
          checked={props.checked}
          onClick={props.onClick}
          onChange={(e) => {
            onChange(
              e.target.checked,
              ((e.target.checked ? trueValue : falseValue) ??
                e.target.checked) as NonNullable<T>,
            );
          }}
        />
        <div className="webeze-checkbox-inner" />
        <IconCheck className="webeze-icon-check" />
        <IconIndeterminate className="webeze-icon-indeterminate" />
      </div>
      <div className="webeze-checkbox-label-wrapper">
        {props.label && (
          <label
            htmlFor={id}
            className={cn("webeze-checkbox-label-text", props.classes?.label)}
          >
            {props.label}
          </label>
        )}
        {error && typeof error === "string" && (
          <div className="webeze-checkbox-error">
            <BaseInputHelpText color="danger">{error}</BaseInputHelpText>
          </div>
        )}
      </div>
    </div>
  );
}

export const BaseCheckbox = forwardRef(BaseCheckboxInner) as <T>(
  props: BaseCheckboxProps<T> & {
    ref?: ForwardedRef<BaseCheckboxExpose | undefined>;
  },
  ref?: ForwardedRef<BaseCheckboxExpose | undefined>,
) => ReturnType<typeof BaseCheckboxInner>;
