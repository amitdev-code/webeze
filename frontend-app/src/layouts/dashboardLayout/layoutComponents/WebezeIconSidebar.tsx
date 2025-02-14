import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import WebezeLogo from '../../../component/icons/WebezeLogo';
import { RootState } from '../../../redux';
import { Icon } from "@iconify/react";
import { openSidebar, setSelectedIndex } from '../../../redux/features/app/sidebar';

const WebezeIconSidebar = () => {

    const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
    const sidebar = useSelector((state: RootState) => state.sidebar.sidebar);
    const dispacth = useDispatch();


    return (
        <Fragment>
            <div
                className={`border-muted-200 dark:border-muted-700 dark:bg-muted-800 pointer-events-auto relative z-20 flex h-full w-[80px] flex-col border-r bg-white transition-all duration-300 ${!isOpen &&
                    "-translate-x-full rtl:translate-x-full xl:translate-x-0 rtl:xl:-translate-x-0"
                    }`}
            >
                <div className="flex h-16 w-full items-center justify-center">
                    <a href="/" className="flex items-center justify-center">
                        <WebezeLogo />
                    </a>
                </div>
                <div>
                    {
                        sidebar?.top?.map((item, index) => (
                            <div key={index} className="flex h-16 w-full items-center justify-center">
                                <span />
                                <button
                                    type="button"
                                    className={`${item.isSelected ? 'bg-primary-100 text-primary-500 dark:bg-primary-500/10' : 'text-muted-400'} flex size-12 items-center justify-center rounded-2xl transition-colors duration-300`}
                                    data-webeze-tooltip-position="right"
                                    data-webeze-tooltip={`${item.tooltipText}`}
                                    onClick={() => {
                                        dispacth(openSidebar());
                                        dispacth(setSelectedIndex(index));
                                    }}
                                >
                                    <Icon icon={item.iconUrl} className='w-5 h-5' />
                                </button>
                            </div>
                        ))
                    }
                </div>
                <div className="mt-auto">
                    {
                        sidebar?.bottom?.map((item, index) => (
                            <div key={index} className="flex h-16 w-full items-center justify-center">
                                <span />
                                <a
                                    href={item.pageUrl}
                                    type="button"
                                    className="text-muted-400 flex size-12 items-center justify-center rounded-2xl transition-colors duration-300"
                                    data-webeze-tooltip-position="right"
                                    data-webeze-tooltip={`${item.tooltipText}`}
                                >
                                    <Icon icon={item.iconUrl} className='w-5 h-5' />
                                </a>
                            </div>
                        ))
                    }

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
        </Fragment>
    )
}

export default WebezeIconSidebar