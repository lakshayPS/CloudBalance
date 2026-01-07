const Stepper = ({ steps, activeStep }) => {
  return (
    <div className="flex items-center w-full justify-between">
      {steps.map((label, index) => (
        <div key={index} className="flex items-center w-full">
          <div
            className={`
              flex items-center justify-center
              w-8 h-8 rounded-full text-sm font-semibold
              ${
                index < activeStep
                  ? "bg-green-600 text-white"
                  : index === activeStep
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }
            `}
          >
            {index < activeStep ? "✓" : index + 1}
          </div>

          <span className="ml-2 text-sm whitespace-nowrap">{label}</span>

          {index !== steps.length - 1 && (
            <div
              className={`flex-1 h-0.5 mx-4 ${
                index < activeStep ? "bg-green-600" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
