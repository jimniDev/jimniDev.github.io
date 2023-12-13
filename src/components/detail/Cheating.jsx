import React from "react";
import "../../assets/scss/section/_cheating.scss";
import detail1 from "../../assets/img/cheating/c001.png";
import detail3 from "../../assets/img/cheating/c003.png";
import detail4 from "../../assets/img/cheating/c004.png";
import detail8 from "../../assets/img/cheating/c008.png";
import detail9 from "../../assets/img/cheating/c009.png";
import detail10 from "../../assets/img/cheating/c010.png";
import usecase from "../../assets/img/cheating/usecase.drawio.png";
import detail12 from "../../assets/img/cheating/C012.png";
import detail13 from "../../assets/img/cheating/c013.png";
import detail15 from "../../assets/img/cheating/c015.png";
import detail14 from "../../assets/img/cheating/c014.png";
import LOGO from "../../assets/img/cheating/LOGO.png";

const Cheating = () => {
  return (
    <section id="cheating">
      <div class="main">
        <div className="project-container"></div>
        <h1 className="project-title">
          Real-Time Fraud Detection System For Online Tests Using Video Analysis
        </h1>
      </div>
      <div className="overview">
        <div className="intro__btn">
          {/* <button className="intro_btn">Demo</button>
          <button className="intro_btn">Code</button>
          <button className="intro_btn">Code</button>
          <button className="intro_btn">Code</button> */}
        </div>
        <h1 className="overview-name">Overview</h1>
        <h1 className="overview-title">Project Brief</h1>
        <h3>
          Bachelors Thesis Project (Adviser: Professor Karpjoo Jeong, Eun Yi Kim
          @Konkuk Uinversity), Team of 4
        </h3>
        <h3>
          Developed a real-time fraud detection system for online tests using
          video analysis.
        </h3>
        <h3>
          Explored COVID-19-related societal challenges from an HCI perspective,
          applying computer science principles to propose innovative solution
        </h3>
        <h3>
          Implemented Human Action Recognition (HAR) techniques including object
          recognition, face recognition, eye tracking, and hand tracking.
        </h3>
        <h3>
          Demonstrated strong skills in computer vision, machine learning, and
          user-centric design.
        </h3>
        <h1 className="overview-title">Duration</h1>
        <h3>2020.08 - 2021.06</h3>
        <h1 className="overview-title">Role</h1>
        <h3>Planning</h3>
        <h3>UX / UI / GUI design</h3>
        <h3>GUI Using PyQt</h3>
        <h3>Data Collection and Preprocessing</h3>
        <h3>Facial Recognition of Exam Taker's Face Using HaarCascade</h3>
        <h3>Training of Profile Face Data</h3>
        <h3>Detection of Facial Landmarks Using dlib</h3>
        <h3>Implementation of Head Pose Detection</h3>
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
      </div>

      <div className="detail system">
        <div className="_detail">
          <h1 className="detail-name">System Design</h1>
          <h1 className="detail-title">Software Design Specification</h1>
          <img className="full" src={detail10} alt=""></img>

          <h1 className="detail-title">Usecase Diagram</h1>
          <img className="full" src={usecase} alt=""></img>

          <h1 className="detail-title">
            Specification of Misconduct Definition
          </h1>
          <img className="full" src={detail12} alt=""></img>
        </div>
      </div>

      <div className="detail">
        <div className="_detail">
          <h1 className="detail-name">System Development Results</h1>
          <h1 className="detail-title">Development Environment</h1>
          <img className="full" src={detail13} alt=""></img>

          <h1 className="detail-title">Software Flow Chart</h1>
          <img className="full" src={detail14} alt=""></img>
          <img className="full" src={detail15} alt=""></img>
        </div>
        <h1 className="detail-title">Project Logo</h1>
        <img src={LOGO} alt=""></img>
      </div>
    </section>
  );
};

export default Cheating;
