import React from "react";
import Layout from "../components/Layout";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import style from "styled-components";

const Container = style.main`
margin-top:2%;
display:flex;
justify-content:space-evenly;
  @media (max-width: 768px) {
      flex-flow:column nowrap;
      align-items:center;
    }
`;
function contact() {
  return (
    <Layout
      pageMeta={{
        title: "Contact",
        keywords: [
          "Web Development",
          "Contact",
          "eTalk Solutions",
          "San Diego",
        ],
        description: "Send a form to contact us or give us a call today!",
      }}
    >
      <Container>
        <ContactCard />
        <ContactForm />
      </Container>
    </Layout>
  );
}

export default contact;
