import React, { useState } from "react";
import style from "styled-components";
import Img from "gatsby-image";
const Wrapper = style.div`
display:inline-block;
position: relative;
margin-left:20%;
margin-top:1%;
  @media (max-width: 1300px) {
padding-bottom:20%;
  }
`;
const Text = style.p` 
height:3em;
width:40em;
margin-left:3%;
`;
const Span = style.span`
margin-right:1%;
`;
const Click = style.div` 
display:flex;
`;
const Tag = style.h1`
outline:none;
font-size:1.5em;

`;
const Icon = style.div`
margin-right:1%;
width:1.5em;
height:1.5em;`;

const ExtendText = ({ tag, text, icon }) => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Click onClick={() => setOpen(!open)} onKeyDown={() => setOpen(!open)}>
        <Icon>
          <Img fluid={icon} />
        </Icon>
        <Tag open={open}>{tag}</Tag>
        <Text open={open}>
          <Span>&#x0226B;</Span>
          {text}
        </Text>
      </Click>
    </Wrapper>
  );
};

export default ExtendText;
