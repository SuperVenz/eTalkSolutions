import React from "react";
import Layout from "../components/Layout";
import TeamView from "../components/TeamView";
function team() {
  return (
    <Layout
      pageMeta={{
        title: "Team",
        keywords: ["eTalkSolution", "About Us", "Team"],
        description:
          "Meet our team and learn about eTalk Solution development proccess ",
      }}
    >
      <TeamView />
    </Layout>
  );
}

export default team;
