import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

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
          <AniLink
            hex="#7BB064"
            duration={0.5}
            paintDrip
            to={nav.link}
            activeClassName="underline"
            key={nav.link}
          >
            {nav.tag}
          </AniLink>
        ))}
      </nav>
    </header>
  );
}

export default NavTop;
