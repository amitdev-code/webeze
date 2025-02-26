import { Icon } from '@iconify/react/dist/iconify.js'
import React, { Fragment } from 'react'

const baseBuilderAccordion = ({ children, title }: { children?: React.ReactElement, title: string }) => {
    return (
        <Fragment>
            <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between border-b border-gray-200 py-4 px-6">
                    <span className="text-sm font-semibold capitalize">{title}</span>
                    <Icon icon={"lucide:chevron-down"} className="h-5 w-5 rotate-90 stroke-current text-gray-400 transition-transform group-open:rotate-0" />
                </summary>
                <div className="border-b border-gray-200 py-4 px-6">{children}</div>
            </details>
        </Fragment>
    )
}

export default baseBuilderAccordion