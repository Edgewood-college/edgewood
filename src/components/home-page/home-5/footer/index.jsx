import { Link } from "react-router-dom";
import Address from "./Address";
import FooterMenu from "./FooterMenu";
import Social from "./Social";
import CallToActions from "../CallToActions";
const index = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-style-twelve theme-basic-footer position-relative zn2">
      <div className="fancy-short-banner-fifteen pt-150 lg-pt-80 pb-30 position-relative zn2 mt-200 lg-mt-100">
        <CallToActions />
      </div>
      <div className="container">
        <div className="line-bg-wrapper position-relative pt-130 pb-60 lg-pt-100 lg-pb-40">
          <div className="row justify-content-between">
            <div className="col-lg-4 footer-intro mb-40">
              <div className="logo" style={{ height: '55px' }}>
                <Link to="/">
                  <img src="/images/assets/edgewood college.png" alt="brand" width={95} />
                </Link>
              </div>
              <p className="text-white fs-18 mt-30 mb-40 md-mt-10 md-mb-20 pe-xxl-5">
                Setting the pace for great education.
              </p>
              <div style={{lineHeight: '50px'}}>
              <Social />
              <p className=""> 
            Copyright © - {currentYear} Edgewood College.
          </p>
              </div>
            </div>
            {/* End .col-lg-3 logo_01.png  */}
            <FooterMenu />

            <Address />
          </div>
          {/* End .row */}
          {/* <p className="copyright text-center pt-30 m0">
            Copyright © - {currentYear} Edgewood College.
          </p> */}
        </div>
        {/* /.inner-wrapper */}
      </div>
      {/* End .container */}
      <img
        src="/images/shape/shape_170.svg"
        alt="shape"
        className="lazy-img shapes shape-one"
      />
    </div>
  );
};

export default index;
