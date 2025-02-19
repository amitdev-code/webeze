import React, { Fragment } from "react";
import { WebezeUIProvider } from "../../assets/styles/ui_provider/Provider";
import WebezeLayoutHeader from "./layoutComponents/webezeLayoutHeader";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import WebezeIconSidebar from "./layoutComponents/WebezeIconSidebar";
import WebezeMenuSidebar from "./layoutComponents/WebezeMenuSidebar";

const DashboardLayout = ({ children }: { children: React.ReactElement }) => {
  const isOpen = useSelector((state: RootState) => state.app.isOpen);

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
            className={`${isOpen && "opacity-50 dark:opacity-75"
              } bg-muted-800 dark:bg-muted-900 fixed start-0 top-0 z-[59] block size-full transition-opacity duration-300 lg:hidden ${!isOpen && "opacity-0 pointer-events-none"
              }`}
          />
          <div
            className={`bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 ${!isOpen
              ? "xl:max-w-[calc(100%_-_80px)] xl:ms-[80px]"
              : "xl:px-10 xl:max-w-[calc(100%_-_300px)] xl:ms-[300px]"
              }`}
          >
            <div className="mx-auto w-full max-w-7xl">
              {/* LAYOUT HEADER */}
              <WebezeLayoutHeader />

              <main>{children}</main>
            </div>
          </div>
        </div>
      </WebezeUIProvider>
    </Fragment>
  );
};

export default DashboardLayout;
