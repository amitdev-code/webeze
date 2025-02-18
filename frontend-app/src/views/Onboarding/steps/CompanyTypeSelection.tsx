import { Fragment } from "react";
import { BaseButton, BaseHeading } from "../../../component";
import { stepDataInterface } from "../OnBoarding";

interface props {
  stepData: stepDataInterface;
  setStepData: (label: keyof stepDataInterface, data: string) => void;
  moveForward: () => void;
}

const CompanyTypeSelection = ({
  stepData,
  setStepData,
  moveForward,
}: props) => {
  const choices = [
    {
      type: "Content & Engagement",
      imgSrc: "/img/illustrations/wizard/design.svg",
      title: "Content & Engagement",
      description: ["Blogging Websites", "Portfolio Websites"],
    },
    {
      type: "Business & Services",
      imgSrc: "/img/illustrations/wizard/development.svg",
      title: "Business & Services",
      description: [
        "Enquiry-Based Websites",
        "Service Display Websites",
        "Online Slot Booking Websites",
      ],
    },
    {
      type: "Commerce & Transactions",
      imgSrc: "/img/illustrations/wizard/marketing.svg",
      title: "Commerce & Transactions",
      description: ["Ecommerce Websites"],
    },
  ];

  return (
    <Fragment>
      <div className="mx-auto w-full max-w-6xl px-4 text-center">
        <div className="ltablet:grid-cols-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {choices.map((choice) => (
            <div
              onClick={() => {
                setStepData("companyType", choice.type);
                moveForward();
              }}
              key={choice.type}
              className={`dark:hover:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 group rounded-2xl p-5 transition-all duration-300 hover:bg-white hover:shadow-xl ${
                choice.type === stepData.companyType
                  ? "dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-800/30 bg-white shadow-xl"
                  : ""
              }`}
            >
              <img
                className="rounded-2xl"
                src={choice.imgSrc}
                alt={choice.title}
              />
              <div className="my-4">
                <BaseHeading
                  as="h3"
                  className="text-muted-800 dark:text-muted-100 mb-2 font-medium text-xl"
                >
                  {choice.title}
                </BaseHeading>
                <ul className="text-muted-600">
                  {choice.description.map((item, index) => (
                    <li className="text-sm" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-5 flex flex-col items-center">
                <BaseButton
                  variant="solid"
                  color="primary"
                  className="w-36 rounded-lg bg-primary-500 text-white"
                >
                  {stepData.companyType === choice.type
                    ? "Selected"
                    : "Continue"}
                </BaseButton>
                <div className="mt-4 text-center">
                  <a
                    href="/wizard"
                    className="text-muted-400 hover:text-primary-500 font-sans text-[0.65rem] font-semibold uppercase opacity-0 transition-all duration-300 group-hover:opacity-100"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default CompanyTypeSelection;
