import "./Footer.css";

import facebook from "../../assets/social/facebook.svg";
import twitter from "../../assets/social/twitter.svg";
import instagram from "../../assets/social/instagram.svg";
import mail from "../../assets/social/mail.svg";

import Adresse from "../Adresse/Adresse";
import Horaires from "../Horaires/Horaires";
import { Link } from "react-router-dom";

const Footer = () => {

  const imagesSocial = [
    {
      src: facebook,
      alt: "Logo Facebook",
      adresse: "https://www.facebook.com/Hair-Prestige-1532117990421666/",
    },
    {
      src: twitter,
      alt: "Logo Twitter",
      adresse: "https://twitter.com/Prestige__Hair",
    },
    {
      src: instagram,
      alt: "Logo Instagram",
      adresse: "https://www.instagram.com/hair_prestige_/",
    },
    { src: mail, alt: "Logo Mail", adresse: "mailto:hairprestige@gmail.com" },
  ];

  return (
    <div className="footer">

      <div className="footer_up">

        <div className="social">
          <h3>Suivez-nous</h3>
          <div className="logos_social">
            {imagesSocial.map((image, index) => {
              return (
                <a href={image.adresse} target="_blank" rel="noreferrer" key={`social-${index}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                  />
                </a>
              );
            })}
          </div>
        </div>

        <div className="coordonnees">
          <Adresse />
        </div>

        <div className="horaires">
          <Horaires />
        </div>
      </div>

      <div className="footer_down">
        
        <hr />
        <p><Link to="/cgv">Mentions Légales</Link></p>
        <p>
        Design with ♥ by Nordine KHOUDOU, Guillaume SAULNIER & Matthieu SIEGEL — © 2022 — All Rights Reserved
        </p>

      </div>
    </div>
  );
};

export default Footer;
