import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 80x;
  height: 80px;
`;
const NavListLink = styled(Link)`
  background: rgba(0, 0, 0, 0.1);
  &.active {
    background: rgba(220, 243, 200, 1);
  }
`;
const Text = styled.p`
  text-align: center;
`;
function SvgLink({ children, text, to }) {
  return (
    <Container>
      <NavListLink
        to={to}
        className="rounded-full h-16 w-16 flex items-center justify-center bg-gray-200"
        activeClassName="active"
      >
        {children}
      </NavListLink>
      <Text className="active">{text}</Text>
    </Container>
  );
}

export default SvgLink;
