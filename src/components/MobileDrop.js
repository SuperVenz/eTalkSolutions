import React, { useState } from "react";
import { Link } from "gatsby";
import DropMenu from "../images/svg/DropMenu.svg";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

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
          <Link
            to={nav.link}
            className="mb-14 ml-5 w-1/6"
            activeClassName="underline"
            key={nav.tag}
          >
            {nav.tag}
          </Link>
        ))}
      </Nav>
    </Menue>
  );
};

export default MobileDrop;
