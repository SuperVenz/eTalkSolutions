import React from "react";
import NavSlide from "../components/NavSlide";
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
        description: "Be able to control your site with a cms like wordpress",
      }}
    >
      <Main>
        <ManageView />
        <NavSlide />
      </Main>
    </Layout>
  );
}
export default manage;
