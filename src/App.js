import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import smooth from "./utils/smooth";
import link from "./utils/link";
import Detail from "./views/Detail";
import Port from "./components/Port";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import TagManager from "react-gtm-module";

const App = () => {
  useEffect(() => {
    smooth();
    link();
  }, []);

  useEffect(() => {
    TagManager.initialize({
      gtmId: `${process.env.NEXT_PUBLIC_GTM_ID}`,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/portfolio" element={<Port />} />
        <Route path="/portfolio/:id" element={<Detail />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/about" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
