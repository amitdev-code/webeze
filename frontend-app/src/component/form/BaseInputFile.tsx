import {
  type HTMLAttributes,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Icon } from "@iconify/react";
import { useWebezeDefaultProperty } from "../../ui_provider/Provider";
import { useWebezeId } from "../../hooks/useWebezeId";
import { cn } from "../../utils/classNameHelper";
import { BasePlaceload } from "../base/BasePlaceload";
import { BaseInputHelpText } from "./BaseInputHelpText";

type BaseInputFileProps = HTMLAttributes<HTMLInputElement> & {
  /**
   * The value of the file input.
   */
  value?: FileList | null;

  /**
   * The value of the file input.
   */
  onChange?: (files: FileList | null) => void;

  /**
   * The form input identifier.
   */
  id?: string;

  /**
   * The label to display for the file input.
   */
  label?: string;

  /**
   * The placeholder to display for the file input.
   */
  placeholder?: string;

  /**
   * The icon to display for the file input.
   */
  icon?: string;

  /**
   * Whether the color of the file input should change when it is focused.
   */
  colorFocus?: boolean;

  /**
   * Whether the file input is in a loading state.
   */
  loading?: boolean;

  /**
   * An error message or boolean value indicating whether the file input is in an error state.
   */
  error?: string | boolean;

  /**
   * Method to return the text value of the file input.
   */
  textValue?: (fileList?: FileList | null) => string;

  /**
   * The contrast of the input.
   *
   * @default 'default'
   */
  contrast?: "default" | "default-contrast";

  /**
   * The radius of the file input.
   *
   * @since 2.0.0
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
   * Translation strings.
   *
   * @default { empty: 'No file chosen', invalid: 'Invalid file selected', multiple: '{count} files selected'}
   */
  i18n?: {
    empty: string;
    invalid: string;
    multiple: string;
  };

  /**
   * Optional CSS classes to apply to the wrapper, label, input, text, error, and icon elements.
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

    /**
     * CSS classes to apply to the text element.
     */
    text?: string | string[];

    /**
     * CSS classes to apply to the error element.
     */
    error?: string | string[];

    /**
     * CSS classes to apply to the icon element.
     */
    icon?: string | string[];
  };
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
};

export type BaseInputFileRef = {
  /**
   * The underlying HTMLInputElement element.
   */
  el: HTMLInputElement | null;

  /**
   * The internal id of the file input.
   */
  id: string;
};

export const BaseInputFile = forwardRef<BaseInputFileRef, BaseInputFileProps>(
  function BaseInputFile(
    {
      placeholder,
      error = false,
      id,
      loading = false,
      icon,
      classes,
      label,
      colorFocus,
      value,
      onChange,
      textValue,
      ...props
    },
    ref,
  ) {
    const inputRef = useRef<HTMLInputElement>(null);

    const [files, setFiles] = useState<FileList | null>(value || null);

    const contrast = useWebezeDefaultProperty(props, "BaseInputFile", "contrast");
    const rounded = useWebezeDefaultProperty(props, "BaseInputFile", "rounded");
    const size = useWebezeDefaultProperty(props, "BaseInputFile", "size");
    const i18n = useWebezeDefaultProperty(props, "BaseInputFile", "i18n");

    const attrs = {
      ...props,
      contrast: undefined,
      rounded: undefined,
      size: undefined,
      i18n: undefined,
    };

    const _id = useWebezeId(() => id);

    const text =
      textValue !== undefined ? textValue(files) : defaultTextValue(files);

    useImperativeHandle(
      ref,
      () => ({
        get el() {
          return inputRef.current;
        },
        id: _id,
      }),
      [id],
    );

    function defaultTextValue(fileList?: FileList | null) {
      if (!fileList?.item?.length) {
        return i18n.empty;
      }

      return fileList?.item.length === 1
        ? fileList.item(0)?.name ?? i18n.invalid
        : i18n.multiple.replace(
            /{count}/g,
            String(fileList?.item?.length ?? 0),
          );
    }

    return (
      <div
        className={cn(
          "webeze-input-file-regular",
          contrast && contrasts[contrast],
          size && sizes[size],
          rounded && radiuses[rounded],
          error && !loading && "webeze-input-file-error",
          loading && "webeze-input-file-loading",
          icon && "webeze-has-icon",
          classes?.wrapper,
        )}
      >
        {label && (
          <label
            htmlFor={id}
            className={cn("webeze-input-file-label", classes?.label)}
          >
            {label}
          </label>
        )}
        <div className="webeze-input-file-outer">
          <label
            htmlFor={id}
            className={cn(
              "webeze-input-file-inner",
              colorFocus && "webeze-color-focus",
              classes?.input,
            )}
          >
            {(placeholder || icon) && (
              <div className={cn("webeze-input-file-addon", classes?.text)}>
                {placeholder && <span className="text-xs">{placeholder}</span>}
                {icon && <Icon icon={icon} className={cn(classes?.icon)} />}
              </div>
            )}

            <div className="webeze-input-file-text">{text}</div>

            <input
              id={_id}
              ref={inputRef}
              type="file"
              className="hidden"
              onChange={(e) => {
                setFiles(e.target.files);
                onChange?.(e.target.files);
              }}
              {...attrs}
            />
          </label>

          {loading && (
            <div className="webeze-input-file-placeload">
              <BasePlaceload className="webeze-placeload" />
            </div>
          )}

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
