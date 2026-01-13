import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilterOptions } from "../../../../actions";

const ChartFilterPanel = ({ onReset }) => {
  const dispatch = useDispatch();
  const { options } = useSelector((state) => state.filters); // redux holds API response

  const [expandedFilter, setExpandedFilter] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});

  //   useEffect(() => {
  //     dispatch(fetchFilterOptions());
  //   }, [dispatch]);

  useEffect(() => {
    if (!options || Object.keys(options).length === 0) {
      dispatch(fetchFilterOptions());
    }
  }, [dispatch, options]);

  const FILTERS = Object.keys(options || {}).map((key) => ({
    apiKey: key,
    label: key
      .split("_")
      .map((w) => w[0] + w.slice(1).toLowerCase())
      .join(" "),
  }));

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
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <span className="font-semibold">Filters</span>
        <button
          onClick={onReset}
          className="text-sm text-blue-600 hover:underline"
        >
          Reset All
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 text-sm">
        {FILTERS.map(({ apiKey, label }) => (
          <div key={apiKey} className="relative">
            <div
              className="flex items-center justify-between py-2 cursor-pointer border-b last:border-b-0"
              onClick={() => toggleFilter(apiKey)}
            >
              <span>{label}</span>
              <span className="text-xs text-gray-400">Include Only</span>
            </div>

            {expandedFilter === apiKey && (
              <div className="absolute top-full left-0 w-full bg-white border rounded shadow-lg z-10 mt-1 p-3">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full mb-2 px-2 py-1 border rounded text-sm"
                  onChange={(e) =>
                    setSelectedOptions((prev) => ({
                      ...prev,
                      [`${apiKey}_search`]: e.target.value,
                    }))
                  }
                />

                <div className="max-h-40 overflow-y-auto">
                  {(options[apiKey] || [])
                    .filter((opt) =>
                      opt
                        .toLowerCase()
                        .includes(
                          (
                            selectedOptions[`${apiKey}_search`] || ""
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
                          checked={(selectedOptions[apiKey] || []).includes(
                            option
                          )}
                          onChange={() => toggleOption(apiKey, option)}
                        />
                        {option}
                      </label>
                    ))}
                </div>

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
