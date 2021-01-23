import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
const Div = styled.div`
  display: flex;
  @media (max-width: 639px) {
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
  }
`;
const PicContain = styled.div`
  margin-top: 20%;
  height: auto;
  width: 60%;
`;
const Title = styled.h1`
  font-weight: 500;
  font-size: 2rem;
`;
const Info = styled.p`
  font-size: 1.25em;
`;
function MobileCard() {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { regex: "/(png)/" }
          relativeDirectory: { eq: "MobileImage" }
        }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
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
      allMobileViewJson {
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
    <div className="md:hidden">
      {data.allFile.edges.map((doc, i) => {
        return (
          <Div>
            <PicContain>
              <Img fluid={doc.node.childImageSharp.fluid} alt="test" />
            </PicContain>
            <Title className="mt-5">
              {data.allMobileViewJson.edges[i].node.title}
            </Title>
            <Info className="mt-5 mb-3 w-1/2 w-4/5">
              {data.allMobileViewJson.edges[i].node.text}
            </Info>
          </Div>
        );
      })}
    </div>
  );
}

export default MobileCard;
