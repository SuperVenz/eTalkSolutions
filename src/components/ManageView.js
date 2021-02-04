import React from "react";
import InfoView from "../components/InfoView";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import ExtendText from "./ExtendText";
import NavSlide from "../components/NavSlide";

const Wrapper = styled.div`
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
const Pic = styled.div`
  z-index: -1;
  right: 0%;
  position: absolute;
  @media (max-width: 900px) {
    display: none;
  }
  @media (min-width: 1300px) {
    width: 25%;
    right: 0%;
    top: 15%;
  }
`;
function ManageView() {
  const data = useStaticQuery(graphql`
    {
      allManageExtendTextJson {
        nodes {
          tag
          text
        }
      }
      file(relativePath: { eq: "Manage.png" }) {
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
        filter: { relativeDirectory: { eq: "ManageBullets" } }
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
        title="Manage and control your site after development"
        text="You can stay in control of your site’s content and make changes without spending a dime on revisions. Sites built on the Gatsby cloud integrate with CMS platforms like WordPress or Contentful to pull content.  Thanks to continuous integration your site will update with no downtime."
      />
      <TextContainer>
        {data.allManageExtendTextJson.nodes.map((e, i) => {
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
      <Pic>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Picture of a Document"
        />
      </Pic>
      <NavSlide />
    </Wrapper>
  );
}

export default ManageView;
