import React, { useState } from "react";
import GroupChart from "../charts/GroupChart";
import LineChart from "../charts/LineChart";
import StackedColumnChart from "../charts/StackedColumnChart";
import ToggleButtons from "./ButtonGroup";

const Dashboard = () => {
  const [selectedChart, setSelectedChart] = useState("groupChart");

  const renderChart = () => {
    switch (selectedChart) {
      case "groupChart":
        return <GroupChart />;
      case "lineChart":
        return <LineChart />;
      case "stackedColumnChart":
        return <StackedColumnChart />;
      default:
        return <GroupChart />;
    }
  };

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-semibold">Costs ($)</p>
          <ToggleButtons setSelectedChart={setSelectedChart} />
        </div>

        <div className="p-4 border rounded-lg shadow-sm">{renderChart()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
