// import { useState } from "react";
// import CreateIamRoleStep from "./components/CreateIamRoleStep";
// import AddCustomManagedPolicies from "./components/AddCustomManagedPolicies";
// import CUR from "./components/CUR";
// import { createAccount } from "../../../services/authServices";
// import { toast } from "react-toastify";

// const Onboarding = () => {
//   const [roleArn, setRoleArn] = useState("");
//   const [accountId, setAccountId] = useState("");
//   const [accountName, setAccountName] = useState("");

//   const [activeStep, setActiveStep] = useState(0);

//   const stepData = [
//     {
//       title: "Create IAM Role",
//       subTitle: "Create an IAM Role by following these steps",
//       component: (
//         <CreateIamRoleStep
//           roleArn={roleArn}
//           setRoleArn={setRoleArn}
//           accountId={accountId}
//           setAccountId={setAccountId}
//           accountName={accountName}
//           setAccountName={setAccountName}
//         />
//       ),
//     },
//     {
//       title: "Add Customer Managed Policies",
//       subTitle: "Create an Inline policy for the role by following these steps",
//       component: <AddCustomManagedPolicies />,
//     },
//     {
//       title: "Create Cost & Usage Report",
//       subTitle: "Create a Cost & Usage Report by following these steps",
//       component: <CUR />,
//     },
//   ];

//   const currentStep = stepData[activeStep];

//   const isNextDisabled = () => {
//     if (activeStep === 0) {
//       return !(roleArn && accountId && accountName);
//     }
//     return false;
//   };

//   const handleNext = async () => {
//     if (activeStep === stepData.length - 1) {
//       try {
//         await createAccount(accountId, accountName, roleArn);
//         toast.success("Account onboarded succesfully");
//       } catch (err) {
//         console.error(err?.status);
//         toast.error(
//           err?.status == 409 ? "Account already onboarded" : "Failed to onboard"
//         );
//       }
//     } else {
//       setActiveStep((prev) => prev + 1);
//     }
//   };

//   const handleCancel = () => {
//     setRoleArn("");
//     setAccountId("");
//     setAccountName("");
//     setActiveStep(0);
//   };

//   return (
//     <div className="h-full flex flex-col">
//       <div className="flex-1 overflow-y-auto px-6">
//         <h2 className="font-extrabold text-2xl mt-4">{currentStep.title}</h2>
//         <p className="mb-6">{currentStep.subTitle}</p>

//         {currentStep.component}

//         <div className="flex justify-between mt-8 pb-6">
//           <button
//             disabled={activeStep === 0}
//             onClick={handleCancel}
//             className="px-4 py-2 rounded border border-gray-400 disabled:opacity-50"
//           >
//             Cancel
//           </button>

//           <div className="flex gap-3">
//             <button
//               disabled={activeStep === 0}
//               onClick={() => setActiveStep((prev) => prev - 1)}
//               className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
//             >
//               Back
//             </button>

//             <button
//               disabled={isNextDisabled()}
//               onClick={handleNext}
//               className="px-4 py-2 rounded bg-green-600 text-white disabled:opacity-50"
//             >
//               {activeStep === stepData.length - 1 ? "Submit" : "Next"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Onboarding;

import { useState } from "react";
import CreateIamRoleStep from "./components/CreateIamRoleStep";
import AddCustomManagedPolicies from "./components/AddCustomManagedPolicies";
import CUR from "./components/CUR";
import { createAccount } from "../../../services/authServices";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Onboarding = () => {
  const [roleArn, setRoleArn] = useState("");
  const [accountId, setAccountId] = useState("");
  const [accountName, setAccountName] = useState("");
  const [activeStep, setActiveStep] = useState(0);

  const role = useSelector((state) => state?.auth?.role);
  const isAdmin = role === "ROLE_ADMIN";

  const stepData = [
    {
      title: "Create IAM Role",
      subTitle: "Create an IAM Role by following these steps",
      component: (
        <CreateIamRoleStep
          roleArn={roleArn}
          setRoleArn={setRoleArn}
          accountId={accountId}
          setAccountId={setAccountId}
          accountName={accountName}
          setAccountName={setAccountName}
        />
      ),
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

  const currentStep = stepData[activeStep];
  const isLastStep = activeStep === stepData.length - 1;

  const isNextDisabled = () => {
    if (activeStep === 0) {
      return !(roleArn && accountId && accountName);
    }
    if (isLastStep && !isAdmin) {
      return true;
    }
    return false;
  };

  const handleNext = async () => {
    if (isLastStep) {
      if (!isAdmin) {
        toast.error("You are not authorized to submit onboarding");
        return;
      }

      try {
        await createAccount(accountId, accountName, roleArn);
        toast.success("Account onboarded successfully");
        handleCancel(); // reset after success
      } catch (err) {
        toast.error(
          err?.status === 409
            ? "Account already onboarded"
            : "Failed to onboard account"
        );
      }
      return;
    }

    setActiveStep((prev) => prev + 1);
  };

  const handleCancel = () => {
    setRoleArn("");
    setAccountId("");
    setAccountName("");
    setActiveStep(0);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto px-6">
        <h2 className="font-extrabold text-2xl mt-4">{currentStep.title}</h2>
        <p className="mb-6">{currentStep.subTitle}</p>

        {currentStep.component}

        <div className="flex justify-between mt-8 pb-6">
          <button
            onClick={handleCancel}
            className="px-4 py-2 rounded border border-gray-400"
          >
            Cancel
          </button>

          <div className="flex gap-3">
            <button
              disabled={activeStep === 0}
              onClick={() => setActiveStep((prev) => prev - 1)}
              className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
            >
              Back
            </button>

            <button
              disabled={isNextDisabled()}
              onClick={handleNext}
              className="px-4 py-2 rounded bg-green-600 text-white disabled:opacity-50"
            >
              {isLastStep ? "Submit" : "Next"}
            </button>
          </div>
        </div>

        {!isAdmin && isLastStep && (
          <p className="text-red-500 mt-2 text-sm">
            Only admins can submit onboarding
          </p>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
