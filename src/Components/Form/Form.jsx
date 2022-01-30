import React, { useState } from "react";
import {
  Section,
  SectionTitle,
  Title,
  TitleStyle,
  ImgTitle,
  SectionParagraph,
} from "../../GlobalStyles";
import {
  SectionForm,
  FormContainer,
  BtnForm,
  SubmitForm,
  Waiting,
} from "./FormStyles";
import { Inputs } from "./InputsData";
import LogoImg from "../../Images/title.svg";
import BgImg from "../../Images/marcacao.jpg";
import FormInput from "./Input/FormInput";
import api from "../../Services/api";
import Message from "./Message";

const Form = () => {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    hour: "",
    date: "",
  });
  const name = values.name;
  const hour = values.hour;
  const startDate = `${values.date}T${values.hour}:00:00.000Z`;
  const endDate = `${values.date}T${Number(values.hour) + 1}:00:00.000Z`;
  const [inputHour, setInputHour] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    error: false,
    correct: false,
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleInput = (e) => {
    if (e === 3) {
      if (inputHour === false) {
        setInputHour(true);
      } else {
        setInputHour(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        values.name.length >= 3 &&
        values.phone.length === 9 &&
        values.hour !== "" &&
        values.date !== ""
      ) {
        setLoading(true);

        await api
          .post("/api/create-event", { name, hour, startDate, endDate })
          .then((response) => {
            // console.log(response);

            setValues({ name: "", phone: "", hour: "", date: "" });
            setMessage({ correct: true });
            setLoading(false);
          });
      } else {
        setMessage({ error: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Section
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      onClick={() => (inputHour ? setInputHour(false) : undefined)}
    >
      <SectionTitle>
        <Title style={{ color: "#fff" }}>Fazer Marcação</Title>
        <TitleStyle>
          <ImgTitle src={LogoImg} />
        </TitleStyle>

        <SectionParagraph style={{ color: "#fff" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui officiis
          quos quidem quisquam eligendi sed nihil porro earum accusantium
          dolorum?
        </SectionParagraph>
      </SectionTitle>

      <SectionForm>
        <FormContainer onSubmit={handleSubmit}>
          {Inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={
                input.id === 3 && values.hour !== ""
                  ? values[input.name] + ":00h"
                  : values[input.name]
              }
              onChange={onChange}
              onClick={() => handleInput(input.id)}
              inputHour={inputHour}
              HourValue={values}
              SetHourValue={setValues}
            />
          ))}

          <SubmitForm>
            <BtnForm type="submit">Fazer Marcação</BtnForm>
            <Waiting
              style={{ visibility: `${loading ? "visible" : "hidden"}` }}
            />
          </SubmitForm>
        </FormContainer>
      </SectionForm>
      <Message message={message} setMessage={setMessage} />
    </Section>
  );
};

export default Form;
