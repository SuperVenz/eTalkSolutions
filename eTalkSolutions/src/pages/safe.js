import React from "react";
import Layout from "../components/Layout";
import SafeView from "../components/SafeView";
import style from "styled-components";
// markup
const Main = style.main`
height:100%;`;
const safe = () => {
  return (
    <Layout
      pageMeta={{
        title: "Secure",
        keywords: ["Security", "Gatsby", "Cyber Security"],
        description:
          "Increase your security agaisnt Ddos and hackers by employing new serverless technology",
      }}
    >
      <Main>
        <SafeView />
      </Main>
    </Layout>
  );
};

export default safe;
