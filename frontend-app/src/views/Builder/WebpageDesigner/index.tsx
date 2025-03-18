import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BaseButtonClose } from "../../../component";
import WebezeBuilderHeader from "../../../layouts/builderLayout/layoutComponents/WebezeBuilderHeader";
import WebezeIconSidebar from "../../../layouts/builderLayout/layoutComponents/WebezeIconSidebar";
import WebezeMenuSidebar from "../../../layouts/builderLayout/layoutComponents/WebezeMenuSidebar";
import { RootState } from "../../../redux";
import {
  closeBuilderSidebar,
  closeElementDesignerSidebar,
  toggleElementDesignerSidebar,
} from "../../../redux/features/builder/builderSlice";
import BaseBuilderAccordion from "../../../component/builder/BaseBuilderAccordion";
import { Icon } from "@iconify/react/dist/iconify.js";

const WebpageDesigner = () => {
  const dispatch = useDispatch();

  const isBuilderSidebarOpen = useSelector(
    (state: RootState) => state.builder.isBuilderSidebarOpen
  );

  const isElementDesignerSidebarOpen = useSelector(
    (state: RootState) => state.builder.isElementDesignerSidebarOpen
  );


  // GET VIEW POINT MAX WIDTH

  const viewPortMaxWidth = () => {
    switch (selectedViewDeviceSize) {
      case "laptop":
        return "xl";
      case "tablet":
        return "lg";
      case "mobile":
        return "sm";
      default:
        return "xl";
    }
  }


  useEffect(() => {
    if (isElementDesignerSidebarOpen) {
      dispatch(closeBuilderSidebar());
    }
  }, [isElementDesignerSidebarOpen, dispatch]);

  useEffect(() => {
    if (isBuilderSidebarOpen) {
      dispatch(closeElementDesignerSidebar());
    }
  }, [isBuilderSidebarOpen, dispatch]);

  // Define a function to compile styles into a single class string
  const compileClassName = (style?: any) => {
    if (!style) return "";
    const { layout, position, spacing, size, typography, background, border } = style;
    const classes: string[] = [];

    if (layout) classes.push(layout.type);
    if (position) classes.push(position.type);

    const processStyles = (styles: any) => {
      const breakpoints = ["default", "sm", "md", "lg", "xl", "2xl"];
      breakpoints.forEach((bp) => {
        if (styles[bp]) {
          if (bp === "default") {
            classes.push(`${styles[bp]}`);
          } else {
            classes.push(`${bp}:${styles[bp]}`);
          }
        }
      });
    };

    if (spacing) Object.values(spacing).forEach(processStyles);
    if (size) Object.values(size).forEach(processStyles);
    if (typography) Object.values(typography).forEach(processStyles);
    if (background) Object.values(background).forEach(processStyles);
    if (border) Object.values(border).forEach(processStyles);

    return classes.join(" ");
  };
  // Function to compile builderJSON into renderJSON
  const compileRenderJSON = (builderJSON: any) => {
    return {
      ...builderJSON,
      elements: builderJSON.elements.map((el: any) => compileElement(el)),
    };
  };

  const compileElement = (element: any): any => {
    return {
      ...element,
      className: compileClassName(element.style),
      elements: element.elements ? element.elements.map((el: any) => compileElement(el)) : [],
    };
  };

  // Function to render elements recursively
  const renderElement = (element: any): JSX.Element | null => {
    const { id, type, elements, content, href, src, inputType, placeholder, options, action, redirect, redirectURL, className } = element;

    if (redirect && redirectURL) {
      return <a key={id} href={redirectURL} className={className}>{content}</a>;
    }

    switch (type) {
      case "div":
      case "section":
      case "article":
      case "aside":
      case "nav":
      case "header":
      case "footer":
      case "main":
        return <div key={id} className={className}>{elements?.map(renderElement)}</div>;
      case "h1": case "h2": case "h3": case "h4": case "h5": case "h6": case "p": case "span":
        return React.createElement(type, { key: id, className }, content);
      case "a":
        return <a key={id} href={href} className={className}>{content}</a>;
      case "img":
        return <img key={id} src={src} alt={content} className={className} />;
      case "button":
        return <button key={id} className={className} onClick={action}>{content}</button>;
      case "input":
        return <input key={id} type={inputType} placeholder={placeholder} className={className} />;
      case "select":
        return (
          <select key={id} className={className}>
            {options?.map((opt: any, idx: number) => (
              <option key={idx} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        );
      case "ul":
      case "ol":
        return React.createElement(type, { key: id, className }, elements?.map(renderElement));
      case "li":
        return <li key={id} className={className}>{content}</li>;
      case "table":
        return <table key={id} className={className}>{elements?.map(renderElement)}</table>;
      case "tr":
        return <tr key={id} className={className}>{elements?.map(renderElement)}</tr>;
      case "th":
      case "td":
        return React.createElement(type, { key: id, className }, content);
      case "video":
      case "audio":
        return React.createElement(type, { key: id, src, controls: true, className });
      case "iframe":
        return <iframe key={id} src={src} width={element.width} height={element.height} className={className}></iframe>;
      default:
        return null;
    }
  };


  const exampleBuilderJSON = {
    elements: [
      {
        id: "1",
        type: "div",
        style: { layout: { type: "flex" }, spacing: { padding: { lg: "4" } } },
        elements: [
          { id: "2", type: "h1", content: "Hello, World!", style: { typography: { fontSize: { default: "text-2xl", lg: "text-base" }, textDecorationLine: { default: "underline", lg: "no-underline" } } } },
        ]
      }
    ]
  };

  const [builderJSON, setBuilderJSON] = useState(exampleBuilderJSON);
  const [renderJSON, setRenderJSON] = useState<any>(compileRenderJSON(builderJSON));
  const [selectedViewDeviceSize, setSelectedViewDeviceSize] = useState('desktop');

  useEffect(() => {
    setRenderJSON(compileRenderJSON(builderJSON));
  }, [builderJSON]);


  return (
    <Fragment>
      <div className="bg-muted-100 dark:bg-muted-900 pb-20">
        <div className="pointer-events-none fixed start-0 top-0 z-[60] flex h-full xl:z-10">
          <WebezeIconSidebar />
          <WebezeMenuSidebar />
        </div>
        <div
          role="button"
          tabIndex={0}
          className={`${isBuilderSidebarOpen && "opacity-50 dark:opacity-75"
            } bg-muted-800 dark:bg-muted-900 fixed start-0 top-0 z-[59] block size-full transition-opacity duration-300 lg:hidden ${!isBuilderSidebarOpen && "opacity-0 pointer-events-none"
            }`}
        />
        <div
          className={`bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 ${!isBuilderSidebarOpen
            ? "xl:max-w-[calc(100%_-_80px)] xl:ms-[80px]"
            : "xl:px-10 xl:max-w-[calc(100%_-_400px)] xl:ms-[400px]"
            } ${!isElementDesignerSidebarOpen
              ? ""
              : "xl:max-w-[calc(100%_-480px)] xl:ms-[80px] xl:me-[480px]"
            }`}
        >
          <div className="mx-auto w-full">
            {/* LAYOUT HEADER */}
            <div className="fixed z-[3] top-0 right-0 w-[calc(100%_-_80px)] dark:border-muted-700 dark:bg-muted-800">
              <WebezeBuilderHeader setSelectedViewDeviceSize={setSelectedViewDeviceSize} selectedViewDeviceSize={selectedViewDeviceSize} />
            </div>
            <main className={`pt-[80px]`}>
              {/* MAIN WEBSITE DESIGNED HERE */}
              <div className="my-12 bg-white mx-auto">
                {renderJSON.elements.map(renderElement)}
              </div>
            </main>
            <div className="fixed right-0 bottom-0 top-[64px]">
              <div
                className={`border-muted-200 dark:border-muted-700 dark:bg-muted-600 pointer-events-auto relative z-10 h-[calc(100vh_-_80px)] w-[400px] border-r bg-white transition-all duration-300 ${!isElementDesignerSidebarOpen &&
                  "rtl:translate-x-[calc(100%_-_900px)] translate-x-[calc(-100%_+_900px)]"
                  }`}
              >
                <div className="flex h-full flex-col">
                  <div className="flex h-16 w-full items-center px-1 justify-between">
                    <div className="font-heading text-muted-700 text-lg font-light capitalize dark:text-white">
                      Element Designer
                    </div>
                    <BaseButtonClose
                      onClick={() => {
                        dispatch(toggleElementDesignerSidebar());
                      }}
                    />
                  </div>

                  <div className="webeze-slimscroll relative size-full overflow-y-auto">
                    <div className="px-6 pb-8">
                      <div className="flex flex-1 flex-col overflow-y-scroll">
                        <div className="flex items-center justify-between border-b border-gray-200 py-4 px-6">
                          <span className="text-sm font-semibold">
                            {" "}
                            Selector{" "}
                          </span>
                          <span className="text-sm text-gray-400">
                            Inheriting{" "}
                            <span className="text-sm font-medium text-gray-900">
                              2 Selectors
                            </span>
                          </span>
                        </div>
                        <div className="border-b border-gray-200 py-4 px-6">
                          <button className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5">
                            <div className="flex items-center gap-x-2">
                              <span className="rounded-lg bg-white p-1 shadow">
                                <Icon
                                  icon={"solar:laptop-broken"}
                                  className="h-5 w-5 stroke-current text-blue-600"
                                />
                              </span>
                              <span className="rounded-lg bg-blue-100 py-1 px-3 text-sm font-semibold text-blue-600 ">
                                H1 - hero_title
                              </span>
                            </div>
                            <Icon
                              icon={"lucide:chevron-down"}
                              className="h-5 w-5 stroke-current text-gray-400"
                            />
                          </button>
                          <div className="mt-2 text-xs text-gray-400">
                            1 on this page, 7 on other pages
                          </div>
                        </div>
                        <BaseBuilderAccordion title="layout">
                          <div className="flex items-center justify-between">
                            <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                              <Icon
                                icon={"solar:align-bottom-broken"}
                                className="h-5 w-5 stroke-current text-gray-400"
                              />
                            </button>
                            <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                              <Icon
                                icon={"solar:align-vertical-center-broken"}
                                className="h-5 w-5 stroke-current text-gray-400"
                              />
                            </button>
                            <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                              <Icon
                                icon={"solar:align-left-broken"}
                                className="h-5 w-5 stroke-current text-gray-400"
                              />
                            </button>
                            <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                              <Icon
                                icon={"solar:align-right-broken"}
                                className="h-5 w-5 stroke-current text-gray-400"
                              />
                            </button>
                            <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                              <Icon
                                icon={"solar:align-top-broken"}
                                className="h-5 w-5 stroke-current text-gray-400"
                              />
                            </button>
                            <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                              <Icon
                                icon={"tabler:layout-align-middle"}
                                className="h-5 w-5 stroke-current text-gray-400"
                              />
                            </button>
                          </div>
                        </BaseBuilderAccordion>
                        <BaseBuilderAccordion title="spacing">
                          <div className="relative flex items-center rounded-xl border-2 border-dashed border-gray-200 py-10 px-12">
                            <span className="absolute top-2 left-2 text-[10px] uppercase text-gray-400">
                              margin
                            </span>
                            <span className="absolute bottom-12 right-14 text-[10px] uppercase text-gray-400">
                              padding
                            </span>
                            <div className="relative w-full">
                              <div className="absolute inset-x-0 top-0 flex -translate-y-1/2 flex-col items-center gap-2">
                                <input
                                  className="h-4 w-4 text-center text-sm outline-none"
                                  defaultValue={20}
                                />
                                <div className="h-2 w-2 border-2 border-blue-600 bg-white" />
                                <input
                                  className="h-4 w-4 text-center text-sm outline-none"
                                  defaultValue={0}
                                />
                              </div>
                              <div className="absolute inset-y-0 right-0 flex translate-x-1/2 items-center gap-2">
                                <input
                                  className="h-4 w-4 text-center text-sm outline-none"
                                  defaultValue={0}
                                />
                                <div className="h-2 w-2 border-2 border-blue-600 bg-white" />
                                <input
                                  className="h-4 w-4 text-center text-sm outline-none"
                                  defaultValue={0}
                                />
                              </div>
                              <div className="absolute inset-x-0 bottom-0 flex translate-y-1/2 flex-col items-center gap-2">
                                <input
                                  className="h-4 w-4 text-center text-sm outline-none"
                                  defaultValue={0}
                                />
                                <div className="h-2 w-2 border-2 border-blue-600 bg-white" />
                                <input
                                  className="h-4 w-4 text-center text-sm outline-none"
                                  defaultValue={20}
                                />
                              </div>
                              <div className="absolute inset-y-0 left-0 flex -translate-x-1/2 items-center gap-2">
                                <input
                                  className="h-4 w-4 text-center text-sm outline-none"
                                  defaultValue={0}
                                />
                                <div className="h-2 w-2 border-2 border-blue-600 bg-white" />
                                <input
                                  className="h-4 w-4 text-center text-sm outline-none"
                                  defaultValue={0}
                                />
                              </div>
                              <div className="h-24 w-full rounded-xl border-2 border-blue-600 px-10 py-8">
                                <div className="h-full w-full rounded bg-gray-200"></div>
                              </div>
                            </div>
                          </div>
                        </BaseBuilderAccordion>
                        <BaseBuilderAccordion title="size">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="relative">
                                <div className="absolute inset-y-0 flex items-center px-4">
                                  <span className="text-sm text-gray-400">
                                    W
                                  </span>
                                </div>
                                <input
                                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                                  type="text"
                                  defaultValue="Auto"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="relative">
                                <div className="absolute inset-y-0 flex items-center px-4">
                                  <span className="text-sm text-gray-400">
                                    H
                                  </span>
                                </div>
                                <input
                                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                                  type="text"
                                  defaultValue="Auto"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="relative">
                                <div className="absolute inset-y-0 flex items-center px-4">
                                  <span className="text-sm text-gray-400">
                                    Min W
                                  </span>
                                </div>
                                <input
                                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                                  type="text"
                                  defaultValue="Auto"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="relative">
                                <div className="absolute inset-y-0 flex items-center px-4">
                                  <span className="text-sm text-gray-400">
                                    Max W
                                  </span>
                                </div>
                                <input
                                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                                  type="text"
                                  defaultValue="Auto"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="relative">
                                <div className="absolute inset-y-0 flex items-center px-4">
                                  <span className="text-sm text-gray-400">
                                    Max W
                                  </span>
                                </div>
                                <input
                                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                                  type="text"
                                  defaultValue="Auto"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="relative">
                                <div className="absolute inset-y-0 flex items-center px-4">
                                  <span className="text-sm text-gray-400">
                                    Max H
                                  </span>
                                </div>
                                <input
                                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                                  type="text"
                                  defaultValue="Auto"
                                />
                              </div>
                            </div>
                            <div className="col-span-2">
                              <button className="relative w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-4 pr-10 text-right">
                                <div className="absolute inset-y-0 flex items-center px-4">
                                  <span className="text-sm text-gray-400">
                                    Overflow
                                  </span>
                                </div>
                                <span className="flex items-center justify-end gap-x-2 text-sm font-semibold leading-6">
                                  <Icon
                                    icon={"solar:eye-broken"}
                                    className="h-5 w-5 stroke-current text-gray-400"
                                  />
                                  <span>Invisible</span>
                                </span>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4">
                                  <Icon
                                    icon={"lucide:chevron-down"}
                                    className="h-5 w-5 stroke-current text-gray-400"
                                  />
                                </div>
                              </button>
                            </div>
                          </div>
                        </BaseBuilderAccordion>
                        <BaseBuilderAccordion title="typography"></BaseBuilderAccordion>
                        <BaseBuilderAccordion title="position"></BaseBuilderAccordion>
                        <BaseBuilderAccordion title="border"></BaseBuilderAccordion>
                        <BaseBuilderAccordion title="background"></BaseBuilderAccordion>
                      </div>
                    </div>
                    <div className="dark:from-muted-800 pointer-events-none fixed bottom-0 z-10 h-10 w-[212px] bg-gradient-to-t from-white to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WebpageDesigner;
