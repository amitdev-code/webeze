/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Ref, forwardRef, useCallback, useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import { Float } from "@headlessui-float/react";
import { Icon } from "@iconify/react";
import { useWebezeDefaultProperty } from "../../assets/styles/ui_provider/Provider";
import { cn } from "../../assets/styles/classNameHelper";
import { BaseListboxItem } from "./BaseListboxItem";
import { BaseIconBox } from "../base/BaseIconBox";

import { BasePlaceload } from "../base/BasePlaceload";
import { BaseAvatar } from "../base/BaseAvatar";
import { BaseInputHelpText } from "./BaseInputHelpText";

type BaseListboxProps<T = string> = {
  value?: T;

  onChange?: (value: T) => void;

  /**
   * The items to display in the multiselect.
   */
  items: T[];

  /**
   * Used internaly to allow .prop v-model modifier
   */
  stateModifiers?: {
    prop?: boolean;
  };

  /**
   * The label to display for the multiselect.
   */
  label?: string;

  /**
   * If the label should be floating.
   */
  labelFloat?: boolean;

  /**
   * The icon to display for the multiselect.
   */
  icon?: string;

  /**
   * The icon to show when the component is selected.
   */
  selectedIcon?: string;

  /**
   * The placeholder text to display when no selection has been made.
   */
  placeholder?: string;

  /**
   * An error message or boolean value indicating whether the input is in an error state.
   */
  error?: string | boolean;

  /**
   * Whether the multiselect is in a loading state.
   */
  loading?: boolean;

  /**
   * Whether the multiselect is disabled.
   */
  disabled?: boolean;

  /**
   * Wether the border should change color when focused
   */
  colorFocus?: boolean;

  /**
   * Whether the multiselect allows multiple selections.
   */
  multiple?: boolean;

  /**
   * The label to display for multiple selections, or a function that returns the label.
   */
  multipleLabel?: string | ((value: T[], labelProperty?: string) => string);

  /**
   * Used a fixed strategy to float the component
   */
  fixed?: boolean;

  /**
   * The properties to use for the value, label, sublabel, media, and icon of the options items.
   */
  properties?: {
    /**
     * The property to use for the value of the options.
     */
    value?: T extends object ? keyof T : string;

    /**
     * The property to use for the label of the options.
     */
    label?: T extends object ? keyof T : string;

    /**
     * The property to use for the sublabel of the options.
     */
    sublabel?: T extends object ? keyof T : string;

    /**
     * The property to use for the media of the options.
     */
    media?: T extends object ? keyof T : string;

    /**
     * The property to use for the icon of the options.
     */
    icon?: T extends object ? keyof T : string;
  };

  /**
   * The contrast of the listbox.
   *
   * @default 'default'
   */
  contrast?: "default" | "default-contrast" | "muted" | "muted-contrast";

  /**
   * The placement of the component via floating-ui.
   *
   * @default 'bottom-start'
   */
  placement?:
    | "top"
    | "top-start"
    | "top-end"
    | "right"
    | "right-start"
    | "right-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "left-start"
    | "left-end";

  /**
   * The radius of the multiselect.
   *
   * @default 'sm'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The size of the listbox.
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
     * CSS classes to apply to the button element.
     */
    button?: string | string[];

    /**
     * CSS classes to apply to the icon element.
     */
    icon?: string | string[];

    /**
     * CSS classes to apply to the error element.
     */
    error?: string | string[];
  };
};

const radiuses = {
  none: "",
  sm: "webeze-listbox-rounded-sm",
  md: "webeze-listbox-rounded-md",
  lg: "webeze-listbox-rounded-lg",
  full: "webeze-listbox-rounded-full",
};

const sizes = {
  sm: "webeze-listbox-sm",
  md: "webeze-listbox-md",
  lg: "webeze-listbox-lg",
  xl: "webeze-listbox-xl",
};

const contrasts = {
  default: "webeze-listbox-default",
  "default-contrast": "webeze-listbox-default-contrast",
  muted: "webeze-listbox-muted",
  "muted-contrast": "webeze-listbox-muted-contrast",
};

