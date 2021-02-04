import React from "react";
import Layout from "../components/Layout";
import ResponsiveView from "../components/ResponsiveView";
import style from "styled-components";
// markup
const Main = style.main`
height:100%;`;

const IndexPage = () => {
  return (
    <Layout
      pageMeta={{
        title: "Home",
        keywords: [
          "Web Development",
          "Web",
          "Design",
          "Web App",
          "eTalk Solutions",
          "San Diego",
        ],
        description:
          "San Diego Web Development Company specializing in progessive web apps for small business ",
      }}
    >
      <Main>
        <ResponsiveView />
      </Main>
    </Layout>
  );
};

export default IndexPage;
