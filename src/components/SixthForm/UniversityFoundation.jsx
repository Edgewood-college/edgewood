import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from "../../components/home-page/home-5/footer";
import Header5 from '../header/Header5';
import Header6 from '../header/Header6';
export const UniversityFoundation = () => {
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
                                UNIVERSITY FOUNDATION PROGRAMME
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-16 col-lg-10 ms-auto">
                            <div className="ps-xxl-5" data-aos="fade-left">
                                {/* <h6 className="mb-30">Our History &amp; Goal.</h6> */}
                                <p className="text- tx-dark" style={{ fontWeight: "revert" }}>
                                The University Foundation Programme (UFP) is a one-year programme that provides access into UK universities.  It particularly broadens learners’ knowledge and develops their practical skills. Abbey College Malvern, the first provider of university foundation courses in the United Kingdom, validates our programme.
                                </p>
                                <ul>
                                    <p style={{fontWeight:"bolder"}}>There are various pathways:</p>
                                    <li>Science</li>
                                    <li>Engineering</li>
                                    <li>Business</li>
                                    <li>Computing</li>
                                    <li>Law</li>
                                </ul>
                                <ul>
                                    <p style={{fontWeight:"bolder"}}>Depending on the learners’ desired university programme, learners select six from the following modules:</p>
                                    <li>Accounting</li>
                                    <li>Biology</li>
                                    <li>Business</li>
                                    <li>Chemistry</li>
                                    <li>Economics</li>
                                    <li>English</li>
                                    <li>Law</li>
                                    <li>Mathematics</li>
                                    <li>Physics</li>
                                    <li>Sociology</li>
                                </ul>
                                <ul>
                                    <p style={{fontWeight:"bolder"}}>For admission into the University Foundation Programme, candidates are required to achieve:</p>
                                    <li>Five credits or higher in relevant subjects (which must include English and Mathematics) or</li>
                                    <li>Grade C or greater in five subjects (which must include English and Mathematics, at IGCSE, O Level, GCSE or equivalent exams)</li>
                                    <li>Law</li>
                                </ul>
                                <p style={{fontSize:"1rem"}}>Prospective students are advised to <span style={{color:"orange",cursor:"pointer"}}><Link to="/Submit-SixthForm">apply</Link></span> before the completion of their secondary school education.</p>
                                {/* <p className='fst-italic position-relative' style={{ fontWeight: "bolder" }}>Here is how to join our college</p> */}
                                

                            </div>
                        </div>
                    </div>
                </div>

        

            </div>
            <Footer />
        </div>
    )
}
