import React from "react";
import NavTop from "./NavTop";
import MobileDrop from "./MobileDrop";
import "../assets/styles/GridLayout.css";
import style from "styled-components";
import Helmet from "react-helmet";
import { GatsbySeo } from "gatsby-plugin-next-seo";
const Tag = style.footer`
display:none;
 @media (max-width: 768px) {
display:block;
background:#E3E3E3;
width:100vw;
padding:5%;
display:flex;
color:#666666;
justify-content:center;
}
`;
const Logo = style.span`
color:#288002;`;
export default function Layout({ pageMeta, children }) {
  console.log(children);
  return (
    <div className="layout ">
      <GatsbySeo
        canonical="https://etalksolutions.com/"
        openGraph={{
          url: "https://etalksolutions.com/",
          description: "A San Diego Web Development Company",
          images: [
            {
              url:
                "https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?cs=srgb&dl=pexels-negative-space-160107.jpg&fm=jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url:
                "https://images.pexels.com/photos/326518/pexels-photo-326518.jpeg?cs=srgb&dl=pexels-tranmautritam-326518.jpg&fm=jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
          ],
          site_name: "eTalk Solutions",
        }}
        twitter={{
          handle: "@etalksolutions",
          site: "@etalksolutions",
          cardType: "summary_large_image",
        }}
        address={{
          streetAddress: "193 palmyra dr",
          addressLocality: "Vista",
          addressRegion: "CA",
          postalCode: "92084",
          addressCountry: "US",
          name: "eTalk Solutions",
        }}
        geo={{
          latitude: "33.171001",
          longitude: "117.204224",
        }}
      />

      <Helmet>
        <title>{`eTalk Solution | ${pageMeta.title}`}</title>
        {/* The charset, viewport and author meta tags will always have the same value, so we hard code them! */}
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Alec Venzor" />
        <html lang="en" />

        {/* The rest we set dynamically with props */}
        <meta name="description" content={pageMeta.description} />

        {/* We pass an array of keywords, and then we use the Array.join method to convert them to a string where each keyword is separated by a comma */}
        <meta name="keywords" content={pageMeta.keywords.join(",")} />
      </Helmet>
      <div className="logo flex justify-between items-center  w-full h-24 md:h-32  md:h-full md:border-b-2 sticky top-0 md:static bg-white z-20">
        <h2 className="flex-grow text-center text-3xl z-20">
          <Logo className="font-bold">eTalk</Logo>-Solutions
        </h2>
        <MobileDrop />
      </div>
      <NavTop />
      <div className="child  ">{children}</div>
      <Tag className="tag">
        <p>Designed with love, developed with care. </p>
      </Tag>
    </div>
  );
}
