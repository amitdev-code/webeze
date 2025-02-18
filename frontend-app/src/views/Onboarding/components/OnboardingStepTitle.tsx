import { Fragment } from 'react'
import { BaseHeading, BaseParagraph } from '../../../component'

const OnboardingStepTitle = () => {
    return (
        <Fragment>
            <div className="mb-10 text-center">
                <BaseHeading as="h1" size="2xl" className="text-muted-800 dark:text-white">
                    <span>Setup Company</span>
                </BaseHeading>
                <BaseParagraph size="sm" className="text-muted-500 dark:text-muted-400">
                    <span>choose company type</span>
                </BaseParagraph>
            </div>
        </Fragment>
    )
}

export default OnboardingStepTitle