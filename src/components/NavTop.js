import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
function NavTop() {
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
  return (
    <header className="NavTop md:border-b-2 ">
      <nav
        className="md:flex hidden md:content md:text-xl opacity-60	
  md:justify-around sticky md:items-center md:h-full md:w-full"
      >
        {data.allNavJson.nodes.map((nav) => (
          <Link to={nav.link} activeClassName="underline" key={nav.link}>
            {nav.tag}
          </Link>
        ))}
      </nav>
      <nav className="md:hidden"></nav>
    </header>
  );
}

export default NavTop;
