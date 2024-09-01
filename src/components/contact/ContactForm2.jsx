import React from "react";

const ContactForm2 = () => {
  return (
    <form action="#">
      <div className="messages" />
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-35">
            <label className="d-block">Name*</label>
            <input
              type="text"
              name="name"
              required="required"
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-40">
            <label className="d-block">Email*</label>
            <input
              type="email"
              name="email"
              required="required"
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <textarea
              name="message"
              required="required"
              defaultValue={""}
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-12" >
          <button className="btn-one_1 fw-500 w-100 text-uppercase fs-14 d-block"  >
            Send Message
          </button>
        </div>
        <div className="contact_button" style={{}}>
          <div className="btn-one_1" >
            <a href="https://wa.me/+2348035854737" target="_blank">Admissions Enquiries</a>
          </div>
          <div className="btn-one_1" >
            <a href="https://wa.me/+2348035854737" target="_blank">General Enquiries</a>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm2;
