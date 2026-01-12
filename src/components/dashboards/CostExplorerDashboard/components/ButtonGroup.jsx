import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import InsertChartOutlinedRoundedIcon from "@mui/icons-material/InsertChartOutlinedRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

export default function ToggleButtons({ setSelectedChart }) {
  const [alignment, setAlignment] = React.useState("groupChart");

  const handleSelect = (event, newAlignment) => {
    setAlignment(newAlignment);
    setSelectedChart(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleSelect}
      aria-label="text alignment"
    >
      <ToggleButton value="groupChart" aria-label="left aligned">
        <InsertChartOutlinedRoundedIcon />
      </ToggleButton>
      <ToggleButton value="lineChart" aria-label="centered">
        <TimelineRoundedIcon />
      </ToggleButton>
      <ToggleButton value="stackedColumnChart" aria-label="right aligned">
        <StackedBarChartIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export const MonthYearToggle = ({ granularity, setGranularity }) => {
  return (
    <ButtonGroup size="small">
      <Button
        variant={granularity === "DAILY" ? "contained" : "outlined"}
        onClick={() => setGranularity("DAILY")}
      >
        Daily
      </Button>

      <Button
        variant={granularity === "MONTHLY" ? "contained" : "outlined"}
        onClick={() => setGranularity("MONTHLY")}
      >
        Monthly
      </Button>
    </ButtonGroup>
  );
};
