import React from "react";
import SvgLink from "./SvgLink";
import Safeicon from "../images/svg/Safeicon.svg";
import SupportIcon from "../images/svg/Supporticon.svg";
import Resicon from "../images/svg/resicon.svg";
import Power from "../images/svg/powerfulicon.svg";
import styled from "styled-components";
import InstallPWA from "./InstallPWA";

const Container = styled.div`
  border-color: #f5f5f7;
  border-style: solid;
  border-top-width: 2px;
  margin-top: 1%;
  background: white;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 2%;
  padding-top: 1%;
  padding-bottom: 10px;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    display: none;
  }
`;

function NavSlide() {
  return (
    <Container>
      <SvgLink to="/" text="Mobile">
        <Resicon />
      </SvgLink>
      <SvgLink to="/safe" text="Safe">
        <Safeicon />
      </SvgLink>
      <SvgLink to="/power" text="Powerful">
        <Power />
      </SvgLink>
      <SvgLink to="/manage" text="Manage">
        <SupportIcon />
      </SvgLink>
      <InstallPWA />
    </Container>
  );
}

export default NavSlide;
