import React from "react";
import "../../assets/scss/section/_cheating.scss";
import detail1 from "../../assets/img/cheating/c001.png";
import detail3 from "../../assets/img/cheating/c003.png";
import detail4 from "../../assets/img/cheating/c004.png";
import detail8 from "../../assets/img/cheating/c008.png";
import detail9 from "../../assets/img/cheating/c009.png";
import detail10 from "../../assets/img/cheating/c010.png";

const Cheating = () => {
  return (
    <section id="cheating">
      <div class="main">
        <div className="project-container">
          {/* <img src={main2} alt=""></img> */}
        </div>
        <h1 className="project-title">
          Real-Time Fraud Detection System For Online Tests Using Video Analysis
        </h1>
      </div>
      <div className="overview">
        <div className="intro__btn">
          <button className="intro_btn">Demo</button>
          <button className="intro_btn">Code</button>
          <button className="intro_btn">Code</button>
          <button className="intro_btn">Code</button>
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
        <div className="_detail d1">
          <h1 className="detail-name">Project Motivation</h1>
          <img src={detail1} alt="Covid-19's Impact on Global Education"></img>
          <h3 className="center">
            The Increasing Trend of Online Education Due to the COVID-19
            Pandemic
          </h3>
          <h3 className="center">
            The rise in online education is not expected to be a temporary
            phenomenon
          </h3>
          <h3 className="center">but rather a future education trend.</h3>

          <h1 className="detail-title">Problem Recognition</h1>
          <div className="flex">
            <img src={detail3} alt=""></img>
            <img src={detail4} alt=""></img>
          </div>
          <h4 className="tilt">
            <i>
              "Getting an A+ gets you $100, an offer for a proxy exam... Rampant
              Misconduct"
            </i>
          </h4>
          <h4 className="tilt">
            "Online Exams Under Review... What about Misconduct?"
          </h4>
          <h4 className="tilt">
            (Interview) University Sophomore: "I'll cover this range of study,
            so you do that. It's an easy way to get good grades, even though
            it's misconduct..."
          </h4>
          <br></br>
          <h3>
            The trend of shifting from offline exams to online exams due to the
            repercussions of the COVID-19 pandemic is notable. However, it has
            sparked debates regarding fairness. Particularly, according to posts
            on university online communities, there are significant concerns
            about misconduct, including proxy exams, and insufficient measures
            in place to address them.
          </h3>
          <br></br>
          <h3>How is the education sector responding to COVID-19?</h3>

          <h3 className="center">
            How will you prevent misconduct in an online exam environment?
          </h3>

          <h1 className="detail-title">Project Objectives</h1>
          <img className="full" src={detail9} alt=""></img>

          <h1 className="detail-title">
            Ways in Which the Project Can Contribute to Society
          </h1>
          <img className="full" src={detail8} alt=""></img>
        </div>

        <div className="_detail">
          <h1 className="detail-name">System Design</h1>
          <h1 className="detail-title">Software Design Specification</h1>
          <img className="full" src={detail10} alt=""></img>

          <h1 className="detail-title">Requirements Matrix</h1>
          <img className="full" src={detail10} alt=""></img>
        </div>
        <div className="_detail">
          <h1 className="detail-name">System Development Results</h1>
        </div>
        <div className="_detail">
          <h1 className="detail-name">Issues and Solutions</h1>
        </div>
      </div>
    </section>
  );
};

export default Cheating;
