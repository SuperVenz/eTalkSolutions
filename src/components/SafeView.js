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
          }
        }
      }
    }
  `);
  return (
    <Wrapper>
      <InfoView
        title="Safe and Secure for your users. Peace of mind for you."
        text="While speed, performance, and design are what we all like to think about when it comes to building the best sites on the internet, security is most often overlooked. Malicious users on the web steal personal information, bring down sites, and exploit fundamental security flaws in web servers. all Solution tackles this problem by using new serverless technology to deliver your websites. No server means no reachable database for malicious requests, DDOS attacks, or accidental exposure.  The security of your digital footprint is something we don’t take for granted."
      />
      <MedContainer>
        <Img fluid={data.file.childImageSharp.fluid} alt="tag" />
      </MedContainer>
    </Wrapper>
  );
}

export default SafeView;
