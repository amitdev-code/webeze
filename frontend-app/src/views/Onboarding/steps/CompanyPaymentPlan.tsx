import { Fragment, useEffect, useState } from "react";
import { stepDataInterface } from "../OnBoarding";
import { Icon } from "@iconify/react";
import { BaseRadioHeadless, BaseCard, BaseHeading, BaseText, BaseParagraph } from "../../../component";
import WebezeLogo from "../../../component/icons/WebezeLogo";

interface props {
  stepData: stepDataInterface;
  setStepData: (label: keyof stepDataInterface, data: string) => void;
}


const CompanyPaymentPlan = ({ setStepData }: props) => {

  const plans = [
    {
      name: 'QuickBuddy',
      shortDescription: 'Single site basic analytics plan',
      description:
        'Ideal for individuals managing a single website with basic analytics and lead tracking.',
      price: {
        monthly: 9,
        yearly: 99,
      },
      features: ['Single website', '2,000 leads per month', 'Lead analytics', 'Sales analytics'],
      benefits: ['Free 1 year support', 'Free 1 year updates', 'Free 1 year hosting'],
    },
    {
      name: 'GrowthPro',
      shortDescription: 'Freelancer plan with automation tools',
      description:
        'Perfect for freelancers handling multiple clients with enhanced analytics and automation.',
      price: {
        monthly: 19,
        yearly: 199,
      },
      features: ['5 websites', '10,000 leads per month', 'Advanced lead analytics', 'Automation tools'],
      benefits: ['1 year support', '1 year updates', '1 year hosting'],
    },
    {
      name: 'ScaleMaster',
      shortDescription: 'Small business scaling solution',
      description:
        'Designed for small businesses looking to scale with powerful analytics and integrations.',
      price: {
        monthly: 29,
        yearly: 299,
      },
      features: ['15 websites', '50,000 leads per month', 'CRM integrations', 'AI-driven insights'],
      benefits: ['1 year support', '1 year updates', '1 year hosting'],
    },
    {
      name: 'EliteEnterprise',
      shortDescription: 'Enterprise unlimited premium support',
      description:
        'Enterprise-grade plan for large organizations with unlimited scalability and premium support.',
      price: {
        monthly: 49,
        yearly: 499,
      },
      features: ['Unlimited websites', 'Unlimited leads', 'Custom integrations', 'Dedicated account manager'],
      benefits: ['1 year premium support', '1 year updates', '1 year priority hosting'],
    },
  ];



  const [customRadio, setCustomRadio] = useState('QuickBuddy')
  const [selectedPlan, setSelectedPlan] = useState(plans.find((plan) => plan.name === customRadio))

  useEffect(() => {
    setSelectedPlan(plans.find((plan) => plan.name === customRadio))
    setStepData('companyPlan', customRadio)
  }, [customRadio])


  return (
    <Fragment>
      <div className="mx-auto w-full max-w-6xl px-4 text-center">
        <div className="dark:border-muted-800 mb-10 grid gap-4 border-b border-gray-200 pb-10 md:grid-cols-2 xl:gap-8">
          <div className="grid grid-cols-2 gap-2 xl:gap-6">
            {
              plans.map((plan) => (
                <BaseRadioHeadless
                  value={customRadio}
                  name="radio_custom"
                  onChange={() => setCustomRadio(plan.name)}
                >
                  <BaseCard
                    rounded="sm"
                    className="text-muted-400/50 peer-checked:!border-success-500 peer-checked:text-success-500 group relative p-6 text-center peer-checked:[&_.child]:!opacity-100"
                  >
                    <div className="child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex size-7 items-center justify-center rounded-full border bg-white opacity-0">
                      <Icon icon="lucide:check" className="size-3 text-current" />
                    </div>
                    <WebezeLogo className="mx-auto mb-2 size-9" />
                    <BaseHeading as="h4" size="sm" weight="medium" className="text-muted-800 dark:text-white">
                      {plan.name}
                    </BaseHeading>
                    <BaseText size="xs" lead="tight" className="text-muted-400">
                      {plan.shortDescription}
                    </BaseText>
                  </BaseCard>
                </BaseRadioHeadless>
              ))
            }
          </div>
          <div>
            <BaseCard rounded="sm" className="flex h-full flex-col p-8">
              <div className="flex gap-12">
                <WebezeLogo className={`size-12 shrink-0`} />
                <div>
                  <BaseText size="md" lead="tight" weight="semibold">
                    ${selectedPlan?.price.monthly}
                    <span className="text-muted-400 font-normal">/per month</span>
                  </BaseText>
                  <BaseText size="xs" lead="tight" className="mb-2">
                    Billed ${selectedPlan?.price.yearly} yearly
                  </BaseText>
                  <BaseParagraph size="xs" className="text-muted-500 dark:text-muted-400">
                    {selectedPlan?.description}
                  </BaseParagraph>
                </div>
              </div>
              <div className="my-8">
                <BaseParagraph size="sm" lead="tight" className="text-muted-500 dark:text-muted-400">
                  Tairo has incredible features and each plan perfectly adapts to your company, whether it is a small business or a bigger one. Tairo can also scale smoothly with you, as your business grows.
                </BaseParagraph>
              </div>
              <div className="grid grid-cols-2 gap-6 font-sans text-xs">
                <div>
                  <ul>
                    {selectedPlan?.features.map((item) => (
                      <li key={item} className={`flex items-center gap-2`}>
                        <Icon icon="lucide:check" className="size-3 text-current" />
                        <span className="text-muted-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul>
                    {selectedPlan?.benefits.map((item) => (
                      <li key={item} className={`flex items-center gap-2`}>
                        <Icon icon="lucide:check" className="size-3 text-current" />
                        <span className="text-muted-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CompanyPaymentPlan;
