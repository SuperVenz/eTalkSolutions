import React from "react";
import InfoView from "../components/InfoView";
import { useStaticQuery, graphql } from "gatsby";
import style from "styled-components";
import Img from "gatsby-image";

const Pic = style.div`
width:30%;
  position: absolute;
  right:0;
  top:20%;
`;
function ManageView() {
  const data = useStaticQuery(graphql`
    {
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
    }
  `);
  return (
    <div>
      <InfoView
        title="Be in control of your own site"
        text="World-Class technology should work seamlessly with the tools you are already familiar with. Sites built on the Gatsby cloud integrate with CMS platforms like WordPress or Contentful. You can stay in control of your site’s content without having to learn a new interface. Whether you need us to manage your site or you prefer to do it yourself, we’ve got you covered."
      />
      <Pic>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Picture of a Document"
        />
      </Pic>
    </div>
  );
}

export default ManageView;
