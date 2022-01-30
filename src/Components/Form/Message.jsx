import React from "react";
import { Container, Box, Content, InfoMessage, Btn } from "./MessageStyles";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";

const Message = (props) => {
  return (
    <Container
      style={{
        visibility: `${
          props.message.error || props.message.correct ? "visible" : "hidden"
        }`,
        opacity: `${props.message.error || props.message.correct ? "1" : "0"}`,
      }}
    >
      <Box>
        <Content>
          {props.message.error ? (
            <>
              <AiOutlineCloseCircle
                style={{
                  color: "#cc0000",
                  width: "50px",
                  height: "50px",
                  marginRight: "1rem",
                }}
              />
              <InfoMessage>
                Existem campos preenchidos de forma errada ou por preencher!
              </InfoMessage>
            </>
          ) : undefined}
          {props.message.correct ? (
            <>
              <AiOutlineCheckCircle
                style={{
                  color: "#006600",
                  width: "50px",
                  height: "50px",
                  marginRight: "1rem",
                }}
              />
              <InfoMessage>
                Marcação realizada com sucesso. Obrigado!
              </InfoMessage>
            </>
          ) : undefined}
        </Content>

        <Btn onClick={() => props.setMessage({ error: false, correct: false })}>
          Compreendi!
        </Btn>
      </Box>
    </Container>
  );
};

export default Message;
