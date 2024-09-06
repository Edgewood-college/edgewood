import React from 'react'
import Header5 from '../header/Header5'
import Footer from "../../components/home-page/home-5/footer";
import { useNavigate } from 'react-router-dom';
export const Laptop_Policy = () => {
  const navigate   = useNavigate()
  return (
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
                  Laptop Policy
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
                      <img src="/images/assets/Laptop Policy - For Website - image.jpg" alt="images render" className='calendar_img' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='policy_drive2'>
          <div className='policy_drive1'>

            <button className="">
              <a href="https://drive.google.com/uc?id=1vBgLtcvQHhfvrEiyB1rj03JYgL5VYBEx&export=download" >Click to download Laptop policy</a>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
