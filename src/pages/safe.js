import React from "react";
import NavSlide from "../components/NavSlide";
import Layout from "../components/Layout";
import SafeView from "../components/SafeView";
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
      <SafeView />
      <NavSlide />
    </Layout>
  );
};

export default safe;
