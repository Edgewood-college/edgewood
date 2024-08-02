import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from "../../components/home-page/home-5/footer";
import Header5 from '../header/Header5';
import Header6 from '../header/Header6';
export const CambridgeA = () => {
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
                  CAMBRIDGE A LEVELS
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-16 col-lg-10 ms-auto">
              <div className="ps-xxl-5" data-aos="fade-left">
                {/* <h6 className="mb-30">Our History &amp; Goal.</h6> */}
                <p className="text- tx-dark" style={{ fontWeight: "revert" }}>The Cambridge A Level programme provides the required foundation into universities in Nigeria (direct entry into the second year of degree programmes), United Kingdom, Canada, United States and other destinations.</p>

                {/* <p className='fst-italic position-relative' style={{ fontWeight: "bolder" }}>Here is how to join our college</p> */}
                <ul className=' tx-dark '>
                  <p className='fst-italic' style={{ fontWeight: "bold" }}> The programme is a two-year course, but exceptional learners can complete it in one year. Depending on their desired university programme, learners choose three subjects from:</p>
                  <li>
                    Additional Mathematics
                  </li>
                  <li>
                    Biology
                  </li>
                  <li>
                    Biology
                  </li>
                  <li>
                    Chemistry
                  </li>
                  <li>Economics</li>
                  <li>Law</li>
                  <li>Mathematics</li>
                  <li>Physics</li>
                  <li>Sociology</li>
                </ul>

                <ul className=''>
                  <p className='fst-italic' style={{fontWeight:"bold"}}>For admission into the Cambridge A Level programme, candidates are required to achieve:</p>
                  <li>Five credits or higher in relevant subjects (which must include English and Mathematics) or</li>
                  <li>Grade C or greater in five subjects (which must include English and Mathematics, at IGCSE, O Level, GCSE or equivalent exams)</li>
                </ul>
                <p style={{ fontSize: "1rem" }}>Prospective students are advised to <span style={{ color: "orange", cursor: "pointer" }}>apply</span> before the completion of their secondary school education.</p>
                <p>Most popular come up with my essay specialist that assurances appropriate distribution. Sequence on line academic document benefit for individuals. Appropriately explored & top quality tailor made authored projects. Vital place of work for authors <span style={{color:"orange",cursor:"pointer"}}> <a href="https://www.ozessay.com.au/term-paper-writing-service">writing paper</a></span></p>
                <p>Incredibly best craft my essay services that makes certain well timed delivery. Get around the web scholastic cardstock can help for college students. Properly explored & exceptional professional published responsibilities. Precious work place for writers <span   style={{color:"orange",cursor:"pointer"}}> <a href="https://www.ozessay.com.au/">essay writers</a></span></p>
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
