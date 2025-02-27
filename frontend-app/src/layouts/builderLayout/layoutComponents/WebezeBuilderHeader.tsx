import { Fragment } from "react";
import { BaseThemeToggle } from "../../../component";
import { Icon } from "@iconify/react/dist/iconify.js";

const WebezeBuilderHeader = () => {
  return (
    <Fragment>
      <div className="relative z-[2] flex h-16 items-center gap-1 xl:gap-3 2xl:gap-5 px-2 bg-white dark:bg-muted-800">
        {/* BACK BUTTON */}
        <button
          type="button"
          className={`border border-muted-400 text-muted-400 dark:bg-primary-500/10 flex size-10 items-center justify-center rounded-2xl transition-colors duration-300`}
          data-webeze-tooltip-position="right"
          data-webeze-tooltip={`Back`}
        >
          <Icon icon={"mingcute:left-fill"} className="w-5 h-5" />
        </button>
        {/* WEBSITE URL AND PAGE NAME */}
        <button className="flex flex-col items-start rounded-xl border border-gray-200 bg-gray-100 px-6 py-2 dark:bg-muted-800 dark:border-muted-700">
          <div className="flex items-center gap-x-2">
            <span className="text-sm">Page: Homepage - Dipa</span>
            <Icon
              icon={"lucide:chevron-down"}
              className="h-5 w-5 stroke-current text-gray-400"
            />
          </div>
          <div className="text-xs text-gray-400">https://dipainhouse.com/</div>
        </button>
        {/* PREVIEW BUTTON */}
        <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2 dark:bg-muted-700">
          <Icon
            icon={"solar:eye-broken"}
            className="h-5 w-5 stroke-current text-gray-400"
          />
          <span className="text-sm font-semibold leading-6">Preview</span>
        </button>
        {/* DIVIDER */}
        <div className="h-full w-px bg-gray-200" />
        {/* DEVICES VIEW */}
        <div className="flex items-center gap-x-1">
          <button className="rounded-xl bg-indigo-100 p-2 text-blue-600">
            <Icon
              icon={"solar:laptop-broken"}
              className="h-5 w-5 stroke-current"
            />
          </button>
          <button className="rounded-xl p-2 text-gray-400 hover:bg-gray-100">
            <Icon icon={"uil:tablet"} className="h-5 w-5 stroke-current" />
          </button>
          <button className="rounded-xl p-2 text-gray-400 hover:bg-gray-100">
            <Icon icon={"fa:mobile"} className="h-5 w-5 stroke-current" />
          </button>
          <button className="rounded-xl p-2 text-gray-400 hover:bg-gray-100">
            <Icon
              icon={"tabler:device-mobile-rotated"}
              className="h-5 w-5 stroke-current"
            />
          </button>
        </div>
        {/* DIVIDER */}
        <div className="h-full w-px bg-gray-200" />
        <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2 dark:bg-muted-700">
          <span className="text-sm font-semibold leading-6">960 PX / 100%</span>
          <Icon
            icon={"tdesign:chevron-down"}
            className="h-5 w-5 stroke-current text-gray-400"
          />
        </button>

        <button className="flex items-center justify-center rounded-xl bg-gray-100 p-2 dark:bg-muted-700">
          <Icon
            icon={"bxs:package"}
            className="h-5 w-5 stroke-current text-gray-400"
          />
        </button>
        <div className="ms-auto" />
        <div className="flex items-center gap-2 h-16">
          <div className="flex h-18 items-center gap-x-4 px-6">
            <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2 dark:bg-muted-700">
              <Icon
                icon={"material-symbols:draft-orders-outline-sharp"}
                className="h-5 w-5 stroke-current text-gray-400"
              />
              <span className="text-sm font-semibold leading-6">Draft</span>
            </button>
            <button className="flex flex-1 items-center justify-center gap-x-2 rounded-xl bg-blue-600 px-4 py-2 text-sm leading-6 text-white">
              Publish
            </button>
          </div>
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

export default WebezeBuilderHeader;
