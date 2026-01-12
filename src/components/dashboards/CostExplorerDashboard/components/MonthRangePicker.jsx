import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const MonthRangePicker = ({ fromMonth, toMonth, onFromChange, onToChange }) => {
  return (
    <div className="flex items-center gap-3">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="From"
          views={["year", "month"]}
          value={fromMonth}
          onChange={onFromChange}
          maxDate={toMonth}
          slotProps={{ textField: { size: "small" } }}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="To"
          views={["year", "month"]}
          value={toMonth}
          onChange={onToChange}
          minDate={fromMonth}
          slotProps={{ textField: { size: "small" } }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default MonthRangePicker;
