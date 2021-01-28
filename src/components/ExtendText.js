import React from "react";
import style from "styled-components";
import Img from "gatsby-image";
const Wrapper = style.div`
position: relative;
display:flex;
flex-flow: column nowrap;
background: #F5F5F7;
height:100%;
padding:2% 2%;
border-radius: 25px;
width:30%;
  @media (max-width: 639px) {
  
  width:80%;
  margin-top:5%;
  }


`;
const Text = style.p` 
padding-top:5%;
line-height:20px;
  @media (max-width: 639px) {
  line-height:30px;
  }

`;
const Row = style.div` 
display:flex;
flex-flow: row nowrap;
width:100%;
height:40%;

`;
const Tag = style.h1`
  padding-left:5%;
    align-self: center;
    font-size:1.5em;
  @media (max-width: 639px) {
    font-size:1.3em;
  }
   @media (max-width: 900px) {
    font-size:1.2em;
  }
 
`;
const Icon = style.div`
  @media (max-width: 639px) {
  padding-right:2%;
padding-top:2%;
  }
    @media (max-width: 900px) {
      padding-right:5%;
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
