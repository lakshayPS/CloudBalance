import { useState } from "react";
import { PRIMARY_GROUP_BY, MORE_GROUP_BY } from "./groupByConfig";

const GroupByBar = ({ selected, onChange }) => {
  const [showMore, setShowMore] = useState(false);

  const isPrimary = PRIMARY_GROUP_BY.some((p) => p.value === selected);

  return (
    <div className="flex items-center gap-2 flex-wrap relative">
      <span className="text-sm font-medium mr-1">Group By:</span>

      {PRIMARY_GROUP_BY.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`px-3 py-1 rounded-md border text-sm cursor-pointer
            ${
              selected === opt.value
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-blue-600 border-blue-300 hover:bg-blue-50"
            }`}
        >
          {opt.label}
        </button>
      ))}

      {!isPrimary && selected && (
        <button className="px-3 py-1 rounded-md border text-sm bg-blue-600 text-white border-blue-600 cursor-pointer">
          {MORE_GROUP_BY.find((m) => m.value === selected)?.label}
        </button>
      )}

      <div className="relative">
        <button
          onClick={() => setShowMore(!showMore)}
          className="px-3 py-1 rounded-md border text-sm bg-white text-blue-600 border-blue-300 hover:bg-blue-50 cursor-pointer"
        >
          More ▾
        </button>

        {showMore && (
          <div className="absolute z-50 mt-2 w-56 bg-white border rounded-md shadow-lg">
            {MORE_GROUP_BY.map((opt) => (
              <div
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setShowMore(false);
                }}
                className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
              >
                {opt.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupByBar;
