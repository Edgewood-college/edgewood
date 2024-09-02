import { Link, useNavigate } from "react-router-dom";
import {
  menuItems,
  pagesItems,
  portfolioItems,
  About,
  blogItems,
  contactItems,
  policy,
} from "../../data/menu";

import { useLocation } from "react-router-dom";

import { useEffect, useState } from "react";

const MainMenu = () => {
  const { pathname } = useLocation();
  const [showSixth, setshowSixth] = useState(false)
  const [showTeaching, setshowTeaching] = useState(false)
  const [showAboutUs, setShowAboutUs] = useState(false);
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const handleMouseOverAboutUs = () => setShowAboutUs(true);
  const handleMouseLeaveAboutUs = () => setShowAboutUs(false);

  const isActive = (link) => {
    return pathname.replace(/\/\d+$/, "") === link.replace(/\/\d+$/, "");
  };

  const handleSixthForm = () => {
    setshowSixth(!showSixth)
  };

  const handleTeaching = () => {
    setshowTeaching(!showTeaching)
  };

  return (
    <nav className="navbar navbar-expand-lg order-lg-2" >
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>



      <div className="collapse navbar-collapse" id="navbarNav">


        <ul className="navbar-nav">

          <li className="d-block d-lg-none">
            <div className="logo">
              <Link to="/" className="d-block">
                <img src="/images/logo/logo_01.png" alt="logo" />
              </Link>
            </div>
          </li>
          <div className="nav-item dropdown">
            <div onClick={() => navigate("/")}
              // className="nav-link dropdown-toggle"
              className={
                portfolioItems.some((elm) => isActive(elm.link))
                  ? "nav-link  "
                  : "nav-link "
              }
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
              style={{ color: navbar ? "#6F7F99" : "#6F7F99" }}
            >
              <span style={{ fontSize: "0.9rem" }}>Home</span>
            </div>
          </div>
          <li
            className="nav-item dropdown mega-dropdown-md"
            onMouseOver={handleMouseOverAboutUs}
            onClick={() => setShowAboutUs(!showAboutUs)}
            onMouseLeave={handleMouseLeaveAboutUs}
          >
            <a
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
              className={
                menuItems.some((menu) =>
                  menu.items.some((elm) => isActive(elm.link))
                )
                  ? "nav-link dropdown-toggle"
                  : "nav-link dropdown-toggle"
              }
              style={{ color: navbar ? "#6F7F99" : "#6F7F99" }}
            >
              <span style={{ fontSize: "0.9rem" }}>About Us</span>
            </a>
            {
              showAboutUs && (
                <ul
                  className={`dropdown-menu about_Us_container ${showAboutUs ? "show" : ""
                    }`}
              
                >
                  <hr />
                  <li  style={{ transition: "ease-out", transitionDuration: "0.3s" }}>
                    <div className="rows about_Us">
                      {menuItems.map((menu, index) => (
                        <div className="home-hov" key={index}>
                          <div className="menu-column"></div>
                          <ul className="style-none mega-dropdown-list">
                            <div style={{ display: "flex", flexDirection: "column" }}>
                              {menu.items.map((item, index) => (
                                <li key={index}>
                                  <Link
                                    to={item.link}
                                    className={`dropdown-item ${isActive(item.link) ? "active" : ""
                                      }`}
                                  >
                                    <span style={{ fontSize: "0.8rem" }}>{item.title}</span>
                                  </Link>
                                </li>
                              ))}
                            </div>
                          </ul>
                        </div>
                      ))}
                    </div>
                  </li>
                </ul>
              )
            }
          </li>


          {/* End li (home mega menu) */}


          <li className="nav-item dropdown">
            <a
              className="nav-link"
              // className={
              //   portfolioItems.some((elm) => isActive(elm.link))
              //     ? "nav-link dropdown-toggle "
              //     : "nav-link "
              // }

              href="https://edgewoodcollege.schulup.com/Account/Login"
              style={{ color: navbar ? "#6F7F99" : "#6F7F99", }}
            // role="button"
            // data-bs-toggle="dropdown"
            // data-bs-auto-close="outside"
            // aria-expanded="false"
            >
              <span style={{ fontSize: "0.9rem" }}>School portal</span>
            </a>
            {/* <ul className="dropdown-menu">
              {portfolioItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className={`dropdown-item ${
                      isActive(item.link) ? "active" : ""
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul> */}
          </li>
          {/* End li (pages) */}

          <div className="nav-item dropdown">
            <div onClick={() => navigate("/admissions")}
              // className="nav-link dropdown-toggle"
              className={
                portfolioItems.some((elm) => isActive(elm.link))
                  ? "nav-link  "
                  : "nav-link "
              }
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
              style={{ color: navbar ? "#6F7F99" : "#6F7F99" }}
            >
              <span style={{ fontSize: "0.9rem" }}>Admission</span>
            </div>
          </div>

          <li className="nav-item dropdown" >
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
              style={{ color: navbar ? "#6F7F99" : "#6F7F99" }}

            >
              <span style={{ fontSize: "0.9rem" }}>Our Campus</span>
            </a>
            <ul className="dropdown-menu">
              <hr />
              <div></div>
              <Link to="/learning/secondary-school" className={`dropdown-item ${isActive("/learning/secondary-school") ? "active" : ""}`} style={{ fontSize: "0.8rem" }} onMouseOver={() => setshowSixth(false)}>Secondary School</Link>
              <div className="" style={{ display: "flex", alignItems: "center", cursor: "pointer", }} >
                <div className='dropdown-item' style={{ fontSize: "0.8rem" }} onMouseOver={handleSixthForm} onClick={handleSixthForm} >Sixth Form</div>
                <div style={{ position: "relative", right: "1rem", cursor: "pointer" }} ><img src="/images/assets/rightarrow.png" alt="arrow image" width="6px" onMouseOver={handleSixthForm} onClick={handleSixthForm} /></div>
              </div>

              {/* width: "400px", height: "200px", position: "absolute", background: "white", right: "20vw", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", top: "2rem", borderRadius: "10px", boxShadow: "inherit",zIndex:"inherit" */}
              {
                showSixth && (
                  <div className="sixthForm_dropdown">
                    <div className="dropdowm-item" style={{ fontSize: "0.8rem" }}>
                      <Link to="/learning/cambridgeA-level" className={`dropdown-item ${isActive("/learning/cambridgeA-level") ? "active" : ""}`} style={{ fontSize: "0.8rem" }} >Cambridge A level</Link>
                      <Link to="/learning/University-Programme" className={`dropdown-item ${isActive("/learning/University-Programme") ? "active" : ""}`} style={{ fontSize: "0.8rem" }} >University Foundation programme</Link>
                      <Link to="/learning/Medical-foundation-Programme" className={`dropdown-item ${isActive("/learning/Medical-foundation-Programme") ? "active" : ""}`} style={{ fontSize: "0.8rem" }} >Medical foundaton programme</Link>
                    </div>
                  </div>
                )
              }

              <Link to="/learning/Merit-award" className={`dropdown-item ${isActive("/learning/Merit-award") ? "active" : ""}`} style={{ fontSize: "0.8rem" }} onMouseOver={() => setshowSixth(false)}>Merit Awards System</Link>
              <Link to="/learning/club-activities" className={`dropdown-item ${isActive("/learning/club-activities") ? "active" : ""}`} onMouseOver={() => setshowSixth(false)} style={{ fontSize: "0.8rem" }}>Club Activities</Link>
              <Link to="/learning/sports" className={`dropdown-item ${isActive("/learning/sports") ? "active" : ""}`} style={{ fontSize: "0.8rem" }} onMouseOver={() => setshowSixth(false)}>Sports & Activities</Link>
              <Link to="/learning/arts" className={`dropdown-item ${isActive("/learning/arts") ? "active" : ""}`} style={{ fontSize: "0.8rem" }} onMouseOver={() => setshowSixth(false)}>Arts</Link>
              <Link to="/learning/music" className={`dropdown-item ${isActive("/learning/music") ? "active" : ""}`} style={{ fontSize: "0.8rem" }} onMouseOver={() => setshowSixth(false)}>Music</Link>
              <Link to="/learning/leadership-program" className={`dropdown-item ${isActive("/learning/leadership-program") ? "active" : ""}`} style={{ fontSize: "0.8rem" }} onMouseOver={() => setshowTeaching(false) && setshowSixth(false)}>Leadership Programs</Link>
              <div className="" style={{ display: "flex", alignItems: "center", cursor: "pointer", }} >

                <div className='dropdown-item' style={{ fontSize: "0.8rem" }} onMouseOver={handleTeaching} onClick={handleTeaching}>Teaching & Learning</div>
                <div style={{ position: "relative", right: "1rem", cursor: "pointer" }} ><img src="/images/assets/rightarrow.png" alt="arrow image" width="6px" onMouseOver={handleTeaching} onClick={handleTeaching} /></div>
              </div>
              {
                showTeaching && (
                  <div className="teaching_dropdown">
                    <div className="dropdowm-item" style={{ fontSize: "0.8rem" }}>
                      {/* <hr /> */}
                      <Link to="/learning/merit-award" className={`dropdown-item ${isActive("/learning/merit-award") ? "active" : ""}`} style={{ fontSize: "0.8rem" }} >Merit Award</Link>
                      <Link to="/learning/school-curriculum" className={`dropdown-item ${isActive("/learning/school-curriculum") ? "active" : ""}`} style={{ fontSize: "0.8rem" }} >School Curriculum</Link>
                    </div>
                  </div>
                )
              }
            </ul>
          </li>

          <li className="nav-item dropdown " onMouseOver={() => setshowSixth(false)}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
              style={{ color: navbar ? "#6F7F99" : "#6F7F99" }}
              onMouseOver={() => setshowSixth(false)}
            >
              <span style={{ fontSize: "0.9rem" }}>School Life</span>
            </a>
            <ul className="dropdown-menu" style={{}} onMouseOver={() => setshowSixth(false)}>
              <hr />
              {portfolioItems.map((contact, index) => (
                <li key={index}>
                  <Link
                    to={contact.link}
                    className={`dropdown-item ${isActive(contact.link) ? "active" : ""
                      }`}
                  >
                    <span style={{ fontSize: "0.85rem" }}>{contact.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {/* <li className="nav-item dropdown " onMouseOver={() => setshowSixth(false)}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
              style={{ color: navbar ? "#6F7F99" : "#6F7F99" }}
              onMouseOver={() => setshowSixth(false)}
            >
              <span style={{ fontSize: "1rem" }}>About Us</span>
            </a>
            <ul className="dropdown-menu " style={{}} onMouseOver={() => setshowSixth(false)}>
              <hr />
              {About.map((contact, index) => (
                <li key={index}>
                  <Link
                    to={contact.link}
                    className={`dropdown-item ${isActive(contact.link) ? "active" : ""
                      }`}
                  >
                    <span style={{ fontSize: "0.78rem" }}>{contact.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li> */}
          <li className="nav-item dropdown" onMouseOver={() => setshowSixth(false)}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
              style={{ color: navbar ? "#6F7F99" : "#6F7F99" }}
              onMouseOver={() => setshowSixth(false)}
            >
              <span style={{ fontSize: "0.9rem" }}>Policy</span>
            </a>
            <ul className="dropdown-menu " style={{}} onMouseOver={() => setshowSixth(false)}>
              <hr />
              {policy.map((contact, index) => (
                <li key={index}>
                  <Link
                    to={contact.link}
                    className={`dropdown-item ${isActive(contact.link) ? "active" : ""
                      }`}
                  >
                    <span style={{ fontSize: "0.78rem" }}>{contact.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className={
                portfolioItems.some((elm) => isActive(elm.link))
                  ? "nav-link  "
                  : "nav-link "
              }
              // href="#"
              // role="button"
              // data-bs-toggle="dropdown"
              // data-bs-auto-close="outside"
              // aria-expanded="false"
              style={{ color: navbar ? "#6F7F99" : "#6F7F99" }}
            >
              <Link to="/contact/contact-v2">
                <span style={{ fontSize: "0.9rem" }}>Contact Us</span>
              </Link>
            </a>
            {/* <ul className="dropdown-menu">
              <hr />
              {contactItems.map((contact, index) => (
                <li key={index}>
                  <Link
                    to={contact.link}
                    className={`dropdown-item ${isActive(contact.link) ? "active" : ""
                      }`}
                  >
                    <span style={{ fontSize: "0.85rem" }}>{contact.text}</span>
                  </Link>
                </li>
              ))}
            </ul> */}
          </li>
          {/* End li (contact) */}
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        {/* <div className="mobile-content d-block d-lg-none" onClick={() => setshowSixth(false)}>
          <div className="d-flex flex-column align-items-center justify-content-center mt-70" onMouseOver={() => setshowSixth(false)}>
            <Link
              to="/contact/contact-v2"
              className="btn-twentyOne fw-500 tran3s"
            >
              Contact us
            </Link>
          </div>
        </div> */}
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
