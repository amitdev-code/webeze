import React, { ReactNode } from 'react';

interface WebezeTableHeadingProps {
    uppercase?: boolean;
    spaced?: boolean;
    children: ReactNode;
    className?: string;
}

const WebezeTableHeading = ({ uppercase = false, spaced = false, children, className }: WebezeTableHeadingProps) => {
    const classes = [
        'text-muted-700 dark:text-muted-400 text-left font-sans font-semibold tracking-wider',
        uppercase ? 'text-xs uppercase' : 'text-sm',
        spaced
            ? 'border-muted-200 dark:border-muted-700 last:border-e-none dark:bg-muted-800 border-r bg-white px-4 py-5'
            : 'bg-muted-50 dark:bg-muted-800 py-3',
        className
    ].join(' ');

    return <th className={classes}>{children}</th>;
};

export default WebezeTableHeading;