import React, { Fragment, ReactNode } from 'react';

interface WebezeContentWrapperProps {
    children: ReactNode;
    reverse?: boolean;
}

const WebezeContentWrapper = (props: WebezeContentWrapperProps) => {
    const hasLeftSlot = React.Children.toArray(props.children).some(
        (child) => React.isValidElement(child) && child.type && (child.type as any).displayName === 'LeftSlot'
    );
    const hasRightSlot = React.Children.toArray(props.children).some(
        (child) => React.isValidElement(child) && child.type && (child.type as any).displayName === 'RightSlot'
    );

    return (
        <Fragment>
            {(hasLeftSlot || hasRightSlot) && (
                <div className={`mb-6 flex w-full flex-col items-center justify-between gap-4 sm:flex-row ${props.reverse ? 'sm:flex-row-reverse' : ''}`}>
                    <div className="flex w-full items-center gap-4 sm:w-auto">
                        {React.Children.toArray(props.children).find(
                            (child) => React.isValidElement(child) && child.type && (child.type as any).displayName === 'LeftSlot'
                        )}
                    </div>
                    <div className="flex w-full items-center justify-end gap-4 sm:w-auto">
                        {React.Children.toArray(props.children).find(
                            (child) => React.isValidElement(child) && child.type && (child.type as any).displayName === 'RightSlot'
                        )}
                    </div>
                </div>
            )}
            {React.Children.toArray(props.children).filter(
                (child) => !React.isValidElement(child) || (React.isValidElement(child) && child.type && (child.type as any).displayName !== 'LeftSlot' && (child.type as any).displayName !== 'RightSlot')
            )}
        </Fragment>
    );
};

export default WebezeContentWrapper;

interface SlotProps {
    children: ReactNode;
}

const LeftSlot = ({ children }: SlotProps) => <>{children}</>;
LeftSlot.displayName = 'LeftSlot';

const RightSlot = ({ children }: SlotProps) => <>{children}</>;
RightSlot.displayName = 'RightSlot';

export { LeftSlot, RightSlot };