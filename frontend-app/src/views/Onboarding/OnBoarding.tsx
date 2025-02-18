import React, { Fragment, useState } from 'react'
import OnboardingNavigation from './components/OnboardingNavigation'
import CompanyTypeSelection from './steps/CompanyTypeSelection'

const OnBoarding = () => {

  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: 'Setup Company',
      description: 'choose company type'
    },
    {
      title: 'Company Info',
      description: 'provide company details'
    },
    {
      title: 'Company Theme',
      description: 'choose company theme'
    },
    {
      title: 'Company Team',
      description: 'add team members'
    }
  ]
  return (
    <Fragment>
      <OnboardingNavigation steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep}>
        <CompanyTypeSelection />
      </OnboardingNavigation>
    </Fragment>
  )
}

export default OnBoarding