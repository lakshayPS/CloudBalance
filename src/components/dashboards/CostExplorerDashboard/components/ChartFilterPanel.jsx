// const FILTERS = [
//   "Service",
//   "Instance Type",
//   "Account ID",
//   "Usage Type",
//   "Platform",
//   "Region",
//   "Usage Type Group",
//   "Purchase Option",
//   "API Operation",
//   "Resource",
//   "Charge Type",
//   "Availability Zone",
//   "Tenancy",
//   "Legal Entity",
//   "Billing Entity",
// ];

// const ChartFilterPanel = ({ onReset }) => {
//   return (
//     <div className="h-full flex flex-col">
//       <div className="flex items-center justify-between px-4 py-3 border-b">
//         <span className="font-semibold">Filters</span>
//         <button
//           onClick={onReset}
//           className="text-sm text-blue-600 hover:underline"
//         >
//           Reset All
//         </button>
//       </div>

//       <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 text-sm">
//         {FILTERS.map((item) => (
//           <div
//             key={item}
//             className="flex items-center justify-between py-2 border-b last:border-b-0"
//           >
//             <label className="flex items-center gap-2">
//               <input type="checkbox" />
//               {item}
//             </label>
//             <span className="text-xs text-gray-400">Include Only</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ChartFilterPanel;

import { useState } from "react";

const FILTERS = [
  "Service",
  "Instance Type",
  "Account ID",
  "Usage Type",
  "Platform",
  "Region",
  "Usage Type Group",
  "Purchase Option",
  "API Operation",
  "Resource",
  "Charge Type",
  "Availability Zone",
  "Tenancy",
  "Legal Entity",
  "Billing Entity",
];

// Example options for demo (you can replace with real API data)
const OPTIONS = {
  Service: [
    "Amazon API Gateway",
    "Amazon Athena",
    "Amazon CloudFront",
    "Amazon Cognito",
    "Amazon DynamoDB",
    "Amazon EC2",
  ],
  "Instance Type": ["t2.micro", "t3.medium", "m5.large"],
  "Account ID": ["123456789012", "210987654321"],
  Platform: ["Linux", "Windows", "macOS"],
  Region: ["us-east-1", "us-west-2", "eu-central-1"],
  // Add other filter options here...
};

const ChartFilterPanel = ({ onReset }) => {
  const [expandedFilter, setExpandedFilter] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});

  const toggleFilter = (filter) => {
    setExpandedFilter(expandedFilter === filter ? null : filter);
  };

  const toggleOption = (filter, option) => {
    setSelectedOptions((prev) => {
      const current = prev[filter] || [];
      if (current.includes(option)) {
        return { ...prev, [filter]: current.filter((o) => o !== option) };
      } else {
        return { ...prev, [filter]: [...current, option] };
      }
    });
  };

  const handleApply = () => {
    console.log("Selected filters:", selectedOptions);
    setExpandedFilter(null);
  };

  const handleClose = () => {
    setExpandedFilter(null);
  };

  return (
    <div className="h-full flex flex-col border">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <span className="font-semibold">Filters</span>
        <button
          onClick={onReset}
          className="text-sm text-blue-600 hover:underline"
        >
          Reset All
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 text-sm">
        {FILTERS.map((filter) => (
          <div key={filter} className="relative">
            <div
              className="flex items-center justify-between py-2 cursor-pointer border-b last:border-b-0"
              onClick={() => toggleFilter(filter)}
            >
              <span>{filter}</span>
              <span className="text-xs text-gray-400">Include Only</span>
            </div>

            {/* Dropdown */}
            {expandedFilter === filter && (
              <div className="absolute top-full left-0 w-full bg-white border rounded shadow-lg z-10 mt-1 p-3">
                {/* Search */}
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full mb-2 px-2 py-1 border rounded text-sm"
                  onChange={(e) =>
                    setSelectedOptions((prev) => ({
                      ...prev,
                      [`${filter}_search`]: e.target.value,
                    }))
                  }
                />

                {/* Options */}
                <div className="max-h-40 overflow-y-auto">
                  {(OPTIONS[filter] || [])
                    .filter((opt) =>
                      opt
                        .toLowerCase()
                        .includes(
                          (
                            selectedOptions[`${filter}_search`] || ""
                          ).toLowerCase()
                        )
                    )
                    .map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 py-1 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={(selectedOptions[filter] || []).includes(
                            option
                          )}
                          onChange={() => toggleOption(filter, option)}
                        />
                        {option}
                      </label>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-2 mt-2">
                  <button
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                  <button
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={handleApply}
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartFilterPanel;
