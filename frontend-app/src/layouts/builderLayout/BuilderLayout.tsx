import React, { Fragment, useState } from 'react'
import { WebezeUIProvider } from '../../assets/styles/ui_provider/Provider'
import WebezeIconSidebar from './layoutComponents/WebezeIconSidebar'
import WebezeMenuSidebar from './layoutComponents/WebezeMenuSidebar'
import WebezeBuilderHeader from './layoutComponents/WebezeBuilderHeader'

const BuilderLayout = ({ children }: { children: React.ReactElement }) => {

    const [isOpen, setIsOpen] = useState(false)

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
                            <div className='fixed top-0 right-0 w-[calc(100%_-_80px)] bg-white dark:border-muted-700 dark:bg-muted-800'>
                                <WebezeBuilderHeader />
                            </div>
                            <main className='pt-[80px]'>{children}</main>
                        </div>
                    </div>
                </div>
            </WebezeUIProvider>
        </Fragment>
    )
}

export default BuilderLayout