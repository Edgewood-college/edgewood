import React from 'react'
import Header5 from '../header/Header5'
import ProjectDetails from '../portfolio/portfolio-details/ProjectDetails'
import ProjectSlide from '../portfolio/portfolio-details/ProjectSlide'
import SocialShare from '../portfolio/portfolio-details/SocialShare'
import PortfolioGallery from '../portfolio/portfolio-details/PortfolioGallery'
import { useNavigate } from 'react-router-dom'
import Footer from '../footer/Footer'

export const Gallery = () => {
  const navigate = useNavigate();
  const images = [
    {
      src: "/images/assets/playinf scoccer.JPG",
      alt: "image-port1"
    },
    {
      src: "/images/assets/cultural day.JPG",
      alt: "image-port2"
    },
    {
      src: "/images/assets/cyclying .jpg",
      alt: "image-port3"
    },
    {
      src: "/images/assets/vibe001.JPG",
      alt: "image-port4"
    },
    {
      src: "/images/assets/vibe.JPG",
      alt: "image-port5"
    },
    {
      src: "/images/assets/vibe2 .JPG",
      alt: "image-port5"
    },
    {
      src: "/images/assets/vibe0003.JPG",
      alt: "image-port5"
    },


  ]
  return (
    <div>
      <Header5 />
      <div className="portfolio-details-two pt-0 pb-70 lg-pb-10 md-pt-10">
        <div className="project-desctiption">
          <div className="container">
            <div className="row">
              <div className="col-lg-8" data-aos="fade-right">

                <div className="fancy-feature-fiftyOne position-relative mt-130">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-7" data-aos="fade-right">
                        <div className="title-style-five mb-65 lg-mb-40">
                          <div className="sc-title-two fst-italic position-relative" onClick={() => navigate(-1)}>
                           Social Events
                          </div>
                          {/* <h2 className="main-title fw-500 tx-dark" style={{fontSize:"28px"}}>Our Distinguished <br></br> Alumni</h2> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.container */}
                  {/* <img
                                        src="/images/shape/shape_172.svg"
                                        alt="shap"
                                        className="lazy-img shapes shape-two"
                                    />
                                    <img
                                        src="/images/shape/shape_175.svg"
                                        alt="shap"
                                        className="lazy-img shapes shape-three"
                                    /> */}
                </div>
                <div
                  id="gallery-carousel"
                  className="carousel slide me-xxl-5 md-mb-40"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {images.map((image, index) => (
                      <div
                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                        key={index}
                      >
                        <img src={image.src} className="d-block " alt="media" style={{ width: "100%", height: "400px", objectFit: "contain" }} />
                      </div>
                    ))}
                  </div>
                  {/* End carousel-inner */}
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#gallery-carousel"
                    data-bs-slide="prev"
                  >
                    <i className="bi bi-chevron-left"></i>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  {/* End prev */}

                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#gallery-carousel"
                    data-bs-slide="next"
                  >
                    <i className="bi bi-chevron-right"></i>
                    <span className="visually-hidden">Next</span>
                  </button>
                  {/* End next */}
                </div>
                {/* /#gallery-carousel */}
              </div>
              {/* End .col-lg-8 */}

              <div className="col-lg-4" data-aos="fade-left" >
                <div className="sidebar ms-xl-5" style={{ marginTop: "22rem" }}>
                  <h3 className="mb-20">Gallery</h3>
                  <p className="border-bottom pb-40 mb-35 lg-pb-20">
                    The 2023/2024 graduating set
                  </p>
                  <div className="row" style={{ display: "none" }}>
                    <>
                      <div className="col-12 mb-35">
                        <div className="pt-title fw-bold tx-dark text-uppercase">Date</div>
                        <div className="pt-text">eqwfqewfeq</div>
                      </div>
                      {/* End .col-12 */}

                      <div className="col-12 mb-35">
                        <div className="pt-title fw-bold tx-dark text-uppercase">
                          Client Name
                        </div>
                        <div className="pt-text">july 3023.,may 2</div>
                      </div>
                      {/* End .col-12 */}

                      <div className="col-12 mb-35">
                        <div className="pt-title fw-bold tx-dark text-uppercase">
                          Project Type
                        </div>
                        <div className="pt-text">pringle text day</div>
                      </div>
                      {/* End .col-12 */}
                    </>
                  </div>
                  {/* End .row */}

                  <SocialShare />
                </div>
              </div>
              {/* End col-lg-4 */}
            </div>
            {/* End .row */}

            <div className="col-xl-9  mt-120 lg-mt-80" style={{display:'none'}}>
              <div
                className="title-style-twelve mb-45 lg-mb-30"
                data-aos="fade-up"
              >
                <div className="sc-title fst-italic position-relative">
                  Overview
                </div>
                <h2 className="main-title fw-500 tx-dark">Sharing Success: Alumni Contributions</h2>
              </div>
              {/* /.title-style-twelve */}
              <p data-aos="fade-up">
                At Edgewood, we take pride in the accomplishments of our alumni, whose contributions reflect the values and education they received during their time with us. Our alumni are leaders, innovators, and change-makers in various fields, and their successes inspire current students to aim high and make a difference in the world.
              </p>
              <p data-aos="fade-up">
                Through their professional achievements, community involvement, and support for future generations, Edgewood alumni continue to make a lasting impact. We celebrate these contributions as a testament to the enduring strength of our community and the power of an Edgewood education in shaping successful and meaningful careers.
              </p>
              <div className="row">
                <div className="col-xl-8">
                  <div
                    className="title-style-twelve mb-45 pt-75 lg-pt-40 lg-mb-30"
                    data-aos="fade-up"
                  >
                    {/* <div className="sc-title fst-italic position-relative">
                                            Work Proccess
                                        </div> */}
                    <h2 className="main-title fw-500 tx-dark">
                      Honoring: Alumni Spotlight
                    </h2>
                  </div>
                  {/* /.title-style-twelve */}
                </div>
              </div>
              <p data-aos="fade-up">

                At Edgewood, we celebrate the remarkable achievements of our alumni through our "Alumni Spotlight" series, which honors the excellence and dedication they bring to their respective fields. These stories showcase individuals who have made significant contributions to their communities, industries, and beyond, embodying the values and education they received at Edgewood.
              </p>
              <p data-aos="fade-up">
                By highlighting these success stories, we not only recognize the accomplishments of our alumni but also inspire current students to pursue their own paths with passion and determination. The "Alumni Spotlight" is a testament to the lasting impact of an Edgewood education and the bright futures that lie ahead for all our graduates.
              </p>
              <div className="row">
                <PortfolioGallery />
              </div>

              <div className='' style={{ display: "none" }}>
                <div
                  className="title-style-twelve mb-45 mt-120 lg-mb-30 lg-mt-80"
                  data-aos="fade-up"
                >
                  <div className="sc-title fst-italic position-relative">
                    Work Proccess
                  </div>
                  <h2 className="main-title fw-500 tx-dark">Final Result</h2>
                </div>
                {/* /.title-style-twelve */}

                <p data-aos="fade-up">
                  Content creators and human resources personnel are able to
                  seamlessly update the website through graphical interfaces, and
                  the site simply rebuilds itself along with search engine indexes
                  as the OpenWeb team continues to create.
                </p>
                <p data-aos="fade-up">
                  Enim eu turpis egestas pretium aenean pharetra. Dui accumsan sit
                  amet nulla facilisi mor tempu iaculis. Eu ultrices vitae auctor
                  eu augue. Sed turpis tincidunt id aliquet risus Purus in massa
                  tempor nec feugiat nisl pretium fusce. Feugiat vivamus at augue
                  eget arcu dictum. Gravida quis blandit turpis cursus in hac
                  habitasse platea dictumst.
                </p>
              </div>
            </div>
            {/* End col-xl-9 */}

            <div className="project-pagination m-auto pt-100 lg-pt-50 sm-pt-10" style={{ textAlign: "center", position: "relative", right: "-19vw" }}>
              <div className="row gx-xxl-5">
                <div className="col-sm-6">
                  <div
                    className="arrow-block position-relative zn2 mt-20"
                    data-aos="fade-up"

                  // style={{width:"600px",height:"600px"}}
                  >
                    <img
                      src="/images/assets/grad cert.jpg"
                      alt="media"
                      className="lazy-img w-100"


                    />
                    <div className="hover-content tran3s position-absolute d-flex flex-column align-items-center justify-content-center">
                      <div className="text-white fw-500 pg-title">
                        Prev
                      </div>
                      <a
                        // href="#"
                        className="arrow rounded-circle text-center tran3s"
                      >
                        <i className="bi bi-arrow-left" onClick={() => navigate(-1)} />
                      </a>
                    </div>
                    {/* /.hover-content */}
                  </div>
                  {/* /.arrow-block */}
                </div>
                {/* End .col-6 */}

                <div className="col-sm-6" style={{ display: "none" }}>
                  <div
                    className="arrow-block position-relative zn2 mt-20"
                    data-aos="fade-left"
                  >
                    <img
                      src="/images/assets/studentsbg.jpg"
                      alt="media"
                      className="lazy-img w-100"
                    />
                    <div className="hover-content tran3s position-absolute d-flex flex-column align-items-center justify-content-center">
                      <div className="text-white fw-500 pg-title">
                        Next
                      </div>
                      <a
                        href="#"
                        className="arrow rounded-circle text-center tran3s"
                      >
                        <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                    {/* /.hover-content */}
                  </div>
                  {/* /.arrow-block */}
                </div>
                {/* End .col-6 */}
              </div>
              {/* End .row */}
            </div>
            {/* /.project-pagination */}
          </div>
          {/* End .container */}
        </div>
        {/* /.project-desctiption */}
      </div>
    </div>

  )
}
