import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from "../../components/home-page/home-5/footer";
import Header5 from '../header/Header5';
import { Link } from 'react-router-dom';
import Header6 from '../header/Header6';

export const Admission = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="fancy-feature-fortySeven zn2 position-relative pt-130 pb-160 lg-pt-120 lg-pb-100">
                <Header5 />
                <div className="container">
                    {/* <FilterProperty /> */}
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7" data-aos="fade-right">
                            <div className="title-style-five mb-65 md-mb-40">
                                <div className="sc-title-two fst-italic position-relative" onClick={() => navigate(-1)}>
                                    Admission.
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
                                <p className="text- tx-dark" style={{ fontWeight: "revert" }}>
                                    Edgewood College has a thriving secondary school and sixth form college. Every year, prospective students join the community of future leaders who are trained to value excellence.
                                </p>
                                <p className='fst-italic position-relative' style={{ fontWeight: "bolder" }}>The step-by-step process to secure an Edgewood College admission for your child either as a new or transfer student</p>
                                {/* <p className=' tx-dark '>
                                    1.
                                    Those who seek admission into the secondary school, complete the  <span style={{color:"#d7232e",cursor:"pointer"}}><Link to="/Submit-SixthForm">Secondary School Application Form</Link></span> Prospective sixth-formers complete the  <span style={{color:"#d7232e",cursor:"pointer"}}><Link to="/Submit-SixthForm">Sixth form Application Form</Link></span>.
                                </p> */}
                                <p className="text- tx-dark">
                                    1.    Pay ₦30,000 for the application form for each child by making payment via transfer into the college's account - 0008979824, Edgewood College, GTBank.
                                </p>
                                <p className="text- tx-dark">
                                    2.    Fill and complete an application form online at <span style={{color:"#d7232e",cursor:"pointer"}}><Link to="/Submit-SixthForm">Secondary School Application Form</Link></span> or print and fill the attached copy
                                </p>
                                <p className="text- tx-dark">
                                    3.    Submit the form using the child’s name and prospective class as the subject line, and send the evidence of payment along with the following documents via email to <span><a href="admissions@edgewoodcollege.org.ng" style={{color:"#d7232e"}} target="_blank" rel="noopener noreferrer">admissions@edgewoodcollege.org.ng</a></span> before the examination day.
                                </p>

                                <p className='tx-dark'>
                                    4. Registered candidates will be required to sit entrance tests at Edgewood Sixth Form College, Kayode Otitoju Street, Lekki Phase 1.
                                </p>
                                <p className='fst-italic position-relative' style={{ fontWeight: "bolder" }}>
                                    For admission into Years 7 and 8, students sit tests in English and Mathematics only.
                                </p>
                                <p className='tx-dark'>
                                    5. Admission letters are sent to the parents of successful candidates by email within seven working days.
                                </p>
                                <p>
                                    Candidates who are eligible for academic scholarships are notified and invited to a scholarship examination.
                                </p>
                                <p>
                                    Candidates who demonstrate an interest in the college and required abilities but could not be given admission are placed on the waiting list.
                                </p>
                                <p className='tx-dark'>
                                    6. In order to secure the place, an acceptance fee must be paid to Edgewood College, and all necessary documents must be submitted to the admissions office.
                                </p>
                                <hr className='w-screen' />
                                <div>
                                    <p className='fst-italic position-relative' style={{ fontWeight: "bolder" }}>Requirements to join our college</p>
                                    <div>
                                        <ul>
                                            <li>Copy of birth certificate</li>
                                            <li>Copy of last school result</li>
                                            <li>Copy of immunization records</li>
                                            <li>1 passport photograph</li>
                                            <li> Reference letter from previous school (New and transfer Students)</li>
                                        </ul>
                                    </div>
                                </div>
                                <hr className='w-screen' />
                                <p style={{ fontWeight: "bolder" }}>Scholarship</p>
                                <p className='fst-italic position-relative' style={{ fontWeight: "bold" }}>Academic Scholarships</p>

                                <p>At Edgewood College, academic excellence is one of our core values. Candidates who perform exceptionally well in the entrance tests will be invited to take additional tests in English and Mathematics. They will also undergo the Edgewood College Academic Scholarship (ECAS) interview.</p>
                                <p>Results of the Edgewood College Academic Scholarship (ECAS) tests and interviews will be made available to parents within fourteen days.
                                </p>
                                <p className='fst-italic position-relative' style={{ fontWeight: "bolder" }}>Need-based Scholarships</p>
                                <p>Edgewood College also awards scholarships to indigent students with exceptional academic ability. There are a limited number of such scholarships every year and the criteria may vary for different academic years. Such candidates can contact the admissions office for further information.</p>
                                <p>Admissions office:</p>
                                <p>Email: admissions@edgewoodcollege.org.ng</p>
                                <p>Telephone: +2348025526510, +2348170874770 (8am to 5pm on weekdays)</p>
                                {/* <div className="row">
              <Counter />
            </div> */}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}