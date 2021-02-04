import React from "react";
import ManageView from "../components/ManageView";
import Layout from "../components/Layout";
import style from "styled-components";
// markup
const Main = style.main`
height:100%;`;
function manage() {
  return (
    <Layout
      pageMeta={{
        title: "Manage",
        keywords: ["CMS", "Content Manage System"],
        description:
          "Be able to control your site with a CMS like wordpress,shopify,and contentful",
      }}
    >
      <Main>
        <ManageView />
      </Main>
    </Layout>
  );
}
export default manage;
