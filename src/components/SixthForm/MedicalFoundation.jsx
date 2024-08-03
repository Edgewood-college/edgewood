import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from "../../components/home-page/home-5/footer";
import Header5 from '../header/Header5';
import Header6 from '../header/Header6';
export const MedicalFoundation = () => {
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
                                    MEDICAL FOUNDATION PROGRAMME
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-16 col-lg-9 ms-auto">
                            <div className="ps-xxl-5" data-aos="fade-left">
                                {/* <h6 className="mb-30">Our History &amp; Goal.</h6> */}
                                <p className="text- tx-dark" style={{ fontWeight: "revert" }}>
                                    Edgewood College is the provider of the Medical Foundation Programme (MFP), which grants admission into the medical schools of universities in Europe and The Caribbean.
                                </p>
                                {/* <p className='fst-italic position-relative' style={{ fontWeight: "bolder" }}>Here is how to join our college</p> */}
                                <ul className=' tx-dark '>
                                   <p className='fst-italic' style={{fontWeight:"bolder"}}> For admission into the Medical Foundation Programme, candidates are required to achieve:</p>
                                    <li>
                                        Five credits or higher in relevant subjects (which must include English and Mathematics) or
                                    </li>
                                    <li>Grade C or greater in five subjects (which must include English and Mathematics, at IGCSE, O Level, GCSE or equivalent exams)
                                    </li>
                                </ul>

                                <p style={{fontSize:"1rem"}}>Prospective students are advised to <span style={{color:"orange",cursor:"pointer"}}><Link to="/Submit-SixthForm">apply</Link></span> before the completion of their secondary school education.</p>
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
