import React, { useState } from "react";
import { format } from "date-fns";
import axios from "axios";
import {
  Section,
  SectionTitle,
  Title,
  TitleStyle,
  ImgTitle,
  SectionParagraph,
} from "../../GlobalStyles";
import { SectionAppointment } from "./MarcacaoStyles";
import LogoImg from "../../Images/title.svg";
import BgImg from "../../Images/marcacao.jpg";
import IndexForm from "./Form/IndexForm";
import api from "../../Services/api";

const Marcacao = () => {
  const [Selected, setSelected] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [hour, sethour] = useState(0);
  const [selectedDate, setselectedDate] = useState(new Date());
  const startDate = `${format(selectedDate, "yyyy-MM-dd")}T${hour}:00:00.000Z`;
  const endDate = `${format(selectedDate, "yyyy-MM-dd")}T${
    Number(hour) + 1
  }:00:00.000Z`;
  const [nameIsValid, setNameIsValid] = useState(false);
  const [phoneIsValid, setPhoneIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const checkName = () => {
    if (name.length < 3) {
      setNameIsValid(true);
    } else {
      setNameIsValid(false);
    }
  };

  const checkPhone = () => {
    if (phone.length < 9) {
      setPhoneIsValid(true);
    } else {
      setPhoneIsValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (
        hour !== null &&
        hour !== 0 &&
        name.length >= 3 &&
        phone.length === 9
      ) {
        setLoading(true);
        api
          .post("/api/create-event", { name, phone, startDate, endDate })
          .then((response) => {
            console.log(response.data);

            setName("");
            setPhone("");
            sethour(0);
            setLoading(false);
          })
          .catch((error) => console.log(error.message));
      }

      checkName();
      checkPhone();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Section
      onClick={() => (Selected !== 0 ? setSelected(0) : undefined)}
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
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

      <SectionAppointment>
        <IndexForm
          Selected={Selected}
          setSelected={setSelected}
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          hour={hour}
          sethour={sethour}
          selectedDate={selectedDate}
          setselectedDate={setselectedDate}
          nameIsValid={nameIsValid}
          setNameIsValid={setNameIsValid}
          phoneIsValid={phoneIsValid}
          setPhoneIsValid={setPhoneIsValid}
          checkName={checkName}
          checkPhone={checkPhone}
          handleSubmit={handleSubmit}
          loading={loading}
        />
      </SectionAppointment>
    </Section>
  );
};

export default Marcacao;
