import React from 'react'
import Header5 from '../header/Header5'
import ProjectDetails from '../portfolio/portfolio-details/ProjectDetails'
import ProjectSlide from '../portfolio/portfolio-details/ProjectSlide'
import SocialShare from '../portfolio/portfolio-details/SocialShare'
import PortfolioGallery from '../portfolio/portfolio-details/PortfolioGallery'
import { useNavigate, useNavigation } from 'react-router-dom'

export const Career = () => {

    const navigate = useNavigate()
    const images = [
        {
            src: "/images/assets/students boys.jpg",
            alt: "image-port1"
        },
        {
            src: "/images/assets/career.jpg",
            alt: "image-port2"
        },
        {
            src: "/images/assets/mama.jpg",
            alt: "image-port3"
        },
        {
            src: "/images/assets/dining1.JPG",
            alt: "image-port4"
        },
        {
            src: "/images/assets/grad boy 22.jpg",
            alt: "image-port5"
        }

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
                                                        Career
                                                    </div>
                                                    {/* <h2 className="main-title fw-500 tx-dark" style={{fontSize:"3rem"}}>Career Path <br></br></h2> */}
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
                                                <img src={image.src} className="d-block w-100" alt="media" width="1100px" height="400px" />
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
                                    <h3 className="mb-20">Career</h3>
                                    <p className="border-bottom pb-40 mb-35 lg-pb-20">
                                        The 2023/2024 graduating set
                                    </p>
                                    <div className="row" style={{display:"none"}}>
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

                        <div className="col-xl-9  mt-120 lg-mt-80">
                            <div
                                className="title-style-twelve mb-45 lg-mb-30"
                                data-aos="fade-up"
                            >
                                <div className="sc-title fst-italic position-relative">
                                    Overview
                                </div>
                                <h2 className="main-title fw-500 tx-dark">Aligning Your Interests with Career Opportunities</h2>
                            </div>
                            {/* /.title-style-twelve */}
                            <p data-aos="fade-up">
                                At Edgewood, we are dedicated to helping students align their personal interests with meaningful career opportunities. Through personalized guidance, exploration of diverse subjects, and real-world experiences like internships and industry visits, we empower students to discover their passions and understand how these can translate into fulfilling careers.
                            </p>
                            <p data-aos="fade-up">
                                Our curriculum is designed to be both engaging and relevant, ensuring that students are equipped with the skills and knowledge needed to succeed in their chosen fields. By supporting students in identifying and pursuing their career interests, we prepare them for a successful transition from school to the professional world.
                            </p>
                            <div className="row">
                                <div className="col-xl-8">
                                    <div
                                        className="title-style-twelve mb-45 pt-75 lg-pt-40 lg-mb-30"
                                        data-aos="fade-up"
                                    >
                                        <div className="sc-title fst-italic position-relative">
                                            Work Proccess
                                        </div>
                                        <h2 className="main-title fw-500 tx-dark">
                                            Skills Development for Future Success
                                        </h2>
                                    </div>
                                    {/* /.title-style-twelve */}
                                </div>
                            </div>
                            <p data-aos="fade-up">
                                At Edgewood, we focus on helping students discover and align their interests with potential career opportunities. Through a nurturing environment that encourages exploration, personalized career counseling, and real-world exposure, we guide students in identifying their passions and understanding how these can translate into fulfilling careers. Our comprehensive approach ensures that students are well-prepared for the next steps, whether they choose higher education, vocational training, or immediate entry into the workforce.
                            </p>
                            <p data-aos="fade-up">
                                We emphasize hands-on experiences like internships and industry visits to provide students with valuable insights into various fields. With a curriculum designed to be both challenging and relevant, Edgewood equips students with the skills and knowledge needed to succeed in their chosen paths. Our commitment is to empower each student to build a future that reflects their true selves, turning their passions into real career opportunities.
                            </p>
                            {/* <div className="row">
                                <PortfolioGallery />
                            </div> */}

                            <div style={{display:"none"}}>
                                <div
                                    className="title-style-twelve mb-45 mt-120 lg-mb-30 lg-mt-80"
                                    data-aos="fade-up"
                                >
                                    <div className="sc-title fst-italic position-relative">
                                        Skills Development for Future Success
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

                        <div className="project-pagination m-auto pt-100 lg-pt-50 sm-pt-10"  style={{ textAlign: "center", position: "relative", right: "-19vw" }}>
                            <div className="row gx-xxl-5">
                                <div className="col-sm-6">
                                    <div
                                        className="arrow-block position-relative zn2 mt-20"
                                        data-aos="fade-right"
                                    >
                                      <img
                                            src="/images/assets/grad cert.jpg"
                                            alt="media"
                                            className="lazy-img w-100"

                                        />
                                        <div className="hover-content tran3s position-absolute d-flex flex-column align-items-center justify-content-center" >
                                            <div className="text-white fw-500 pg-title" >
                                                Prev
                                            </div>
                                            <a
                                                
                                                className="arrow rounded-circle text-center tran3s"
                                            >
                                                <i className="bi bi-arrow-left" onClick={() => navigate(-1)}></i>
                                            </a>
                                        </div>
                                        {/* /.hover-content */}
                                    </div>
                                    {/* /.arrow-block */}
                                </div>
                                {/* End .col-6 */}

                                <div className="col-sm-6" style={{display:"none"}}>
                                    <div
                                        className="arrow-block position-relative zn2 mt-20"
                                        data-aos="fade-left"
                                    >
                                        <img
                                            src="/images/media/img_93.jpg"
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
