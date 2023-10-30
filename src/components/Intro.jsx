import React, { useState } from "react";
import { Link } from "react-router-dom";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Intro = () => {
  const [nameElements, setNameElements] = React.useState([]);
  const [firstRun, setFirstRun] = React.useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const name = "Jimin Kim";
  const nameArray = name.split("");
  const [colors, setColors] = useState(
    Array(nameArray.length).fill("transparent")
  );

  const handleMouseEnter = (index) => {
    const newColors = [...colors];
    newColors[index] = getRandomColor();
    setColors(newColors);
  };

  const handleMouseLeave = () => {
    setColors(Array(nameArray.length).fill("transparent"));
  };

  React.useEffect(() => {
    const name = document.querySelectorAll(".name");
    setNameElements(name);

    const handleScroll = () => {
      const scrollValue = window.scrollY;
      name.forEach((heading, index) => {
        heading.style.top = `${scrollValue * 0.07 * index}px`;
        if (firstRun) {
          heading.style.transform = `translateY(0px)`;
        }
      });
      setFirstRun(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup by removing the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, [firstRun]);

  React.useEffect(() => {
    setTimeout(() => {
      nameElements.forEach((heading, index) => {
        heading.style.transform = `translateY(${index * 7}px)`;
      });
    }, 500);
  }, [nameElements]);

  return (
    <section id="intro">
      <div className="intro__inner">
        <div className="intro__name">
          <h1 className="name">
            {nameArray.map((char, index) => (
              <span
                key={index}
                style={{ color: colors[index] }}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                {char}
              </span>
            ))}
          </h1>
          <h1 className="name">Jimin Kim</h1>
          <h1 className="name">Jimin Kim</h1>
          <h1 className="name">Jimin Kim</h1>
          <h1 className="name">Jimin Kim</h1>
        </div>

        <div className="intro__career">
          <div className="intro__btn">
            <button className="intro_btn">Resume</button>
          </div>
          <h3 className="intro__career">
            Frontend Engineer with 2+ years of professional work experience.
            Currently @
            <Link
              to={"https://www.lg.com/us"}
              target="_blank"
              className="career-link"
            >
              LG Electronics
            </Link>
            . Bachelor in Computer Engineering @
            <Link
              to={
                "https://www.konkuk.ac.kr/eng/jsp/Academics/Engineering/engine_14.jsp"
              }
              target="_blank"
              className="career-link"
            >
              Konkuk
            </Link>
            . Strong passion for UX.
          </h3>
        </div>

        {/* <h2 className="intro__title">{introText.title}</h2> */}
        {/* <div className="intro__lines" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div> */}

        {/* <div className="intro__text">
          <div className="text">
            <div>{introText.desc[0]}</div>
            <div>{introText.desc[1]}</div>
            <div>{introText.desc[2]}</div>
          </div>
          <div className="img">
            <img src={about} alt="어바웃미" />
          </div>
        </div>
        <div className="intro__lines bottom" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div> */}
      </div>
    </section>
  );
};

export default Intro;
