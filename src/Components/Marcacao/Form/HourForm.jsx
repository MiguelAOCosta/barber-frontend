import React from "react";
import {
  Form,
  Selectable,
  InfoSlected,
  Select,
  List,
  Item,
} from "./FormStyles";
import { IoIosArrowDown } from "react-icons/io";

const HourForm = ({ Selected, setSelected, hour, sethour }) => {
  return (
    <Form style={{ cursor: "pointer" }}>
      <Selectable onClick={() => setSelected(1)}>
        <InfoSlected
          style={{
            color: `${
              hour === undefined || hour === 0 || hour === null
                ? "#999"
                : "#fff"
            }`,
          }}
        >
          {hour === undefined || hour === 0 || hour === null
            ? "Hora"
            : hour + ":00h"}
        </InfoSlected>
        <IoIosArrowDown
          style={{
            color: "#999",
            width: "18px",
            height: "18px",
            marginRight: "5px",
            transform: `${Selected === 1 ? "rotate(180deg)" : "rotate(0deg)"}`,
            transition: "transform 0.2s ease-in-out",
          }}
        />
      </Selectable>

      <Select
        style={{
          transform: `${Selected === 1 ? "scale(1)" : "scale(0)"}`,
          transformOrigin: "top right",
          transition: "transform 0.2s ease-in-out",
        }}
      >
        <List onClick={(e) => sethour(e.target.getAttribute("data-value"))}>
          <Item data-value="9">9:00h</Item>
          <Item data-value="10">10:00h</Item>
          <Item data-value="11">11:00h</Item>
          <Item data-value="12">12:00h</Item>
          <Item data-value="14">14:00h</Item>
          <Item data-value="15">15:00h</Item>
          <Item data-value="16">16:00h</Item>
          <Item data-value="17">17:00h</Item>
          <Item data-value="18">18:00h</Item>
          <Item data-value="19">19:00h</Item>
        </List>
      </Select>
    </Form>
  );
};

export default HourForm;
