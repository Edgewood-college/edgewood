import { Link, useNavigate } from "react-router-dom";
import {
  menuItems,
  pagesItems,
  portfolioItems,
  blogItems,
  contactItems,
} from "../../data/menu";

import { useLocation } from "react-router-dom";
import portfolio from "@/data/portfolio";
import { useState } from "react";

const MainMenu = () => {
  const { pathname } = useLocation();
  const [showSixth, setshowSixth] = useState(false)
  const navigate = useNavigate();

  const isActive = (link) => {
    return pathname.replace(/\/\d+$/, "") === link.replace(/\/\d+$/, "");
  };
  const handleSixthForm = () => {
    setshowSixth(!showSixth)
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
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link to="/" className="d-block">
                <img src="/images/logo/logo_01.png" alt="logo" />
              </Link>
            </div>
          </li>
          {/* End li */}

          <li className="nav-item dropdown mega-dropdown-md">
            <a
              // className="nav-link dropdown-toggle active-menu"
              // href="#"
              onClick={() => navigate("/")}
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
              onMouseOver={() => setshowSixth(false)}
              className={
                menuItems.some((menu) =>
                  menu.items.some((elm) => isActive(elm.link))
                )
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link dropdown-toggle"
              }
              style={{color: "white"}}
            // style={{color:'green'}}
            >
              Home
            </a>
            <ul className="dropdown-menu" style={{}}>
              <li>
                <div className="rows">
                  {menuItems.map((menu, index) => (
                    <div className="home-hov" key={index}>
                      <div className="menu-column">
                        {/* <h6
                          className={
                            menu.items.some((elm) => isActive(elm.link))
                              ? "mega-menu-title active-menu"
                              : "mega-menu-title"
                          }
                        >
                          {menu.title}
                        </h6> */}
                        <hr />

                      </div>
                      <ul className="style-none mega-dropdown-list" style={{ display: "flex", flexDirection: "column", }}>
                        {menu.items.map((item, index) => (
                          <li key={index} >
                            <Link
                              to={item.link}
                              className={`dropdown-item ${isActive(item.link) ? "active" : ""
                                }`}
                            >
                              <span style={{ fontSize: "0.85rem" }}>{item.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </li>
            </ul>

          </li>
          {/* End li (home mega menu) */}


          <li className="nav-item dropdown">
            <a
              // className="nav-link dropdown-toggle"
              className={
                portfolioItems.some((elm) => isActive(elm.link))
                  ? "nav-link dropdown-toggle "
                  : "nav-link "
              }
              href="https://edgewoodcollege.schulup.com/Account/Login"
              style={{color: "white"}}
            // role="button"
            // data-bs-toggle="dropdown"
            // data-bs-auto-close="outside"
            // aria-expanded="false"
            
            >
              School Portal
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
            <div onClick={() => navigate("/executive-speech")}
              // className="nav-link dropdown-toggle"
              className={
                portfolioItems.some((elm) => isActive(elm.link))
                  ? "nav-link dropdown-toggle "
                  : "nav-link "
              }
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
              style={{color: "white"}}
            >
              Admission
            </div>
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
          </div>
          {/* End li (portfolio) */}


          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
              style={{color: "white"}}
            >
              Learning
            </a>
            <ul className="dropdown-menu">
              <hr />
              <div></div>
              {/* {blogItems.map((contact, index) => (
                <li key={index} className="dropdown-item-wrapper">
                  <Link
                    to={contact.link}
                    className={`dropdown-item ${isActive(contact.link) ? "active" : ""}`}
                  >
                    <span style={{ fontSize: "0.85rem" }}>{contact.text}</span>
                  </Link>
                </li>
              ))} */}
              <Link to="/learning/secondary-school" className={`dropdown-item ${isActive("/learning/secondary-school") ? "active" : ""}`} style={{ fontSize: "0.8rem" }}       onMouseOver={() => setshowSixth(false)}>Secondary School</Link>
              <div className="" style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onMouseOver={handleSixthForm}>
                <div className='dropdown-item' style={{ fontSize: "0.8rem" }} >Sixth Form</div>
                <div style={{ position: "relative", right: "1rem", cursor: "pointer" }} ><img src="/images/assets/rightarrow.png" alt="arrow image" width="8px" /></div>
              </div>
              {
                showSixth && (
                  <div style={{ width: "400px", height: "200px", position: "absolute", background: "white", right: "15rem", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",top:"2rem" }}>
                    <div className="dropdown-item" style={{fontSize:"0.8rem"}}>
                      <Link to="/learning/cambridgeA-level" className={`dropdown-item ${isActive("/learning/cambridgeA-level") ? "active" : ""}`} style={{ fontSize: "0.8rem" }} >Cambridge A level</Link>
                      <Link to="/learning/University-Programme" className={`dropdown-item ${isActive("/learning/University-Programme") ? "active" : ""}`} style={{ fontSize: "0.8rem" }} >University Foundation programme</Link>
                      <Link to="/learning/Medical-foundation-Programme" className={`dropdown-item ${isActive("/learning/Medical-foundation-Programme") ? "active" : ""}`} style={{ fontSize: "0.8rem" }} >Medical foundaton programme</Link>
                    </div>
                  </div>
                )
              }
              <Link to="/learning/Merit-award" className={`dropdown-item ${isActive("/learning/Merit-award") ? "active" : ""}`} style={{ fontSize: "0.8rem" }}       onMouseOver={() => setshowSixth(false)}>Merit Awards System</Link>
              <Link to="/learning/club-activities" className={`dropdown-item ${isActive("/learning/club-activities") ? "active" : ""}`}       onMouseOver={() => setshowSixth(false)} style={{ fontSize: "0.8rem" }}>Club Activities</Link>
              <Link to="/learning/sports" className={`dropdown-item ${isActive("/learning/sports") ? "active" : ""}`} style={{ fontSize: "0.8rem" }}       onMouseOver={() => setshowSixth(false)}>Sports & Activities</Link>
              <Link to="/learning/arts" className={`dropdown-item ${isActive("/learning/arts") ? "active" : ""}`} style={{ fontSize: "0.8rem" }}       onMouseOver={() => setshowSixth(false)}>Arts</Link>
              <Link to="/learning/music" className={`dropdown-item ${isActive("/learning/music") ? "active" : ""}`} style={{ fontSize: "0.8rem" }}       onMouseOver={() => setshowSixth(false)}>Music</Link>
              <Link to="/learning/leadership-program" className={`dropdown-item ${isActive("/learning/leadership-program") ? "active" : ""}`} style={{ fontSize: "0.8rem" }}       onMouseOver={() => setshowSixth(false)}>Leadership Programs</Link>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a
              className={
                blogItems.some((elm) => isActive(elm.link))
                  ? "nav-link dropdown-toggle"
                  : "nav-link dropdown-toggle"
              }
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
              style={{color: "white"}}
            >
              School life
            </a>
            <ul className="dropdown-menu" style={{}}>
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
          <li className="nav-item dropdown">
            <a
              className={
                contactItems.some((elm) => isActive(elm.link))
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link "
              }
              style={{color: "white"}}
            // href="#"
            // role="button"
            // data-bs-toggle="dropdown"
            // data-bs-auto-close="outside"
            // aria-expanded="false"
            >
              <Link to="/contact/contact-v2">Contact Us</Link>
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
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link
              to="/contact/contact-v2"
              className="btn-twentyOne fw-500 tran3s"
            >
              Contact us
            </Link>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
