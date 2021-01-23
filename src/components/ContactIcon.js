import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import style from "styled-components";

const Wrapper = style.div`
height:7em;
margin-top:5%;
width:100%;
display:flex;
margin-left:5%;

`;
const Container = style.div`
display:flex;
flex-flow: column nowrap;
height:15em;
width:100%;`;

const Icon = style.div`
height:3em;
width:3em;

`;
const Info = style.div`
display:flex;
flex-flow:column nowrap;
margin-left:10%;
font-size: 1.3em;

`;

function ContactIcon() {
  const data = useStaticQuery(graphql`
    {
      allContactIconJson {
        edges {
          node {
            Contact
            Link
            Tag
          }
        }
      }
      allFile(
        filter: {
          extension: { regex: "/(png)/" }
          relativeDirectory: { eq: "ContactIcon" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 1200) {
                aspectRatio
                base64
                sizes
                src
                srcSet
                tracedSVG
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Container>
      {data.allFile.edges.map(({ node }, i) => {
        return (
          <Wrapper>
            <Icon>
              <Img fluid={node.childImageSharp.fluid} />
            </Icon>
            <Info>
              {data.allContactIconJson.edges[i].node.Tag}
              <a href={data.allContactIconJson.edges[i].node.Link}>
                {data.allContactIconJson.edges[i].node.Contact}
              </a>
            </Info>
          </Wrapper>
        );
      })}
    </Container>
  );
}

export default ContactIcon;
