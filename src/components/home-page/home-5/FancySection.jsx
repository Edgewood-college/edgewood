import Slider from "react-slick";
const FancySection = () => {
  const image = [
    {
      src: "/images/assets/Banner.jpg"
    },
    {
      src:"/images/assets/Bannne.jpg"
    },
    {
      src:"/images/assets/banner4.jpg"
    }
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    arrows: false,
    autoplay: true,           
    autoplaySpeed: 2000,       // 3 seconds per slide
  };
  return (
    // <div className="fancy-feature-fortyNine pt-110 pb-90 xl-pt-70 lg-pb-60 zn2 position-relative">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-6 col-md-7 ms-auto" data-aos="fade-left">
    //         <h2 className="title text-white fw-bold">
    //            <span>EDGEWOOD.</span> .
    //         </h2>
    //         <div className="row">
    //           <div className="col-xl-8 col-lg-10 ms-auto">
    //             <p className="text-lg text-white mt-55 lg-mt-20">
    //               Uncovering the potentials in our children.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* /.container */}

    //   <div className="clip-text" data-aos="fade-right">
    //     W
    //   </div>
    //   <img
    //     src="/images/shape/shape_166.svg"
    //     alt="shape"
    //     className="lazy-img shapes shape-one"
    //   /> 
    //   <a href="#" className="more-btn tran3s" data-aos="fade-left">
    //     <img
    //       src="/images/shape/shape_167.svg"
    //       alt="shape"
    //       className="lazy-img"
    //     />
    //     <img
    //       src="/images/icon/icon_139.svg"
    //       alt="shape"
    //       className="lazy-img arrow"
    //     />
    //   </a>
    //    <div className="clip-text-two fw-bold wow fadeInUp">Jano</div>
    // </div>

    <div style={{margin:"0rem 1rem",position:"relative",top:"-2.5vw"}}>
       {/* <h2 className="main-title tx-dark " style={{textAlign:"center"}}>
       Join our college
        </h2> */}
      <Slider {...settings}>
        {image.map((item, index) => (
          <div key={index}>
            <img src={item.src} alt="Image" width="1300px" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FancySection;
