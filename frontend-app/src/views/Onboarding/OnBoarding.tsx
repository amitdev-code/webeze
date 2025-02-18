import React, { Fragment, useState } from "react";
import OnboardingNavigation from "./components/OnboardingNavigation";
import CompanyTypeSelection from "./steps/CompanyTypeSelection";
import CompanyInfo from "./steps/CompanyInfo";
import CompanyThemeSelection from "./steps/CompanyThemeSelection";
import CompanyPaymentPlan from "./steps/CompanyPaymentPlan";
import OnboardingNavigationButton from "./components/OnboardingNavigationButton";

export interface stepDataInterface {
  companyType: string;
  companyLogo: string;
  companyName: string;
  companyDescription: string;
  companyTheme: string;
  companyPlan: string;
}

const OnBoarding = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [stepData, setStepData] = useState<stepDataInterface>({
    companyType: "",
    companyLogo: "",
    companyName: "",
    companyDescription: "",
    companyTheme: "",
    companyPlan: "",
  });

  const updateStepData = (label: keyof stepDataInterface, data: string) => {
    setStepData((prevData) => ({
      ...prevData,
      [label]: data,
    }));
  };

  const moveForward = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const moveBackward = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const steps = [
    {
      title: "Setup Company",
      description: "choose company type",
    },
    {
      title: "Company Info",
      description: "provide company details",
    },
    {
      title: "Company Theme",
      description: "choose company theme",
    },
    {
      title: "Company Plan",
      description: "choose a plan that suits your company",
    },
  ];
  return (
    <Fragment>
      <OnboardingNavigation
        steps={steps}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      >
        <Fragment>
          {/* ONBOARDING STEPS */}
          {currentStep === 0 && (
            <CompanyTypeSelection
              stepData={stepData}
              setStepData={updateStepData}
              moveForward={moveForward}
            />
          )}
          {currentStep === 1 && (
            <CompanyInfo stepData={stepData} setStepData={updateStepData} />
          )}
          {currentStep === 2 && (
            <CompanyThemeSelection
              stepData={stepData}
              setStepData={updateStepData}
            />
          )}
          {currentStep === 3 && (
            <CompanyPaymentPlan
              stepData={stepData}
              setStepData={updateStepData}
            />
          )}
          {/* NAVIGATION BUTTONS */}
          {currentStep !== 0 && (
            <OnboardingNavigationButton
              forwardTest={
                currentStep === steps.length - 1 ? "Finish" : "Continue"
              }
              moveForward={moveForward}
              moveBackward={moveBackward}
            />
          )}
        </Fragment>
      </OnboardingNavigation>
    </Fragment>
  );
};

export default OnBoarding;
