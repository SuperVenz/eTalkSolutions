import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import ExtendText from "./ExtendText";
import { useStaticQuery, graphql } from "gatsby";
const Div = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;
const PicContain = styled.div`
  margin-top: 20%;
  height: auto;
  width: 60%;
`;
const Title = styled.h1`
  text-align: center;
  width: 80%;
  font-weight: 500;
  font-size: 2rem;
`;
const Info = styled.p`
  font-size: 1.25em;
  line-height: 2;
`;
function MobileCard() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "Stary.png" }) {
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
            bullet {
              tag
              text
            }
          }
        }
      }
    }
  `);
  return (
    <div className="md:hidden">
      {data.allFile.edges.map((doc, i) => {
        let s = `${i}s`;
        return (
          <Div key={s}>
            <PicContain>
              <Img fluid={doc.node.childImageSharp.fluid} alt="test" />
            </PicContain>
            <Title className="mt-5">
              {data.allMobileViewJson.edges[i].node.title}
            </Title>
            <Info className="mt-5 mb-3 w-1/2 w-4/5">
              {data.allMobileViewJson.edges[i].node.text}
            </Info>
            {data.allMobileViewJson.edges[i].node.bullet.map((e) => {
              return (
                <ExtendText
                  tag={e.tag}
                  text={e.text}
                  key={e.tag}
                  icon={data.file.childImageSharp.fluid}
                />
              );
            })}
          </Div>
        );
      })}
    </div>
  );
}

export default MobileCard;
