import React from "react";
import NavSlide from "../components/NavSlide";
import Layout from "../components/Layout";
import PowerfulView from "../components/PowerfulView";
function power() {
  return (
    <Layout
      pageMeta={{
        title: "Serverless",
        keywords: ["Serverless", "Jamstack", "Cloud"],
        description: "Have your site built using new Serverless Technology ",
      }}
    >
      <PowerfulView />
      <NavSlide />
    </Layout>
  );
}

export default power;
