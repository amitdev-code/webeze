import { Fragment } from "react";
import { BaseThemeToggle } from "../../../component";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../../redux/features/app/sidebar";
import { RootState } from "../../../redux";

const WebezeLayoutHeader = () => {
  const dispacth = useDispatch();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  return (
    <Fragment>
      <div className="relative z-[1] mb-5 flex h-16 items-center gap-2">
        <button
          type="button"
          className="flex size-10 items-center justify-center -ms-3"
        >
          {!isOpen ? (
            <div
              className="relative size-5"
              onClick={() => {
                dispacth(toggleSidebar());
              }}
            >
              <span className="bg-primary-500 absolute block h-0.5 w-full transition-all duration-300 top-0.5" />
              <span className="bg-primary-500 absolute top-1/2 block h-0.5 w-full max-w-[50%] transition-all duration-300" />
              <span className="bg-primary-500 absolute block h-0.5 w-full transition-all duration-300 bottom-0" />
            </div>
          ) : (
            <div
              className="scale-90 relative size-5"
              onClick={() => {
                dispacth(toggleSidebar());
              }}
            >
              <span className="-rotate-45 rtl:rotate-45 max-w-[75%] top-1 bg-primary-500 absolute block h-0.5 w-full transition-all duration-300" />
              <span className="opacity-0 translate-x-4 rtl:-translate-x-4 bg-primary-500 absolute top-1/2 block h-0.5 w-full max-w-[50%] transition-all duration-300" />
              <span className="rotate-45 rtl:-rotate-45 max-w-[75%] bottom-1 bg-primary-500 absolute block h-0.5 w-full transition-all duration-300" />
            </div>
          )}
        </button>
        <h1 className="webeze-heading webeze-heading-2xl webeze-weight-light webeze-lead-normal text-muted-800 hidden md:block dark:text-white">
          Overview
        </h1>
        <div className="ms-auto" />
        <div className="flex items-center gap-2 h-16">
          <BaseThemeToggle />

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
            </div>
          </div>

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
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WebezeLayoutHeader;
