import React from "react";
import "../../assets/scss/section/_belt.scss";

import detail8 from "../../assets/img/cheating/c008.png";
import detail9 from "../../assets/img/cheating/c009.png";
import detail10 from "../../assets/img/cheating/c010.png";
import usecase from "../../assets/img/cheating/usecase.drawio.png";
import detail12 from "../../assets/img/cheating/C012.png";
import detail13 from "../../assets/img/cheating/c013.png";
import detail15 from "../../assets/img/cheating/c015.png";
import b1 from "../../assets/img/belt/b1.png";
import b2 from "../../assets/img/belt/b2.png";
import b3 from "../../assets/img/belt/b3.png";
import b5 from "../../assets/img/belt/b5.png";
import { Link } from "react-router-dom";

const Belt = () => {
  return (
    <section id="cheating">
      <div class="main">
        <div className="project-container"></div>
        <h1 className="project-title">
          B2B Web Dashboard utilizing WELT Smart Belt Data
        </h1>
      </div>
      <div className="overview">
        <div className="intro__btn">
          <Link
            to={
              "https://xd.adobe.com/view/13de15e1-01df-422b-bf3f-52d058660f80-468d/"
            }
            target="_blank"
          >
            <button className="intro_btn">Design(XD)</button>
          </Link>
        </div>
        <h1 className="overview-name">Project Overview</h1>
        <h1 className="overview-title">Summary</h1>
        <h3>
          Industry-Academic Collaboration Project (@Konkuk Uinversity - WELT:
          Health Measurement Wearable Smart Belt ), Team of 6
        </h3>
        <h3>
          Creation of a B2B web dashboard utilizing data from WELT's smart belt.
        </h3>
        <h1 className="overview-title">Duration</h1>
        <h3>2020.10 - 2020.12</h3>
        <h1 className="overview-title">Role</h1>
        <h3>UX / UI / GUI design</h3>

        <h1 className="overview-title">Necessity</h1>
        <h3>
          Firstly, there is a need for a tool to easily manage employees of
          companies that have purchased WELT's smart belts in bulk. To address
          this, a B2B web dashboard is essential as a tool for managing multiple
          individuals based on the business model of transactions between
          companies. The dashboard allows for intuitive understanding and
          efficient management of data.
        </h3>
        <h3>
          Secondly, using the dashboard enables more effective health promotion
          than simply using the smart belt. By providing event features based on
          health data conditions, user participation is encouraged.
          Additionally, a ranking is calculated based on the aggregated health
          data of users, fostering friendly competition. This encourages the use
          of smart belts, ultimately contributing to the overall health
          promotion of all employees.
        </h3>

        <h1 className="overview-title">Proposed Features</h1>
        <h3>1. Data Visualization</h3>
        <h3>
          Use suitable tools such as pie charts, line graphs, etc., on the main
          page and event inquiry page where data visualization is necessary.
          This allows for intuitive exploration of various data.
        </h3>
        <h3>2.Ranking Calculation</h3>
        <h3>
          Calculate rankings based on health data, listing users who require
          management and those who achieve outstanding results. This allows for
          separate verification and management.
        </h3>
        <h3>3. Events</h3>
        <h3>
          Provide functionality for the creation, inquiry, and deletion of
          events based on the health data of WELT smart belt users.{" "}
        </h3>
      </div>
      <div className="detail">
        <div className="_detail d1">
          <h1 className="detail-name">Project Design</h1>
          {/* <h3 className="center">
            The Increasing Trend of Online Education Due to the COVID-19
            Pandemic
          </h3>
          <h3 className="center">
            The rise in online education is not expected to be a temporary
            phenomenon
          </h3>
          <h3 className="center">but rather a future education trend.</h3> */}

          <h1 className="detail-title">Development Approach</h1>
          <h3>
            WELT desired to showcase diverse data from various users and
            requested the development of a B2B web dashboard with a
            differentiated feature, including an event page. To develop a B2B
            web dashboard, we needed to create a lightweight yet modern web
            application at an enterprise level within a tight schedule.
          </h3>
          <h3>
            Therefore, we considered using JavaScript libraries or frameworks,
            and among various options, we chose React as the most suitable for
            the B2B web dashboard. The reason for choosing React is its ability
            to efficiently update only the appropriate components as data
            changes, making it a suitable choice for this JavaScript library. To
            efficiently carry out design visualization, we decided to use a CSS
            framework, and we selected Tailwind CSS for its flexibility and
            simplicity. For state management, we opted to use the Redux library
            to manage states effectively.
          </h3>

          <br></br>
          <h1 className="detail-title">Design Planning</h1>
          <div className="left">
            <h2>
              <b>1. Concept Design</b>
            </h2>
            <ul>
              <li>
                <b>Main Metaphor</b>: Collective Health Promotion - Effective
                member data visualization and health management through the B2B
                dashboard.
              </li>
              <br></br>
              <li>
                <b>Supporting Metaphor</b>: Engagement - Inducing interest in
                exercise and effective health management through dashboard event
                creation and participation.
              </li>
            </ul>

            <h2>
              <b>2. Information Architecture Design</b>
            </h2>

            <ol type="1">
              <li>
                <b>Feature Collection and Classification</b>
              </li>

              <ul>
                <li>Objective Classification Methods</li>
                <ul>
                  <li>
                    - Time-based: Display events based on the event end date,
                    prioritizing events that are approaching completion.
                  </li>
                  <li>
                    - Number-based: Display top-ranking members during ongoing
                    events.
                  </li>
                </ul>

                <li>Subjective Classification Methods</li>
                <ul>
                  <li>- Theme-based: Classify events based on their themes.</li>
                  <li>- User-based: Display events created by users.</li>
                </ul>

                <li>Dynamic Classification Methods</li>
                <ul>
                  <li>- Change-based: Rank changes as events progress.</li>
                </ul>
              </ul>

              <li>
                <b>Classification Based on Data Types</b>
              </li>
              <ul>
                <li>Fact: Health data from WELT belts.</li>
                <li>Concept: Data analysis and statistics.</li>
                <li>
                  Procedure: Visualization based on data and event creation.
                </li>
                <li>Principle: Event Creation Rules</li>
                <li>
                  Depiction: Health data visualization, event progress, member
                  ranking
                </li>
                <li>Prediction: Predicting event outcomes</li>
                <li>Meta Data: Member Information</li>
              </ul>

              <li>
                <b>Information Structure</b>
              </li>
              <ul>
                <li>User → View data of members.</li>
                <li>
                  User → Create events (View details of event applicants, event
                  date, etc.) → Check event results.
                </li>
              </ul>

              <li>
                <b>Organization Structure of Information</b>
              </li>
              <ul>
                <li>Mixed use of sequential and hierarchical structures.</li>
                <li>
                  Mix sequential and hierarchical structures: Combine sequential
                  structures for changing statistical results over time with a
                  hierarchical structure that includes an event page within the
                  main page.
                </li>
              </ul>
            </ol>
            <h2>
              <b>3. Interaction Design</b>
            </h2>
            <div className="left">
              <h3>
                <b>3-1. Main Screen</b>
              </h3>
              <ul>
                <li>① Visualize 5 representative data in two ways.</li>
                <li>
                  ② Allow users to choose between ascending and descending
                  ranking to view outstanding employees and those needing
                  management.
                </li>
                <li>③ Design for viewing and adding event lists.</li>
              </ul>
              <img className="full" src={b1} alt=""></img>
              <h3>
                <b>3-2. Event Detail Page</b>
              </h3>
              <ul>
                <li>
                  ① Display event progress using colors, show the number of
                  participants, and the event duration.
                </li>
                <li>
                  ② Compare participants' average data with the previous day.
                </li>
                <li>③ Design a graph and ranking for event participants.</li>
                <img className="full" src={b2} alt=""></img>
              </ul>

              <h3>
                <b>3-3. Add Event Page</b>
              </h3>
              <ul>
                <li>
                  - Design to record event name, data to use, duration,
                  participants, and additional notes.
                </li>
                <img className="full" src={b3} alt=""></img>
              </ul>
            </div>
          </div>

          <h1 className="detail-title">Evaluation Criteria</h1>
          <div className="left">
            <ul>
              <li>1. Did we implement what was planned (Completeness)?</li>
              <li>2. Is dynamic UI implemented? </li>
              <li>3. Is it easy to access all member information?</li>
              <li>
                4. Is the event ranking implemented with appropriate criteria?
              </li>
              <li>
                5. Is data visualization well-done for easy understanding at a
                glance?
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="detail system">
        <h1 className="detail-name">Prototype Usability Test</h1>
        <div className="left">
          <h2 className="detail-title">Evaluation Criteria</h2>
          <h3>
            <b>Utility</b>
          </h3>
          <p>
            1. Is the provided information easy to see and understand? (Weight:
            0.2) - Utility
          </p>

          <h3>
            <b>Usability</b>
          </h3>
          <p>
            2. Does the system provide a reasonable response speed for the given
            tasks? (0.15) - Responsiveness
          </p>
          <p>
            3. Is it easy to move from the home to critical parts of the system?
            (0.2) - Convenience
          </p>
          <p>
            4. Does the system automatically insert commas into numbers? (0.1) -
            Consistency
          </p>
          <p>
            5. Do menu item names convey simple yet sufficient meaning? (0.1) -
            Conciseness
          </p>
          <p>
            6. If there are several alternatives, does the system use pull-down
            or pop-up menus to allow users to select easily? (0.15) - Ease of
            use
          </p>

          <h3>
            <b>Emotion</b>
          </h3>
          <p>
            7. Does the system evoke appropriate emotions (trust) in the user?
            (0.1) - Reliability
          </p>

          <br></br>
          <h2 className="detail-title">Key Tasks</h2>
          <ol type="1">
            <li>Event Creation</li>
            <li>Check Event Details</li>
            <li>Delete Event</li>
            <li>Change Date and Confirm Graph Changes</li>
            <li>Change Ranking Item and Sort</li>
          </ol>

          <h2 className="detail-title">User Selection</h2>
          <h3>
            Selected 5 users, including B2B dashboard users from collaborating
            company WELT, and individuals affiliated with the medical and
            exercise fields.
          </h3>
          <ol type="1">
            <li>User1: Previous B2B dashboard user</li>
            <li>User2: Previous B2B dashboard user</li>
            <li>User3: Medical professional</li>
            <li>User4: Healthcare professional</li>
            <li>User5: Healthcare professional</li>
          </ol>

          <h2 className="detail-title">Evaluation Survey</h2>
          <img className="full" src={b5} alt=""></img>
          <h3>
            <b>Analysis of Evaluation Results</b>
          </h3>
          <h3>
            Overall Evaluation: WELT and Fitbit received similar ratings within
            a 0.5 margin of error. Although there is a meaningful score
            difference in items 4, 6, and 7, these two items were analyzed in
            detail.
          </h3>
          <ol type="1">
            <li>
              Item 4: 'Does the system automatically insert commas into
              numbers?'
            </li>
            <p>Both WELT and Fitbit received low scores for this item.</p>
            <p>---</p>
            <p>
              As numeric data is frequently utilized, making it easily
              understandable is crucial. Therefore, applying a feature that
              automatically inserts commas for every three digits can provide
              convenience to users.
            </p>

            <li>
              Item 6: 'If there are several alternatives, does the system use
              pull-down or pop-up menus to allow users to select easily?'
            </li>
            <p>WELT scored slightly higher than Fitbit.</p>
            <p>---</p>
            <p>
              When users need to make numerous selections, especially in events
              or rankings, the ability to efficiently view all options can be
              crucial. WELT's higher score in this area indicates a
              well-structured page for users to efficiently browse through all
              options.
            </p>

            <li>
              Item 7: 'Does the system evoke appropriate emotions (trust) in the
              user?'
            </li>
            <p>
              WELT scored 0.7 points higher than Fitbit. However, both received
              low scores relative to a maximum of 1.
            </p>
            <p>---</p>
            <p>
              Establishing trust with users, especially when presenting data
              from a smart device they wear, is a significant challenge. Since
              the reliability of the data itself cannot be solved within the
              dashboard, design aspects need to be explored to address this
              issue.
            </p>
          </ol>
          <h3>
            <b>Reflection of Evaluation Content</b>
          </h3>

          <p>1. Comma insertion for numbers has been implemented.</p>
          <p>
            2. To foster trust, the main color of the dashboard has been changed
            to a trustworthy color (e.g., blue).
          </p>
          <p>
            3. For data selection, the system now lists reference data in a row,
            allowing users to click on each one to select efficiently.
          </p>
          <p>
            4. When changing the date and setting the duration, a calendar-style
            view is provided for date selection, and the duration is displayed
            as bars according to the set period.
          </p>
          <p>
            5. Participant selection now allows users to enter names in the
            search bar to add, and the names of participants are listed below
            the search bar. In cases of homonyms, they are shown through
            scrolling.
          </p>
        </div>
      </div>

      <div className="detail">
        <h1 className="detail-name">Expected Effects</h1>

        <h3>
          1. Marketing through events based on WELT-collected data can be
          conducted.
        </h3>
        <h3>
          2. Expectation of health improvement effects on members based on
          motivation through events.
        </h3>
        <h3>
          3. Ability to quickly check the health data of company members at a
          glance.
        </h3>

        <h1 className="detail-name">References</h1>
        <p>
          <i>
            Low-Level Components of Analytic Activity in Information
            Visualization
          </i>{" "}
          - Robert Amar, James Eagan, and John Stasko (College of Computing/GVU
          Center, Georgia Institute of Technology)
        </p>
      </div>
    </section>
  );
};

export default Belt;
