import { useEffect, useState } from "react";
import GroupByBar from "./GroupByBar";
import ToggleButtons from "./ButtonGroup";
import DynamicChart from "../charts/DynamicChart";
import { getMonthlyCostByGroup } from "../../../../services/chartServices";
import CostTable, { buildFullCostTable } from "./CostTable";
import dayjs from "dayjs";
import MonthRangePicker from "./MonthRangePicker";
import ChartFilterPanel from "./ChartFilterPanel";
import TuneIcon from "@mui/icons-material/Tune";

const Dashboard = () => {
  const [groupBy, setGroupBy] = useState("SERVICE");
  const [selectedChart, setSelectedChart] = useState("groupChart");
  const [tableData, setTableData] = useState(null);

  const [fromMonth, setFromMonth] = useState(dayjs().startOf("month"));
  const [toMonth, setToMonth] = useState(dayjs().endOf("month"));
  const [chartData, setChartData] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const getChartType = () => {
    switch (selectedChart) {
      case "groupChart":
        return "mscolumn2d";
      case "lineChart":
        return "msline";
      case "stackedColumnChart":
        return "stackedcolumn2d";
      default:
        return "mscolumn2d";
    }
  };

  const handleFromChange = (value) => {
    setFromMonth(value.startOf("month"));
    if (value.isAfter(toMonth, "month")) {
      setToMonth(value.endOf("month"));
    }
  };

  const handleToChange = (value) => {
    setToMonth(value.endOf("month"));
    if (value.isBefore(fromMonth, "month")) {
      setFromMonth(value.startOf("month"));
    }
  };

  useEffect(() => {
    const params = {
      groupBy,
      fromYear: fromMonth.year(),
      fromMonth: fromMonth.month() + 1,
      toYear: toMonth.year(),
      toMonth: toMonth.month() + 1,
    };

    getMonthlyCostByGroup(params).then((res) => {
      const data = res.data || [];
      setTableData(buildFullCostTable(data));
      setChartData(data);
    });
  }, [groupBy, fromMonth, toMonth]);

  return (
    <div className="h-screen flex flex-col bg-white">
      <div className="px-6 py-4 flex flex-col flex-1 overflow-hidden">
        <p className="text-lg font-semibold mb-3">Costs ($)</p>

        <div className="flex justify-between items-center mb-4">
          <GroupByBar selected={groupBy} onChange={setGroupBy} />

          <div className="flex items-center gap-3">
            <MonthRangePicker
              fromMonth={fromMonth}
              toMonth={toMonth}
              onFromChange={handleFromChange}
              onToChange={handleToChange}
            />

            <ToggleButtons setSelectedChart={setSelectedChart} />

            <div className="border-2 border-r-2 border-blue-700">
              <TuneIcon
                onClick={() => setIsFilterOpen((prev) => !prev)}
                className="text-[28px] cursor-pointer hover:text-gray-700"
                title="Filters"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-1 min-w-0 gap-0">
          <div className="flex-1 min-w-0 transition-all duration-300">
            <div className="border rounded-lg shadow-sm mb-4 overflow-hidden">
              <div className="h-[520px]">
                <div className="p-4 h-full">
                  <DynamicChart type={getChartType()} data={chartData} />
                </div>
              </div>
            </div>

            {tableData && <CostTable data={tableData} />}
          </div>

          <div
            className={`
              transition-all duration-300 ease-in-out
              ${isFilterOpen ? "w-[360px]" : "w-0"}
              overflow-hidden shrink-0 border-l bg-white
          `}
          >
            <ChartFilterPanel onReset={() => console.log("reset filters")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
