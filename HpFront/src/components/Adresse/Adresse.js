import './Adresse.css';

import logo from "../../assets/img/logo_hairPrestige.png";
import { NavLink } from "react-router-dom";

const Adresse = () => {
    const coordonnees = {
        "adresse": "63, avenue Anatole France",
        "cp": 94600,
        "ville": "Choisy-le-roi",
        "tel": "01.48.84.07.33"
    }
    

    return ( 
        <div className="adresse_salon">
            <NavLink to="/" className="logo">
              <img src={logo} alt="Logo Hair Prestige" />
            </NavLink>
            <p> {coordonnees.adresse} </p>
            <p> {`${coordonnees.cp} ${coordonnees.ville}`} </p>
            {/* <p> {coordonnees.tel} </p> */}
        </div>
     );
}
 
export default Adresse;