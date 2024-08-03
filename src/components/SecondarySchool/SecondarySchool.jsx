import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from "../../components/home-page/home-5/footer";
import Header5 from '../header/Header5';
import Header6 from '../header/Header6';
export const SecondarySchool = () => {
    const navigate = useNavigate()
    return (
        <div>
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
                                        SECONDARY SCHOOL
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-16 col-lg-9 ms-auto">
                                <div className="ps-xxl-5" data-aos="fade-left">
                                    {/* <h6 className="mb-30">Our History &amp; Goal.</h6> */}
                                    <p className="text- tx-dark" style={{ fontWeight: "revert" }}>
                                        Edgewood College is a Cambridge Assessment International Education accredited secondary school that teaches and prepares children aged 11 to 16 years to sit for the Cambridge IGCSE examinations.
                                    </p>
                                    {/* <p className='fst-italic position-relative' style={{ fontWeight: "bolder" }}>Here is how to join our college</p> */}
                                    <p className=' tx-dark '>
                                        Our children also have the opportunity to learn the history, language and geography of Nigeria.
                                    </p>
                                    <p className='fst-italic position-relative' style={{ fontWeight: "bolder" }}>
                                        *Students will not sit formal examinations in these subjects, but will be assessed periodically.
                                    </p>
                                    <p className='tx-dark'>
                                        We work with learners and parents to select subjects that match the learners’ interests, aspirations and strengths. They learn these subjects in Years 10 and 11: Biology, Computer Science and ICT, English Language, French and Mathematics
                                    </p>
                                    <p className='position-relative' style={{ fontWeight: "bolder" }}>
                                        In addition, they choose one subject from the subject groups below.
                                    </p>
                                    <ul>
                                        <li>Group 1: Art and Design, Chemistry or History</li>
                                        <li>Group 2: Design and Technology or Economics</li>
                                        <li>Group 3: Additional Mathematics, Business Studies or Geography</li>
                                        <li>Group 4: English Literature or Physics</li>
                                    </ul>
                                    <ul className='tx-dark'>
                                        <p className='fst-italic position-relative' style={{ fontWeight: "bolder" }}>
                                            When learners complete the secondary school programme, they progress to the:
                                        </p>

                                        <li className='tx-dark' >
                                            <span className='' style={{ color: "orange" }}><Link to="/learning/cambridgeA-level"> Cambridge A Levels</Link></span> (which provides direct entry into the second year of degree programmes in Nigeria universities and the first year in universities in USA, Canada, Europe and other destinations).
                                        </li>
                                        <li className='' style={{ color: "orange" }}><Link to="/learning/University-Programme">University Foundation Programme</Link></li>
                                        <li className='' style={{ color: "orange" }}><Link to="/learning/Medical-foundation-Programme">Medical Foundation Programme</Link></li>
                          
                                    </ul>
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
        </div>
    )
}
