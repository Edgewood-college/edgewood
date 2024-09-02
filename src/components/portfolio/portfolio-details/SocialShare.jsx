const SocialShare = () => {
  const socialMedia = [
    { id: 1, link: "https://www.instagram.com/Edgewoodcollege_lekki/", icon: "fab fa-instagram" },
    { id: 2, link: "http://twitter.com/EdgewoodcollNG", icon: "fab fa-twitter" },
    { id: 3, link: "https://www.facebook.com/edgewood.lekki", icon: "fab fa-facebook" },
  ];

  return (
    <ul className="style-none social-icon circle-shape d-flex pt-10">
      {socialMedia.map((platform) => (
        <li
          key={platform.name}
          className="rounded-circle d-flex align-items-center justify-content-center"
        >
          <a href={platform.link} target="_blank">
            <i className={platform.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialShare;
