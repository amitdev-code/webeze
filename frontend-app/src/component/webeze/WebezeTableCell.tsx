import React, { ReactNode } from 'react';

interface WebezeTableCellProps {
    light?: boolean;
    spaced?: boolean;
    children: ReactNode;
    colspan?: number;
    className?: string;
}

const WebezeTableCell = ({ light = false, spaced = false, children, colspan, className = '' }: WebezeTableCellProps) => {
    const combinedClassName = `
    font-alt whitespace-nowrap text-sm 
    ${light ? 'text-muted-500 dark:text-white' : 'text-muted-800 dark:text-white'} 
    ${spaced ? 'p-4' : 'py-4'}
    ${className}
  `;

    return <td className={combinedClassName} colSpan={colspan}>{children}</td>;
};

export default WebezeTableCell;