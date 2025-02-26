import { useState, ReactNode } from 'react';

interface WebezeTabContentWrapperProps {
    title?: string;
    shape?: 'straight' | 'rounded' | 'curved' | 'full';
    labels: string[];
    reverse?: boolean;
    children: ReactNode[];
}

const WebezeTabContentWrapper = ({ title, shape = 'rounded', labels, reverse = false, children }: WebezeTabContentWrapperProps) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className={`mb-6 flex w-full flex-col items-center justify-between gap-4 sm:flex-row ${reverse ? 'sm:flex-row-reverse' : ''}`}>
                {children[0]}
                <div className="w-full sm:w-auto">
                    <div className={`dark:bg-muted-800 relative flex h-9 w-full bg-white sm:w-80 ${shape === 'rounded' ? 'rounded-md' : ''} ${shape === 'curved' ? 'rounded-xl' : ''} ${shape === 'full' ? 'rounded-full' : ''}`}>
                        {labels.map((label, index) => (
                            <button
                                key={index}
                                type="button"
                                className={`webeze-focus relative z-10 flex flex-1 cursor-pointer items-center justify-center font-sans text-sm transition-colors duration-300 ${activeTab === index ? 'text-white' : 'text-muted-400'} ${shape === 'rounded' ? 'rounded-md' : ''} ${shape === 'curved' ? 'rounded-xl' : ''} ${shape === 'full' ? 'rounded-full' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {label}
                            </button>
                        ))}
                        <div className={`bg-primary-500 absolute start-0 top-0 h-full w-1/${labels.length} transition-all duration-300 ease-in-out`} style={{ transform: `translateX(${activeTab * 100}%)` }} />
                    </div>
                </div>
            </div>
            <div>
                {children[activeTab + 1]}
            </div>
        </div>
    );
};

export default WebezeTabContentWrapper;