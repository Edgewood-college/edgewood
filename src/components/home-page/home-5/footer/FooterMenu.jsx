const FooterMenu = () => {
  const footerData = [
    {
      title: "Quick Links",
      links: [
        { title: "Contact us", href: "/contact/contact-v2" },
        { title: "Why Edgewood?", href: "/home/purpose" },
      ],
      colClass: "col-lg-2 col-sm-4 mb-30", 
    },
    {
      title: "Careers",
      links: [
        { title: "Admission", href: "/executive-speech" },
        { title: "School Portal", href: "https://edgewoodcollege.schulup.com/Account/Login" },
        { title: "Applications", href: "/learning/cambridgeA-level" },
      ],
      colClass: "col-lg-2 col-sm-4 mb-30",
    },
  ];

  return (
    <>
      {footerData.map((section, index) => (
        <div className={section.colClass} key={index}>
          <h5 className="footer-title text-white fw-500">{section.title}</h5>
          <ul className="footer-nav-link style-none">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterMenu;
