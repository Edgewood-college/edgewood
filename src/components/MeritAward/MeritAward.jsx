import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from "../../components/home-page/home-5/footer";
import Header5 from '../header/Header5';
export const MeritAward = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <Header5 />
                <div className="fancy-feature-fortySeven zn2 position-relative pt-130 pb-160 lg-pt-120 lg-pb-100">
                    <div className="container">
                        {/* <FilterProperty /> */}
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7" data-aos="fade-right">
                                <div className="title-style-five mb-65 md-mb-40">
                                    <div className="sc-title-two fst-italic position-relative" onClick={() => navigate(-1)}>
                                        MERITS AWARDS
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-16 col-lg-0 ms-auto">
                                <div className="ps-xxl-5" data-aos="fade-left">
                                    <div style={{ display: "flex", alignItems: "center", justifyItems: "center", flexDirection: "column", margin: "auto", gap: "3vw", margin: "5vw 0vw" }}>
                                        <div style={{ marginTop: "0rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                            <div>
                                                <img src="/images/assets/meritAward1.jpeg" alt="images render" className='calendar_img' />
                                            </div>
                                            <div>
                                                <img src="/images/assets/meritaward2.jpeg" alt="image render" className='calendar_img' />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </div>
    )
}
