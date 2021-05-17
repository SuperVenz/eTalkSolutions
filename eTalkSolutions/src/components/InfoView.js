import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  padding-top: 3%;
  margin-bottom: auto;
  @media (max-width: 650px) {
    display: none;
  }
  @media (max-width: 1300px) {
    width: 80%;
  }
  @media (max-height: 800px), (max-width: 900px) {
  }
`;
const Title = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 3.5em;
  color: #288002;

  @media (max-height: 800px), (max-width: 900px) {
    font-size: 2.5em;
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
  @media (max-height: 800px), (max-width: 900px) {
  1.2em
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
