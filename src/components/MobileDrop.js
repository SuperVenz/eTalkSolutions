import React, { useState } from "react";
import { Link } from "gatsby";
import DropMenu from "../images/svg/DropMenu.svg";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Top = styled.div`
  z-index: 30;
  position: ${(props) => (props.open ? "fixed" : "static")};
  display: flex;
  justify-content: center;
  align-content: center;
  right: 9%;
  height: 25px;
  top: 5%;
  cursor: "pointer";
`;
const Menue = styled.div`
  height: 30%;
  margin-right: 10%;
`;
const Nav = styled.nav`
  display: ${(props) => (props.open ? "flex" : "none")};
  height: 100vh;
  z-index: 10;
  justift-content: center;
  flex-flow: column nowrap;
  align-content: space-around;
  position: absolute;
  width: 100%;
  height: 444px;
  left: 0px;
  top: 0px;
  background: #eaf2e6;
  justify-content: flex-end;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 25px;
`;
const MobileDrop = () => {
  const data = useStaticQuery(graphql`
    {
      allNavJson {
        nodes {
          link
          tag
        }
      }
    }
  `);
  const [open, setOpen] = useState(false);
  return (
    <Menue open={open} className="md:hidden">
      <Top
        open={open}
        className=""
        onClick={() => setOpen(!open)}
        onKeyDown={() => setOpen(!open)}
      >
        <DropMenu aria-hidden="true" focusable="false" className="h-full" />
      </Top>
      <Nav open={open}>
        {data.allNavJson.nodes.map((nav) => (
          <AniLink
            cover
            bg="
    url(https://images.unsplash.com/photo-1612153018787-4899c6e056d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)
    center / cover   /* position / size */
    no-repeat        /* repeat */
    fixed            /* attachment */
    padding-box      /* origin */
    content-box      /* clip */
    white            /* color */
  "
            to={nav.link}
            className="mb-14 ml-5 w-1/6"
            activeClassName="underline"
            key={nav.tag}
          >
            {nav.tag}
          </AniLink>
        ))}
      </Nav>
    </Menue>
  );
};

export default MobileDrop;
