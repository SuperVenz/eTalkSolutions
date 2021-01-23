import React from "react";
import NavSlide from "../components/NavSlide";
import ManageView from "../components/ManageView";
import Layout from "../components/Layout";
function manage() {
  return (
    <Layout
      pageMeta={{
        title: "Manage",
        keywords: ["CMS", "Content Manage System"],
        description: "Be able to control your site with a cms like wordpress",
      }}
    >
      <ManageView />
      <NavSlide />
    </Layout>
  );
}
export default manage;
