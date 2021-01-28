import React from "react";
import styled from "styled-components";
import MobileCard from "./MobileCard";
import MobileContactBanner from "./MobileContactBanner";
const MobileWrapper = styled.div`
  @media (min-width: 600px) {
    dispaly: none;
  }
`;
function MobileView() {
  return (
    <MobileWrapper>
      <MobileCard />
      <MobileContactBanner
        title="Demand More From Your Website"
        text="Give us a call or send  a email!"
        button="Contact Us"
      />
    </MobileWrapper>
  );
}

export default MobileView;
