import React from "react";
import { Link } from "gatsby";
import style from "styled-components";
const Container = style.div`
display:none;
@media (max-width: 800px) {
      display:flex;
      flex-flow: row wrap;
      background:#bfd9b3;
      width:70%;
      margin-top:15%;
      margin-bottom:15%;
      margin-left:15%;
      height:350px;

`;
const Title = style.h1`
font-size:2.5em;
color: #288002;
margin-top:5%;
margin-left:5%;
`;
const Text = style.p`
font-size:1.50em;
margin-left:5%;
`;
const Button = style(Link)`
align-self: end;
background: #288002;
border-radius: 10px;
padding:.70em;
height:20%;
display:flex;
align-items: center;
justify-content: center;
margin-left:30%;
margin-bottom:5%;
width:40%;

`;
function MobileContactBanner({ title, text, button }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Button to="/contact">{button}</Button>
    </Container>
  );
}

export default MobileContactBanner;
