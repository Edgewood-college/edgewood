import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from "../../components/home-page/home-5/footer";
import Header5 from '../header/Header5';
import Header6 from '../header/Header6';
export const ChristianEthos = () => {
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
                                    CHRISTIAN ETHOS
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-16 col-lg-9 ms-auto">
                            <div className="ps-xxl-5" data-aos="fade-left">
                                {/* <h6 className="mb-30">Our History &amp; Goal.</h6> */}
                                <p className="text- tx-dark" style={{ fontWeight: "revert" }}>
                                    Edgewood College has an evident Christian ethos. We believe that adults and children in our community benefit from the importance we attach to love, respect and integrity. The college also promotes self-discipline and a sense of responsibility to God and humanity.
                                </p>
                                {/* <p className='fst-italic position-relative' style={{ fontWeight: "bolder" }}>Here is how to join our college</p> */}
                                <p className=' tx-dark '>
                                    Learners take part in daily devotions, weekly Jesus learning clubs and monthly praise programmes. Boarders have two devotions every day and attend Sunday services at a local church.
                                </p>
                                <p className="text- tx-dark">
                                    Through the Edgewood Leadership Foundation, the college assists the less privileged in the society, runs scholarship programmes and supports local state schools.
                                </p>
                                

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
