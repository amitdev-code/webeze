import React from "react";
import { stepDataInterface } from "../OnBoarding";

interface props {
  stepData: stepDataInterface;
  setStepData: (label: keyof stepDataInterface, data: string) => void;
}

const CompanyPaymentPlan = ({ stepData, setStepData }: props) => {
  return <div>CompanyPaymentPlan</div>;
};

export default CompanyPaymentPlan;
