<<<<<<< HEAD
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
 

=======
import "./Bandeau.css";


const Bandeau = ({image, titre, texte}) => {

  return (
    <div className="bandeau" style={{ backgroundImage: `url(${image})` }}>
      <div className="left">
        <h1>{titre}</h1>        
          {texte.map((texte, index) => {          
              return (
              <h3 key={`${index}`}>
                <>
                  {texte} <br />
                </>
              </h3>
              );           
          })}             
      </div>
    </div>
  );
}
 
>>>>>>> develop
export default Bandeau;