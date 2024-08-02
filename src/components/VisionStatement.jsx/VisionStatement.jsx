import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from "../../components/home-page/home-5/footer";
import Header5 from '../header/Header5';
import Header6 from '../header/Header6';
export const VisionStatement = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Header6 />
            <div className="fancy-feature-fortySeven zn2 position-relative pt-130 pb-160 lg-pt-120 lg-pb-100">
                <div className="container">
                    {/* <FilterProperty /> */}
                </div>
                <div className="container">

                    <div className="row">
                        <div className="col-lg-7" data-aos="fade-right">
                            <div className="title-style-five mb-65 md-mb-40">
                                <div className="sc-title-two fst-italic position-relative" onClick={() => navigate(-1)}>
                                    MISSION & VISION
                                </div>
                                {/* <h2 className="main-title fw-500 tx-dark">
      We’r the top rated agency.
    </h2> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-16 col-lg-9 ms-auto">
                            <div className="ps-xxl-5" data-aos="fade-left">
                                {/* <h6 className="mb-30">Our History &amp; Goal.</h6> */}

                                <hr className='w-screen' />
                                <div>
                                    <p className='' style={{ fontWeight: "bolder" }}>Our Vision:</p>

                                    <ul>
                                        <li>Deliver quality education.</li>
                                        <li>Build God-fearing, selfless and exemplary leaders.</li>
                                        <li>Raise leaders that are equipped to impact their country positively and make their mark globally.</li>
                                    </ul>

                                </div>
                                <div>
                                    <p className='' style={{ fontWeight: "bolder" }}>Our Mission:</p>
                                    <ul>
                                        <li>To deliver total and qualitative education in a conducive learning environment, with a natural progression to globally recognised universities </li>
                                        <li>Committed to giving our students the exposure and opportunities they need to build on their innate qualities, develop and nurture in them life skills and a culture of selfless service to their community</li>
                                        <li>Using skilled, innovative and experienced tutors who deliver the curriculum and mentor students to be the best they can be for God, community and mankind.</li>
                                    </ul>
                                </div>
                                {/* <div className="row">
      <Counter />
    </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.container */}
                {/* 
    <img
        src="/images/shape/shape_171.svg"
        alt="shape"
        className="lazy-img shapes shape-one"
    /> */}
                <img
                    src="/images/shape/shape_172.svg"
                    alt="shape"
                    className="lazy-img shapes shape-two"
                />
                {/* /.container */}

                {/* <img
        src="/images/shape/shape_163.svg"
        alt="media"
        className="lazy-img shapes shape-one"
    /> */}

            </div>
            <Footer />
        </div>
    )
}
