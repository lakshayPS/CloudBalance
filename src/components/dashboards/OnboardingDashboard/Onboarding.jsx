import { useState } from "react";
import CreateIamRoleStep from "./components/CreateIamRoleStep";
import AddCustomManagedPolicies from "./components/AddCustomManagedPolicies";
import CUR from "./components/CUR";

const stepData = [
  {
    title: "Create IAM Role",
    subTitle: "Create an IAM Role by following these steps",
    component: <CreateIamRoleStep />,
  },
  {
    title: "Add Customer Managed Policies",
    subTitle: "Create an Inline policy for the role by following these steps",
    component: <AddCustomManagedPolicies />,
  },
  {
    title: "Create Cost & Usage Report",
    subTitle: "Create a Cost & Usage Report by following these steps",
    component: <CUR />,
  },
];

const Onboarding = () => {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = stepData[activeStep];

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto px-6">
        <h2 className="font-extrabold text-2xl mt-4">{currentStep.title}</h2>

        <p className="mb-6">{currentStep.subTitle}</p>

        {currentStep.component}

        <div className="flex justify-between mt-8 pb-6">
          <button
            disabled={activeStep === 0}
            onClick={() => setActiveStep((prev) => prev - 1)}
            className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50 cursor-pointer"
          >
            Back
          </button>

          <button
            disabled={activeStep === stepData.length - 1}
            onClick={() => setActiveStep((prev) => prev + 1)}
            className="px-4 py-2 rounded bg-green-600 text-white disabled:opacity-50 cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
