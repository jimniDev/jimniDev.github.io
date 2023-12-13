import React from "react";
import "../../assets/scss/section/_sentiment.scss";
import detail2 from "../../assets/img/setiment/002.png";
import detail3 from "../../assets/img/setiment/003.png";
import detail4 from "../../assets/img/setiment/004.png";
import detail5 from "../../assets/img/setiment/005.png";
import detail6 from "../../assets/img/setiment/006.png";
import detail7 from "../../assets/img/setiment/007.png";
import detail8 from "../../assets/img/setiment/008.png";
import detail9 from "../../assets/img/setiment/009.png";
import detail10 from "../../assets/img/setiment/010.png";
import detail11 from "../../assets/img/setiment/011.png";
import detail12 from "../../assets/img/setiment/012.png";
import detail13 from "../../assets/img/setiment/013.png";
import detail14 from "../../assets/img/setiment/014.png";
import detail15 from "../../assets/img/setiment/015.png";
import detail16 from "../../assets/img/setiment/016.png";
import detail17 from "../../assets/img/setiment/017.png";

import { Link } from "react-router-dom";

const Sentiment = () => {
  return (
    <section id="sentiment">
      <div class="main">
        <div className="project-container">
          {/* <img src={main2} alt=""></img> */}
        </div>
        <h1 className="project-title">
          Setiment Analysis Music Recommendation
        </h1>
      </div>
      <div className="overview">
        <div className="intro__btn">
          <Link
            to={"https://github.com/jimniDev/Setiment-Analysis-Music"}
            target="_blank"
          >
            <button className="intro_btn">Code(FE)</button>
          </Link>
          <Link
            to={"https://github.com/jimniDev/Setiment-Analysis-Flask"}
            target="_blank"
          >
            <button className="intro_btn">Code(BE)</button>
          </Link>
          <Link
            to={"https://github.com/jimniDev/KoBERT_Sentiment_Analysis"}
            target="_blank"
          >
            <button className="intro_btn">MODEL</button>
          </Link>
        </div>
        <h1 className="overview-name">Overview</h1>
        <h1 className="overview-title">Project Brief</h1>
        <h3>
          developed a personalized web service that utilizes a Korean
          Multi-Emotion Classification Model, powered by BERT, to analyze
          emotions in Korean diaries. This project enables users to gain
          insights into their emotional states by visualizing the sentiment
          analysis results and receive music recommendations from Spotify
          tailored to their current emotions. The web service is built using
          React and Flask, providing a seamless and enjoyable user experience,
          allowing users to explore and select music that resonates with their
          feelings.
        </h3>
        <h1 className="overview-title">Duration</h1>
        <h3>2023.03 - 2023.04</h3>
        <h1 className="overview-title">Role</h1>
        <h3>UX / UI / GUI design</h3>
        <h3>Frontend Develop</h3>
        <h3>Backend Develop</h3>
        <h3>AI Modeling</h3>

        <h1 className="overview-title">Result</h1>
        <h3>People's Choice Award of SW-Reskilling @LG Electronics</h3>
      </div>
      <div className="detail">
        <img src={detail2} alt=""></img>
        <img src={detail3} alt="" />
        <img src={detail4} alt="" />
        <img src={detail5} alt="" />
        <img src={detail6} alt="" />
        <img src={detail7} alt="" />
        <img src={detail8} alt="" />
        <img src={detail9} alt="" />
        <img src={detail10} alt="" />
        <img src={detail11} alt="" />
        <img src={detail12} alt="" />
        <img src={detail13} alt="" />
        <img src={detail14} alt="" />
        <img src={detail15} alt="" />
        <img src={detail16} alt="" />
        <img src={detail17} alt="" />
      </div>
    </section>
  );
};

export default Sentiment;
