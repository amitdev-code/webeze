import React, { ReactNode } from 'react';

interface WebezeTableRowProps {
    hoverable?: boolean;
    children: ReactNode;
}

const WebezeTableRow = ({ hoverable = true, children }: WebezeTableRowProps) => {
    const className = hoverable
        ? 'hover:bg-muted-50 dark:hover:bg-muted-900 transition-colors duration-300'
        : '';

    return (
        <tr className={className}>
            {children}
        </tr>
    );
};

export default WebezeTableRow;