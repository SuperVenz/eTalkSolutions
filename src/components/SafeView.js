import React from "react";
import InfoView from "./InfoView";
import styled from "styled-components";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
const Wrapper = styled.div``;
const MedContainer = styled.div`
  position: fixed;
  right: 0;
  top: 20%;
  height: 0%;
  width: 40%;
`;

function SafeView() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "Safe.png" }) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            srcSet
            src
            tracedSVG
          }
        }
      }
    }
  `);
  return (
    <Wrapper>
      <InfoView
        title="Safe and Secure for your users. Peace of mind for you."
        text="Serverless computing enables developers to build and deploy applications faster because the need to manage infrastructure like servers and databases is eliminated. The two biggest benefits of serverless computing is allowing developers to focus on the business goals of the code they write and organizations only pay for the computing resources that they actually use."
      />
      <MedContainer>
        <Img fluid={data.file.childImageSharp.fluid} alt="tag" />
      </MedContainer>
    </Wrapper>
  );
}

export default SafeView;
