import React from "react";
import { CtaContainer, CtaSlogan } from "./CtaStyles";
import { SlideBtn } from "../../GlobalStyles";

const Cta = () => {
  return (
    <CtaContainer>
      <CtaSlogan>
        Fazer-te sentir bem
        <br />
        está no nosso patrimônio
      </CtaSlogan>
      <SlideBtn>Fazer Marcação</SlideBtn>
    </CtaContainer>
  );
};

export default Cta;
