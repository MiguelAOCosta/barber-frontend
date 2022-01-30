import React from "react";
import { SelectHour, List, Item } from "./FormImputStyles";
import { InputHour } from "../InputsData";

const HourInput = ({ inputHour, HourValue, SetHourValue }) => {
  return (
    <SelectHour inputHour={inputHour}>
      <List>
        {InputHour.map((hour, index) => (
          <Item
            key={index}
            data-value={hour.value}
            onClick={(e) =>
              SetHourValue({
                ...HourValue,
                hour: e.target.getAttribute("data-value"),
              })
            }
          >
            {hour.hour}
          </Item>
        ))}
      </List>
    </SelectHour>
  );
};

export default HourInput;
