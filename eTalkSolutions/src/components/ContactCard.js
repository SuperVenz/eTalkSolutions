import React from "react";
import style from "styled-components";
import ContactIcon from "./ContactIcon";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const Container = style.div`
width:25%;
  @media (max-width: 768px) {
      width:90%;
    }
`;
const Title = style.h1`
font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 2em;
color: #288002;
margin-bottom:1.5em;
margin-left:5%;
`;
const BackgroundText = style.div`
height:auto;
width:90%;
   position: relative;
`;

const Text = style.h2`
position: absolute;
bottom:5%;
color:white;
margin-left:5%;
margin-bottom:2%;
font-family: Inter;
font-weight: 500;
font-size: 1.50em;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`;
function ContactCard() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "Contact.png" }) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            srcSet
            src
          }
        }
      }
    }
  `);
  return (
    <Container>
      <Title>We look forward to hearing from you </Title>
      <BackgroundText>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="tag"
          loading="eager"
        />
        <Text>Contact Info</Text>
      </BackgroundText>
      <ContactIcon />
    </Container>
  );
}

export default ContactCard;
