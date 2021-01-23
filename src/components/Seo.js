import React from "react";
import Helmet from "react-helmet";
function Seo({ description, title }) {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <html lang="en" amp />
      <title>{`eTalk Solutions | ${title}`}</title>
    </Helmet>
  );
}

export default Seo;
