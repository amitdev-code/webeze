import React, { Fragment, useState } from 'react'
import { BaseProgress, BaseThemeToggle } from '../../../component';
import { Link } from 'react-router-dom';
import WebezeLogo from '../../../component/icons/WebezeLogo';
import { Icon } from '@iconify/react';
import OnboardingStepTitle from './OnboardingStepTitle';

interface props {
    children: React.ReactElement,
    steps: {
        title: string,
        description: string
    }[],
    currentStep: number,
    setCurrentStep: (index: number) => void
}

const OnboardingNavigation = ({ children, steps, currentStep, setCurrentStep }: props) => {

    const [openDropdown, setOpenDropdown] = useState(false)
    const targetRef = React.useRef(null)


    return (
        <Fragment>
            <div className="dark:bg-muted-800 absolute start-0 top-0 h-16 w-full bg-white">
                <div className="relative flex h-16 w-full items-center justify-between px-4">
                    <div className="flex items-center">
                        <Link to="#" className="border-muted-200 dark:border-muted-700 flex w-14 items-center justify-center border-r pe-6">
                            <WebezeLogo className="text-primary-600 h-10 shrink-0" />
                        </Link>
                        <div className="hidden items-center gap-2 ps-6 font-sans sm:flex">
                            <p className="text-muted-500 dark:text-muted-400">Step {currentStep + 1}:</p>
                            <h2 className="text-muted-800 font-semibold dark:text-white"></h2>
                        </div>
                        <div ref={targetRef} className="relative hidden sm:block">
                            <button type="button" className="flex size-10 items-center justify-center" onClick={() => setOpenDropdown(!openDropdown)}>
                                <Icon icon="lucide:chevron-down" className={`text-muted-400 size-4 transition-transform duration-300 ${openDropdown ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`border-muted-200 dark:border-muted-700 dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-900/30 absolute start-0 top-8 z-20 w-52 rounded-xl border bg-white p-2 shadow-xl transition-all duration-300 ${openDropdown ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-1'}`}>
                                <div className="space-y-1">
                                    {steps?.map((step, index) => (
                                        <button
                                            onClick={() => { setCurrentStep(index); setOpenDropdown(false) }}
                                            key={index}
                                            type="button"
                                            className="hover:bg-muted-100 dark:hover:bg-muted-700 flex w-full items-center gap-2 rounded-lg px-3 py-2 font-sans disabled:cursor-not-allowed disabled:opacity-70"
                                        >
                                            <p className="text-muted-500 dark:text-muted-400 text-xs">Step {index + 1}:</p>
                                            <h4 className="text-muted-800 text-xs font-medium dark:text-white">{step.title}</h4>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-4">
                        <BaseThemeToggle />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 z-10 w-full">
                        <BaseProgress value={((currentStep + 1) / steps.length) * 100} size="xs" rounded="full" />
                    </div>
                </div>
                <OnboardingStepTitle />
                {
                    children
                }
            </div>
        </Fragment>
    )
}

export default OnboardingNavigation