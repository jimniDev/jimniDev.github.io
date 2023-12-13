import React from "react";
import Header from "../components/Header";
import Skip from "../components/Skip";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import Site from "../components/Site";
import Port from "../components/Port";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Main from "../components/Main";

const HomeView = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Skip />
      <Header />
      <Main>
        <Intro />
        <Port />
        {/* <Skill />
        <Site /> */}
        <Contact />
      </Main>
      <Footer />
    </>
  );
};

export default HomeView;
