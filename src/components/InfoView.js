import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  height: 70%;
  padding-top: 2%;
  @media (max-width: 600px) {
    display: none;
  }
  @media (max-width: 1300px) {
    padding-bottom: 3%;
    width: 80%;
  }
`;
const Title = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 4em;
  line-height: 100%;
  height: 30%;
  color: #288002;

  @media (max-width: 1400px) {
    font-size: 3em;
  }
`;
const Text = styled.p`
  padding-top: 3%;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5em;
  line-height: 200%;
  width: 90%;
  color: black;
  @media (max-width: 900px) {
    font-size: 1.2em;
  }
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
