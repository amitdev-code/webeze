import { forwardRef, useState } from "react";
import { IconChevronDown, IconPlus } from "../icons";
import { useWebezeDefaultProperty } from "../../assets/styles/ui_provider/Provider";
import { cn } from "../../assets/styles/classNameHelper";
import { BaseFocusLoop } from "./BaseFocusLoop";
import { BaseHeading } from "./BaseHeading";
import { BaseParagraph } from "./BaseParagraph";

type Item = {
  /**
   * The title of the accordion item.
   */
  title: string;
  /**
   * The content of the accordion item.
   */
  content: string;
};

type BaseAccordionProps = {
  /**
   *
   * The callback function that is called when an accordion item is opened.
   */
  onOpen?: (item: Item) => void;

  /**
   * The items to display in the accordion.
   */
  items: Item[];

  /**
   * Indexes of the items that should be opened by default.
   */
  openItems?: number[];

  /**
   * Whether if multiple elements in the accordion can be opened at same time or not.
   */
  exclusive?: boolean;

  /**
   * Defines the icon used for accordion item toggle action
   *
   * @default 'dot'
   */
  action?: "dot" | "chevron" | "plus";

  /**
   * Defines the color of the accordion
   *
   * @default 'default'
   */
  color?: "default" | "default-contrast" | "muted" | "muted-contrast";

  /**
   * Defines the color of the accordion dot
   *
   * @default 'primary'
   */
  dotColor?:
    | "default"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "dark"
    | "black";

  /**
   * Defines the radius of the accordion
   *
   * @default 'sm'
   */
  rounded?: "none" | "sm" | "md" | "lg";

  /**
   * Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[];

    /**
     * CSS classes to apply to the details element.
     */
    details?: string | string[];

    /**
     * CSS classes to apply to the summary element.
     */
    summary?: string | string[];

    /**
     * CSS classes to apply to the header element.
     */
    header?: string | string[];

    /**
     * CSS classes to apply to the content element.
     */
    content?: string | string[];
  };
};

const colors = {
  default: "webeze-accordion-default",
  "default-contrast": "webeze-accordion-default-contrast",
  muted: "webeze-accordion-muted",
  "muted-contrast": "webeze-accordion-muted-contrast",
};

const dotColors = {
  default: "webeze-dot-default",
  primary: "webeze-dot-primary",
  info: "webeze-dot-info",
  success: "webeze-dot-success",
  warning: "webeze-dot-warning",
  danger: "webeze-dot-danger",
  dark: "webeze-dot-dark",
  black: "webeze-dot-black",
};

const radiuses = {
  none: "",
  sm: "webeze-accordion-rounded-sm",
  md: "webeze-accordion-rounded-md",
  lg: "webeze-accordion-rounded-lg",
};

const actions = {
  dot: "webeze-accordion-dot",
  chevron: "webeze-accordion-chevron",
  plus: "webeze-accordion-plus",
};

export const BaseAccordion = forwardRef<HTMLDivElement, BaseAccordionProps>(
  function BaseAccordion(
    { openItems = [], items, exclusive = false, ...props },
    ref,
  ) {
    const action = useWebezeDefaultProperty(props, "BaseAccordion", "action");
    const color = useWebezeDefaultProperty(props, "BaseAccordion", "color");
    const dotColor = useWebezeDefaultProperty(props, "BaseAccordion", "dotColor");
    const rounded = useWebezeDefaultProperty(props, "BaseAccordion", "rounded");

    const [internalOpenItems, setInternalOpenItems] =
      useState<number[]>(openItems);

    function toggle(key: number) {
      const wasOpen = internalOpenItems.includes(key);

      if (exclusive) {
        setInternalOpenItems((prevOpenItems) =>
          prevOpenItems.splice(0, prevOpenItems.length),
        );

        if (!wasOpen) {
          props.onOpen?.(items[key]!);
          setInternalOpenItems((prevOpenItems) => [...prevOpenItems, key]);
        }

        return;
      }

      if (wasOpen) {
        setInternalOpenItems((prevOpenItems) =>
          prevOpenItems.splice(prevOpenItems.indexOf(key), 1),
        );
      } else {
        props.onOpen?.(items[key]!);
        setInternalOpenItems((prevOpenItems) => [...prevOpenItems, key]);
      }
    }

    return (
      <BaseFocusLoop ref={ref}>
        {items.map((item, key) => (
          <div
            key={key}
            className={cn(
              "webeze-accordion",
              action && actions[action],
              color && colors[color],
              dotColor && dotColors[dotColor],
              rounded && radiuses[rounded],
              props.classes?.wrapper,
            )}
          >
            <details
              open={internalOpenItems.includes(key)}
              className={cn("webeze-accordion-detail", props.classes?.details)}
            >
              <summary
                className={cn("webeze-accordion-summary", props.classes?.summary)}
                tabIndex={0}
                onClick={(e) => {
                  e.preventDefault();
                  toggle(key);
                }}
              >
                <div
                  className={cn("webeze-accordion-header", props.classes?.header)}
                >
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="semibold"
                    lead="none"
                    className="webeze-accordion-header-inner"
                  >
                    {item.title}
                  </BaseHeading>

                  {action === "dot" && <div className="webeze-accordion-dot" />}
                  {action === "chevron" && (
                    <div className="webeze-icon-outer">
                      <IconChevronDown className="webeze-chevron-icon" />
                    </div>
                  )}
                  {action === "plus" && (
                    <div className="webeze-icon-outer">
                      <IconPlus className="webeze-plus-icon" />
                    </div>
                  )}
                </div>
              </summary>
              <div
                className={cn("webeze-accordion-content", props.classes?.content)}
              >
                <BaseParagraph size="md" lead="tight">
                  {item.content}
                </BaseParagraph>
              </div>
            </details>
          </div>
        ))}
      </BaseFocusLoop>
    );
  },
);
