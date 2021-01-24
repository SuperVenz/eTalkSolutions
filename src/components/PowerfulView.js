import React from "react";
import InfoView from "./InfoView";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import ExtendText from "./ExtendText";
import Img from "gatsby-image";
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  padding-bottom: 5%;
`;
const TextContainer = styled.div`
  margin-top: 5%;
`;
const Clouds = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  right: 25%;
  top: 5%;
`;
function PowerfulView() {
  const data = useStaticQuery(graphql`
    {
      allExtendTextJson {
        nodes {
          tag
          text
        }
      }
      allFile(
        filter: { relativeDirectory: { eq: "Serverless" } }
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
        title="Discover the power of serverless computing."
        text="Serverless computing enables developers to build and deploy applications faster because the need to manage infrastructure like servers and databases is eliminated. The two biggest benefits of serverless computing is allowing developers to focus on the business goals of the code they write and organizations only pay for the computing resources that they use. "
      />

      <Clouds>
        <Img fluid={data.file.childImageSharp.fluid} alt="clouds" />
      </Clouds>
      <TextContainer>
        {data.allExtendTextJson.nodes.map((e, i) => {
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
