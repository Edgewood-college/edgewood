import { Link } from "react-router-dom";

const CallToActions = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <h2 className="title fw-500 text-white mb-20">
              Let’s get started with us.
            </h2>
            <p className="text-lg text-white m0">
              For furthur info &amp; support,{" "}
              <Link
                to="/contact/contact-v2"
                className="text-decoration-underline"
              >
                Contact us.
              </Link>
            </p>
          </div>
          {/* End .col-lg-6 */}

          <div className="col-lg-6" data-aos="fade-left">
            <img src="" alt="" srcset="" />
            <img
              src="/images/assets/edgewood-partners.png"
              alt="shape"
              className="lazy-img shapes"
            />
            <div className="footer-partners md-mt-40 ms-lg-4">
            </div>
            {/* /.form-bg */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActions;
