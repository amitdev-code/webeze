import { Fragment, useState } from "react";
import OnboardingNavigation from "./components/OnboardingNavigation";
import CompanyTypeSelection from "./steps/CompanyTypeSelection";
import CompanyInfo from "./steps/CompanyInfo";
import CompanyPaymentPlan from "./steps/CompanyPaymentPlan";
import OnboardingNavigationButton from "./components/OnboardingNavigationButton";
import InviteTeam from "./steps/InviteTeam";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
    }else{
      navigate("/dashboard", { replace: true });
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
      title: "About your company",
      description: "provide company details",
    },
    {
      title: "Invite team",
      description: "add your team members",
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
            <InviteTeam
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
