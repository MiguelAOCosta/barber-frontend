import React from "react";
import CalendarForm from "./CalendarForm";
import {
  AppointmentForm,
  Form,
  InputForm,
  SubmitForm,
  BtnForm,
  Waiting,
} from "./FormStyles";
import HourForm from "./HourForm";
import { IoIosClose } from "react-icons/io";

const IndexForm = ({
  Selected,
  setSelected,
  name,
  setName,
  phone,
  hour,
  sethour,
  selectedDate,
  setselectedDate,
  setPhone,
  nameIsValid,
  setNameIsValid,
  phoneIsValid,
  setPhoneIsValid,
  checkName,
  checkPhone,
  handleSubmit,
  loading,
}) => {
  const isInputText = (e) => {
    let char = String.fromCharCode(e.which);

    if (/[0-9]/.test(char)) {
      e.preventDefault();
    }
  };

  const validName = () => {
    checkName();
  };

  const validPhone = () => {
    checkPhone();
  };

  const isInputNumber = (e) => {
    let char = String.fromCharCode(e.which);

    if (!/[0-9]/.test(char)) {
      e.preventDefault();
    }
  };

  return (
    <AppointmentForm onSubmit={handleSubmit}>
      <Form>
        <InputForm
          type="text"
          id="name"
          minLength="3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyPress={isInputText}
          onBlur={validName}
          placeholder="Nome (mínimo 3 letras)"
        />
        <IoIosClose
          style={{
            color: "#ff0000",
            width: "25px",
            height: "25px",
            opacity: `${nameIsValid ? "1" : "0"}`,
            transition: "all 0.15s ease-in-out",
          }}
        />
      </Form>
      <Form>
        <InputForm
          type="text"
          id="phone"
          minLength="9"
          maxLength="9"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onKeyPress={isInputNumber}
          onBlur={validPhone}
          placeholder="Telemóvel (9 dígitos)"
        />
        <IoIosClose
          style={{
            color: "#ff0000",
            width: "25px",
            height: "25px",
            opacity: `${phoneIsValid ? "1" : "0"}`,
            transition: "all 0.15s ease-in-out",
          }}
        />
      </Form>

      <HourForm
        Selected={Selected}
        setSelected={setSelected}
        hour={hour}
        sethour={sethour}
        nameIsValid={nameIsValid}
        setNameIsValid={setNameIsValid}
        phoneIsValid={phoneIsValid}
        setPhoneIsValid={setPhoneIsValid}
        handleSubmit={handleSubmit}
      />

      <CalendarForm
        Selected={Selected}
        setSelected={setSelected}
        selectedDate={selectedDate}
        setselectedDate={setselectedDate}
      />

      <SubmitForm>
        <BtnForm type="submit">Fazer Marcação</BtnForm>
        <Waiting style={{ visibility: `${loading ? "visible" : "hidden"}` }} />
      </SubmitForm>
    </AppointmentForm>
  );
};

export default IndexForm;
