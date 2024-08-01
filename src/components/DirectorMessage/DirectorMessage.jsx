import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from "../../components/home-page/home-5/footer";
import Header5 from '../header/Header5';
import Header6 from '../header/Header6';
export const DirectorMessage = () => {
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
                                    Director's Messages
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-16 col-lg-9 ms-auto">
                            <div className="ps-xxl-5" data-aos="fade-left">
                                {/* <h6 className="mb-30">Our History &amp; Goal.</h6> */}
                                <p className="text- tx-dark" style={{ fontWeight: "revert" }}>
                                    It is with great pleasure that I welcome you to Edgewood College, an institution borne from my desire to provide a balanced educational system that moulds learners into rounded leaders.
                                </p>
                                {/* <p className='fst-italic position-relative' style={{ fontWeight: "bolder" }}>Here is how to join our college</p> */}
                                <p className=' tx-dark '>
                                    Our aim is to collaborate with parents to nurture learners who thrive on challenge, maximise their potential, and have the willingness to serve their community. We operate a fully-fledged secondary school (IGCSE and OSSD) and specialise in Cambridge A Levels, UK University Foundation Programme and Medical Foundation Programme.
                                </p>
                                <p className="text- tx-dark">
                                    I believe that, for smooth transition into adulthood, parents and educators must pay special attention to the spiritual, academic, physical and social wellbeing of the child. Edgewood College was founded to achieve this goal.
                                </p>
                                <p className='tx-dark'>
                                    The system of teaching and learning at Edgewood College includes the deployment of masterful educators, special attention to the spiritual life of each child without being invasive or forceful, a wide range of extracurricular activities, ongoing guidance and counselling, experiential learning opportunities, and talks from people of experience in various fields.
                                </p>
                                <p>We also enjoy good governance and advice from leading industry experts. Our governors are:</p>
                                <ul>
                                    <li>Mr Olayemi Cardoso (Chair)</li>
                                    <li>Mrs Kofoworade Alabi</li>
                                    <li>Mrs Funke Agbor (SAN)</li>
                                    <li>Mr Kola Ayeye</li>
                                    <li>Mr Olaiya Phillips</li>
                                </ul>
                                <p>I know there’s a limit to what a website can tell, so I hope you visit to see what a unique place Edgewood College is.</p>
                                <div>
                                    <p style={{ fontWeight: "bolder" }}>Mrs Kehinde Phillips</p>
                                    <div style={{position:"relative",bottom:"1vw"}}>Executive Director</div>
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
