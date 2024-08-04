import { Link } from "react-router-dom";
import blogPosts from "../../data/blog";

const Blog4 = () => {
    // const images = ["/images/blog/blog_img_10.jpg","/images/blog/blog_img_09.jpg","/images/blog/blog_img_14.jpg","/images/blog/blog_img_15.jpg","/images/blog/blog_img_20.jpg","/images/blog/blog_img_10.jpg"]
    const image = [
        {
            id: 1,
            src: "/images/assets/ed pic.jpg",
            title: "MRS KEHINDE PHILIPPS",
            rep: "Director",
            delay: "100"
        },
        {
            id: 2,
            src: "/images/assets/Abodunrin-Olamide-e1543509279165-portrait.jpg",
            title: "MR OLAMIDE ABODURIN",
            rep: "Vice principal secondary school",
            delay: "100"
        },
        {
            id: 3,
            src: "/images/assets/Oloruntoba-Jide-e1543515567315-portrait.jpg",
            title: "Mr Jide Oloruntoba",
            rep: "Key Stage Coordinator",
            delay: "100"
        },
        {
            id: 4,
            src: "/images/assets/Mr-Kole-portrait.jpg",
            title: "Mr Kole Adeniyan",
            rep: "Principal",
            delay: "100"
        },
        {
            id: 5,
            src: "/images/assets/Akintayo-Temitope-e1543509260693-portrait.jpg",
            title: "Mr Temitope Akintayo",
            rep: "Vice Principal-Sixth Form",
            delay: "100"
        }, {
            id: 6,
            src: "/images/assets/Osho-Adesola-e1543515726993-portrait.jpg",
            title: "Mrs adesola osho",
            rep: "Key Stage Coordinator",
            delay: "100"
        }
    ]
    return (
        <>
            {image.map((post) => (
                <div
                    className="col-md-4"
                    key={post.id}
                    data-aos="fade-up"
                    data-aos-delay={post.delay}
                    style={{ display: "flex",objectFit:"cover",alignItems:"center",justifyContent:"center" }}
                >
                    <article className="blog-meta-three mb-60 lg-mb-40">
                        <figure className="post-img m0">
                            <Link to={``} className="w-100 d-block">
                                <img
                                    src={post.src}
                                    alt="blog"
                                    className="lazy-img tran4s"
                                    style={{ width: "300px", height: "400px", objectFit: "cover" }}
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

export default Blog4;