export const BaseListbox = forwardRef(function BaseListbox<T = string>(
  {
    icon = "",
    selectedIcon = "lucide:check",
    label = "",
    placeholder = "",
    error = false,
    multipleLabel = (value: T[], labelProperty?: string): string => {
      if (value.length === 0) {
        return "No elements selected";
      }

      if (value.length > 1) {
        return `${value.length} elements selected`;
      }

      return labelProperty && typeof value?.[0] === "object"
        ? String((value?.[0] as Record<string, unknown>)?.[labelProperty])
        : String(value?.[0]);
    },
    multiple = false,
    loading = false,
    disabled = false,
    fixed = false,
    ...props
  }: BaseListboxProps<T>,
  ref: Ref<HTMLDivElement>,
) {
  const [value, setValue] = useState(props.value);

  const contrast = useWebezeDefaultProperty(props, "BaseListbox", "contrast");
  const placement = useWebezeDefaultProperty(props, "BaseListbox", "placement");
  const rounded = useWebezeDefaultProperty(props, "BaseListbox", "rounded");
  const size = useWebezeDefaultProperty(props, "BaseListbox", "size");

  const handleSetValue = useCallback(
    (_value: T) => {
      if (props.stateModifiers?.prop && props.properties?.value) {
        const attr = props.properties.value;

        return props.items.find(
          (item) =>
            item &&
            typeof item === "object" &&
            attr in item &&
            (item as any)[attr] === _value,
        );
      }

      return _value;
    },
    [props.items, props.properties?.value, props.stateModifiers?.prop],
  );

  useEffect(() => {
    if (!props.value) {
      return;
    }

    const newValue = handleSetValue(props.value);

    if (newValue) {
      setValue(newValue);
    }
  }, [handleSetValue, props.value]);

  return (
    <div
      className={cn(
        "webeze-listbox",
        contrast && contrasts[contrast],
        size && sizes[size],
        rounded && radiuses[rounded],
        error && !loading && "webeze-listbox-error",
        loading && "webeze-listbox-loading",
        props.labelFloat && "webeze-listbox-label-float",
        icon && "webeze-has-icon",
        props.colorFocus && "webeze-listbox-focus",
        props.classes?.wrapper,
      )}
      ref={ref}
    >
      <Listbox
        // by={props.stateModifiers?.prop ? undefined : props.properties?.value}
        value={value}
        onChange={(_value): void => {
          const newValue = handleSetValue(_value);

          if (newValue) {
            props.onChange?.(newValue);
            setValue(newValue);
          }
        }}
        multiple={multiple}
        disabled={disabled}
      >
        {({ open }) => (
          <Float
            composable
            leave="transition duration-100 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            flip
            offset={5}
            strategy={fixed ? "fixed" : "absolute"}
            placement={placement}
            adaptiveWidth={fixed}
            zIndex="20"
          >
            {label && !props.labelFloat ? (
              <Listbox.Label
                className={cn("webeze-listbox-label", props.classes?.label)}
              >
                {label}
              </Listbox.Label>
            ) : (
              <></>
            )}

            <div className={cn("webeze-listbox-outer", props.classes?.outer)}>
              <Float.Reference>
                <div>
                  <Listbox.Button
                    // disabled={disabled}
                    className={cn("webeze-listbox-button", props.classes?.button)}
                  >
                    <div className="webeze-listbox-button-inner">
                      {icon && (
                        <BaseIconBox
                          size="xs"
                          rounded="sm"
                          color="none"
                          className={cn("webeze-icon-box", props.classes?.icon)}
                        >
                          <Icon icon={icon} className="webeze-icon-box-inner" />
                        </BaseIconBox>
                      )}

                      {Array.isArray(value) ? (
                        <>
                          {value.length === 0 && placeholder && (
                            <div
                              className={cn(
                                "webeze-listbox-placeholder",
                                loading && "select-none text-transparent",
                              )}
                            >
                              {placeholder}
                            </div>
                          )}

                          <div
                            className={cn(
                              "block truncate text-left",
                              loading && "select-none text-transparent",
                              value.length === 0 &&
                                "text-muted-300 dark:text-muted-500",
                            )}
                          >
                            {typeof multipleLabel === "function"
                              ? multipleLabel(
                                  value,
                                  props.properties?.label as string | undefined,
                                )
                              : multipleLabel}
                          </div>
                        </>
                      ) : value ? (
                        <>
                          {props.properties?.media &&
                            (value as any)[props.properties.media] && (
                              <BaseAvatar
                                src={(value as any)[props.properties.media]}
                                size={size === "sm" ? "xxs" : "xs"}
                                className={cn(
                                  "me-2",
                                  size === "sm" ? "-ms-1" : "-ms-2",
                                )}
                              />
                            )}
                          {props.properties?.icon &&
                            (value as any)[props.properties.icon] && (
                              <BaseIconBox
                                size="xs"
                                rounded="sm"
                                color="none"
                                className="-ms-2 me-2"
                              >
                                <Icon
                                  icon={(value as any)[props.properties.icon]}
                                  className="h-4 w-4"
                                />
                              </BaseIconBox>
                            )}
                          <div
                            className={cn(
                              "truncate text-left",
                              loading && "select-none text-transparent",
                            )}
                          >
                            {props.properties?.label
                              ? (value as any)[props.properties.label]
                              : props.properties?.value
                                ? (value as any)[props.properties.value]
                                : value}
                          </div>
                        </>
                      ) : (
                        <div
                          className={cn(
                            "webeze-listbox-placeholder",
                            loading && "select-none !text-transparent",
                          )}
                        >
                          {placeholder}
                        </div>
                      )}

                      <span className="webeze-listbox-chevron webeze-chevron">
                        <Icon
                          icon="lucide:chevron-down"
                          className={cn(
                            "webeze-listbox-chevron-inner",
                            open && "rotate-180",
                          )}
                        />
                      </span>
                    </div>
                  </Listbox.Button>

                  {label && props.labelFloat && (
                    <Listbox.Label
                      className={cn(
                        "webeze-label-float",
                        open && "webeze-label-float-active",
                      )}
                    >
                      {label}
                    </Listbox.Label>
                  )}

                  {loading && (
                    <div
                      className={cn(
                        "webeze-listbox-placeload webeze-loading-placeload",
                        (props.properties?.media && size === "sm") ||
                          (props.properties?.icon && size === "sm")
                          ? "ms-6"
                          : "",
                        (props.properties?.media && size === "md") ||
                          (props.properties?.icon && size === "md")
                          ? "ms-8"
                          : "",
                        (props.properties?.media && size === "lg") ||
                          (props.properties?.icon && size === "lg")
                          ? "ms-9"
                          : "",
                        (props.properties?.media && size === "xl") ||
                          (props.properties?.icon && size === "xl")
                          ? "ms-9"
                          : "",
                      )}
                    >
                      <BasePlaceload className="webeze-placeload !w-[70%]" />
                    </div>
                  )}
                </div>
              </Float.Reference>

              <Float.Content className={cn(!fixed && "w-full")}>
                <Listbox.Options className="webeze-listbox-options">
                  {props.items.map((item) => (
                    <Listbox.Option
                      key={
                        props.properties?.value
                          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            (item as any)[props.properties.value]
                          : item
                      }
                      value={
                        props.stateModifiers?.prop && props.properties?.value
                          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            (item as any)[props.properties.value]
                          : item
                      }
                    >
                      {({ active, selected }) => (
                        <li
                          className={cn(
                            "webeze-listbox-option group/webeze-listbox-option",
                            active && "webeze-active",
                          )}
                        >
                          <BaseListboxItem
                            value={{
                              // eslint-disable-next-line no-nested-ternary
                              value: props.properties?.label
                                ? (item as any)[props.properties?.label]
                                : props.properties?.value
                                  ? (item as any)[props.properties?.value]
                                  : (item as any),
                              label:
                                props.properties?.label &&
                                (item as any)[props.properties?.label],
                              sublabel:
                                props.properties?.sublabel &&
                                (item as any)[props.properties?.sublabel],
                              media:
                                props.properties?.media &&
                                (item as any)[props.properties?.media],
                              icon:
                                props.properties?.icon &&
                                (item as any)[props.properties?.icon],
                            }}
                            selectedIcon={selectedIcon}
                            active={active}
                            selected={selected}
                          />
                        </li>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Float.Content>

              {error && typeof error === "string" && (
                <BaseInputHelpText
                  color="danger"
                  className={cn(props.classes?.error)}
                >
                  {error}
                </BaseInputHelpText>
              )}
            </div>
          </Float>
        )}
      </Listbox>
    </div>
  );
});
