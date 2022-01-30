import React from "react";
import { InputForm, Label, Input, ErrorMessage } from "./FormImputStyles";
import HourInput from "./HourInput";

const FormInput = (props) => {
  const { label, errormessage, onChange, id, cursor, ...inputProps } = props;

  return (
    <InputForm>
      <Label>{label}</Label>
      <Input {...inputProps} onChange={onChange} style={{ cursor }} />
      <ErrorMessage>{errormessage}</ErrorMessage>

      {id === 3 ? (
        <HourInput
          inputHour={props.inputHour}
          HourValue={props.HourValue}
          SetHourValue={props.SetHourValue}
        />
      ) : undefined}
    </InputForm>
  );
};

export default FormInput;
