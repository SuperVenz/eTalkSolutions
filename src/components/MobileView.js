import React from "react";
import styled from "styled-components";
import MobileCard from "./MobileCard";
import MobileContactBanner from "./MobileContactBanner";
const MobileWrapper = styled.div`
  @media (min-width: 600px) {
    dispaly: none;
  }
`;
const Tag = styled.footer`
  display: none;
  @media (max-width: 768px) {
    display: block;
    background: #e3e3e3;
    width: 100vw;
    padding: 5%;
    display: flex;
    justify-content: center;
  }
`;
function MobileView() {
  return (
    <MobileWrapper>
      <MobileCard />
      <MobileContactBanner
        title="Demand More From Your Website"
        text="Give us a call or send an email!"
        button="Contact Us"
      />
      <Tag className="tag md:hidden">
        <p>Designed with love, developed with care. </p>
      </Tag>
    </MobileWrapper>
  );
}

export default MobileView;
