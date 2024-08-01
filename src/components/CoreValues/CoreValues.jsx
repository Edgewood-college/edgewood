import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from "../../components/home-page/home-5/footer";
import Header5 from '../header/Header5';
import Header6 from '../header/Header6';
export const CoreValues = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Header6 />
            <div className="fancy-feature-fortySeven zn2 position-relative pt-130 pb-160 lg-pt-200 lg-pb-100">
                <div className="container">
                    {/* <FilterProperty /> */}
                </div>
                <div className="container">

                    <div className="row">
                        <div className="col-lg-7" data-aos="fade-right">
                            <div className="title-style-five mb-65 md-mb-40">
                                <div className="sc-title-two fst-italic position-relative" onClick={() => navigate(-1)}>
                                    Core Values
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-9 ms-auto">
                            <div className="ps-xxl-5" data-aos="fade-left">
                                {/* <h6 className="mb-30">Our History &amp; Goal.</h6> */}
                                <p className='tx-dark ' style={{ fontWeight: "bolder" }}>
                                    Our Cores Value
                                </p>

                                <div>
                                    <div >
                                        <p className='' style={{ display: "flex", alignItems: "center" }}> <div style={{ fontWeight: "bolder" }}>C</div>hristian Ethos</p>
                                    </div>
                                    <div >
                                        <p className='' style={{ display: "flex", alignItems: "center" }}> <div style={{ fontWeight: "bolder" }}>L</div>eadership</p>
                                    </div>
                                    <div >
                                        <p className='' style={{ display: "flex", alignItems: "center" }}> <div style={{ fontWeight: "bolder" }}>A</div>cademic excellence</p>
                                    </div>
                                    <div >
                                        <p className='' style={{ display: "flex", alignItems: "center" }}> <div style={{ fontWeight: "bolder" }}>S</div>elf development</p>
                                    </div>
                                </div>

                                <div>
                                    <div >
                                        <p className='' style={{ display: "flex", alignItems: "center" }}> <div style={{ fontWeight: "bolder" }}>S</div>elflessness</p>
                                    </div>
                                    <div > 
                                        <p className='' style={{display:"flex",alignItems:"center"}}> <div style={{ fontWeight: "bolder" }}>I</div>ntergrity and</p>
                                    </div>
                                    <div > 
                                        <p className='' style={{display:"flex",alignItems:"center"}}> <div style={{ fontWeight: "bolder" }}>C</div>ommuinity engagement</p>
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
