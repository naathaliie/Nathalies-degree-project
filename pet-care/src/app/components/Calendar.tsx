import React, { useEffect, useState } from "react";
import {
  DateCalendar,
  PickersDay,
  PickersDayProps,
  DayCalendarSkeleton,
} from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { Pet } from "../../../types/types";
import { Badge } from "@mui/material";

type CalendarProps = {
  pets?: Pet[];
  pet?: Pet;
};

type HighlightedDaysMap = Map<number, { petName: string }[]>;

const Calendar = ({ pets, pet }: CalendarProps) => {
  const [highlightedMap, setHighlightedMap] = useState<HighlightedDaysMap>(
    new Map()
  );
  const [isLoading, setIsLoading] = useState(false);

  // Normalisera till en array av pets
  const allPets = pet ? [pet] : pets ?? [];

  const getHighlightedDaysMap = (date: Dayjs): HighlightedDaysMap => {
    const map: HighlightedDaysMap = new Map();

    allPets.forEach((p) => {
      p.events?.forEach((event) => {
        const eventDate = dayjs(event.date);
        if (
          eventDate.month() === date.month() &&
          eventDate.year() === date.year()
        ) {
          const day = eventDate.date();
          if (!map.has(day)) map.set(day, []);
          map.get(day)?.push({ petName: p.name });
        }
      });
    });

    return map;
  };

  function CustomDay(
    props: PickersDayProps & { highlightedMap?: HighlightedDaysMap }
  ) {
    const { day, outsideCurrentMonth, highlightedMap, ...other } = props;
    const dayEvents = highlightedMap?.get(day.date());
    const hasEvents = !outsideCurrentMonth && dayEvents && dayEvents.length > 0;

    return (
      <Badge
        overlap="circular"
        badgeContent={
          hasEvents ? (
            <div style={{ display: "flex", gap: "2px" }}>
              {dayEvents!.map((e, i) => (
                <div
                  key={i}
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    backgroundColor: "#0e7490",
                    color: "#fff",
                    fontSize: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                  }}
                >
                  {e.petName.charAt(0).toUpperCase()}
                </div>
              ))}
            </div>
          ) : undefined
        }
      >
        <PickersDay
          {...other}
          day={day}
          outsideCurrentMonth={outsideCurrentMonth}
        />
      </Badge>
    );
  }

  const handleMonthChange = (date: Dayjs) => {
    setIsLoading(true);
    const map = getHighlightedDaysMap(date);
    setHighlightedMap(map);
    setIsLoading(false);
  };

  useEffect(() => {
    if (allPets.length > 0) {
      handleMonthChange(dayjs());
    }
  }, [pets, pet]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        loading={isLoading}
        onMonthChange={handleMonthChange}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: CustomDay,
        }}
        slotProps={{
          day: {
            highlightedMap,
          } as any,
        }}
        sx={{ color: "var(--petCare-sapphireTeal-dark)" }}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
