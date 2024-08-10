import { UploadWiget } from "@/components/UploadWiget";
import FilterBox from "./FilterBox";

const Hero = () => {
  const images = [
    "/images/assets/hero3edited.jpg",
    "/images/assets/hero2edited.jpg",
    "/images/assets/studentsedited.jpg",
    "/images/assets/heroedited.jpg",
    "/images/assets/hero4edited.jpg"
  ];

  let currentIndex = 0;

  // Preload images
  // const preloadImages = (imageArray) => {
  //   imageArray.forEach((src) => {
  //     const img = new Image();
  //     img.src = src;
  //   });
  // };

  // preloadImages(images);

  const changeBackground = () => {
    const heroBanner = document.querySelector('.hero-banner-thirteen');
    heroBanner.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
  };

  setInterval(changeBackground, 7000); // Change every 6 seconds






  return (
    <div className="hero-banner-thirteen position-relative zn2 pt-190 pb-225 lg-pb-150 lg-pt-150 md-pb-80">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 m-auto">
            <div className="text-wrapper" data-aos="fade-up" style={{ color: "red" }}>
              <h1 className="hero-heading fw-500 tx-dark text-center" style={{ color: "white", fontWeight: "lighter" }}>
                Setting the pace for <br />great education.
                <span className="position-relative">
                </span>
              </h1>
              <p className="text-lg tx-dark mb-80 pt-35 text-center lg-pt-20 lg-mb-50" style={{ color: "#fff", fontWeight: "lighter" }}>
                An institution borne from <br /> a desire to provide a balanced educational system
                {/* <UploadWiget/> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
