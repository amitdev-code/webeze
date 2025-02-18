import { Fragment } from "react";
import { BaseHeading, BaseParagraph } from "../../../component";

interface props {
  steps: {
    title: string;
    description: string;
  }[];
  currentStep: number;
}

const OnboardingStepTitle = ({ steps, currentStep }: props) => {
  return (
    <Fragment>
      <div className="mb-10 text-center">
        <BaseHeading
          as="h1"
          size="2xl"
          className="text-muted-800 dark:text-white"
        >
          <span>{steps[currentStep].title}</span>
        </BaseHeading>
        <BaseParagraph size="sm" className="text-muted-500 dark:text-muted-400">
          <span>{steps[currentStep].description}</span>
        </BaseParagraph>
      </div>
    </Fragment>
  );
};

export default OnboardingStepTitle;
