import React from 'react'
import Header5 from '../header/Header5'
import Footer from "../../components/home-page/home-5/footer";
import { useNavigate } from 'react-router-dom';
export const Grooming = () => {
  const navigate = useNavigate()
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
                  Grooming Policy
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
                      <img src="/images/assets/EDGEWOOD COLLEGE HAIR POLICY_page-0001.jpg" alt="images render" className='calendar_img' />
                    </div>
                    <div>
                      <img src="/images/assets/EDGEWOOD COLLEGE HAIR POLICY_page-0002.jpg" alt="images render" className='calendar_img' />
                    </div>
                    <div>
                      <img src="/images/assets/EDGEWOOD COLLEGE HAIR POLICY_page-0003.jpg" alt="images render" className='calendar_img' />

                    </div>
                    <div>
                      <img src="/images/assets/EDGEWOOD COLLEGE UNIFORM POLICY_page-0001.jpg" alt="images render" className='calendar_img' />
                    </div>
                    <div>
                      <img src="/images/assets/EDGEWOOD COLLEGE UNIFORM POLICY_page-0003.jpg" alt="images render" className='calendar_img'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='policy_drive'>

          <div className='policy_drive1'>
            <button className="">
              <a href="https://drive.google.com/uc?id=1SruYrwvFHOuLEPo4myiScZ0GKr_qTL7Q&export=download" >Click to  Download hair policy</a>
            </button>

            <button className="">
              <a href="https://drive.google.com/uc?id=1Uu1eWHYZImjprQhudkW8JTJ8k67OAo0G&export=download" > Click to Download uniform policy</a>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
