import React from "react";
import { format } from "date-fns";
import { Form, Selectable, InfoSlected, Select } from "./FormStyles";
import { GoCalendar } from "react-icons/go";
import AppCalendar from "../Calendar/AppCalendar";

const CalendarForm = ({
  Selected,
  setSelected,
  selectedDate,
  setselectedDate,
}) => {
  return (
    <Form style={{ cursor: "pointer" }}>
      <Selectable
        onClick={() => (Selected === 2 ? setSelected(0) : setSelected(2))}
      >
        <InfoSlected>{format(selectedDate, "dd.MM.yyyy")}</InfoSlected>
        <GoCalendar
          style={{
            color: "#999",
            width: "20px",
            height: "20px",
            marginRight: "5px",
          }}
        />
      </Selectable>

      <Select
        style={{
          transform: `${Selected === 2 ? "scale(1)" : "scale(0)"}`,
          transformOrigin: "top right",
          transition: "transform 0.2s ease-in-out",
        }}
      >
        <AppCalendar
          selectedDate={selectedDate}
          setselectedDate={setselectedDate}
        />
      </Select>
    </Form>
  );
};

export default CalendarForm;
