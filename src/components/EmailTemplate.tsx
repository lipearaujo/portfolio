import React from "react";
import {
  Html,
  Container,
  Preview,
  Head,
  Button,
  Heading,
  Tailwind,
  Body,
  Section,
  Text,
  Hr,
} from "@react-email/components";

type Props = {
  name: "string";
  lastname: "string";
  phone: "string";
  email: "string";
  message: "string";
};

const EmailTemplate = ({ name, lastname, phone, email, message }: Props) => {
  return (
    <Html lang="en">
      <Head />
      <Preview>Nova mensagem de seu site portfolio!</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section>
              <Heading>
                Você recebeu a seguinte mensagem do formulário de contato:
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Enviado de: {email}</Text>
              <Text>Nome: {name} {lastname}</Text>
              <Text>Contato: {phone}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailTemplate;
