import { Link, useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="title-style-eleven">
        {/* <div className="sc-title">ABOUT US</div>. */}
        <h2 className="main-title tx-dark">
          Executive Director's Welcome
        </h2>
      </div>
      <div className="d-flex  mt-70 mb-40 lg-mt-40 lg-mb-10">
        <img
          src="/images/shape/shape_164.svg"
          alt=""
          className="lazy-img d-none d-lg-block"
        />
        <p className=" m0 ps-lg-5">
          Edgewood College is an educational institution focused on developing well-rounded students into future leaders. The school emphasizes a balanced curriculum and a strong partnership with parents to nurture students' potential. It aims to cultivate students who are not only academically strong but also actively engaged and contributing members of society.
          <p>
            <Link to="exceutive-speech">
              <button className="bg-red-400 items-center flex justify-center button-director">Read more</button>
            </Link>
          </p>
        </p>

      </div>
    </>
  );
};

export default Intro;
