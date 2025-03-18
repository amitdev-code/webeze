// Breakpoint-based properties
export type Responsive<T> = {
    default?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
    "2xl"?: T;
};

// Layout type
export type Layout = {
    type?: Responsive<string>;
    flexBasis?: Responsive<string>;
    flexDirection?: Responsive<string>;
    flexWrap?: Responsive<string>;
    flex?: Responsive<string>;
    flexGrow?: Responsive<string>;
    flexShrink?: Responsive<string>;
    order?: Responsive<string>;
};

// Positioning type
export type Position = {
    type: "relative" | "absolute" | "fixed";
};

// Spacing export type (Margin & Padding)
export type Spacing = {
    margin?: {
        top?: Responsive<string>;
        left?: Responsive<string>;
        bottom?: Responsive<string>;
        right?: Responsive<string>;
    };
    padding?: {
        top?: Responsive<string>;
        left?: Responsive<string>;
        bottom?: Responsive<string>;
        right?: Responsive<string>;
    };
    lineHeight?: Responsive<string>;
};

// Size type
export type Size = {
    height?: Responsive<string>;
    width?: Responsive<string>;
    maxHeight?: Responsive<string>;
    maxWidth?: Responsive<string>;
    minHeight?: Responsive<string>;
    minWidth?: Responsive<string>;
};

// Typography type
export type Typography = {
    bold?: Responsive<string>;
    italic?: Responsive<string>;
    fontFamily?: Responsive<string>;
    color?: Responsive<string>;
    fontSize?: Responsive<string>;
    fontWeight?: Responsive<string>;
    fontStretch?: Responsive<string>;
    fontVariantNumeric?: Responsive<string>;
    letterSpacing?: Responsive<string>;
    lineClap?: Responsive<string>;
    lineHeight?: Responsive<string>;
    textAlign?: Responsive<string>;
    textDecorationLine?: Responsive<string>;
    textDecorationColor?: Responsive<string>;
    textDecorationStyle?: Responsive<string>;
    textDecorationThickness?: Responsive<string>;
    textUnderlineOffset?: Responsive<string>;
    textTransform?: Responsive<string>;
    textOverflow?: Responsive<string>;
    textWrap?: Responsive<string>;
    textIndent?: Responsive<string>;
    verticalAlign?: Responsive<string>;
    whiteSpace?: Responsive<string>;
    wordBreak?: Responsive<string>;
    hyphens?: Responsive<string>;
};

// Background type
export type Background = {
    color?: Responsive<string>;
    image?: Responsive<string>;
};

// Border type
export type Border = {
    width?: Responsive<string>;
    color?: Responsive<string>;
    direction?: {
        top?: Responsive<string>;
        left?: Responsive<string>;
        bottom?: Responsive<string>;
        right?: Responsive<string>;
    };
};

export type ElementType =
    | "div"
    | "span"
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "a"
    | "img"
    | "button"
    | "input"
    | "textarea"
    | "select"
    | "option"
    | "ul"
    | "ol"
    | "li"
    | "table"
    | "thead"
    | "tbody"
    | "tr"
    | "th"
    | "td"
    | "form"
    | "label"
    | "video"
    | "audio"
    | "iframe"
    | "section"
    | "article"
    | "aside"
    | "nav"
    | "header"
    | "footer"
    | "main";

interface BaseElement {
    id?: string;
    type: ElementType;
    className?: string;
    style?: {
        layout?: Layout;
        position?: Position;
        spacing?: Spacing;
        size?: Size;
        typography?: Typography;
        background?: Background;
        border?: Border;
    }
    action?: () => void; // Custom function for interactions
    redirect?: boolean;
    redirectURL?: string;
}

interface TextElement extends BaseElement {
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    content?: string;
}

interface AnchorElement extends BaseElement {
    type: "a";
    content?: string;
    href?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
}

interface ImageElement extends BaseElement {
    type: "img";
    src: string;
    alt?: string;
}

interface ButtonElement extends BaseElement {
    type: "button";
    content?: string;
}

interface InputElement extends BaseElement {
    type: "input";
    inputType?: "text" | "password" | "email" | "number" | "checkbox" | "radio";
    placeholder?: string;
}

interface SelectElement extends BaseElement {
    type: "select";
    options: { value: string; label: string }[];
}

interface ListElement extends BaseElement {
    type: "ul" | "ol";
    elements: ListItemElement[];
}

interface ListItemElement extends BaseElement {
    type: "li";
    content: string;
}

interface TableElement extends BaseElement {
    type: "table";
    elements: TableRowElement[];
}

interface TableRowElement extends BaseElement {
    type: "tr";
    elements: (TableHeaderElement | TableDataElement)[];
}

interface TableHeaderElement extends BaseElement {
    type: "th";
    content: string;
}

interface TableDataElement extends BaseElement {
    type: "td";
    content: string;
}

interface MediaElement extends BaseElement {
    type: "video" | "audio";
    src: string;
    controls?: boolean;
}

interface IframeElement extends BaseElement {
    type: "iframe";
    src: string;
    width?: string;
    height?: string;
}

interface ContainerElement extends BaseElement {
    type: "div" | "section" | "article" | "aside" | "nav" | "header" | "footer" | "main";
    elements: PageElement[];
}

type PageElement =
    | TextElement
    | AnchorElement
    | ImageElement
    | ButtonElement
    | InputElement
    | SelectElement
    | ListElement
    | ListItemElement
    | TableElement
    | TableRowElement
    | TableHeaderElement
    | TableDataElement
    | MediaElement
    | IframeElement
    | ContainerElement;

interface Page {
    id: string;
    elements: PageElement[];
}

interface NavigationItem {
    title: string;
    href: string;
    children?: NavigationItem[];
}

