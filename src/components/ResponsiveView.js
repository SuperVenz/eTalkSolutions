import React from "react";
import InfoView from "./InfoView";
import styled from "styled-components";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import MobileView from "./MobileView";
const Phon = styled.div`
  position: fixed;
  left: 0;
  bottom: 5%;
  height: 5%;
  width: 10%;
  @media (max-width: 1300px) {
    display: none;
  }
`;
const Comp = styled.div`
  position: fixed;
  right: -8%;
  top: 20%;
  height: 35%;
  width: 35%;
  @media (max-width: 1300px) {
    display: none;
  }
`;
const Tab = styled.div`
  position: fixed;
  left: 0%;
  top: 15%;
  width: 13%;
  @media (max-width: 1300px) {
    display: none;
  }
`;
const Container = styled.div``;

function ResponsiveView() {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { regex: "/(png)/" }
          relativeDirectory: { eq: "Responsive" }
        }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 1200, quality: 90) {
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
    <div>
      <Container className="hidden md:block">
        <InfoView
          title="Responsive websites built to perform and inspire. "
          text="Having a web presence in today’s digital landscape is a must. However, a web presence that stands out from the rest is undoubtedly a determining factor to your online success. At eTalk Solutions we understand a modern website should be lightning fast, responsive to any screen, and easy to use. While we develop with performance in mind, we have dedicated designers to ensure the look and feel of your website inspires your visitors and represents your brand.

This is all possible using the latest technology in the web industry, GatsbyJS a front end react javascript framework.
 "
        />
        <Phon>
          <Img
            fluid={data.allFile.edges[1].node.childImageSharp.fluid}
            alt="Phone"
          />
        </Phon>
        <Comp>
          <Img
            fluid={data.allFile.edges[0].node.childImageSharp.fluid}
            alt="Computer"
          />
        </Comp>
        <Tab>
          <Img
            fluid={data.allFile.edges[2].node.childImageSharp.fluid}
            alt="Tablet"
          />
        </Tab>
      </Container>
      <MobileView />
    </div>
  );
}

export default ResponsiveView;
