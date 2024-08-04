import { Link } from "react-router-dom";
import blogPosts from "../../data/blog";

const Blog = (blog) => {
  const imgaes = [
    {
      src: "/images/assets/Yemi-Cardoso-square.jpeg",
      title: "MR YEMI CARDOSO.",
      delay : "50"
    }, {
      src: "/images/assets/Funke-Agbor-square.jpg",
      title: "MRS. FUNKE ABBOR.",
      delay : "100"
    },
    {
      src: "/images/assets/Mr-Kofo-square.jpg",
      title: "MR KOFO AYEYE",
      delay : "100"
    },
    {
      src: "/images/assets/mrs-kofo-1-square.png",
      title: "MRS KOFO ALABI",
      delay: "100"
    },
    {
      src: "/images/assets/mr-phillips-square.png",
      title: "MR OLAIYA PHILLIPS",
      delay: "100"
    },
    {
      src: "/images/assets/ed pic.jpg",
      title: "MRS KEHINDE PHILLIPS",
      rep: "Executive Director",
      delay : "100"
    }
  ]
  return (
    <>
      {/* col-md-6 */}
      {imgaes.map((post) => (
        <div
          className="col-md-4"
          key={post.id}
          data-aos="fade-up"
          data-aos-delay={post.delay}
          style={{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"}}
        >
          <article className="blog-meta-three mb-60 lg-mb-40" >
            <figure className="post-img m0">
              <Link to={``} className="w-100 d-block">
                <img
                  src={post.src}
                  alt="blog"
                  className="lazy-img tran4s"
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
              </Link>
            </figure>
            <div className="post-data mt-15">
              {/* <div className="post-date opacity-75 text-uppercase">
                {post.date}
              </div> */}
              <Link to={``} className="mt-0 mb-0">
                <h4 className=" tx-dark" style={{ fontWeight: "0.8rem" }}>
                  {post.title}
                </h4>
                {post.rep}
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

export default Blog;
