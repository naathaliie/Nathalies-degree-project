import React from "react";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const Calendar = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        defaultValue={dayjs("2022-10-29", "2022-10-13")}
        readOnly
        sx={{ color: "var(--petCare-sapphireTeal-dark)" }}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
