import React from "react";
import SvgLink from "./SvgLink";
import Safeicon from "../images/svg/Safeicon.svg";
import SupportIcon from "../images/svg/Supporticon.svg";
import Resicon from "../images/svg/resicon.svg";
import Power from "../images/svg/powerfulicon.svg";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-flow: row nowrap;
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
    </Container>
  );
}

export default NavSlide;