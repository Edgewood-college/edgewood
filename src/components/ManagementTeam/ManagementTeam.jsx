import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Footer from "../../components/home-page/home-5/footer";
import Pagination from "../../components/blog/Pagination";
import SearchBox from "../../components/blog/SearchBox";
import Category from "../../components/blog/Category";
import RecentPost from "../../components/blog/RecentPost";
import BannerPost from "../../components/blog/BannerPost";
import Blog2 from "../../components/blog/Blog2";
import Header6 from "@/components/header/Header6";
import Blog4 from "../blog/Blog4";
import Header5 from "../header/Header5";

const ManagementTeam = () => {
  return (
    <>
      <Seo pageTitle="Grid With Sidebar" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <Header5 />

      {/* 
			=============================================
			Feature Section Fifty One
			============================================== 
			*/}
      <div className="fancy-feature-fiftyOne position-relative mt-140">
        <div className="container">
          <div className="row">
            <div className="col-lg-0" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-50">
                {/* <div className="sc-title-two fst-italic position-relative">
                  Blog
                </div> */}
                <h2 className="main-title fw-500 tx-dark " style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                  Meet The Team
                </h2>
                <p style={{ alignItems: "center" }}>Our college benefits from the skills and experience of dedicated teaching and support staff. Our staff adopt a learner-centered approach and ensure that students fulfill their potential.
                  A team of distinguished educators provides leadership and strategic direction.</p>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/*
			=====================================================
				Blog Section Five
			=====================================================
			*/}
      <div className="blog-section-five mt-70 lg-mt-30">
        <div className="container">
          <div className="border-bottom pb-130 lg-pb-60">
            <div className="row gx-xl-5">
              <div className="col-lg-0">
                <div className="blog-meta-wrapper pe-xxl-5">
                  <div className="row">
                    <Blog4 />
                  </div>
                </div>
                {/* /.blog-meta-wrapper */}
                {/* <div className="page-pagination-one pt-15">
                  <Pagination />
                </div> */}
              </div>
              {/* End .col-lg-8 */}

              <div className="col-lg-4 col-md-8" style={{ display: "none" }}>
                <div className="blog-sidebar md-mt-70">
                  <div className="blog-sidebar-search mb-55 md-mb-40">
                    <SearchBox />
                  </div>
                  {/* /.blog-sidebar-search */}

                  <div className="blog-sidebar-category mb-60 md-mb-50">
                    <h4 className="sidebar-title">Category</h4>
                    <Category />
                  </div>
                  {/* /.blog-sidebar-category */}

                  <div className="sidebar-recent-news mb-60 md-mb-50">
                    <h4 className="sidebar-title">Recent News</h4>
                    <RecentPost />
                  </div>
                  {/* /.sidebar-recent-news */}

                  <BannerPost />
                  {/* /.sidebar-banner-add */}
                </div>
                {/* /.blog-sidebar */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <Footer />
    </>
  );
};

export default ManagementTeam;
