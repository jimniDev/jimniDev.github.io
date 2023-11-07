import React, { useState } from "react";

const headerDetail = [
  // {
  //   title: "intro",
  //   url: "/intro",
  // },
  // {
  //   title: "about",
  //   url: "/about",
  // },
  // {
  //   title: "site",
  //   url: "/site",
  // },
  // {
  //   title: "portfolio",
  //   url: "/port",
  // },
  // {
  //   title: "contact",
  //   url: "/contact",
  // },
];

const HeaderDetail = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <header id="header" role="banner">
      <div className="header__inner">
        <div className="header__logo">
          <h1>
            <a href="/">
              Jimin Kim<em>@jimniDev</em>
            </a>
          </h1>
        </div>
        <nav
          className={`header__nav ${show ? "show" : ""}`}
          role="navigation"
          aria-label="메인메뉴"
        >
          <ul>
            {headerDetail.map((nav, key) => (
              <li key={key}>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className="header__nav__mobile"
          id="headerToggle"
          aria-controls="primary-menu"
          aria-expanded={show ? "true" : "false"}
          role="button"
          tabIndex="0"
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default HeaderDetail;
