import React from "react";
import Layout from "../components/Layout";
import TeamView from "../components/TeamView";
import style from "styled-components";
// markup
const Main = style.main`
height:100%;`;
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
      <Main>
        <TeamView />
      </Main>
    </Layout>
  );
}

export default team;
