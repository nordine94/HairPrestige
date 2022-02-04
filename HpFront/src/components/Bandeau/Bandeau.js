import "./Bandeau.css";



const Bandeau = ({image, titre, texte}) => {
    return (
      <div className="bandeau" style={{ backgroundImage: `url(${image})` }}>
        <div className="left">
          <h1 >Hair Prestige {titre}</h1>
          <h3>
            Votre salon de coiffure situé à Choisy le Roi <br /> vous accueille
            dans un cadre chaleureux <br />
            et convivial.{texte}
          </h3>
          <button>Reserver</button>
          {/* <div className="right"></div> */}
        </div>
      </div>
    );
}
 

export default Bandeau;