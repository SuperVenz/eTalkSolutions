import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 20%;
  width: 50%;
  margin-top: 6%;
  height: 100%;
  @media (max-width: 1450px) {
    padding-bottom: 10%;
  }
`;
const Title = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 4em;
  line-height: 100%;
  color: #288002;
`;
const Text = styled.p`
  margin-top: 5%;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5em;
  line-height: 200%;
  height: 100%;
  width: 90%;
  color: black;
`;
function InfoView({ title, text }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
}

export default InfoView;
