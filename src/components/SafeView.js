import React from "react";
import InfoView from "./InfoView";
import styled from "styled-components";
import Img from "gatsby-image";
import ExtendText from "./ExtendText";
import { useStaticQuery, graphql } from "gatsby";
const Wrapper = styled.div`
  display: flex;
  overflow-y: hidden;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-bottom: 3%;
  @media (max-height: 700px) {
    padding-bottom: 10%;
  }
  @media (max-width: 1400px) {
    padding-bottom: 10%;
  }
`;
const MedContainer = styled.div`
  position: absolute;
  z-index: -1;
  right: 0;
  top: 20%;
  height: 0%;
  width: 40%;
  @media (min-width: 1400px) {
    top: 8%;
  }
  @media (max-width: 800px) {
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
  @media (max-height: 700px) {
    padding-bottom: 6%;
    width: 100%;
  }
`;

function SafeView() {
  const data = useStaticQuery(graphql`
    {
      allSafeExtendTextJson {
        nodes {
          tag
          text
        }
      }
      file(relativePath: { eq: "Safe.png" }) {
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
      allFile(
        filter: { relativeDirectory: { eq: "SafeBullets" } }
        sort: { order: ASC, fields: base }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
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
    <Wrapper>
      <InfoView
        title="Fundamentally safe and reliable"
        text="Malicious users on the web steal personal information, bring down sites, and exploit fundamental security flaws in web servers. We deliver your sites using serverless technology called a CDN. Sites like Nikes, Netflix, and Amazon use content delivery networks over servers for their security, cost, and reliability"
      />
      <TextContainer>
        {data.allSafeExtendTextJson.nodes.map((e, i) => {
          let r = `${i}r`;
          return (
            <ExtendText
              key={r}
              tag={e.tag}
              icon={data.allFile.edges[i].node.childImageSharp.fluid}
              text={e.text}
            />
          );
        })}
      </TextContainer>
      <MedContainer>
        <Img fluid={data.file.childImageSharp.fluid} alt="tag" />
      </MedContainer>
    </Wrapper>
  );
}

export default SafeView;
