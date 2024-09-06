import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from "../../components/home-page/home-5/footer";
import Header5 from '../header/Header5';
import Header6 from '../header/Header6';
export const Regulations = () => {
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
                  RULES & REGULATIONS
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-16 col-lg-9 ms-auto">
              <div className="ps-xxl-5" data-aos="fade-left">
                <ul className=' tx-dark '>
                  <p className='' style={{ fontWeight: "bold" }}> All students must:</p>
                  <li>Be kind to others</li>
                  <li> Be in the complete and correct school uniform during school days and activities</li>
                  <li>Label all uniforms</li>
                  <li>Complete all classwork</li>
                  <li>Complete all homework</li>
                  <li>Work well with other students and staff</li>
                  <li>Be honest</li>
                  <li>Solve problems peacefully</li>
                  <li>Ask before using or taking other people’s belongings</li>
                  <li>Take care of the school’s equipment or property</li>
                  <li>Be polite and respectful  </li>
                  <li>Act in a safe and responsible way</li>
                  <li>Play peacefully and safely</li>
                  <li>Tidy up after working and after playing</li>
                  <li>Always follow instructions given by members of staff</li>
                  <li>Stay only in areas where they are allowed</li>
                  <li>Talk quietly when inside the building</li>
                  <li>Not run when inside the building. At Edgewood College, we walk on the right.</li>
                  <li>Respect our environment</li>
                  <li>Look after our school (for example, do not drop litter, write on furniture or on wall)</li>
                  <li>Get to assembly and lessons on time</li>
                  <li>Not bring cooked food to school</li>
                  <li>Not smoke, chew gum, consume fizzy drink, or alcohol (Edgewood College is a water only school)</li>
                  <li>Not bring bottles of perfumes and deodorant spray to school. Please use roll-on in plastic bottles instead.</li>
                  <li>Not use lip gloss or ‘wet lips’. </li>
                  <li>Not bring gadgets- phones, tablets, music players, smart watches e.t.c. to school. Such items, if found, will be confiscated.</li>
                  <li>Not bully other students. The college will not condone bullying and bullies are dealt with severely, quickly and decisively.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      

      </div>
      <Footer />
    </div>
  )
}
