import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from "../../components/home-page/home-5/footer";
import Header5 from '../header/Header5';
import Header6 from '../header/Header6';
import ContactForm2 from '../contact/ContactForm2';
import BlockContact2 from '../contact/BlockContact2';
export const SubmitSixthForm = () => {
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
                                    SIXTH FORM COLLEGE APPLICATION FORM
                                </div>
                                <div>
                                    Fields marked with an <span style={{ color: "red" }}>*</span> are required
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-16 col-lg-12 ms-auto">
                            <div className="container">
                                <div className="contact-section-two text-start mt-0 lg-mt-10">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div
                                                className="form-style-three md-mb-60"
                                                data-aos="fade-right"
                                            >
                                                <form action="#">
                                                    <div className="messages" />
                                                    <div className="row controls">
                                                        <div className="col-12">
                                                            <div className="input-group-meta form-group mb-35">
                                                                <label className="d-block">Student's Surname<span style={{ color: "red" }}>*</span></label>
                                                                <input
                                                                    type="text"
                                                                    // placeholder="Obi adedji"
                                                                    name="name"
                                                                    required="required"
                                                                />
                                                                <div className="help-block with-errors" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group-meta form-group mb-40">
                                                                <label className="d-block">Student's First Name<span style={{ color: "red" }}>*</span></label>
                                                                <input
                                                                    type="text"
                                                                    // placeholder="demo@domain.com"
                                                                    name="name"
                                                                    required="required"
                                                                />
                                                                <div className="help-block with-errors" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group-meta form-group mb-40">
                                                                <label className="d-block">Student's Middle Name</label>
                                                                <input
                                                                    type="text"
                                                                    // placeholder="demo@domain.com"
                                                                    name="name"
                                                                    required="required"
                                                                />
                                                                <div className="help-block with-errors" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group-meta form-group mb-40">
                                                                <label className="d-block">Country of Birth <span style={{ color: "red" }}>*</span></label>
                                                                <input
                                                                    type="text"
                                                                    // placeholder="demo@domain.com"
                                                                    name="name"
                                                                    required="required"
                                                                />
                                                                <div className="help-block with-errors" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group-meta form-group mb-40">
                                                                <label className="d-block">State</label>
                                                                <input
                                                                    type="text"
                                                                    // placeholder="demo@domain.com"
                                                                    name="name"
                                                                    required="required"
                                                                />
                                                                <div className="help-block with-errors" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group-meta form-group mb-40">
                                                                <label className="d-block">L. G. A. </label>
                                                                <input
                                                                    type="text"
                                                                    // placeholder="demo@domain.com"
                                                                    name="name"
                                                                    required="required"
                                                                />
                                                                <div className="help-block with-errors" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group-meta form-group mb-40">
                                                                <label className="d-block">Date of Birth <span style={{ color: "red" }}>*</span> </label>
                                                                <input
                                                                    type="date"
                                                                    // placeholder="demo@domain.com"
                                                                    name="name"
                                                                    required="required"
                                                                />
                                                                <div className="help-block with-errors" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group-meta form-group mb-40">
                                                                <label className="d-block">Language(s) Spoken  </label>
                                                                <input
                                                                    type="text"
                                                                    // placeholder="demo@domain.com"
                                                                    name="name"
                                                                    required="required"
                                                                />
                                                                <div className="help-block with-errors" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group-meta form-group mb-30">
                                                                <label className="d-block">Current Home Address</label>
                                                                <textarea
                                                                    // placeholder="Your message*"
                                                                    name="Address"
                                                                    required="required"
                                                                    defaultValue={""}
                                                                />
                                                                <div className="help-block with-errors" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group-meta form-group mb-40">
                                                                <label className="d-block">Student's Email</label>
                                                                <input
                                                                    type="email"
                                                                    // placeholder="demo@domain.com"
                                                                    name="email"
                                                                    required="required"
                                                                />
                                                                <div className="help-block with-errors" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group-meta form-group mb-40">
                                                                <label className="d-block">Student's Phonenumber</label>
                                                                <input
                                                                    type="tel"
                                                                    // placeholder="demo@domain.com"
                                                                    name="phonenumber"
                                                                    required="required"
                                                                />
                                                                <div className="help-block with-errors" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="mb-40">
                                                                <label className="d-block">Boarding</label>
                                                                <div style={{ display: "flex", gap: "1vw", flexDirection: "row" }}>
                                                                    <input
                                                                        type="radio"
                                                                        // placeholder="demo@domain.com"
                                                                        name="Yes"
                                                                        required="required"
                                                                    />
                                                                    <div>Yes</div>

                                                                </div>
                                                                <div style={{ display: "flex", gap: "1vw", flexDirection: "row" }}>
                                                                    <input
                                                                        type="radio"
                                                                        // placeholder="demo@domain.com"
                                                                        name="No"
                                                                        required="required"
                                                                    />
                                                                    <div>No</div>

                                                                </div>
                                                                <div className="help-block with-errors" />
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="col-12">
                                                            <div className="input-group-meta form-group mb-40">
                                                                <label className="d-block">Parent's Name <span style={{ color: "red" }}>*</span> </label>
                                                                <input
                                                                    type="text"
                                                                    // placeholder="demo@domain.com"
                                                                    name="name"
                                                                    required="required"
                                                                />
                                                                <div className="help-block with-errors" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group-meta form-group mb-40">
                                                                <label className="d-block">Relationship to Student  <span style={{ color: "red" }}>*</span> </label>
                                                                <input
                                                                    type="text"
                                                                    // placeholder="demo@domain.com"
                                                                    name="name"
                                                                    required="required"
                                                                />
                                                                <div className="help-block with-errors" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group-meta form-group mb-40">
                                                                <label className="d-block">Occupation </label>
                                                                <input
                                                                    type="text"
                                                                    // placeholder="demo@domain.com"
                                                                    name="name"
                                                                    required="required"
                                                                />
                                                                <div className="help-block with-errors" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group-meta form-group mb-30">
                                                                <label className="d-block">Current Home Address <span style={{color:"red"}}>*</span></label>
                                                                <textarea
                                                                    // placeholder="Your message*"
                                                                    name="message"
                                                                    required="required"
                                                                    defaultValue={""}
                                                                />
                                                                <div className="help-block with-errors" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group-meta form-group mb-30">
                                                                <label className="d-block">Message</label>
                                                                <textarea
                                                                    // placeholder="Your message*"
                                                                    name="message"
                                                                    required="required"
                                                                    defaultValue={""}
                                                                />
                                                                <div className="help-block with-errors" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <button className="btn-one fw-500 w-100 text-uppercase fs-14 d-block">
                                                                Send Message
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /.contact-section-two */}
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
