import { Link } from "react-router-dom";
import blogPosts from "../../data/blog";

const Blog4 = () => {
    // const images = ["/images/blog/blog_img_10.jpg","/images/blog/blog_img_09.jpg","/images/blog/blog_img_14.jpg","/images/blog/blog_img_15.jpg","/images/blog/blog_img_20.jpg","/images/blog/blog_img_10.jpg"]
    const image = [
        {
            id: 1,
            src: "/images/blog/blog_img_10.jpg",
            title: "MRS KEHINDE PHILIPPS",
            rep:"Director"
        },
        {
            id: 2,
            src: "/images/blog/blog_img_09.jpg",
            title: "MR OLAMIDE ABODURIN",
            rep:"Vice principal secondary school"
        },
        {
            id: 3,
            src: "/images/blog/blog_img_14.jpg",
            title: "Mr Jide Oloruntoba",
            rep:"Key Stage Coordinator"
        },
        {
            id: 4,
            src: "/images/blog/blog_img_15.jpg",
            title: "Mr Kole Adeniyan",
            rep:"Principal"
        },
        {
            id: 5,
            src: "/images/blog/blog_img_20.jpg",
            title: "Mr Temitope Akintayo",
            rep:"Vice Principal-Sixth Form"
        },{
            id: 6,
            src: "/images/blog/blog_img_10.jpg",
            title: "Mrs adesola osho",
            rep:"Key Stage Coordinator"
        }
    ]
  return (
    <>
      { image.map((post) => (
        <div
        className="col-md-6"
        key={post.id}
        data-aos="fade-up"
        data-aos-delay={post.delay}
      >
        <article className="blog-meta-three mb-60 lg-mb-40">
          <figure className="post-img m0">
            <Link to={``} className="w-100 d-block">
              <img
                src={post.src}
                alt="blog"
                className="lazy-img w-100 tran4s"
              />
            </Link>
          </figure>
          <div className="post-data mt-30">
            {/* <div className="post-date opacity-75 text-uppercase">
              {post.date}
            </div> */}
            <Link to={``} className="mt-10 mb-15">
                {post.rep}
              <h4 className="tran3s blog-title fw-normal tx-dark">
                {post.title}
              </h4>
            </Link>
            {/* <div>
              <Link
                to={`/blog/${post.id}`}
                className="read-btn-two fw-500 tran3s"
              >
                Read More
              </Link>
            </div> */}
          </div>
        </article>
        {/* /.blog-meta-three */}
      </div>
      ))}
    </>
  );
};

export default Blog4;
