import React from "react";
import Layout from "../components/Layout";
import PowerfulView from "../components/PowerfulView";
import style from "styled-components";
// markup
const Main = style.main`
height:100%;`;
function power() {
  return (
    <Layout
      pageMeta={{
        title: "Serverless",
        keywords: ["Serverless", "Jamstack", "Cloud"],
        description: "Have your site built using new Serverless Technology ",
      }}
    >
      <Main>
        <PowerfulView />
      </Main>
    </Layout>
  );
}

export default power;
