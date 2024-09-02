import Seo from "../../components/common/Seo";
import Header5 from "../../components/header/Header5";
import FilterProperty from "../../components/home-page/home-5/ProperyFilter";
import Property from "../../components/home-page/home-5/Property";
import Quote from "../../components/home-page/home-5/Quote";
import Hero from "../../components/home-page/home-5/hero";
import About from "../../components/home-page/home-5/about";
import FancySection from "../../components/home-page/home-5/FancySection";
import Testimonial from "../../components/home-page/home-5/Testimonial";
import Blog from "../../components/home-page/home-5/Blog";
import Faq from "../../components/home-page/home-5/Faq";
import CallToActions from "../../components/home-page/home-5/CallToActions";
import Footer from "../../components/home-page/home-5/footer";
import { Link, useNavigate } from "react-router-dom";
import Portfolio from "@/components/home-page/home-9/Portfolio";

const RealEstate = () => {
  const navigate = useNavigate()
  return (
    <>
      <Seo pageTitle="EDGEWOOD COLLEGE" />

      {/* <!--  =============================================
        Theme Header3 Menu
        ============================================== 	--> */}
      <Header5 />

      {/* 
        =============================================
        Theme Hero Banner
        ============================================== 
        */}
      <Hero />

      {/* 
			=============================================
			Feature Section Forty Six
			============================================== 
			*/}
      <div className="fancy-feature-fortySix position-relative">
        <div className="container">
          <div className="fancy-feature-fortyEight position-relative">
            <div className="container">
              <div className="line-bg-wrapper position-relative pt-200 pb-200 lg-pt-120 lg-pb-110">
                <About />
              </div>
              {/* /.line-bg-wrapper */}
            </div>
            {/* /.container */}
          </div>


          {/* /.line-bg-wrapper */}
        </div>
        {/* /.container */}
      </div>

      {/* 
			=============================================
				Feature Section Forty Seven
			============================================== 
			*/}
      <div className="fancy-feature-fortySeven zn2 position-relative pt-130 pb-160 lg-pt-100 lg-pb-100">
        <div className="container">
          {/* <FilterProperty /> */}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 md-mb-40">
                <div className="sc-title-two fst-italic position-relative" style={{ fontSize: "1.3rem" }}>
                  Welcome to edgewood college.
                </div>
                {/* <h2 className="main-title fw-500 tx-dark">
                  We’r the top rated agency.
                </h2> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-9 ms-auto">
              <div className="ps-xxl-5" data-aos="fade-up">
                {/* <h6 className="mb-30">Our History &amp; Goal.</h6> */}
                <p className="text- tx-dark">
                  The leading secondary school and sixth form college with an established tradition of excellence. Alongside academic brilliance, learners are mentored to be the best they can for God and humanity. They are taught to be selfless and exemplary leaders.
                </p>
                <p className="text- tx-dark">
                  Strong discipline, Christian values, and a culture of excellence are the hallmark of our college. Learners are taught by professional educators in the heart of Lekki Phase 1, Lagos. The Edgewood experience is both rewarding and enjoyable, as learners are given the ‘edge’ above their peers.
                </p>
                <p className="text- tx-dark">
                  Though this website provide details of our rich curriculum, our secondary school, A Level programme, University Foundation Programme, Medical Foundation Programme, we encourage you to contact or visit us if you need information or advice.
                </p>
                {/* <div className="row">
                  <Counter />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}


      </div>

      {/* 
			=============================================
				Feature Section Forty Eight
			============================================== 
			*/}
      {/* <div className="fancy-feature-fortyEight position-relative">
        <div className="container">
          <div className="line-bg-wrapper position-relative pt-200 pb-200 lg-pt-120 lg-pb-110">
            <About />
          </div>
  
        </div>
        
      </div> */}

      {/* 
			=============================================
				Feature Section Forty Nine
			============================================== 
			*/}


      {/*
			=====================================================
			Feedback Section Fourteen
			=====================================================
			*/}
      <div className="feedback-section-fourteen position-relative zn2 join-us" style={{ marginBottom: '-12vw' }}>
        <div className="container">
          <div className="line-bg-wrapper position-relative zn2 pt-250 pb-180 lg-pt-120 lg-pb-80">
            <div className="row">
              <div className="col-md-6" data-aos="fade-up">
                <div className="title-style-five">
                  <h2 className="main-title fw-500 tx-dark" style={{ fontSize: '43px' }}>
                    A promise of <br />  excellence, our legacy.
                  </h2>
                </div>
                {/* /.title-style-five */}
                <div className="mt-120 lg-mt-40 ps-xl-5 ms-xl-5">
                  <div className="feedback_slider_eleven">
                    <Testimonial />
                  </div>
                  {/* /.feedback_slider_eleven */}
                </div>
              </div>
              {/* End .col-md-6 */}

              <div className="col-xl-6 col-lg-5 col-md-6 ms-auto" >
                <div
                  className="img-holder position-relative mt-25"
                  data-aos="fade-up"
                >
                  <img
                    src="/images/assets/edaward.png"
                    alt="shape"
                    className="lazy-img ms-auto"
                    style={{ width: "100%", height: "530px", objectFit: "cover" }}
                  />

                  {/* <div className="rating-box bg-black text-white d-flex flex-column justify-content-center align-items-center">
                    <strong className="fw-500">4.8</strong>
                    <span>avg rating</span>
                  </div> */}
                  {/* /.rating-box */}


                </div>
              </div>
            </div>
          </div>
          {/* /.line-bg-wrapper */}
        </div>
        {/* End .container */}
      </div>


      <FancySection />

      <div className="" style={{ width: "80%", margin: "0rem auto", cursor: "pointer", marginTop: "5vw", textAlign: 'center', display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="hovercalendar" style={{ backgroundColor: "#354459", padding: "1rem 1rem", borderRadius: "5px", position: "relative", top: "-4vw",color:"white" }} onClick={() => navigate("/Calendar-2022-2023")}>
          <div className="" style={{ fontSize: "1rem" }}>
            Academic Calendar for 2022/2023
          </div>
        </div>
      </div>
      {/* 
			=============================================
				Blog Section Six
			============================================== 
			*/}
      <div className="blog-section-six position-relative zn2 pt-150 pb-200 lg-pt-90 lg-pb-100">
        <div className="container">
          <div className="position-relative">
            {/* <div className="title-style-five text-center text-sm-start mb-30 lg-mb-10">
              <h2 className="main-title fw-500 tx-dark">Our Blog</h2>
            </div> */}
            {/* /.title-style-five */}

            {/* <div className="row gx-xxl-5">
              <Blog />
            </div> */}
            {/* End .row */}
            <Portfolio />
            <div className="btn-holder text-center">
              <div className="btn-eighteen position-relative d-inline-block tx-dark">
                {/* <Link to="/home/real-estate" className="fw-500 tran3s">
                  <Link to="/blog/blog-v1" className="fw-500 tran3s">
                  Check our all news <i className="fa-solid fa-angle-right" />
                </Link> */}
              </div>
            </div>
            {/* End btn-holder */}
          </div>
        </div>
        {/* End .container */}


      </div>

      {/* 
			=============================================
				Feature Section Fifty
			============================================== 
			*/}
      <div className="fancy-feature-fifty position-relative mt-200 lg-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6" data-aos="fade-up">
              <div className="title-style-five">
                <h2 className="main-title fw-500 tx-dark">
                  FAQ
                </h2>
              </div>
              {/* /.title-style-five */}
              <p className="text-lg mt-40 mb-45 lg-mt-20 lg-mb-30">
                Don’t find an answer here? just send us a message for help
              </p>
              <Link to="/contact/contact-v2" className="btn-one fw-500">
                Send us a message
              </Link>
            </div>
            {/* End .col */}

            <div className="col-xl-7 col-lg-6 ms-auto" data-aos="fade-up">
              <Faq />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* /.container */}

      </div>

      {/*
			=====================================================
				Fancy Short Banner Fifteen
			=====================================================
			*/}

      <Footer />
    </>
  );
};

export default RealEstate;
