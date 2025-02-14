import React, { Fragment } from "react";
import { WebezeUIProvider } from "../../assets/styles/ui_provider/Provider";
import { BaseThemeToggle } from "../../component";
import WebezeLogo from "../../component/icons/WebezeLogo";

const DashboardLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <Fragment>
      <WebezeUIProvider>
        <div className="bg-muted-100 dark:bg-muted-900 pb-20">
          <div className="pointer-events-none fixed start-0 top-0 z-[60] flex h-full xl:z-10">
            <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 pointer-events-auto relative z-20 flex h-full w-[80px] flex-col border-r bg-white transition-all duration-300">
              <div className="flex h-16 w-full items-center justify-center">
                <a href="/" className="flex items-center justify-center">
                  <WebezeLogo />
                </a>
              </div>
              <div>
                <div className="flex h-16 w-full items-center justify-center">
                  <span />
                  <button
                    type="button"
                    className="bg-primary-100 text-primary-500 dark:bg-primary-500/10 flex size-12 items-center justify-center rounded-2xl transition-colors duration-300"
                    data-webeze-tooltip-position="right"
                    data-webeze-tooltip="Dashboards"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="icon w-5 h-5"
                      style={{}}
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                      data-v-b4402e20=""
                    >
                      <g fill="currentColor">
                        <path
                          d="M88 48v160H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8Z"
                          opacity=".2"
                        />
                        <path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M40 152h16a8 8 0 0 0 0-16H40v-16h16a8 8 0 0 0 0-16H40V88h16a8 8 0 0 0 0-16H40V56h40v144H40Zm176 48H96V56h120z" />
                      </g>
                    </svg>
                  </button>
                </div>
                <div className="flex h-16 w-full items-center justify-center">
                  <span />
                  <button
                    type="button"
                    className="text-muted-400 flex size-12 items-center justify-center rounded-2xl transition-colors duration-300"
                    data-webeze-tooltip-position="right"
                    data-webeze-tooltip="Layouts"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="icon w-5 h-5"
                      style={{}}
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                      data-v-b4402e20=""
                    >
                      <g fill="currentColor">
                        <path
                          d="M224 56v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8"
                          opacity=".2"
                        />
                        <path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H40V56h176zM80 84a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12" />
                      </g>
                    </svg>
                  </button>
                </div>
                <div className="flex h-16 w-full items-center justify-center">
                  <span />
                  <a
                    href="/dashboards/messaging"
                    className="text-muted-400 flex size-12 items-center justify-center rounded-2xl transition-colors duration-300"
                    data-webeze-tooltip-position="right"
                    data-webeze-tooltip="Chat"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="icon w-5 h-5"
                      style={{}}
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                      data-v-b4402e20=""
                    >
                      <g fill="currentColor">
                        <path
                          d="M224 128a96 96 0 0 1-144.07 83.11l-37.39 12.47a8 8 0 0 1-10.12-10.12l12.47-37.39A96 96 0 1 1 224 128"
                          opacity=".2"
                        />
                        <path d="M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.67L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216" />
                      </g>
                    </svg>
                  </a>
                </div>
                <div className="flex h-16 w-full items-center justify-center">
                  <span />
                  <button
                    type="button"
                    className="text-muted-400 flex size-12 items-center justify-center rounded-2xl transition-colors duration-300"
                    data-webeze-tooltip-position="right"
                    data-webeze-tooltip="Documentation"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="icon w-5 h-5"
                      style={{}}
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                      data-v-b4402e20=""
                    >
                      <g fill="currentColor">
                        <path
                          d="M208 56v144a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8"
                          opacity=".2"
                        />
                        <path d="M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 80h-64V56h64Zm-80-64v64H56V56Zm-64 80h64v64H56Zm144 64h-64v-64h64z" />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-auto">
                <div className="flex h-16 w-full items-center justify-center">
                  <span />
                  <button
                    type="button"
                    className="text-muted-400 flex size-12 items-center justify-center rounded-2xl transition-colors duration-300"
                    data-webeze-tooltip-position="right"
                    data-webeze-tooltip="Customize"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="icon w-5 h-5"
                      style={{}}
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                      data-v-b4402e20=""
                    >
                      <g fill="currentColor">
                        <path
                          d="M208 144a80 80 0 0 1-160 0a101 101 0 0 1 1.3-16h157.4a101 101 0 0 1 1.3 16"
                          opacity=".2"
                        />
                        <path d="M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M128 26c14.16 11.1 56.86 47.74 68.84 94H59.16C71.14 73.76 113.84 37.12 128 26m0 190a72.08 72.08 0 0 1-72-72q0-4 .36-8h143.28q.36 4 .36 8a72.08 72.08 0 0 1-72 72" />
                      </g>
                    </svg>
                  </button>
                </div>
                <div className="flex h-16 w-full items-center justify-center">
                  <span />
                  <button
                    type="button"
                    className="text-muted-400 flex size-12 items-center justify-center rounded-2xl transition-colors duration-300"
                    data-webeze-tooltip-position="right"
                    data-webeze-tooltip="Search"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="icon w-5 h-5"
                      style={{}}
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                      data-v-b4402e20=""
                    >
                      <g fill="currentColor">
                        <path
                          d="M192 112a80 80 0 1 1-80-80a80 80 0 0 1 80 80"
                          opacity=".2"
                        />
                        <path d="m229.66 218.34l-50.06-50.06a88.21 88.21 0 1 0-11.32 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72" />
                      </g>
                    </svg>
                  </button>
                </div>
                <div className="flex h-16 w-full items-center justify-center">
                  <span />
                  <a
                    href="/layouts/settings"
                    className="text-muted-400 flex size-12 items-center justify-center rounded-2xl transition-colors duration-300"
                    data-webeze-tooltip-position="right"
                    data-webeze-tooltip="Settings"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="icon w-5 h-5"
                      style={{}}
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                      data-v-b4402e20=""
                    >
                      <g fill="currentColor">
                        <path
                          d="m230.1 108.76l-31.85-18.14c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.6 104.6 0 0 0 162 32l-32 17.89h-4L94 32a104.6 104.6 0 0 0-34.11 19.25l-.16 36c-.7 1.12-1.37 2.26-2 3.41l-31.84 18.1a99.2 99.2 0 0 0 0 38.46l31.85 18.14c.64 1.16 1.31 2.29 2 3.41l.12 36A104.6 104.6 0 0 0 94 224l32-17.87h4L162 224a104.6 104.6 0 0 0 34.08-19.25l.16-36c.7-1.12 1.37-2.26 2-3.41l31.84-18.1a99.2 99.2 0 0 0 .02-38.48M128 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40"
                          opacity=".2"
                        />
                        <path d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m109.94-52.79a8 8 0 0 0-3.89-5.4l-29.83-17l-.12-33.62a8 8 0 0 0-2.83-6.08a111.9 111.9 0 0 0-36.72-20.67a8 8 0 0 0-6.46.59L128 41.85L97.88 25a8 8 0 0 0-6.47-.6a111.9 111.9 0 0 0-36.68 20.75a8 8 0 0 0-2.83 6.07l-.15 33.65l-29.83 17a8 8 0 0 0-3.89 5.4a106.5 106.5 0 0 0 0 41.56a8 8 0 0 0 3.89 5.4l29.83 17l.12 33.63a8 8 0 0 0 2.83 6.08a111.9 111.9 0 0 0 36.72 20.67a8 8 0 0 0 6.46-.59L128 214.15L158.12 231a7.9 7.9 0 0 0 3.9 1a8.1 8.1 0 0 0 2.57-.42a112.1 112.1 0 0 0 36.68-20.73a8 8 0 0 0 2.83-6.07l.15-33.65l29.83-17a8 8 0 0 0 3.89-5.4a106.5 106.5 0 0 0-.03-41.52m-15 34.91l-28.57 16.25a8 8 0 0 0-3 3c-.58 1-1.19 2.06-1.81 3.06a7.94 7.94 0 0 0-1.22 4.21l-.15 32.25a95.9 95.9 0 0 1-25.37 14.3L134 199.13a8 8 0 0 0-3.91-1h-3.83a8.1 8.1 0 0 0-4.1 1l-28.84 16.1A96 96 0 0 1 67.88 201l-.11-32.2a8 8 0 0 0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.1 8.1 0 0 0-3-3.06l-28.6-16.29a90.5 90.5 0 0 1 0-28.26l28.52-16.28a8 8 0 0 0 3-3c.58-1 1.19-2.06 1.81-3.06a7.94 7.94 0 0 0 1.22-4.21l.15-32.25a95.9 95.9 0 0 1 25.37-14.3L122 56.87a8 8 0 0 0 4.1 1h3.64a8 8 0 0 0 4.1-1l28.84-16.1A96 96 0 0 1 188.12 55l.11 32.2a8 8 0 0 0 1.22 4.22c.62 1 1.23 2 1.8 3.06a8.1 8.1 0 0 0 3 3.06l28.6 16.29a90.5 90.5 0 0 1 .05 28.29Z" />
                      </g>
                    </svg>
                  </a>
                </div>
                <div className="flex h-16 w-full items-center justify-center">
                  <span />
                  <div className="group inline-flex items-center justify-center text-right">
                    <div
                      data-headlessui-state=""
                      className="relative z-20 size-10 text-start"
                    >
                      <button
                        className="group-hover:ring-primary-500 dark:ring-offset-muted-800 inline-flex size-10 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
                        id="headlessui-menu-button-2228"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-headlessui-state=""
                        type="button"
                      >
                        <div className="relative inline-flex size-10 items-center justify-center rounded-full">
                          <img
                            src="/img/avatars/2.svg"
                            className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                            alt=""
                          />
                        </div>
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 pointer-events-auto relative z-10 h-full w-[220px] border-r bg-white transition-all duration-300">

              <div className="flex h-screen flex-col">

                <div className="flex h-16 w-full items-center px-6">
                  <div className="font-heading text-muted-700 text-lg font-light capitalize dark:text-white">
                    Dashboards
                  </div>
                  <button
                    type="button"
                    className="text-muted-400 hover:bg-muted-100 hover:text-muted-600 ms-auto flex size-10 items-center justify-center rounded-full transition-colors duration-300 xl:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="icon size-6"
                      style={{}}
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      data-v-b4402e20=""
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m15 18l-6-6l6-6"
                      />
                    </svg>
                  </button>
                </div>

                <div className="webeze-slimscroll relative size-full overflow-y-auto">
                  <div className="px-6 pb-8">

                    <ul>


                      <li className="group mb-1 min-h-8">
                        <a
                          href="#"
                          className="webeze-focus relative top-0.5 flex items-center"
                        >
                          <span className="text-muted-400 group-hover:text-primary-500 relative inline-flex items-center gap-2 font-sans text-sm transition-colors duration-300">

                            <span>Personal</span>
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="icon text-muted-400 ms-auto block size-4 transition-transform duration-300 group-focus-within:rotate-180"
                            style={{}}
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            data-v-b4402e20=""
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="m6 9l6 6l6-6"
                            />
                          </svg>
                        </a>
                        <div className="max-h-0 overflow-hidden opacity-0 group-focus-within:max-h-max group-focus-within:overflow-visible group-focus-within:opacity-100 transition-all duration-150">
                          <ul className="py-2">

                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M208 88v48a88 88 0 0 1-51.3 80H83.3A88 88 0 0 1 32 136V88Z"
                                      opacity=".2"
                                    />
                                    <path d="M80 56V24a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0m40 8a8 8 0 0 0 8-8V24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 0a8 8 0 0 0 8-8V24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m96 56v8a40 40 0 0 1-37.51 39.91a96.6 96.6 0 0 1-27 40.09H208a8 8 0 0 1 0 16H32a8 8 0 0 1 0-16h24.54A96.3 96.3 0 0 1 24 136V88a8 8 0 0 1 8-8h176a40 40 0 0 1 40 40m-48-24H40v40a80.27 80.27 0 0 0 45.12 72h69.76A80.27 80.27 0 0 0 200 136Zm32 24a24 24 0 0 0-16-22.62V136a96 96 0 0 1-1.2 15a24 24 0 0 0 17.2-23Z" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Personal V1</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/personal-2"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M96 37.5v72l-62.4 36A96 96 0 0 1 96 37.5"
                                      opacity=".2"
                                    />
                                    <path d="M100 116.43a8 8 0 0 0 4-6.93v-72A8 8 0 0 0 93.34 30a104.06 104.06 0 0 0-67.61 117a8 8 0 0 0 4.52 5.81a7.9 7.9 0 0 0 3.35.74a8 8 0 0 0 4-1.07ZM88 49.62v55.26l-47.88 27.63C40 131 40 129.48 40 128a88.12 88.12 0 0 1 48-78.38M128 24a8 8 0 0 0-8 8v91.82l-78.81 45.91a8 8 0 0 0-2.87 11A104 104 0 1 0 128 24m0 192a88.47 88.47 0 0 1-71.49-36.68l75.52-44a8 8 0 0 0 4-6.92V40.36A88 88 0 0 1 128 216" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Personal V2</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/personal-3"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M232 116a60 60 0 0 1-60 60h-12v40H96v-80H84a60 60 0 0 1-60-60a20 20 0 0 1 20-20a20 20 0 0 1 20 20a20 20 0 0 0 20 20h12V56a32 32 0 0 1 32-32a32 32 0 0 1 32 32v80h12a20 20 0 0 0 20-20a20 20 0 0 1 20-20a20 20 0 0 1 20 20"
                                      opacity=".2"
                                    />
                                    <path d="M216 208h-48v-24h4a68.07 68.07 0 0 0 68-68a28 28 0 0 0-56 0a12 12 0 0 1-12 12h-4V56a40 40 0 0 0-80 0v32h-4a12 12 0 0 1-12-12a28 28 0 0 0-56 0a68.07 68.07 0 0 0 68 68h4v64H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M96 128H84a52.06 52.06 0 0 1-52-52a12 12 0 0 1 24 0a28 28 0 0 0 28 28h12a8 8 0 0 0 8-8V56a24 24 0 0 1 48 0v80a8 8 0 0 0 8 8h12a28 28 0 0 0 28-28a12 12 0 0 1 24 0a52.06 52.06 0 0 1-52 52h-12a8 8 0 0 0-8 8v32h-48v-72a8 8 0 0 0-8-8" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Personal 4</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/balance"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M160 128a32 32 0 1 1-32-32a32 32 0 0 1 32 32m40-64a48.85 48.85 0 0 0 40 40V64Zm0 128h40v-40a48.85 48.85 0 0 0-40 40M16 152v40h40a48.85 48.85 0 0 0-40-40m0-48a48.85 48.85 0 0 0 40-40H16Z"
                                      opacity=".2"
                                    />
                                    <path d="M128 88a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m112-96H16a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h224a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8M24 72h21.37A40.8 40.8 0 0 1 24 93.37Zm0 112v-21.37A40.8 40.8 0 0 1 45.37 184Zm208 0h-21.37A40.8 40.8 0 0 1 232 162.63Zm0-38.35A56.78 56.78 0 0 0 193.65 184H62.35A56.78 56.78 0 0 0 24 145.65v-35.3A56.78 56.78 0 0 0 62.35 72h131.3A56.78 56.78 0 0 0 232 110.35Zm0-52.28A40.8 40.8 0 0 1 210.63 72H232Z" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Personal balance</span>
                              </a>
                            </li>

                          </ul>
                        </div>
                      </li>


                      <li className="group mb-1 min-h-8">
                        <a
                          href="#"
                          className="webeze-focus relative top-0.5 flex items-center"
                        >
                          <span className="text-muted-400 group-hover:text-primary-500 relative inline-flex items-center gap-2 font-sans text-sm transition-colors duration-300">

                            <span>Finance</span>
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="icon text-muted-400 ms-auto block size-4 transition-transform duration-300 group-focus-within:rotate-180"
                            style={{}}
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            data-v-b4402e20=""
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="m6 9l6 6l6-6"
                            />
                          </svg>
                        </a>
                        <div className="max-h-0 overflow-hidden opacity-0 group-focus-within:max-h-max group-focus-within:overflow-visible group-focus-within:opacity-100 transition-all duration-150">
                          <ul className="py-2">

                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/analytics"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M232 152v24a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8v-22.87C24 95.65 70.15 48.2 127.63 48A104 104 0 0 1 232 152"
                                      opacity=".2"
                                    />
                                    <path d="M207.06 72.67A111.24 111.24 0 0 0 128 40h-.4C66.07 40.21 16 91 16 153.13V176a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-24a111.25 111.25 0 0 0-32.94-79.33M224 176H119.71l54.76-75.3a8 8 0 0 0-12.94-9.42L99.92 176H32v-22.87c0-3.08.15-6.12.43-9.13H56a8 8 0 0 0 0-16H35.27c10.32-38.86 44-68.24 84.73-71.66V80a8 8 0 0 0 16 0V56.33A96.14 96.14 0 0 1 221 128h-21a8 8 0 0 0 0 16h23.67c.21 2.65.33 5.31.33 8Z" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">
                                  Analytics dashboard
                                </span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/overview"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path d="M208 72v112H48V72Z" opacity=".2" />
                                    <path d="M88 144v-16a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0m40 8a8 8 0 0 0 8-8v-24a8 8 0 0 0-16 0v24a8 8 0 0 0 8 8m32 0a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m56-72v96h8a8 8 0 0 1 0 16h-88v17.38a24 24 0 1 1-16 0V192H32a8 8 0 0 1 0-16h8V80a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16m-80 152a8 8 0 1 0-8 8a8 8 0 0 0 8-8M40 64h176V48H40Zm160 16H56v96h144Z" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">
                                  Overview dashboard
                                </span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/quickview"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M224 56v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8"
                                      opacity=".2"
                                    />
                                    <path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H40V56h176zM80 84a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">
                                  Quickview dashboard
                                </span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/stocks"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M232 104c0 24-40 48-104 48S24 128 24 104s40-48 104-48s104 24 104 48"
                                      opacity=".2"
                                    />
                                    <path d="M207.58 63.84C186.85 53.48 159.33 48 128 48s-58.85 5.48-79.58 15.84S16 88.78 16 104v48c0 15.22 11.82 29.85 32.42 40.16S96.67 208 128 208s58.85-5.48 79.58-15.84S240 167.22 240 152v-48c0-15.22-11.82-29.85-32.42-40.16M128 64c62.64 0 96 23.23 96 40s-33.36 40-96 40s-96-23.23-96-40s33.36-40 96-40m-8 95.86v32c-19-.62-35-3.42-48-7.49v-31.32a203.4 203.4 0 0 0 48 6.81m16 0a203.4 203.4 0 0 0 48-6.81v31.31c-13 4.07-29 6.87-48 7.49ZM32 152v-18.47a83 83 0 0 0 16.42 10.63c2.43 1.21 5 2.35 7.58 3.43V178c-15.83-7.84-24-17.71-24-26m168 26v-30.41c2.61-1.08 5.15-2.22 7.58-3.43A83 83 0 0 0 224 133.53V152c0 8.29-8.17 18.16-24 26" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Stock dashboard</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/trading"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="m215.88 56.39l-29.75 169a8 8 0 0 1-9.27 6.49l-130.25-23a8 8 0 0 1-6.49-9.26l29.75-169a8 8 0 0 1 9.27-6.49l130.25 23a8 8 0 0 1 6.49 9.26"
                                      opacity=".2"
                                    />
                                    <path d="m210.78 39.25l-130.25-23A16 16 0 0 0 62 29.23l-29.75 169a16 16 0 0 0 13 18.53l130.25 23a16 16 0 0 0 18.54-13l29.75-169a16 16 0 0 0-13.01-18.51M178.26 224L48 201L77.75 32L208 55ZM89.34 58.42a8 8 0 0 1 9.27-6.48l83 14.65a8 8 0 0 1-1.39 15.88a8.4 8.4 0 0 1-1.4-.12l-83-14.66a8 8 0 0 1-6.48-9.27M83.8 89.94a8 8 0 0 1 9.27-6.49l83 14.66a8 8 0 0 1-1.4 15.89a7.6 7.6 0 0 1-1.41-.13l-83-14.65a8 8 0 0 1-6.46-9.28m-5.55 31.51a8 8 0 0 1 9.27-6.45l41.48 7.29a8 8 0 0 1-1.38 15.88a8.3 8.3 0 0 1-1.4-.12l-41.5-7.33a8 8 0 0 1-6.47-9.27" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Trading dashboard</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/sales"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="m224 64l-12.16 66.86A16 16 0 0 1 196.1 144H70.55L56 64Z"
                                      opacity=".2"
                                    />
                                    <path d="M230.14 58.87A8 8 0 0 0 224 56H62.68L56.6 22.57A8 8 0 0 0 48.73 16H24a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H91.17a8 8 0 0 1-7.87-6.57L80.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56M104 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m4-74.57a8 8 0 0 1-7.9 6.57H77.22L65.59 72h148.82Z" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Sales dashboard</span>
                              </a>
                            </li>

                          </ul>
                        </div>
                      </li>


                      <li className="group mb-1 min-h-8">
                        <a
                          href="#"
                          className="webeze-focus relative top-0.5 flex items-center"
                        >
                          <span className="text-muted-400 group-hover:text-primary-500 relative inline-flex items-center gap-2 font-sans text-sm transition-colors duration-300">
                            <span className="bg-primary-500 absolute -start-3 top-2 size-1 rounded-full" />
                            <span>Banking</span>
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="icon text-muted-400 ms-auto block size-4 transition-transform duration-300 rotate-180"
                            style={{}}
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            data-v-b4402e20=""
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="m6 9l6 6l6-6"
                            />
                          </svg>
                        </a>
                        <div className="max-h-max opacity-100 transition-all duration-150">
                          <ul className="py-2">

                            <li className="flex h-8 w-full items-center">
                              <a
                                aria-current="page"
                                href="/dashboards/banking-1"
                                className="router-link-active router-link-exact-active text-primary-500 webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path d="M232 96H24l104-64Z" opacity=".2" />
                                    <path d="M24 104h24v64H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16h-16v-64h24a8 8 0 0 0 4.19-14.81l-104-64a8 8 0 0 0-8.38 0l-104 64A8 8 0 0 0 24 104m40 0h32v64H64Zm80 0v64h-32v-64Zm48 64h-32v-64h32ZM128 41.39L203.74 88H52.26ZM248 208a8 8 0 0 1-8 8H16a8 8 0 0 1 0-16h224a8 8 0 0 1 8 8" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Banking V1</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/banking-2"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path d="M232 96H24l104-64Z" opacity=".2" />
                                    <path d="M24 104h24v64H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16h-16v-64h24a8 8 0 0 0 4.19-14.81l-104-64a8 8 0 0 0-8.38 0l-104 64A8 8 0 0 0 24 104m40 0h32v64H64Zm80 0v64h-32v-64Zm48 64h-32v-64h32ZM128 41.39L203.74 88H52.26ZM248 208a8 8 0 0 1-8 8H16a8 8 0 0 1 0-16h224a8 8 0 0 1 8 8" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Banking V2</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/banking-3"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path d="M232 96H24l104-64Z" opacity=".2" />
                                    <path d="M24 104h24v64H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16h-16v-64h24a8 8 0 0 0 4.19-14.81l-104-64a8 8 0 0 0-8.38 0l-104 64A8 8 0 0 0 24 104m40 0h32v64H64Zm80 0v64h-32v-64Zm48 64h-32v-64h32ZM128 41.39L203.74 88H52.26ZM248 208a8 8 0 0 1-8 8H16a8 8 0 0 1 0-16h224a8 8 0 0 1 8 8" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Banking V3</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/banking-4"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path d="M232 96H24l104-64Z" opacity=".2" />
                                    <path d="M24 104h24v64H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16h-16v-64h24a8 8 0 0 0 4.19-14.81l-104-64a8 8 0 0 0-8.38 0l-104 64A8 8 0 0 0 24 104m40 0h32v64H64Zm80 0v64h-32v-64Zm48 64h-32v-64h32ZM128 41.39L203.74 88H52.26ZM248 208a8 8 0 0 1-8 8H16a8 8 0 0 1 0-16h224a8 8 0 0 1 8 8" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Banking V4</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/banking-5"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path d="M232 96H24l104-64Z" opacity=".2" />
                                    <path d="M24 104h24v64H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16h-16v-64h24a8 8 0 0 0 4.19-14.81l-104-64a8 8 0 0 0-8.38 0l-104 64A8 8 0 0 0 24 104m40 0h32v64H64Zm80 0v64h-32v-64Zm48 64h-32v-64h32ZM128 41.39L203.74 88H52.26ZM248 208a8 8 0 0 1-8 8H16a8 8 0 0 1 0-16h224a8 8 0 0 1 8 8" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Banking V5</span>
                              </a>
                            </li>

                          </ul>
                        </div>
                      </li>


                      <li className="group mb-1 min-h-8">
                        <a
                          href="#"
                          className="webeze-focus relative top-0.5 flex items-center"
                        >
                          <span className="text-muted-400 group-hover:text-primary-500 relative inline-flex items-center gap-2 font-sans text-sm transition-colors duration-300">

                            <span>Business</span>
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="icon text-muted-400 ms-auto block size-4 transition-transform duration-300 group-focus-within:rotate-180"
                            style={{}}
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            data-v-b4402e20=""
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="m6 9l6 6l6-6"
                            />
                          </svg>
                        </a>
                        <div className="max-h-0 overflow-hidden opacity-0 group-focus-within:max-h-max group-focus-within:overflow-visible group-focus-within:opacity-100 transition-all duration-150">
                          <ul className="py-2">

                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/flights"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M152 152v32l16 16v32l-40-16l-40 16v-32l16-16v-32l-80 16v-32l80-40V48a24 24 0 0 1 48 0v48l80 40v32Z"
                                      opacity=".2"
                                    />
                                    <path d="M235.58 128.84L160 91.06V48a32 32 0 0 0-64 0v43.06l-75.58 37.78A8 8 0 0 0 16 136v32a8 8 0 0 0 9.57 7.84L96 161.76v18.93l-13.66 13.65A8 8 0 0 0 80 200v32a8 8 0 0 0 11 7.43l37-14.81l37 14.81a8 8 0 0 0 11-7.43v-32a8 8 0 0 0-2.34-5.66L160 180.69v-18.93l70.43 14.08A8 8 0 0 0 240 168v-32a8 8 0 0 0-4.42-7.16M224 158.24l-70.43-14.08A8 8 0 0 0 144 152v32a8 8 0 0 0 2.34 5.66L160 203.31v16.87l-29-11.61a8 8 0 0 0-5.94 0L96 220.18v-16.87l13.66-13.65A8 8 0 0 0 112 184v-32a8 8 0 0 0-9.57-7.84L32 158.24v-17.3l75.58-37.78A8 8 0 0 0 112 96V48a16 16 0 0 1 32 0v48a8 8 0 0 0 4.42 7.16L224 140.94Z" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Flights booking</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/company"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M136 32v184H40V85.35a8 8 0 0 1 3.56-6.66l80-53.33A8 8 0 0 1 136 32"
                                      opacity=".2"
                                    />
                                    <path d="M240 208h-16V96a16 16 0 0 0-16-16h-64V32a16 16 0 0 0-24.88-13.32L39.12 72A16 16 0 0 0 32 85.34V208H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M208 96v112h-64V96ZM48 85.34L128 32v176H48ZM112 112v16a8 8 0 0 1-16 0v-16a8 8 0 1 1 16 0m-32 0v16a8 8 0 0 1-16 0v-16a8 8 0 1 1 16 0m0 56v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0m32 0v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Company board</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/human-resources"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M112 168a32 32 0 1 1-32-32a32 32 0 0 1 32 32M80 32a32 32 0 1 0 32 32a32 32 0 0 0-32-32m96 104a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0-40a32 32 0 1 0-32-32a32 32 0 0 0 32 32"
                                      opacity=".2"
                                    />
                                    <path d="M27.2 126.4a8 8 0 0 0 11.2-1.6a52 52 0 0 1 83.2 0a8 8 0 0 0 11.2 1.59a7.7 7.7 0 0 0 1.59-1.59a52 52 0 0 1 83.2 0a8 8 0 0 0 12.8-9.61A67.85 67.85 0 0 0 203 93.51a40 40 0 1 0-53.94 0a67.3 67.3 0 0 0-21 14.31a67.3 67.3 0 0 0-21-14.31a40 40 0 1 0-53.94 0A67.9 67.9 0 0 0 25.6 115.2a8 8 0 0 0 1.6 11.2M176 40a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-96 0a24 24 0 1 1-24 24a24 24 0 0 1 24-24m123 157.51a40 40 0 1 0-53.94 0a67.3 67.3 0 0 0-21 14.31a67.3 67.3 0 0 0-21-14.31a40 40 0 1 0-53.94 0A67.9 67.9 0 0 0 25.6 219.2a8 8 0 1 0 12.8 9.6a52 52 0 0 1 83.2 0a8 8 0 0 0 11.2 1.59a7.7 7.7 0 0 0 1.59-1.59a52 52 0 0 1 83.2 0a8 8 0 0 0 12.8-9.61A67.85 67.85 0 0 0 203 197.51M80 144a24 24 0 1 1-24 24a24 24 0 0 1 24-24m96 0a24 24 0 1 1-24 24a24 24 0 0 1 24-24" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">HR board</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/course"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M216 113.07v53.22a8 8 0 0 1-2 5.31c-11.3 12.59-38.9 36.4-86 36.4s-74.68-23.81-86-36.4a8 8 0 0 1-2-5.31v-53.22L128 160Z"
                                      opacity=".2"
                                    />
                                    <path d="m251.76 88.94l-120-64a8 8 0 0 0-7.52 0l-120 64a8 8 0 0 0 0 14.12L32 117.87v48.42a15.9 15.9 0 0 0 4.06 10.65C49.16 191.53 78.51 216 128 216a130 130 0 0 0 48-8.76V240a8 8 0 0 0 16 0v-40.49a115.6 115.6 0 0 0 27.94-22.57a15.9 15.9 0 0 0 4.06-10.65v-48.42l27.76-14.81a8 8 0 0 0 0-14.12M128 200c-43.27 0-68.72-21.14-80-33.71V126.4l76.24 40.66a8 8 0 0 0 7.52 0L176 143.47v46.34c-12.6 5.88-28.48 10.19-48 10.19m80-33.75a97.8 97.8 0 0 1-16 14.25v-45.57l16-8.53Zm-20-47.31l-.22-.13l-56-29.87a8 8 0 0 0-7.52 14.12L171 128l-43 22.93L25 96l103-54.93L231 96Z" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Course dashboard</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/jobs"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M224 118.31V200a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-81.69A191.14 191.14 0 0 0 128 144a191.1 191.1 0 0 0 96-25.69"
                                      opacity=".2"
                                    />
                                    <path d="M104 112a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-32a8 8 0 0 1-8-8m128-40v128a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h40v-8a24 24 0 0 1 24-24h48a24 24 0 0 1 24 24v8h40a16 16 0 0 1 16 16M96 56h64v-8a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8ZM40 72v41.62A184.1 184.1 0 0 0 128 136a184 184 0 0 0 88-22.39V72Zm176 128v-68.37A200.25 200.25 0 0 1 128 152a200.2 200.2 0 0 1-88-20.36V200z" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Jobs dashboard</span>
                              </a>
                            </li>

                          </ul>
                        </div>
                      </li>


                      <li className="group mb-1 min-h-8">
                        <a
                          href="#"
                          className="webeze-focus relative top-0.5 flex items-center"
                        >
                          <span className="text-muted-400 group-hover:text-primary-500 relative inline-flex items-center gap-2 font-sans text-sm transition-colors duration-300">

                            <span>Lifestyle</span>
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="icon text-muted-400 ms-auto block size-4 transition-transform duration-300 group-focus-within:rotate-180"
                            style={{}}
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            data-v-b4402e20=""
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="m6 9l6 6l6-6"
                            />
                          </svg>
                        </a>
                        <div className="max-h-0 overflow-hidden opacity-0 group-focus-within:max-h-max group-focus-within:overflow-visible group-focus-within:opacity-100 transition-all duration-150">
                          <ul className="py-2">

                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/influencer"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="m216.71 99.73l-15.6 93.59a8 8 0 0 1-7.89 6.68H62.78a8 8 0 0 1-7.89-6.68l-15.6-93.59h.08a19.8 19.8 0 0 0 9.22-4.16L88 144l32-73.65a20 20 0 0 0 15.92 0L168 144l39.39-48.48a19.8 19.8 0 0 0 9.22 4.16Z"
                                      opacity=".2"
                                    />
                                    <path d="M248 80a28 28 0 1 0-51.12 15.77l-26.79 33L146 73.4a28 28 0 1 0-36.06 0l-24.03 55.34l-26.79-33a28 28 0 1 0-26.6 12L47 194.63A16 16 0 0 0 62.78 208h130.44A16 16 0 0 0 209 194.63l14.47-86.85A28 28 0 0 0 248 80M128 40a12 12 0 1 1-12 12a12 12 0 0 1 12-12M24 80a12 12 0 1 1 12 12a12 12 0 0 1-12-12m169.22 112H62.78l-13.92-83.48L81.79 149a8 8 0 0 0 6.21 3a8 8 0 0 0 1.08-.07a8 8 0 0 0 6.26-4.74l29.3-67.4a27 27 0 0 0 6.72 0l29.3 67.4a8 8 0 0 0 6.26 4.74a8 8 0 0 0 1.08.07a8 8 0 0 0 6.21-3l32.93-40.52ZM220 92a12 12 0 1 1 12-12a12 12 0 0 1-12 12" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Influencer</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/hobbies"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="m58.89 154.89l42.22 42.22l-50.63 18.4a7.79 7.79 0 0 1-10-10Zm138.82-4.72l-91.88-91.88A7.79 7.79 0 0 0 93 61.14l-14.9 41l75.82 75.82l41-14.9a7.79 7.79 0 0 0 2.79-12.89"
                                      opacity=".2"
                                    />
                                    <path d="M111.49 52.63a15.8 15.8 0 0 0-26 5.77L33 202.78A15.83 15.83 0 0 0 47.76 224a16 16 0 0 0 5.46-1l144.37-52.5a15.8 15.8 0 0 0 5.78-26Zm-8.33 135.21l-35-35l13.16-36.21l58.05 58.05Zm-55 20l14-38.41l24.45 24.45ZM156 168.64L87.36 100l13-35.87l91.43 91.43ZM160 72a37.8 37.8 0 0 1 3.84-15.58C169.14 45.83 179.14 40 192 40c6.7 0 11-2.29 13.65-7.21a22 22 0 0 0 2.35-8.85a8 8 0 0 1 16 .06c0 12.86-8.52 32-32 32c-6.7 0-11 2.29-13.65 7.21a22 22 0 0 0-2.35 8.85a8 8 0 0 1-16-.06m-24-32V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m101.66 82.34a8 8 0 1 1-11.32 11.31l-16-16a8 8 0 0 1 11.32-11.32Zm4.87-42.75l-24 8a8 8 0 0 1-5.06-15.18l24-8a8 8 0 0 1 5.06 15.18" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Hobbies</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/health"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="m160 160l-50.75 50.75a45.26 45.26 0 0 1-64 0a45.26 45.26 0 0 1 0-64L96 96Z"
                                      opacity=".2"
                                    />
                                    <path d="M216.43 39.6a53.27 53.27 0 0 0-75.33 0L39.6 141.09a53.26 53.26 0 0 0 75.32 75.31l101.51-101.49a53.32 53.32 0 0 0 0-75.31M103.61 205.09a37.26 37.26 0 0 1-52.7-52.69L96 107.31L148.7 160Zm101.5-101.49L160 148.69L107.32 96l45.1-45.09a37.26 37.26 0 0 1 52.69 52.69m-15.43-21.26a8 8 0 0 1 0 11.32l-24 24a8 8 0 1 1-11.31-11.32l24-24a8 8 0 0 1 11.31 0" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Health</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/writer"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M128 48L68.32 70.38a8 8 0 0 0-5.08 6.17L40 216l139.45-23.24a8 8 0 0 0 6.17-5.08L208 128Zm-4 104a20 20 0 1 1 20-20a20 20 0 0 1-20 20"
                                      opacity=".2"
                                    />
                                    <path d="M248 92.68a15.86 15.86 0 0 0-4.69-11.31l-68.68-68.69a16 16 0 0 0-22.63 0l-28.43 28.43l-58 21.77a16.06 16.06 0 0 0-10.22 12.35L32.11 214.68A8 8 0 0 0 40 224a8.4 8.4 0 0 0 1.32-.11l139.44-23.24a16 16 0 0 0 12.35-10.17l21.77-58L243.31 104A15.87 15.87 0 0 0 248 92.68m-69.87 92.19L63.32 204l47.37-47.37a28 28 0 1 0-11.32-11.32L52 192.7L71.13 77.86L126 57.29L198.7 130ZM112 132a12 12 0 1 1 12 12a12 12 0 0 1-12-12m96-15.32L139.31 48l24-24L232 92.68Z" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Writer</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/video"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M200 72v112a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8"
                                      opacity=".2"
                                    />
                                    <path d="M251.77 73a8 8 0 0 0-8.21.39L208 97.05V72a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-25l35.56 23.71A8 8 0 0 0 248 184a8 8 0 0 0 8-8V80a8 8 0 0 0-4.23-7M192 184H32V72h160zm48-22.95l-32-21.33v-23.44L240 95Z" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Video</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/soccer"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="m65.17 108.08l-33 25.34c-.1-1.8-.15-3.6-.15-5.42a95.6 95.6 0 0 1 21.21-60.22Zm-18.25 71.34a96.12 96.12 0 0 0 57 41.52l-14.7-41.52Zm105.21 41.52a96.12 96.12 0 0 0 57-41.52h-42.3Zm50.64-153.16l-11.94 40.3l33 25.34c.1-1.8.15-3.6.15-5.42a95.6 95.6 0 0 0-21.21-60.22m-38.52-28.7a96.34 96.34 0 0 0-72.5 0L128 64ZM152.72 160L168 115.5L128 88l-40 27.5l15.28 44.5Z"
                                      opacity=".2"
                                    />
                                    <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m76.52 147.42H170.9l-9.26-12.76l12.63-36.78l15-4.89l26.24 20.13a87.4 87.4 0 0 1-10.99 34.3m-164-34.3L66.71 117l15 4.89l12.63 36.78l-9.24 12.75H51.48a87.4 87.4 0 0 1-11.01-34.3Zm10-50.64l5.51 18.6l-15.32 11.69a87.3 87.3 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92l5.51-18.6a87.3 87.3 0 0 1 9.72 30.29Zm-6.2-35.38l-9.51 32.08l-15.07 4.89L136 83.79V68.21l29.09-20a88.6 88.6 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.2 88.2 0 0 1 36.14 0m-55.16 6.34l29.09 20v15.58l-33.28 22.88l-15.07-4.89l-9.51-32.08a88.6 88.6 0 0 1 28.77-21.49M63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27M110 214.13l-11.88-33.42l9.23-12.71h41.3l9.23 12.71l-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44l7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Soccer</span>
                              </a>
                            </li>

                          </ul>
                        </div>
                      </li>


                      <li className="group mb-1 min-h-8">
                        <a
                          href="#"
                          className="webeze-focus relative top-0.5 flex items-center"
                        >
                          <span className="text-muted-400 group-hover:text-primary-500 relative inline-flex items-center gap-2 font-sans text-sm transition-colors duration-300">

                            <span>Ecommerce</span>
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="icon text-muted-400 ms-auto block size-4 transition-transform duration-300 group-focus-within:rotate-180"
                            style={{}}
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            data-v-b4402e20=""
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="m6 9l6 6l6-6"
                            />
                          </svg>
                        </a>
                        <div className="max-h-0 overflow-hidden opacity-0 group-focus-within:max-h-max group-focus-within:overflow-visible group-focus-within:opacity-100 transition-all duration-150">
                          <ul className="py-2">

                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/ecommerce"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M224 96v16a32 32 0 0 1-64 0V96H96v16a32 32 0 0 1-64 0V96l14.34-50.2A8 8 0 0 1 54 40h148a8 8 0 0 1 7.69 5.8Z"
                                      opacity=".2"
                                    />
                                    <path d="M231.69 93.81L217.35 43.6A16.07 16.07 0 0 0 202 32H54a16.07 16.07 0 0 0-15.35 11.6L24.31 93.81A8 8 0 0 0 24 96v16a40 40 0 0 0 16 32v72a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8v-72a40 40 0 0 0 16-32V96a8 8 0 0 0-.31-2.19M54 48h148l11.42 40H42.61Zm98 56v8a24 24 0 0 1-48 0v-8ZM51.06 132.2A24 24 0 0 1 40 112v-8h48v8a24 24 0 0 1-35.12 21.26a8 8 0 0 0-1.82-1.06M200 208H56v-56.8a40.6 40.6 0 0 0 8 .8a40 40 0 0 0 32-16a40 40 0 0 0 64 0a40 40 0 0 0 32 16a40.6 40.6 0 0 0 8-.8Zm16-96a24 24 0 0 1-11.07 20.2a8 8 0 0 0-1.8 1.05A24 24 0 0 1 168 112v-8h48Z" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Ecommerce</span>
                              </a>
                            </li>

                          </ul>
                        </div>
                      </li>


                      <li className="group mb-1 min-h-8">
                        <a
                          href="#"
                          className="webeze-focus relative top-0.5 flex items-center"
                        >
                          <span className="text-muted-400 group-hover:text-primary-500 relative inline-flex items-center gap-2 font-sans text-sm transition-colors duration-300">

                            <span>Apps</span>
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="icon text-muted-400 ms-auto block size-4 transition-transform duration-300 group-focus-within:rotate-180"
                            style={{}}
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            data-v-b4402e20=""
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="m6 9l6 6l6-6"
                            />
                          </svg>
                        </a>
                        <div className="max-h-0 overflow-hidden opacity-0 group-focus-within:max-h-max group-focus-within:overflow-visible group-focus-within:opacity-100 transition-all duration-150">
                          <ul className="py-2">

                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/calendar"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M216 48v40H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8"
                                      opacity=".2"
                                    />
                                    <path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160z" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Calendar</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/delivery"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M224 128a96 96 0 1 1-96-96a48 48 0 0 0 48 48a48 48 0 0 0 48 48"
                                      opacity=".2"
                                    />
                                    <path d="M164.49 163.51a12 12 0 1 1-17 0a12 12 0 0 1 17 0m-81-8a12 12 0 1 0 17 0a12 12 0 0 0-16.98 0Zm9-39a12 12 0 1 0-17 0a12 12 0 0 0 17-.02Zm48-1a12 12 0 1 0 0 17a12 12 0 0 0 0-17M232 128A104 104 0 1 1 128 24a8 8 0 0 1 8 8a40 40 0 0 0 40 40a8 8 0 0 1 8 8a40 40 0 0 0 40 40a8 8 0 0 1 8 8m-16.31 7.39A56.13 56.13 0 0 1 168.5 87.5a56.13 56.13 0 0 1-47.89-47.19a88 88 0 1 0 95.08 95.08" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Food delivery</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/map-left"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M128 24a80 80 0 0 0-80 80c0 72 80 128 80 128s80-56 80-128a80 80 0 0 0-80-80m0 112a32 32 0 1 1 32-32a32 32 0 0 1-32 32"
                                      opacity=".2"
                                    />
                                    <path d="M128 64a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-112a88.1 88.1 0 0 0-88 88c0 31.4 14.51 64.68 42 96.25a254.2 254.2 0 0 0 41.45 38.3a8 8 0 0 0 9.18 0a254.2 254.2 0 0 0 41.37-38.3c27.45-31.57 42-64.85 42-96.25a88.1 88.1 0 0 0-88-88m0 206c-16.53-13-72-60.75-72-118a72 72 0 0 1 144 0c0 57.23-55.47 105-72 118" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Maps v1</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/map-right"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M128 24a80 80 0 0 0-80 80c0 72 80 128 80 128s80-56 80-128a80 80 0 0 0-80-80m0 112a32 32 0 1 1 32-32a32 32 0 0 1-32 32"
                                      opacity=".2"
                                    />
                                    <path d="M128 64a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-112a88.1 88.1 0 0 0-88 88c0 31.4 14.51 64.68 42 96.25a254.2 254.2 0 0 0 41.45 38.3a8 8 0 0 0 9.18 0a254.2 254.2 0 0 0 41.37-38.3c27.45-31.57 42-64.85 42-96.25a88.1 88.1 0 0 0-88-88m0 206c-16.53-13-72-60.75-72-118a72 72 0 0 1 144 0c0 57.23-55.47 105-72 118" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Maps v2</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/inbox"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path d="m224 56l-96 88l-96-88Z" opacity=".2" />
                                    <path d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-96 85.15L52.57 64h150.86ZM98.71 128L40 181.81V74.19Zm11.84 10.85l12 11.05a8 8 0 0 0 10.82 0l12-11.05l58 53.15H52.57ZM157.29 128L216 74.18v107.64Z" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Inbox</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/messaging"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M224 128a96 96 0 0 1-144.07 83.11l-37.39 12.47a8 8 0 0 1-10.12-10.12l12.47-37.39A96 96 0 1 1 224 128"
                                      opacity=".2"
                                    />
                                    <path d="M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.67L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Messaging v1</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/messaging-2"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M224 124a92 92 0 0 1-92 92H48a8 8 0 0 1-8-8v-84a92 92 0 0 1 92-92a92 92 0 0 1 92 92"
                                      opacity=".2"
                                    />
                                    <path d="M132 24A100.11 100.11 0 0 0 32 124v84a16 16 0 0 0 16 16h84a100 100 0 0 0 0-200m0 184H48v-84a84 84 0 1 1 84 84" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Messaging v2</span>
                              </a>
                            </li>

                          </ul>
                        </div>
                      </li>


                      <li className="border-muted-200 dark:border-muted-700 my-3 h-px w-full border-t" />


                      <li className="mb-1 flex min-h-8 items-center">
                        <a
                          href="/wizard"
                          className="webeze-focus text-muted-400 hover:text-primary-500 flex w-full items-center transition-colors duration-300"
                        >
                          <span className="font-sans text-sm">Wizard</span>
                        </a>
                      </li>


                      <li className="border-muted-200 dark:border-muted-700 my-3 h-px w-full border-t" />


                      <li className="group mb-1 min-h-8">
                        <a
                          href="#"
                          className="webeze-focus relative top-0.5 flex items-center"
                        >
                          <span className="text-muted-400 group-hover:text-primary-500 relative inline-flex items-center gap-2 font-sans text-sm transition-colors duration-300">

                            <span>Charts</span>
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="icon text-muted-400 ms-auto block size-4 transition-transform duration-300 group-focus-within:rotate-180"
                            style={{}}
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            data-v-b4402e20=""
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="m6 9l6 6l6-6"
                            />
                          </svg>
                        </a>
                        <div className="max-h-0 overflow-hidden opacity-0 group-focus-within:max-h-max group-focus-within:overflow-visible group-focus-within:opacity-100 transition-all duration-150">
                          <ul className="py-2">

                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/charts"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M96 37.5v72l-62.4 36A96 96 0 0 1 96 37.5"
                                      opacity=".2"
                                    />
                                    <path d="M100 116.43a8 8 0 0 0 4-6.93v-72A8 8 0 0 0 93.34 30a104.06 104.06 0 0 0-67.61 117a8 8 0 0 0 4.52 5.81a7.9 7.9 0 0 0 3.35.74a8 8 0 0 0 4-1.07ZM88 49.62v55.26l-47.88 27.63C40 131 40 129.48 40 128a88.12 88.12 0 0 1 48-78.38M128 24a8 8 0 0 0-8 8v91.82l-78.81 45.91a8 8 0 0 0-2.87 11A104 104 0 1 0 128 24m0 192a88.47 88.47 0 0 1-71.49-36.68l75.52-44a8 8 0 0 0 4-6.92V40.36A88 88 0 0 1 128 216" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Apex Charts</span>
                              </a>
                            </li>

                          </ul>
                        </div>
                      </li>


                      <li className="group mb-1 min-h-8">
                        <a
                          href="#"
                          className="webeze-focus relative top-0.5 flex items-center"
                        >
                          <span className="text-muted-400 group-hover:text-primary-500 relative inline-flex items-center gap-2 font-sans text-sm transition-colors duration-300">

                            <span>Widgets</span>
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="icon text-muted-400 ms-auto block size-4 transition-transform duration-300 group-focus-within:rotate-180"
                            style={{}}
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            data-v-b4402e20=""
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="m6 9l6 6l6-6"
                            />
                          </svg>
                        </a>
                        <div className="max-h-0 overflow-hidden opacity-0 group-focus-within:max-h-max group-focus-within:overflow-visible group-focus-within:opacity-100 transition-all duration-150">
                          <ul className="py-2">

                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/widgets"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M208 56v144a8 8 0 0 1-8 8h-72V48h72a8 8 0 0 1 8 8"
                                      opacity=".2"
                                    />
                                    <path d="M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M56 56h64v144H56Zm144 144h-64V56h64z" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">UI Widgets</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/widgets/creative"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M208 128v72a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8v-72Z"
                                      opacity=".2"
                                    />
                                    <path d="M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 16v64H56V56Zm0 144H56v-64h144z" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">Creative Widgets</span>
                              </a>
                            </li>
                            <li className="flex h-8 w-full items-center">
                              <a
                                href="/dashboards/widgets/list"
                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon me-2 size-5"
                                  style={{}}
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                  data-v-b4402e20=""
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M208 56v144a8 8 0 0 1-8 8h-72V48h72a8 8 0 0 1 8 8"
                                      opacity=".2"
                                    />
                                    <path d="M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M56 56h64v144H56Zm144 144h-64V56h64z" />
                                  </g>
                                </svg>
                                <span className="font-sans text-xs">List Widgets</span>
                              </a>
                            </li>

                          </ul>
                        </div>
                      </li>


                    </ul>

                  </div>
                  <div className="dark:from-muted-800 pointer-events-none fixed bottom-0 z-10 h-10 w-[212px] bg-gradient-to-t from-white to-transparent" />
                </div>
              </div>

            </div>
          </div>
          <div
            role="button"
            tabIndex={0}
            className="opacity-50 dark:opacity-75 bg-muted-800 dark:bg-muted-900 fixed start-0 top-0 z-[59] block size-full transition-opacity duration-300 lg:hidden"
          />
          <div className="bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10 xl:max-w-[calc(100%_-_300px)] xl:ms-[300px]">
            <div className="mx-auto w-full max-w-7xl">
              {/*[*/}
              <div className="relative z-[1] mb-5 flex h-16 items-center gap-2">
                <button
                  type="button"
                  className="flex size-10 items-center justify-center -ms-3"
                >
                  <div className="scale-90 relative size-5">
                    <span className="-rotate-45 rtl:rotate-45 max-w-[75%] top-1 bg-primary-500 absolute block h-0.5 w-full transition-all duration-300" />
                    <span className="opacity-0 translate-x-4 rtl:-translate-x-4 bg-primary-500 absolute top-1/2 block h-0.5 w-full max-w-[50%] transition-all duration-300" />
                    <span className="rotate-45 rtl:-rotate-45 max-w-[75%] bottom-1 bg-primary-500 absolute block h-0.5 w-full transition-all duration-300" />
                  </div>
                </button>
                <h1 className="webeze-heading webeze-heading-2xl webeze-weight-light webeze-lead-normal text-muted-800 hidden md:block dark:text-white">
                  {/*[*/}
                  {/*[*/}Overview{/*]*/}
                  {/*]*/}
                </h1>
                <div className="ms-auto" />
                <div className="flex items-center gap-2 h-16">
                  {/*[*/}
                  {/*[*/}
                  <BaseThemeToggle />
                  {/*]*/}
                  {/*[*/}
                  <button
                    type="button"
                    className="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:ring-offset-muted-900 flex size-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4"
                  >
                    <img
                      className="size-7 rounded-full"
                      src="/img/icons/flags/united-states-of-america.svg"
                      alt="flag icon"
                    />
                  </button>
                  {/*]*/}
                  {/*[*/}
                  <div className="group inline-flex items-center justify-center text-right">
                    <div data-headlessui-state="" className="relative size-9 text-left">
                      <div
                        id="headlessui-menu-button-2230"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-headlessui-state=""
                      >
                        <button
                          type="button"
                          className="group-hover:ring-muted-200 dark:group-hover:ring-muted-700 dark:ring-offset-muted-900 inline-flex size-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
                        >
                          <span className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 flex size-9 items-center justify-center rounded-full border bg-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="icon text-muted-400 size-5"
                              style={{}}
                              width="1em"
                              height="1em"
                              viewBox="0 0 256 256"
                              data-v-b4402e20=""
                            >
                              <g fill="currentColor">
                                <path
                                  d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 139.81 56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76a8 8 0 0 1-6.9 12"
                                  opacity=".2"
                                />
                                <path d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06M128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216m-80-32c7.7-13.24 16-43.92 16-80a64 64 0 1 1 128 0c0 36.05 8.28 66.73 16 80Z" />
                              </g>
                            </svg>
                          </span>
                        </button>
                      </div>
                      {/**/}
                    </div>
                  </div>
                  {/*]*/}
                  {/*[*/}
                  <button
                    type="button"
                    className="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:ring-offset-muted-900 flex size-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="icon text-muted-400 size-5"
                      style={{}}
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                      data-v-b4402e20=""
                    >
                      <g fill="currentColor">
                        <path
                          d="M112 80a32 32 0 1 1-32-32a32 32 0 0 1 32 32m64 32a32 32 0 1 0-32-32a32 32 0 0 0 32 32m-96 32a32 32 0 1 0 32 32a32 32 0 0 0-32-32m96 0a32 32 0 1 0 32 32a32 32 0 0 0-32-32"
                          opacity=".2"
                        />
                        <path d="M80 40a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96 16a40 40 0 1 0-40-40a40 40 0 0 0 40 40m0-64a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-96 80a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96-64a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24" />
                      </g>
                    </svg>
                  </button>
                  {/*]*/}
                  {/*[*/}
                  <div className="group relative z-20 inline-flex items-center justify-center text-end">
                    <div
                      data-headlessui-state=""
                      className="relative z-20 size-9 text-left"
                    >
                      <button
                        className="group-hover:ring-primary-500 dark:ring-offset-muted-900 inline-flex size-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
                        id="headlessui-menu-button-2232"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-headlessui-state=""
                        type="button"
                      >
                        <div className="relative inline-flex size-9 items-center justify-center rounded-full">
                          <img
                            src="/img/avatars/2.svg"
                            className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                            alt=""
                          />
                        </div>
                      </button>
                      {/**/}
                    </div>
                  </div>
                  {/*]*/}
                  {/*]*/}
                </div>
              </div>
              {/*]*/}
              <main>
                {children}
              </main>
            </div>
          </div>
        </div>
      </WebezeUIProvider>
    </Fragment>
  );
};

export default DashboardLayout;
