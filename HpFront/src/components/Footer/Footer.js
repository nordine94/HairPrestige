// import "./Footer.css";

import facebook from "../../assets/social/facebook.svg";
import twitter from "../../assets/social/twitter.svg";
import instagram from "../../assets/social/instagram.svg";
import mail from "../../assets/social/mail.svg";
import logo from "../../assets/img/logo_hairPrestige.png";
import { NavLink } from "react-router-dom";

const Footer = () => {

    const horaireSemaine = [
        { "jour": "Lundi","heure": "Fermé"},
        { "jour": "Mardi", "heure": "9h - 19h"},
        { "jour": "Mercredi", "heure": "9h - 19h"},
        { "jour": "Jeudi", "heure": "9h - 19h"},
        { "jour": "Vendredi", "heure": "9h - 19h"},
        { "jour": "Samedi", "heure": "9h - 19h"},
        { "jour": "Dimanche", "heure": "Fermé"},
      ];

      const imagesSocial = [
          {"src": facebook, "alt": "Logo Facebook", "adresse": "https://www.facebook.com/Hair-Prestige-1532117990421666/"},
          {"src": twitter, "alt": "Logo Twitter", "adresse": "https://twitter.com/Prestige__Hair"},
          {"src": instagram, "alt": "Logo Instagram", "adresse": "https://www.instagram.com/hair_prestige_/"},
          {"src": mail, "alt": "Logo Mail", "adresse": "hairprestige@gmail.com"},
      ];


  return (
    <div className="footer">
      <div className="social">
        {
            imagesSocial.map((image, index) => {
                return (
                    <img src={image.src} alt="" />
                );
            })
        }
        
      </div>
      <div className="coordonnees">
        <NavLink to="/" className="logo">
          <img src={logo} alt="Logo Hair Prestige" />
        </NavLink>
      </div>
      <div className="horaires">

      </div>
    </div>
  );
};

export default Footer;
