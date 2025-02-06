import {
  type ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type InputHTMLAttributes,
} from "react";
import { useWebezeDefaultProperty } from "../../assets/styles/ui_provider/Provider";
import { useWebezeId } from "../../hooks/useWebezeId";
import { cn } from "../../utils/classNameHelper";
import { BasePlaceload } from "../base/BasePlaceload";
import { BaseInputHelpText } from "../form/BaseInputHelpText";

type BaseTextareaProps = {
  /**
   * The value of the textarea.
   */
  value?: string;

  /**
   * A function that is called when the value of the textarea changes.
   *
   * @param value - The new value of the textarea.
   */
  onChange?: (value: string) => void;

  /**
   * Used internaly to allow .trim
   * and .lazy state modifiers.
   */
  stateModifiers?: {
    trim?: boolean;
    lazy?: boolean;
  };

  /**
   * The form input identifier.
   */
  id?: string;

  /**
   * The name of the textarea.
   */
  name?: string;
  /**
   * The label for the textarea.
   */
  label?: string;

  /**
   * If the label should be floating.
   */
  labelFloat?: boolean;

  /**
   * Whether to apply the focus color to the textarea.
   */
  colorFocus?: boolean;

  /**
   * The placeholder text for the textarea.
   */
  placeholder?: string;

  /**
   * Whether the textarea is in a loading state.
   */
  loading?: boolean;

  /**
   * Whether the textarea is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the textarea is read-only.
   */
  readonly?: boolean;

  /**
   * The error message for the textarea, or whether it is in an error state.
   */
  error?: string | boolean;

  /**
   * Whether to display an addon element in the textarea.
   */
  addon?: boolean;

  addonElement?: ReactNode;

  /**
   * The number of rows to display in the textarea.
   */
  rows?: number;

  /**
   * Whether to allow the user to resize the textarea.
   */
  resize?: boolean;

  /**
   * Whether to automatically grow the textarea as text is entered.
   */
  autogrow?: boolean;

  /**
   * The maximum height of the textarea when autogrow is enabled.
   */
  maxHeight?: number;

  /**
   * The contrast of the textarea.
   *
   * @default 'default'
   */
  contrast?: "default" | "default-contrast" | "muted" | "muted-contrast";

  /**
   * The radius of the textarea.
   *
   * @since 2.0.0
   * @default 'sm'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The size of the textarea.
   *
   * @default 'md'
   */
  size?: "sm" | "md" | "lg";

  /**
   * A set of classes to apply to the various elements of the textarea.
   */
  classes?: {
    /**
     * A class or list of classes to be applied to the textarea wrapper element.
     */
    wrapper?: string | string[];
    /**
     * A class or list of classes to be applied to the label element.
     */
    label?: string | string[];
    /**
     * A class or list of classes to be applied to the textarea element.
     */
    textarea?: string | string[];
    /**
     * A class or list of classes to be applied to the addon element.
     */
    addon?: string | string[];
    /**
     * A class or list of classes to be applied to the error element.
     */
    error?: string | string[];
  };
};

const radiuses = {
  none: "",
  sm: "webeze-textarea-rounded-sm",
  md: "webeze-textarea-rounded-md",
  lg: "webeze-textarea-rounded-lg",
  full: "webeze-textarea-rounded-lg",
};

const sizes = {
  sm: "webeze-textarea-sm",
  md: "webeze-textarea-md",
  lg: "webeze-textarea-lg",
};

const contrasts = {
  default: "webeze-textarea-default",
  "default-contrast": "webeze-textarea-default-contrast",
  muted: "webeze-textarea-muted",
  "muted-contrast": "webeze-textarea-muted-contrast",
};

export type BaseTextareaRef = {
  /**
   * The underlying HTMLTextAreaElement element.
   */
  el: HTMLTextAreaElement | null;

  /**
   * The internal id of the radio input.
   */
  id: string;
  /**
   * A method to resize the textarea to fit its content.
   */
  fitSize: () => void;
};

