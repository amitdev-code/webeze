import { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux';
import { toggleSidebar } from '../../../redux/features/app/sidebar';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';
import MenuDivider from './MenuDivider';
import { sidebarMenuItems } from '../sidebarMenu';

export interface SubMenuItem {
    subMenuTitle: string;
    redirectUrl: string;
    showDividerOnTop: boolean;
    showDividerOnBottom: boolean;
    isOpen: boolean;
    isSelected: boolean;
    hasSubMenu?: boolean;
    subMenuItems?: SubMenuItem[];
  }

const WebezeMenuSidebar = () => {

    const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
    const selectedMenuItems = sidebarMenuItems.top[0].menuItems;
    const menuTitle = 'Dashboard';
    const dispacth = useDispatch();



    return (
        <Fragment>
            <div
                className={`border-muted-200 dark:border-muted-700 dark:bg-muted-800 pointer-events-auto relative z-10 h-full w-[220px] border-r bg-white transition-all duration-300 ${!isOpen &&
                    "rtl:translate-x-[calc(100%_+_80px)] translate-x-[calc(-100%_-_80px)]"
                    }`}
            >
                <div className="flex h-screen flex-col">
                    <div className="flex h-16 w-full items-center px-6">
                        <div className="font-heading text-muted-700 text-lg font-light capitalize dark:text-white">
                            {menuTitle}
                        </div>
                        <button
                            type="button"
                            className="text-muted-400 hover:bg-muted-100 hover:text-muted-600 ms-auto flex size-10 items-center justify-center rounded-full transition-colors duration-300 xl:hidden"
                            onClick={() => {
                                dispacth(toggleSidebar());
                            }}
                        >
                            <Icon icon="ion:chevron-back" className="icon size-6" />
                        </button>
                    </div>

                    <div className="webeze-slimscroll relative size-full overflow-y-auto">
                        <div className="px-6 pb-8">
                            <ul>
                                {
                                    selectedMenuItems?.map((item: SubMenuItem, index: number) => {
                                        if (item.hasSubMenu) {
                                            return (
                                                <Fragment>
                                                    {
                                                        item.showDividerOnTop && (
                                                            <MenuDivider />
                                                        )
                                                    }
                                                    <li key={index} className="group mb-1 min-h-8">
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
                                                                        <span className="font-sans text-xs">
                                                                            Personal V1
                                                                        </span>
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
                                                                        <span className="font-sans text-xs">
                                                                            Personal V2
                                                                        </span>
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
                                                                        <span className="font-sans text-xs">
                                                                            Personal 4
                                                                        </span>
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
                                                                        <span className="font-sans text-xs">
                                                                            Personal balance
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    {
                                                        item.showDividerOnBottom && (
                                                            <MenuDivider />
                                                        )
                                                    }
                                                </Fragment>
                                            )
                                        }
                                        if (!item.hasSubMenu) {
                                            return (
                                                <Fragment>
                                                    {
                                                        item.showDividerOnTop && (
                                                            <MenuDivider />
                                                        )
                                                    }
                                                    <li key={index} className="mb-1 flex min-h-8 items-center">
                                                        <Link
                                                            to={item.redirectUrl}
                                                            className="webeze-focus text-muted-400 hover:text-primary-500 flex w-full items-center transition-colors duration-300"
                                                        >
                                                            <span className="font-sans text-sm">{item.subMenuTitle}</span>
                                                        </Link>
                                                    </li>
                                                    {
                                                        item.showDividerOnBottom && (
                                                            <MenuDivider />
                                                        )
                                                    }
                                                </Fragment>
                                            )
                                        }
                                    })
                                }





                            </ul>
                        </div>
                        <div className="dark:from-muted-800 pointer-events-none fixed bottom-0 z-10 h-10 w-[212px] bg-gradient-to-t from-white to-transparent" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default WebezeMenuSidebar