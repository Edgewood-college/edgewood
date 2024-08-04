import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from "../../components/home-page/home-5/footer";
import Header5 from '../header/Header5';
import Header6 from '../header/Header6';
export const ExecutiveDirector = () => {
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
                  FOUNDER’S MESSAGE
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-16 col-lg-9 ms-auto">
              <div className="ps-xxl-5" data-aos="fade-left">
                {/* <h6 className="mb-30">Our History &amp; Goal.</h6> */}
                <p className="text- tx-dark" style={{ fontWeight: "revert" }}>
                  It is with great pleasure that I welcome you to Edgewood College, an institution borne from my desire to provide a balanced educational system that moulds learners into rounded leaders.
                </p>
                {/* <p className='fst-italic position-relative' style={{ fontWeight: "bolder" }}>Here is how to join our college</p> */}
                <p className=' tx-dark '>
                  The college is accredited by Cambridge Assessment International Education to offer both the IGSCE and A-Level Examination.
                </p>
                <p className="text- tx-dark">
                  We also partner with Abbey College Malvern in the United Kingdom for the University Foundation Program (UFP) and Blyth Academy in Canada for the Ontario Secondary School Diploma (OSSD).
                </p>
                <p className='tx-dark'>
                  Edgewood College is known for christian ethos, quality education and outstanding student outcomes
                </p>
                <p className='tx-dark'>
                  We are recipients of the Cambridge Assessment International Education Outstanding learners award for three academic sessions in a row, the 2017-2018 session, the 2018 - 2019 session and the 2019 -2020 session.
                </p>
                <p className='tx-dark'>
                  Edgewood College is an inclusive school as we accept students from all around the world and support students with special educational needs. Our admissions process is non- selective; however, students seeking admission have to take an entrance examination so we can determine students competence and level for the year group, which they are seeking admission.
                </p>
                <p className='tx-dark'>
                  Edgewood College has a rich selection of extra-curricular activities for students, which include the Competitive sports, Photography, Fitness, Cycling, Entrepreneurship, Science, Coding, Robotics, Duke of Edinburgh award, Music and many more clubs that are student-led. These activities support community service and engagements that support students in developing leadership, life skills, team building, collaboration and organisational skills.
                </p>

              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}
