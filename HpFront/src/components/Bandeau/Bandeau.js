import "./Bandeau.css";



const Bandeau = () => {

    const bob = [{
      "image": "../../assets/img/bandeau.jpg",
      "titre": "Hair Prestige",
      "texte":"Votre salon de coiffure situé à Choisy le Roi vous accueille dans un cadre chaleureux et convivial.",
    }];

    return (
      bob.map((bob, index) => (
       <div className="bandeau" style={{ backgroundImage: `url(${bob.image})` }} key={`link-${index}`}>
        <div className="left">
          <h1 >{bob.titre}</h1>
          <h3>{bob.texte}</h3>
          {/* <button>Reserver</button> */}
          {/* <div className="right"></div> */}
       ) </div>
      </div>
      ))
    
    )
  }
 

export default Bandeau;