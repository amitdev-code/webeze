import React from "react";
import { stepDataInterface } from "../OnBoarding";

interface props {
  stepData: stepDataInterface;
  setStepData: (label: keyof stepDataInterface, data: string) => void;
}

const CompanyThemeSelection = ({ stepData, setStepData }: props) => {
  return <div>CompanyThemeSelection</div>;
};

export default CompanyThemeSelection;
