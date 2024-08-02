import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from "../../components/home-page/home-5/footer";
import Header5 from '../header/Header5';
import Header6 from '../header/Header6';

export const Admission = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="fancy-feature-fortySeven zn2 position-relative pt-130 pb-160 lg-pt-120 lg-pb-100">
                <Header6/>
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
                                <p className='fst-italic position-relative' style={{ fontWeight: "bolder" }}>Here is how to join our college</p>
                                <p className=' tx-dark '>
                                    1.
                                    Those who seek admission into the secondary school, complete the secondary school application form. Prospective sixth-formers complete the sixth form application form.
                                </p>
                                <p className="text- tx-dark">
                                    2.  The application fee of ₦25,000 is paid to the college’s Zenith account 1012640754 or you can pay online by clicking here.
                                </p>
                                <p className='tx-dark'>
                                    3. Registered candidates will be required to sit entrance tests at Edgewood Sixth Form College, Kayode Otitoju Street, Lekki Phase 1.
                                </p>
                                <p className='fst-italic position-relative' style={{ fontWeight: "bolder" }}>
                                    For admission into Years 7 and 8, students sit tests in English and Mathematics only.
                                </p>
                                <p className='tx-dark'>
                                    4. Admission letters are sent to the parents of successful candidates by email within seven working days.
                                </p>
                                <p>
                                    Candidates who are eligible for academic scholarships are notified and invited to a scholarship examination.
                                </p>
                                <p>
                                    Candidates who demonstrate an interest in the college and required abilities but could not be given admission are placed on the waiting list.
                                </p>
                                <p >
                                    5. In order to secure the place, an acceptance fee must be paid to Edgewood College, and all necessary documents must be submitted to the admissions office.
                                </p>
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