import { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux';
import { toggleSidebar } from '../../../redux/features/app/appSlice';
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
    icon?: string;
    subMenuItems?: SubMenuItem[];
}

const WebezeMenuSidebar = () => {

    const isOpen = useSelector((state: RootState) => state.app.isOpen);
    const selectedMenu = useSelector((state: RootState) => state.app.selectedMenu);
    const [selectedMenuItems, setSelectedMenuItems] = useState<SubMenuItem[]>([]);
    const [menuTitle, setMenuTitle] = useState('Dashboard')
    const dispatch = useDispatch();

    useEffect(() => {
        setSelectedMenuItems(sidebarMenuItems.top[selectedMenu].menuItems);
        setMenuTitle(sidebarMenuItems.top[selectedMenu].menuTitle)
    }, [selectedMenu]);

    const toggleMenuActiveState = (clickedIndex: number) => {
        setSelectedMenuItems(selectedMenuItems.map((item, index) =>
            index === clickedIndex ? { ...item, isSelected: !item.isSelected } : item
        ));
    };

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
                                dispatch(toggleSidebar());
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
                                                <Fragment key={index}>
                                                    {
                                                        item.showDividerOnTop && (
                                                            <MenuDivider />
                                                        )
                                                    }
                                                    <li className="group mb-1 min-h-8">
                                                        <a
                                                            href="#"
                                                            className="webeze-focus relative top-0.5 flex items-center"
                                                        >
                                                            <span className="text-muted-400 group-hover:text-primary-500 relative inline-flex items-center gap-2 font-sans text-sm transition-colors duration-300">
                                                                <span className='uppercase'>{item.subMenuTitle}</span>
                                                            </span>
                                                            <Icon icon={item.isSelected ? "mdi:minus-box-outline" : "mdi:plus-box-outline"} className="icon text-muted-400 ms-auto block size-4 transition-transform duration-300" onClick={() => { toggleMenuActiveState(index) }} />
                                                        </a>
                                                        <div className={`transition-all duration-150 max-h-0 overflow-hidden opacity-0 ${item.isSelected ? 'max-h-max opacity-100' : ''}`}>
                                                            <ul className="py-2">
                                                                {
                                                                    item.subMenuItems?.map((subItem, subIndex) => (
                                                                        <li key={subIndex} className="flex h-8 w-full items-center">
                                                                            <Link
                                                                                to={subItem.redirectUrl}
                                                                                className="webeze-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"
                                                                            >
                                                                                <Icon icon={subItem.icon || ''} className="icon me-2 size-5" />


                                                                                <span className="font-sans text-xs uppercase">
                                                                                    {subItem.subMenuTitle}
                                                                                </span>
                                                                            </Link>
                                                                        </li>
                                                                    ))
                                                                }
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
                                                <Fragment key={index}>
                                                    {
                                                        item.showDividerOnTop && (
                                                            <MenuDivider />
                                                        )
                                                    }
                                                    <li className="mb-1 flex min-h-8 items-center">
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

export default WebezeMenuSidebar;