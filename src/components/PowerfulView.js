import React from "react";
import InfoView from "./InfoView";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import ExtendText from "./ExtendText";
import Img from "gatsby-image";
const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-width: 900px) {
    padding-bottom: 5%;
  }
`;
const TextContainer = styled.div`
  width: 70%;
  padding-bottom: 4%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-height: 600px) {
    padding-bottom: 6%;
  }
`;
const Clouds = styled.div`
  z-index: -1;
  width: 300px;
  height: 300px;
  position: absolute;
  right: 22%;
  top: 3%;
`;
function PowerfulView() {
  const data = useStaticQuery(graphql`
    {
      allPowerfulExtendTextJson {
        nodes {
          tag
          text
        }
      }
      allFile(
        filter: { relativeDirectory: { eq: "PowerfulBullets" } }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(quality: 90) {
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
      file(relativePath: { eq: "Clouds.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `);
  return (
    <Wrapper>
      <InfoView
        title="Discover the power of progressive web apps"
        text="Gatsby sites are fundamentally different from today's sites. All gatsby sites are progressive web apps that are inherently faster, more secure, and recognized as the most accessible web framework for impaired users by WebAIM."
      />

      <Clouds>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="clouds"
          loading="eager"
        />
      </Clouds>
      <TextContainer>
        {data.allPowerfulExtendTextJson.nodes.map((e, i) => {
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
    </Wrapper>
  );
}

export default PowerfulView;
