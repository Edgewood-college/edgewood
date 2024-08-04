import React from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      icon: "/images/icon/icon_42.svg",
      feedback: "/images/assets/edgewood-award2-1.png",
      name: "John Doe",
    },
    {
      id: 2,
      icon: "/images/icon/icon_42.svg",
      feedback: "/images/assets/edgewood-award1-1.png",
      name: "Jane Doe",
    },
    {
      id: 3,
      icon: "/images/icon/icon_42.svg",
     
      feedback: " /images/assets/Admission.jpg",
      name: "Bob Smith",
    },
    {
      id: 4,
      icon: "/images/icon/icon_42.svg",
      feedback: "images/assets/WhatsApp-Image-2021-10-11-at-8.56.25-AM.jpeg",
      name: "Alice Johnson",
    },
    {
      id: 5,
      icon: "/images/icon/icon_42.svg",
      feedback: "images/assets/edgewoodScreenshot-2022-07-12-at-23.19.08.png",
      name: "Charlie Brown",
    },
  ];

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
    <div style={{ position: "relative", top: "-7vw" }}>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div className="item" key={testimonial.id}>
            <div className="feedback-block-twelve">
              <img
                className="tx-dark mt-0 lg-mt-20"
                src={testimonial.feedback}
                width="1000px"
                style={{ width: "100%", height: "370px", objectFit: "cover" }} 
                alt={testimonial.name} // added alt text for accessibility
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
