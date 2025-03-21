import { Icon } from "@iconify/react";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { toggleBuilderSidebar } from "../../redux/features/builder/builderSlice";
import { sidebarBuilderMenuItems } from "../builderIconMenu";

const WebezeMenuSidebar = () => {
  const dispatch = useDispatch();

  const [setsidebarTitle, setSetsidebarTitle] = useState("Builder");

  const isOpen = useSelector(
    (state: RootState) => state.builder.isBuilderSidebarOpen
  );
  const selectedItem = useSelector(
    (state: RootState) => state.builder.selectedMenu
  );

  useEffect(() => {
    setSetsidebarTitle(sidebarBuilderMenuItems.top[selectedItem].menuTitle);
  }, [selectedItem]);

  return (
    <Fragment>
      <Fragment>
        <div
          className={`border-muted-200 dark:border-muted-700 dark:bg-muted-800 pointer-events-auto relative z-10 h-full w-[350px] border-r bg-white transition-all duration-300 ${
            !isOpen &&
            "rtl:translate-x-[calc(100%_+_80px)] translate-x-[calc(-100%_-_80px)]"
          }`}
        >
          <div className="flex h-screen flex-col">
            <div className="flex h-16 w-full items-center px-6">
              <div className="font-heading text-muted-700 text-lg font-light capitalize dark:text-white">
                {setsidebarTitle}
              </div>
              <button
                type="button"
                className="text-muted-400 hover:bg-muted-100 hover:text-muted-600 ms-auto flex size-10 items-center justify-center rounded-full transition-colors duration-300"
                onClick={() => {
                  dispatch(toggleBuilderSidebar());
                }}
              >
                <Icon icon="ion:chevron-back" className="icon size-6" />
              </button>
            </div>

            <div className="webeze-slimscroll relative size-full overflow-y-auto">
              <div className="px-6 pb-8">{/* Show Sidebar items Here */}</div>
              <div className="dark:from-muted-800 pointer-events-none fixed bottom-0 z-10 h-10 w-[212px] bg-gradient-to-t from-white to-transparent" />
            </div>
          </div>
        </div>
      </Fragment>
    </Fragment>
  );
};

export default WebezeMenuSidebar;
