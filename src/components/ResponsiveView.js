import React from "react";
import InfoView from "./InfoView";
import styled from "styled-components";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import MobileView from "./MobileView";
import ExtendText from "./ExtendText";
import NavSlide from "../components/NavSlide";
const Phon = styled.div`
  z-index: -1;
  position: fixed;
  left: 0;
  bottom: 17%;
  height: 5%;
  width: 10%;
  @media (max-width: 1600px) {
    bottom: 14%;
  }
  @media (max-width: 1300px) {
    display: none;
  }
`;
const Comp = styled.div`
  z-index: -1;
  position: fixed;
  right: -12%;
  top: 10%;
  height: 35%;
  width: 35%;
  @media (max-width: 1300px) {
    display: none;
  }
`;
const Tab = styled.div`
  position: fixed;
  z-index: -1;
  left: 0%;
  top: 10%;
  width: 13%;
  @media (max-width: 1300px) {
    display: none;
  }
`;
const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: 100%;
`;
const TextContainer = styled.div`
  width: 70%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 800px) {
    display: none;
  }
  @media (max-height: 700px) {
    width: 100%;
    justify-content: space-around;
  }
`;

function ResponsiveView() {
  const data = useStaticQuery(graphql`
    {
      allResponsiveExtendTextJson {
        nodes {
          tag
          text
        }
      }
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
              fluid(maxWidth: 1200) {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Container>
      <InfoView
        title="Responsive web apps built to perform and inspire"
        text="Having a web presence in today’s digital landscape is a must. While we develop with performance in mind, we have dedicated Ui designers ready to meet with you to ensure the look and feel of your website inspires your visitors and represents your brand."
      />
      <TextContainer>
        {data.allResponsiveExtendTextJson.nodes.map((e, i) => {
          let r = `${i}r`;
          return (
            <ExtendText
              key={r}
              tag={e.tag}
              text={e.text}
              icon={data.allFile.edges[i].node.childImageSharp.fluid}
            />
          );
        })}
      </TextContainer>
      <Phon>
        <Img
          fluid={data.allFile.edges[3].node.childImageSharp.fluid}
          alt="Phone"
        />
      </Phon>
      <Comp>
        <Img
          fluid={data.allFile.edges[5].node.childImageSharp.fluid}
          alt="Computer"
        />
      </Comp>
      <Tab>
        <Img
          fluid={data.allFile.edges[4].node.childImageSharp.fluid}
          alt="Tablet"
        />
      </Tab>
      <NavSlide />
      <MobileView />
    </Container>
  );
}

export default ResponsiveView;
