import "./Bandeau.css";



const Bandeau = ({image, titre, texte}) => {

 
  return (
    <div className="bandeau" style={{ backgroundImage: `url(${image})` }}>
      <div className="left">
        <h1>{titre}</h1>
        <h3>
          {texte.map((texte, index) => {
            console.log(texte);
            return (
              <>{texte} <br/></>
            )
            })}
        </h3>
        <button>Reserver</button>
        {/* <div className="right"></div> */}
      </div>
    </div>
  );
}
 

export default Bandeau;