export const BaseTextarea = forwardRef<
  BaseTextareaRef,
  BaseTextareaProps &
    Omit<InputHTMLAttributes<HTMLTextAreaElement>, keyof BaseTextareaProps>
>(function BaseTextarea(
  {
    onChange = () => {},
    stateModifiers,
    placeholder = "",
    rows = 4,
    error = false,
    ...props
  },
  ref,
) {
  const [textareaValue, setTextareaValue] = useState("");

  const id = useWebezeId(() => props.id);

  const contrast = useWebezeDefaultProperty(props, "BaseTextarea", "contrast");
  const rounded = useWebezeDefaultProperty(props, "BaseTextarea", "rounded");
  const size = useWebezeDefaultProperty(props, "BaseTextarea", "size");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const fitSize = useCallback(() => {
    if (!textareaRef.current) {
      return;
    }

    if (props.autogrow) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [props.autogrow]);

  const handleUpdate = useCallback(
    (value: string) => {
      const content = stateModifiers?.trim ? value.trim() : value;

      setTextareaValue(content);
      onChange(content);
    },
    [onChange, stateModifiers?.trim],
  );

  useImperativeHandle(
    ref,
    () => ({
      get el() {
        return textareaRef.current;
      },
      id,
      fitSize,
    }),
    [fitSize, id],
  );

  useEffect(() => {
    fitSize();
  }, [fitSize, textareaValue, props.autogrow, props.maxHeight]);

  useEffect(() => {
    if (props.value && props.value !== textareaValue) {
      handleUpdate(props.value);
    }
  }, [props.value, textareaValue, handleUpdate]);

  return (
    <div
      className={cn(
        "webeze-textarea-wrapper",
        contrast && contrasts[contrast],
        size && sizes[size],
        rounded && radiuses[rounded],
        error && !props.loading && "webeze-textarea-error",
        props.loading && "webeze-textarea-loading",
        props.labelFloat && "webeze-textarea-label-float",
        !props.resize && "webeze-textarea-not-resize",
        props.addon && "webeze-has-addon",
        props.classes?.wrapper,
      )}
    >
      {props.label && !props.labelFloat && (
        <label
          htmlFor={id}
          className={cn("webeze-textarea-label", props.classes?.label)}
        >
          {props.label}
        </label>
      )}
      <div className="webeze-textarea-outer">
        {stateModifiers?.lazy ? (
          <textarea
            id={id}
            ref={textareaRef}
            className={cn(
              "webeze-textarea",
              props.colorFocus && "webeze-textarea-focus",
              props.classes?.textarea,
            )}
            name={props.name}
            placeholder={placeholder}
            readOnly={props.readonly}
            disabled={props.disabled}
            rows={rows}
            value={textareaValue}
            onChange={(e) => {
              handleUpdate(e.target.value);
            }}
          />
        ) : (
          <textarea
            id={id}
            ref={textareaRef}
            className={cn(
              "webeze-textarea",
              props.colorFocus && "webeze-textarea-focus",
              props.classes?.textarea,
            )}
            name={props.name}
            placeholder={placeholder}
            readOnly={props.readonly}
            disabled={props.disabled}
            rows={rows}
            value={textareaValue}
            onInput={(e) => {
              handleUpdate(e.currentTarget.value);
            }}
          />
        )}

        {props.label && props.labelFloat && (
          <label
            className={cn("webeze-label-float", props.classes?.label)}
            htmlFor={id}
          >
            {props.label}
          </label>
        )}

        {props.loading && (
          <div className="webeze-textarea-placeload">
            <BasePlaceload className="webeze-placeload" />
            <BasePlaceload className="webeze-placeload" />
            <BasePlaceload className="webeze-placeload" />
          </div>
        )}

        {props.addon && props.addonElement && (
          <div className={cn("webeze-textarea-addon", props.classes?.addon)}>
            {props.addonElement}
          </div>
        )}

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
