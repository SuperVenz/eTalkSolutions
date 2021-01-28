import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  height: 70%;
  padding-top: 2%;
  @media (max-width: 650px) {
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
  font-size: 3.5em;
  line-height: 100%;
  height: 30%;
  color: #288002;

  @media (max-height: 800px), (max-width: 900px) {
    padding-top: 2%;
    font-size: 3em;
    padding-bottom: 10%;
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
  @media (max-height: 800px) {
    font-size: 1em;
    padding-top: 7%;
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
