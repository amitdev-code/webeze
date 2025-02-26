import React, { Fragment } from "react";
import { WebezeUIProvider } from "../../assets/styles/ui_provider/Provider";
import WebezeIconSidebar from "./layoutComponents/WebezeIconSidebar";
import WebezeMenuSidebar from "./layoutComponents/WebezeMenuSidebar";
import WebezeBuilderHeader from "./layoutComponents/WebezeBuilderHeader";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { BaseButtonClose } from "../../component";

const BuilderLayout = ({ children }: { children: React.ReactElement }) => {
  const isOpen = useSelector(
    (state: RootState) => state.builder.isBuilderSidebarOpen
  );

  return (
    <Fragment>
      <WebezeUIProvider>
        <div className="bg-muted-100 dark:bg-muted-900 pb-20">
          <div className="pointer-events-none fixed start-0 top-0 z-[60] flex h-full xl:z-10">
            <WebezeIconSidebar />
            <WebezeMenuSidebar />
          </div>
          <div
            role="button"
            tabIndex={0}
            className={`${
              isOpen && "opacity-50 dark:opacity-75"
            } bg-muted-800 dark:bg-muted-900 fixed start-0 top-0 z-[59] block size-full transition-opacity duration-300 lg:hidden ${
              !isOpen && "opacity-0 pointer-events-none"
            }`}
          />
          <div
            className={`bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 ${
              !isOpen
                ? "xl:max-w-[calc(100%_-_80px)] xl:ms-[80px]"
                : "xl:px-10 xl:max-w-[calc(100%_-_400px)] xl:ms-[400px]"
            }`}
          >
            <div className="mx-auto w-full max-w-7xl">
              {/* LAYOUT HEADER */}
              <div className="fixed top-0 right-0 w-[calc(100%_-_80px)] dark:border-muted-700 dark:bg-muted-800">
                <WebezeBuilderHeader />
              </div>
              <main className="pt-[80px] text-wrap">{children}</main>
              <div className="fixed right-0 bottom-0 top-[64px]">
                <div
                  className={`border-muted-200 dark:border-muted-700 dark:bg-muted-600 pointer-events-auto relative z-10 h-[calc(100vh_-_80px)] w-[300px] border-r bg-white transition-all duration-300 ${
                    !isOpen &&
                    "rtl:translate-x-[calc(100%_-_600px)] translate-x-[calc(-100%_+_600px)]"
                  }`}
                >
                  <div className="flex h-full flex-col">
                    <div className="flex h-16 w-full items-center px-1 justify-between">
                      <div className="font-heading text-muted-700 text-lg font-light capitalize dark:text-white">
                        Element Designer
                      </div>
                      <BaseButtonClose />
                    </div>

                    <div className="webeze-slimscroll relative size-full overflow-y-auto">
                      <div className="px-6 pb-8">
                        {/* Show Sidebar items Here */}
                      </div>
                      <div className="dark:from-muted-800 pointer-events-none fixed bottom-0 z-10 h-10 w-[212px] bg-gradient-to-t from-white to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WebezeUIProvider>
    </Fragment>
  );
};

export default BuilderLayout;
