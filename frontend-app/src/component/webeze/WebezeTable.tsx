import React, { ReactNode } from 'react';

interface WebezeTableProps {
    rounded?: 'none' | 'sm' | 'md' | 'lg';
    scrollable?: boolean;
    children: ReactNode;
    header: ReactNode;
}

const WebezeTable = ({ rounded = 'sm', scrollable = true, children, header }: WebezeTableProps) => {
    const roundedClasses = {
        none: '',
        sm: 'rounded-md',
        md: 'rounded-lg',
        lg: 'rounded-xl',
    };

    return (
        <div className="flex flex-col">
            <div
                className={`border-muted-200 dark:border-muted-700 border ${scrollable ? 'nui-slimscroll overflow-x-auto' : ''} ${roundedClasses[rounded]}`}
            >
                <div className="inline-block min-w-full align-middle">
                    <div className={scrollable ? 'overflow-hidden' : ''}>
                        <table className="divide-muted-200 dark:divide-muted-700 min-w-full table-fixed divide-y">
                            <thead>
                                <tr>
                                    {header}
                                </tr>
                            </thead>
                            <tbody className="divide-muted-200 dark:divide-muted-700 dark:bg-muted-800 divide-y bg-white">
                                {children}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebezeTable;