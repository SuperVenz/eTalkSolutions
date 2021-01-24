import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import style from "styled-components";
import Img from "gatsby-image";

const Wrapper = style.div`
margin-left:10%;
margin-top:1%;
margin-right:20%;
font-family: Inter;
  @media (max-width: 639px) {
  margin-left:10%;
  margin-right:10%;
  }
font-style: normal;
`;
const Title = style.h1`
font-size:2em;
margin-bottom:3%;
color: #288002;

`;
const TeamBox = style.div`
width:100%;
height:100%;
`;
const TeamTitle = style.h2`
font-size:1.5em;
margin-top:5%;
margin-bottom:1%;

`;
const TeamText = style.p`

margin-bottom:3%;`;
const TeamView = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "Team.png" }) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            src
            sizes
            srcSet
          }
        }
        base
      }
      allTeamJson {
        edges {
          node {
            text
            title
          }
        }
      }
    }
  `);
  return (
    <Wrapper>
      <Title>Our Team</Title>
      <Img fluid={data.file.childImageSharp.fluid} />
      {data.allTeamJson.edges.map((doc, i) => {
        let f = `${i}f`;
        return (
          <TeamBox key={f}>
            <TeamTitle>{doc.node.title}</TeamTitle>
            <TeamText>{doc.node.text}</TeamText>
          </TeamBox>
        );
      })}
    </Wrapper>
  );
};

export default TeamView;
