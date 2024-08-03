const Social = () => {
  const socialIcons = [
    { id: 1, link: "https://www.instagram.com/Edgewoodcollege_lekki/", icon: "fab fa-instagram" },
    { id: 2, link: "http://twitter.com/EdgewoodcollNG", icon: "fab fa-twitter" },
    { id: 3, link: "https://www.facebook.com/edgewood.lekki", icon: "fab fa-facebook" },
  ];

  return (
    <ul className="d-flex social-icon style-none">
      {socialIcons.map((socialIcon) => (
        <li key={socialIcon.id}>
          <a href={socialIcon.link} target="_blank" rel="noopener noreferrer">
            <i className={socialIcon.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
