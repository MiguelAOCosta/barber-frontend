import React from "react";
import { format, isSameMonth, isSameDay, subMonths, addMonths } from "date-fns";
import { pt } from "date-fns/locale";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { takeMonth } from "./Calendar";
import {
  CalendarContainer,
  MonthInfo,
  Month,
  WeekContainer,
  Week,
  WeekDay,
  Day,
} from "./AppCalendarStyles";

const AppCalendar = ({ selectedDate, setselectedDate }) => {
  const data = takeMonth(selectedDate)();

  function dayColor(day) {
    if (!isSameMonth(day, selectedDate)) return "#999";

    if (isSameDay(day, selectedDate)) {
      return "#974f31";
    } else {
      return "#fff";
    }
  }

  return (
    <CalendarContainer>
      <MonthInfo>
        <IoIosArrowBack
          onClick={() => setselectedDate(subMonths(selectedDate, 1))}
        />
        <Month>{format(selectedDate, "dd MMMM yyyy", { locale: pt })}</Month>
        <IoIosArrowForward
          onClick={() => setselectedDate(addMonths(selectedDate, 1))}
        />
      </MonthInfo>
      <WeekContainer>
        {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map(
          (dayName, index) => (
            <Week key={index}>{dayName}</Week>
          )
        )}
      </WeekContainer>
      {data.map((week, index) => (
        <WeekDay key={index}>
          {week.map((day, index) => (
            <Day
              key={index}
              onClick={() => setselectedDate(day)}
              style={{
                color: `${dayColor(day)}`,
              }}
            >
              {format(day, "dd")}
            </Day>
          ))}
        </WeekDay>
      ))}
    </CalendarContainer>
  );
};

export default AppCalendar;
