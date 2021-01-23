import React from "react";
import Layout from "../components/Layout";
import NavSlide from "../components/NavSlide";
import ResponsiveView from "../components/ResponsiveView";
// markup
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
      <main>
        <ResponsiveView />

        <NavSlide />
      </main>
    </Layout>
  );
};

export default IndexPage;
