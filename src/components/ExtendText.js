import React from "react";
import style from "styled-components";
import Img from "gatsby-image";
const Wrapper = style.div`
position: relative;
display:flex;
flex-flow: column nowrap;
background: #F5F5F7;
height:100%;
margin-top:1%;
padding:1% 1%;
border-radius: 25px;
width:30%;
  @media (max-width: 750px) {
  width:80%;
  margin-top:5%;
  }


`;
const Text = style.p` 
padding-top:5%;
line-height:1.3em;
`;
const Row = style.div` 
display:flex;
flex-flow: row nowrap;
width:100%;
height:40%;
`;
const Tag = style.h1`
  padding-left:5%;
  margin-top:5%;
  margin-bottom:auto;
    align-self: center;
    font-size:1.5em;
  @media (max-width: 750px) {
    font-size:1.3em;
  }
`;
const Icon = style.div`
  margin-top:2%;
  margin-bottom:auto;
   @media (max-height: 700px) {
     width:2.5em;
  }
width:3em;`;

const ExtendText = ({ tag, text, icon }) => {
  return (
    <Wrapper>
      <Row>
        <Icon>
          <Img fluid={icon} />
        </Icon>
        <Tag>{tag}</Tag>
      </Row>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default ExtendText;
