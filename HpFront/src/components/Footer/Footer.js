import "./Footer.css";

import facebook from "../../assets/social/facebook.svg";
import twitter from "../../assets/social/twitter.svg";
import instagram from "../../assets/social/instagram.svg";
import mail from "../../assets/social/mail.svg";

import Adresse from "../Adresse/Adresse";

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
          {"src": mail, "alt": "Logo Mail", "adresse": "mailto:hairprestige@gmail.com"},
      ];


  return (
    <div className="footer">

      <div className="footer_up">
          <div className="social">
            <h3>Suivez-nous</h3>
            <div className="logos_social">
                {
                    imagesSocial.map((image, index) => {
                        return (
                            <a href={image.adresse} target="_blank" rel="noreferrer"><img key={`social-${index}`} src={image.src} alt={image.alt} /></a>
                        );
                    })
                }
            </div>
          
          </div>

          <div className="coordonnees">
            <Adresse/>
          </div>

          <div className="horaires">
          </div>
      </div>

      <div className="footer_down">
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem magnam iusto alias mollitia quia iure odit quasi. Obcaecati cumque est ab consectetur nostrum voluptas facilis quis illum, veniam nemo harum.</p>
      </div>


    </div>
  );
};

export default Footer;
