import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from "../../components/home-page/home-5/footer";
import Header5 from '../header/Header5';
import Header6 from '../header/Header6';
export const SchoolAnthem = () => {
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
                                    COLLEGE ANTHEM
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-16 col-lg-0 ms-auto">
                            <div className="ps-xxl-5" data-aos="fade-left" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "3vw" }}>
                                {/* <h6 className="mb-30">Our History &amp; Goal.</h6> */}
                                <p className="text- tx-dark fsc-title-two fst-italic position-relative" style={{ fontWeight: "bolder" }}>
                                    The college anthem is sung at assemblies and at other school events.
                                </p>
                                {/* <p className='fst-italic position-relative' style={{ fontWeight: "bolder" }}>Here is how to join our college</p> */}
                                <div style={{ display: "flex", alignContent: 'center', flexDirection: "column", flex: "3vw" }}>
                                    <div>
                                        <p style={{ marginBottom: "0rem" }}>Edgewood College standing out</p>
                                        <p style={{ marginBottom: "0rem" }}>Leading us to future bright</p>
                                        <p style={{ marginBottom: "0rem" }}>Cutting edge and sound education</p>
                                        <p style={{ marginBottom: "0rem" }}>Teaching us that hard work is the bedrock of true leadership</p>
                                        <p style={{ marginBottom: "0rem" }}>Discipline, attitude, dedication</p>
                                    </div>

                                    <div style={{marginTop:"2rem"}}>
                                        <p className='fst-italic' style={{ marginBottom: "0rem",fontWeight:"bolder" }}>Chorus</p>
                                        <p style={{ marginBottom: "0rem" }}>We are the best</p>
                                        <p style={{ marginBottom: "0rem" }}>Maximizing potential, leaders all</p>
                                        <p style={{ marginBottom: "0rem" }}>With GOD on our side, we are achieving</p>
                                        <p style={{ marginBottom: "0rem" }}>We are the best</p>
                                        <p style={{ marginBottom: "0rem" }}>Maximizing potential, leaders all</p>
                                        <p style={{ marginBottom: "0rem" }}>With GOD on our side, we are achieving</p>
                                    </div>

                                    <div style={{marginTop:"2rem"}}>
                                        <p style={{ marginBottom: "0rem" }}>Guiding us to excellence</p>
                                        <p style={{ marginBottom: "0rem" }}>Grooming us for success</p>
                                        <p style={{ marginBottom: "0rem" }}>Setting the pace for great education</p>
                                        <p style={{ marginBottom: "0rem" }}>Securing the best for us</p>
                                        <p style={{ marginBottom: "0rem" }}>Guiding us to destiny</p>
                                        <p style={{ marginBottom: "0rem" }}>Leading us to greatness in our nation</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <img
                    src="/images/shape/shape_172.svg"
                    alt="shape"
                    className="lazy-img shapes shape-two"
                />

            </div>
            <Footer />
        </div>
    )
}
