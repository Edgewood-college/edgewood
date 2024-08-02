const BlockContact2 = () => {
  const addressBlocks = [
    {
      icon: "/images/icon/icon_161.svg",
      title: "Our Address",
      content: (
        <>
          13 Sule Onabiyi Street
          Off Christ Avenue
          Off Admiralty Way (By Tantalizers)
          Lekki Phase 1
          Lagos, Nigeria
        </>
      ),
    },
    {
      icon: "/images/icon/icon_162.svg",
      title: "Telephone(admissions)",
      content: (
        <>
          Open a chat or give us call at <br />
          <div className="">
            +2348025526510
            +2348170874770
            (8am to 5pm on weekdays)
          </div>
        </>
      ),
    },
    {
      icon: "/images/icon/icon_162.svg",
      title: "Telephone(Office)",
      content: (
        <>
          Open a chat or give us call at <br />
          <div className="">
            +2348125805503
            +2348140976177
            (7:30am to 5pm on weekdays)
          </div>
        </>
      ),
    },
    {
      icon: "/images/icon/icon_163.svg",
      title: "Email(office)",
      content: (
        <>
          info@edgewoodcollege.org.ng <br />
          <div className="webaddress">
            www.supportlive.com
          </div>
        </>
      ),
    },

    {
      icon: "/images/icon/icon_162.svg",
      title: "Telephone(Office)",
      content: (
        <>
          Open a chat or give us call at <br />
          <div className="">
            +2348125805503
            +2348140976177
            (7:30am to 5pm on weekdays)
          </div>
        </>
      ),
    },
    {
      icon: "/images/icon/icon_162.svg",
      title: "Email(Office)",
      content: (
        <>
          Open a chat or give us call at <br />
          <div className="">
            info@edgewoodcollege.org.ng
          </div>
        </>
      ),
    },
  ];

  const address = [
    {
      icon: "/images/icon/icon_161.svg",
      title: "Address",
      content: (
        <>
          Plot 3 Block 14, Kayode Otitoju Street (Road 38)
          Off Admiralty Way (By Tantalizers)
          Lekki Phase 1
          Lagos, Nigeria
        </>
      ),
    },
    {
      icon: "/images/icon/icon_162.svg",
      title: "Telephone(Office)",
      content: (
        <>
          Open a chat or give us call at <br />
          <div className="">
            +2348022800686
            +2347031086599 (7:30am to 5pm on weekdays)
          </div>
        </>
      ),
    },
    {
      icon: "/images/icon/icon_162.svg",
      title: "Telephone(admissions)",
      content: (
        <>
          Open a chat or give us call at <br />
          <div className="">
            +2348025526510/+2348170874770 (8am to 5pm on weekdays)
          </div>
        </>
      ),
    },
    {
      icon: "/images/icon/icon_162.svg",
      title: "Email(Office)",
      content: (
        <>
          Open a chat or give us call at <br />
          <div className="">
            info@edgewoodcollege.org.ng
          </div>
        </>
      ),
    },
    {
      icon: "/images/icon/icon_162.svg",
      title: "Email(Admission)",
      content: (
        <>
          Open a chat or give us call at <br />
          <div className="">
            admissions@edgewoodcollege.org.ng
          </div>
        </>
      ),
    },
  ]

  return (
    <>
      {addressBlocks.map((block, index) => (
        <div className="" key={index}>
          {/* <div className="icon">
            <img src={block.icon} alt="icon" />
          </div> */}
          <div className="text">
            <h5 className="title">{block.title}</h5>
            <p>{block.content}</p>
          </div>
        </div>

      ))}
      <hr />
      <div className="" style={{ fontWeight: "bold" }}>SIXTH FORM COLLEGE</div>
      <hr />
      {address.map((block, index) => (
        <div className="" key={index}>
          {/* <div className="icon">
            <img src={block.icon} alt="icon" />
          </div> */}
          <div className="text">
            <h5 className="title">{block.title}</h5>
            <p>{block.content}</p>
          </div>
        </div>

      ))}
    </>
  );
};

export default BlockContact2;
