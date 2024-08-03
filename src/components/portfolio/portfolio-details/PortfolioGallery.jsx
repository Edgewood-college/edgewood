import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

const images = [
  {
    src: "/images/assets/grad student sitting.JPG",
    width: "460",
    height: "400",
    alt: "media",
  },
  {
    src: "/images/assets/grad girls.jpg",
    width: "460",
    height: "400",
    alt: "media",
  },
  {
    src: "/images/assets/ed & student.jpg",
    width: "960",
    height: "510",
    alt: "media",
  },
  
  {
    src:"images/assets/grad student sitting.JPG",
    width: "960",
    height: "510",
    alt: "media",
  },
  {
    src : "/images/assets/grad student  -girl .jpg",
    width: "960",
    height: "510",
    alt: "media",
  }
];

const PortfolioGallery = () => {
  return (
    <>
      <Gallery>
        {images.map((image, index) => (
          <div
            className={`col-12 ${index === 2 ? "" : "col-sm-6"}`}
            key={index}
          >
            <div className="img-meta mt-30" data-aos="fade-up">
              <Item
                original={image.src}
                thumbnail={image.src}
                width={image.width}
                height={image.height}
              >
                {({ ref, open }) => (
                  <span
                    role="button"
                    className="fancybox d-block"
                    title="Click for large view"
                    ref={ref}
                    onClick={open}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="lazy-img w-100"
                    />
                  </span>
                )}
              </Item>
            </div>
          </div>
        ))}
      </Gallery>
    </>
  );
};

export default PortfolioGallery;
