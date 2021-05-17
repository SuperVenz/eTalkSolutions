import React from "react";
import { Link } from "gatsby";
import style from "styled-components";
const Container = style.div`
display:none;
@media (max-width: 800px) {
      display:flex;
      flex-flow: row wrap;
      background:#bfd9b3;
      width:90%;
      margin-top:15%;
      margin-bottom:15%;
      margin-left:5%;
      height:40%;

`;
const Title = style.h1`
font-size:2.5em;
color: #288002;
line-height:1;
margin-top:5%;
margin-bottom:5%;
margin-left:5%;
`;
const Text = style.p`
font-size:1.50em;
margin-left:5%;
color: #288002;
`;
const Button = style(Link)`
align-self: end;
background: #288002;
border-radius: 10px;
font-color:#F5F5F7;
padding:.70em;
height:30%;
display:flex;
align-items: center;
justify-content: center;
margin-left:5%;
margin-top:10%;
margin-bottom:10%;
width:50%;
color:#F5F5F7;

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
